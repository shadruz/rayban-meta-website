const test = require("node:test");
const assert = require("node:assert/strict");
const handler = require("../api/exchange-rate.js");

function responseRecorder() {
  return {
    headers: {},
    statusCode: 0,
    setHeader(name, value) {
      this.headers[name.toLowerCase()] = value;
    },
    end(body) {
      this.body = JSON.parse(body);
    },
  };
}

test("exchange rate API", async (suite) => {
  const originalFetch = global.fetch;
  suite.after(() => {
    global.fetch = originalFetch;
  });

  await suite.test(
    "normalizes the official nominal and returns the publication date with cache headers",
    async () => {
      global.fetch = async (url, options) => {
        assert.equal(url, "https://cbu.uz/ru/arkhiv-kursov-valyut/json/USD/");
        assert.ok(options.signal instanceof AbortSignal);
        return {
          ok: true,
          json: async () => [
            {
              Ccy: "USD",
              Nominal: "10",
              Rate: "117853.00",
              Date: "07.09.2026",
            },
          ],
        };
      };
      const response = responseRecorder();
      await handler({ method: "GET" }, response);
      assert.equal(response.statusCode, 200);
      assert.deepEqual(response.body, {
        rate: 11785.3,
        date: "2026-09-07",
        source: "Central Bank of Uzbekistan",
      });
      assert.match(response.headers["cache-control"], /s-maxage=3600/);
      assert.match(response.headers["cache-control"], /stale-while-revalidate/);
    },
  );

  await suite.test(
    "rejects write methods without contacting the upstream",
    async () => {
      global.fetch = () => {
        throw new Error("Upstream must not be contacted");
      };
      const response = responseRecorder();
      await handler({ method: "POST" }, response);
      assert.equal(response.statusCode, 405);
      assert.equal(response.headers.allow, "GET");
      assert.equal(response.headers["cache-control"], "no-store");
    },
  );

  await suite.test(
    "does not publish a rate when the source fails",
    async () => {
      for (const fetchResult of [
        async () => {
          throw new Error("timeout");
        },
        async () => ({ ok: false }),
        async () => ({
          ok: true,
          json: async () => {
            throw new SyntaxError("bad JSON");
          },
        }),
      ]) {
        global.fetch = fetchResult;
        const response = responseRecorder();
        await handler({ method: "GET" }, response);
        assert.equal(response.statusCode, 503);
        assert.deepEqual(response.body, {
          error: "Exchange rate temporarily unavailable",
        });
        assert.equal(response.headers["cache-control"], "no-store");
        assert.equal(response.headers["retry-after"], "60");
      }
    },
  );

  await suite.test(
    "rejects missing, invalid and impossible quote data",
    async () => {
      const valid = {
        Ccy: "USD",
        Nominal: "1",
        Rate: "11785.30",
        Date: "07.09.2026",
      };
      for (const payload of [
        {},
        [],
        [{ ...valid, Ccy: "EUR" }],
        [{ ...valid, Rate: "not-a-number" }],
        [{ ...valid, Rate: "0" }],
        [{ ...valid, Nominal: "0" }],
        [{ ...valid, Date: "2026-09-07" }],
        [{ ...valid, Date: "31.02.2026" }],
      ]) {
        global.fetch = async () => ({ ok: true, json: async () => payload });
        const response = responseRecorder();
        await handler({ method: "GET" }, response);
        assert.equal(response.statusCode, 503);
        assert.equal(response.body.rate, undefined);
      }
    },
  );
});
