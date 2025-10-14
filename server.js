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

  // Parse query string
  const userInput = params['q'] ? params['q'].toString() : '';
  console.log('User input:', userInput);

  // Data set
  const data = {
    name: ["Jarvis", "Prompt", "Steve", "Monet", "Trish", "Tommy"],
    trait: ["Dopey", "Grumpy", "Sneezy", "Sleepy", "Bashful", "Happy", "Doc"],
    weapons: ["Machete", "Knuckles", "Axe", "Catapult", "Katana"],
    creature: ["Dragon", "Pegasus", "Kraken", "Centaur", "Banshee"]
  };

  // Simple deterministic hash function
  function stringToNumberHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }

  // Create repeatable "random" indexes
  const hash = stringToNumberHash(userInput);
  const keys = Object.keys(data);
  const firstKey = keys[hash % keys.length];
  const secondKey = keys[(hash >> 3) % keys.length];

  const firstWord = data[firstKey][hash % data[firstKey].length];
  const secondWord = data[secondKey][(hash >> 5) % data[secondKey].length];

  const randomName = { random1: firstWord, random2: secondWord };

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
