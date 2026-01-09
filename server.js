const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;

  let file = null;

  if (pathname === "/" || pathname === "/index.html") {
    file = "index.html";
  } 
  else if (pathname.startsWith("/login")) {
    file = "login.html";
  } 
  else if (pathname.startsWith("/dashboard")) {
    file = "dashboard.html";
  }

  if (!file) {
    res.writeHead(404);
    res.end("Pagina niet gevonden");
    return;
  }

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Fout bij laden van pagina");
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("ClarityFlow draait op poort " + PORT);
});