const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
const server = http.createServer(function(req, res) {
const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
 
  else if (page == '/wtc') {
    if ('initial' in params) {
      if (params['initial'] == 'A') {
        firstWTC = 'Childish' 
      }

      else if (params['initial'] == 'B') {
        firstWTC = 'Crazy' 
      }

      else if (params['initial'] == 'C') {
        firstWTC = 'Ghostface' 
      }

      else if (params['initial'] == 'D') {
        firstWTC = 'Method' 
      }

      else if (params['initial'] == 'E') {
        firstWTC = 'Inspectah' 
      }

      else if (params['initial'] == 'F') {
        firstWTC = 'Masta' 
      }

      else if (params['initial'] == 'G') {
        firstWTC = 'Pastah' 
      }

      else if (params['initial'] == 'H') {
        firstWTC = 'Ol Dirty' 
      }

      else if (params['initial'] == 'I') {
        firstWTC = 'Crazy' 
      }
      else if (params['initial'] == 'J') {
        firstWTC = 'Scavenga' 
      }

      else if (params['initial'] == 'K') {
        firstWTC = 'Amplifia' 
      }

      else if (params['initial'] == 'L') {
        firstWTC = 'Outsida' 
      }

      else if (params['initial'] == 'M') {
        firstWTC = 'Extenda' 
      }

      else if (params['initial'] == 'N') {
        firstWTC = 'Ghouleye' 
      }

      else if (params['initial'] == 'O') {
        firstWTC = 'Z-' 
      }

      else if (params['initial'] == 'P') {
        firstWTC = 'X-' 
      }

      else if (params['initial'] == 'Q') {
        firstWTC = 'Shaolin' 
      }
      
      else if (params['initial'] == 'R') {
        firstWTC = 'Iron' 
      }

      else if (params['initial'] == 'S') {
        firstWTC = 'Impish' 
      }

      else if (params['initial'] == 'T') {
        firstWTC = 'Devilish' 
      }

      else if (params['initial'] == 'U') {
        firstWTC = 'Beast-mode' 
      }

      else if (params['initial'] == 'V') {
        firstWTC = 'Professa' 
      }

      else if (params['initial'] == 'W') {
        firstWTC = 'Stinger' 
      }

      else if (params['initial'] == 'X') {
        firstWTC = 'Swarmking' 
      }

      else if (params['initial'] == 'Y') {
        firstWTC = 'Prince' 
      }

      else if (params['initial'] == 'Z') {
        firstWTC = 'Cold' 
      }

    }

    if ('tally' in params) {
      if (params['tally'] <= 4) {
        lastWTC = 'Gambino'
      }

      else if (params['tally'] == 5) {
        lastWTC = 'Deck' 
      }

      else if (params['tally'] == 6) {
        lastWTC = 'Killah' 
      }

      else if (params['tally'] == 7) {
        lastWTC = 'Man' 
      }

      else if (params['tally'] == 8) {
        lastWTC = 'God' 
      }

      else if (params['tally'] == 9) {
        lastWTC = 'Deck' 
      }
      
      else if (params['tally'] == 10) {
        lastWTC = 'Bastard' 
      }

      else if (params['tally'] == 11) {
        lastWTC = 'Slashah' 
      }

      else if (params['tally'] >= 12) {
        lastWTC = 'Showdown' 
      }
    }

    const objToJson = {
      first: firstWTC,
      last: lastWTC,
    }

    console.log(JSON.stringify(objToJson))
    res.end(JSON.stringify(objToJson))
  }

  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  
  else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
