"use strict";

const CBU_URL = "https://cbu.uz/ru/arkhiv-kursov-valyut/json/USD/";

function parseRate(payload) {
  const quote =
    Array.isArray(payload) && payload.find((item) => item.Ccy === "USD");
  if (!quote) throw new Error("Missing USD quote");

  const nominal = Number(quote.Nominal);
  const rate = Number(quote.Rate) / nominal;
  if (
    !Number.isFinite(nominal) ||
    nominal <= 0 ||
    !Number.isFinite(rate) ||
    rate <= 0 ||
    rate > 1000000
  ) {
    throw new Error("Invalid exchange rate");
  }

  const parts = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(quote.Date);
  if (!parts) throw new Error("Invalid quote date");
  const [, day, month, year] = parts;
  const date = `${year}-${month}-${day}`;
  const timestamp = Date.parse(`${date}T00:00:00Z`);
  if (
    !Number.isFinite(timestamp) ||
    new Date(timestamp).toISOString().slice(0, 10) !== date
  ) {
    throw new Error("Invalid quote date");
  }

  return { rate, date, source: "Central Bank of Uzbekistan" };
}

module.exports = async function exchangeRate(request, response) {
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("X-Content-Type-Options", "nosniff");

  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.setHeader("Cache-Control", "no-store");
    response.statusCode = 405;
    response.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4500);

  try {
    const upstream = await fetch(CBU_URL, {
      headers: { Accept: "application/json" },
      signal: controller.signal,
      redirect: "error",
    });
    if (!upstream.ok) throw new Error("Exchange rate source unavailable");

    const result = parseRate(await upstream.json());
    response.setHeader(
      "Cache-Control",
      "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    );
    response.statusCode = 200;
    response.end(JSON.stringify(result));
  } catch {
    response.setHeader("Cache-Control", "no-store");
    response.setHeader("Retry-After", "60");
    response.statusCode = 503;
    response.end(
      JSON.stringify({ error: "Exchange rate temporarily unavailable" }),
    );
  } finally {
    clearTimeout(timeout);
  }
};
