const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page, params);

  if (page === '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  else if (page === '/otherpage') {
    fs.readFile('otherpage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  else if (page === '/otherotherpage') {
    fs.readFile('otherotherpage.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }

  // ************ API ENDPOINT ************
  if (page === '/api') {
    console.log('API endpoint hit');

    // data set
    const data = {
      name: ["Jarvis", "Prompt", "Steve", "Monet", "Trish", "Tommy"],
      trait: ["Dopey", "Grumpy", "Sneezy", "Sleepy", "Bashful", "Happy", "Doc"],
      weapons: ["Machete", "Knuckles", "Axe", "Catapult", "Katana"],
      creature: ["Dragon", "Pegasus", "Kraken", "Centaur", "Banshee"]
    };

    //create random name
    function createRandomName() {
      const keys = Object.keys(data);
      const randomKeys = [];

      // pick 2 random keys
      while (randomKeys.length < 2) {
        const key = keys[Math.floor(Math.random() * keys.length)];
        if (!randomKeys.includes(key)) randomKeys.push(key);
      }

      // get random values from random key
      const firstWord = data[randomKeys[0]][Math.floor(Math.random() * data[randomKeys[0]].length)];
      const secondWord = data[randomKeys[1]][Math.floor(Math.random() * data[randomKeys[1]].length)];

      return { random1: firstWord, random2: secondWord };
    }

    const randomName = createRandomName();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(randomName));
  }

  /************************/
  else if (page === '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  }

  else if (page === '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }

  else {
    figlet('404!!', function (err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write(data);
      res.end();
    });
  }
});

server.listen(8001, () =>
  console.log('Server listening on http://localhost:8001')
);
