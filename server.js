const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  let file = "index.html";

 if (req.url === "/login") file = "login.html";
if (req.url.startsWith("/dashboard")) file = "dashboard.html";


  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Pagina niet gevonden");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("ClarityFlow draait");
});