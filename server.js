const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query); // fetch
  if (page == '/') {
    fs.readFile('index.html', function(err, data) { // HTML file
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let wuName = "";
    // Name + Color
    if (params['name'].length <= 4 && params['col'] === 'Yellow'){
      wuName = "Crazy"
    }else if (params['name'].length <= 4 && params['col'] === 'Black'){
      wuName = "Lucky"
    }else if (params['name'].length <= 6 && params['col'] === 'Yellow'){
      wuName = "Happy"
    }else if (params['name'].length <= 6 && params['col'] === 'Black'){
      wuName = "Dirty"
    }else if (params['name'].length >= 7 && params['col'] === 'Yellow'){
      wuName = "Sad"
    }else if (params['name'].length >= 7 && params['col'] === 'Black'){
      wuName = "Quandale"
    }else if (params['col'] === '0'){
      wuName = "404"
    }

    //genre + food
    if (params['gen'] === 'Marvel' && params['food'] === 'Sushi'){
      wuName += ' Swaggy'
    }else if (params['gen'] === 'Marvel' && params['food'] === 'Pizza'){
      wuName += ' The Goat'
    }else if(params['gen'] === 'Starwars' && params['food'] === 'Sushi'){
      wuName += ' Chef'
    }else if(params['gen'] === 'Starwars' && params['food'] === 'Pizza'){
      wuName += ' Boomer'
    }else if (params['gen'] === '0'){
       wuName = "404"
    }else{
    }

    //animal
    if (params['an'] === 'Dog') {
      wuName += ' Pirate'
    }
    else if(params['an'] === 'Cat'){
      wuName += ' Ninja'
    }
    else if (params['an'] === '0'){
       wuName = "404"
    }
    else{
    }

    // wuName = wuNamep1 + wuNamep2 + wuNamep3
      console.log(wuName)
      res.end(JSON.stringify(wuName));
      res.end(JSON.s)
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
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
