"use strict";

const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const exchangeRate = require("../api/exchange-rate.js");
const root = fs.realpathSync(path.resolve(__dirname, ".."));
const port = 4173;
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};
const privateDirectories = new Set([
  "api",
  "scripts",
  "tests",
  "node_modules",
  "dist",
  "build",
]);

function notFound(request, response) {
  response.writeHead(404, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-store",
  });
  if (request.method === "HEAD") response.end();
  else fs.createReadStream(path.join(root, "404.html")).pipe(response);
}

const server = http.createServer(async (request, response) => {
  response.setHeader("X-Content-Type-Options", "nosniff");
  response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(request.url, "http://127.0.0.1").pathname,
    );
  } catch {
    response.writeHead(400);
    response.end("Bad request");
    return;
  }

  if (pathname === "/api/exchange-rate") {
    await exchangeRate(request, response);
    return;
  }
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method not allowed");
    return;
  }

  const segments = pathname.split("/").filter(Boolean);
  if (
    pathname.includes("\0") ||
    pathname.includes("\\") ||
    segments.some(
      (segment) => segment.startsWith(".") || privateDirectories.has(segment),
    )
  ) {
    notFound(request, response);
    return;
  }

  let file = path.resolve(root, "." + pathname);
  try {
    if (fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
    file = fs.realpathSync(file);
    const resolvedSegments = path.relative(root, file).split(path.sep);
    if (
      !file.startsWith(root + path.sep) ||
      resolvedSegments.some(
        (segment) => segment.startsWith(".") || privateDirectories.has(segment),
      ) ||
      !fs.statSync(file).isFile() ||
      !mime[path.extname(file).toLowerCase()]
    ) {
      notFound(request, response);
      return;
    }
  } catch {
    notFound(request, response);
    return;
  }

  response.writeHead(200, {
    "Content-Type": mime[path.extname(file).toLowerCase()],
    "Content-Length": fs.statSync(file).size,
    "Cache-Control": "no-store",
  });
  if (request.method === "HEAD") response.end();
  else fs.createReadStream(file).pipe(response);
});

server.listen(port, "127.0.0.1", () =>
  console.log(`TechGeek local preview: http://127.0.0.1:${port}`),
);
server.on("error", (error) => {
  console.error(
    error.code === "EADDRINUSE"
      ? `Port ${port} is already in use.`
      : error.message,
  );
  process.exitCode = 1;
});
