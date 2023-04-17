const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/wutang") {
    if ("generate" in params) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      let firstWuName = [
        "Pesky Amor",
        "Icee Quan",
        "Soldja OOP",
        "Mick Moon",
        "Eloquent Riddler",
        "Money-Oriented RSS",
        "Machine Prowler",
        "Etsy Entertainer",
        "Lazy Sugar",
        "Sega Sage",
        "Angel Cascade",
        "Gato DevTools",
        "Platano Homie",
        "Full-Stack Spice",
        "Filler Montana",
      ];
      // let firstWuName = [
      //   "Pesky",
      //   "Icee",
      //   "Soldja",
      //   "Mick",
      //   "Eloquent",
      //   "Money-Oriented",
      //   "Machine",
      //   "Etsy",
      //   "Lazy",
      //   "Sega",
      //   "Angel",
      //   "Gato",
      //   "Platano",
      //   "Full-Stack",
      //   "Filler",
      // ];
      // let lastWuName = [
      //   "Quan",
      //   "Homie",
      //   "Riddler",
      //   "Entertainer",
      //   "Prowler",
      //   "Sugar",
      //   "Spice",
      //   "Montana",
      //   "OOP",
      //   "DevTools",
      //   "Cascade",
      //   "Amor",
      //   "Moon",
      //   "Sage",
      //   "RSS",
      // ];
      const objToJson = {
        firstWuName: firstWuName[params["generate"]],
        // lastWuName: lastWuName[params["generate"]],
      };
      res.end(JSON.stringify(objToJson));
      // if (params["generate"].toLowerCase().split("").includes()) {
      //   res.writeHead(200, { "Content-Type": "text/javascript" });
      //   const objToJson = {
      //     firstWuName: params["generate"].toLowerCase(),
      //     lastWuName: params["generate"].toLowerCase().split("").reverse().join(""),

      //   };
      //   res.end(JSON.stringify(objToJson));
      // } else if (
      //   params["generate"].toLowerCase() !==
      //   params["generate"].toLowerCase().split("").reverse().join("")
      // ) {
      //   res.writeHead(200, { "Content-Type": "text/javascript" });
      //   const objToJson = {
      //     firstWuName: params["generate"].toLowerCase(),
      //     lastWuName: params["generate"].toLowerCase().split("").reverse().join(""),
      //   };
      //   res.end(JSON.stringify(objToJson));
      // }
      //1,2,3,4,5 points for each question

      //[Pesky, Icee, Soldja, Mick, Eloquent, Money-Oriented, Machine, Etsy, Lazy, Sega, Angel, Gato, Platano, Full-Stack, Filler]
      // [Quan, Homie, Riddler, Entertainer, Prowler, Sugar, Spice, Montana, OOP, Whack, Cascade, Amor, Moon, Sage, RSS]

      // consonats & vowels determine the number of points == vowels are worth 3 points, consenants are worth 1 point.
    }
  } else if (page == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (page == "/css/normalize.css") {
    fs.readFile("css/normalize.css", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8000);
