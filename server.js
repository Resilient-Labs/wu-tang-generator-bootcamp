
class WuTangNameBackend {
  constructor() {
    this.http = require('http');
    this.fs = require('fs')
    this.url = require('url');
    this.querystring = require('querystring');

    this.createServer();

    this.server.listen(8000);
  }

  createServer() {
    this.server = this.http.createServer((req, res) => {
      const page = this.url.parse(req.url).pathname;
      const params = this.querystring.parse(this.url.parse(req.url).query);
      console.log(page);
      if (page == '/') {
        this.fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      }
      else if (page == '/getName') {
        console.log(params);
    
        const newName = this.generateName(params);

        res.writeHead(200, {'Content-Type': 'application/json'});
        const resultObject = {newName}
        res.end(JSON.stringify(resultObject));
      }
      else if (page == '/css/reset.css'){
        this.fs.readFile('css/reset.css', function(err, data) {
          res.write(data);
          res.end();
        });
      }
      else if (page == '/css/theme-default.css'){
        this.fs.readFile('css/theme-default.css', function(err, data) {
          res.write(data);
          res.end();
        });
      }
      else if (page == '/css/style.css'){
        this.fs.readFile('css/style.css', function(err, data) {
          res.write(data);
          res.end();
        });
      }
      else if (page == '/js/main.js'){
        this.fs.readFile('js/main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
      else {
        res.writeHead(404, {'Content-Type': 'text'});
        res.write("404!");
        res.end();
      }
    });
  }

  generateName({name, color, animal, fruit, shape} = params) {
    
    if (!name || !color || !animal || !fruit || !shape) {
      return "Nullish NaNbino";
    }
    
    let descriptor1 =
    color === "red" ? "Rambunctious" :
    color === "green" ? "Nefarious" :
    color === "blue" ? "Whimsical" : "";
    
    let descriptor2 =
    animal === "dog" ? "Gratuitous" :
    animal === "cat" ? "Unrequited" :
    animal === "fish" ? "Serendipitous" : "";

    let noun1 =
    fruit === "apple" ? " Bobby" :
    fruit === "banana" ? " Garfunkle" :
    fruit === "grapes" ? " Rainforest" : "";

    let noun2 =
    shape === "square" ? " Zebra" :
    shape === "triangle" ? " Jumanji" :
    shape === "circle" ? " Aardvark" : "";

    let result = "";
    result += name.length % 2 === 0 ? descriptor1 : descriptor2;
    result += name.charCodeAt(0) % 2 === 0 ? noun1 : noun2;

    return result;
  }
}

const coinFlipBackend = new WuTangNameBackend;