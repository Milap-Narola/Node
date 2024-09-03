
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.end("404 Not Found");
      } else {
        res.end(data);
      }
    });
  } else if (url === "/login") {
    res.end("Login page");
  } else if (url === "/signup") {
    res.end("Signup page");
  } else if (url === "/contact") {
    res.end("Contact page");
  } else if (url === "/service") {
    res.end("Service page");
  } else {
    res.end("404 Not Found");
  }
});

server.listen(8090, () => {
  console.log("Server listening on port 8090");
});
