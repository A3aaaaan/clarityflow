const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("ClarityFlow draait");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`ClarityFlow draait op poort ${PORT}`);
});