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
  else if (page == '/api') {
    if('firstWuName' in params  && 'lastWuName' in params){
        res.writeHead(200, {'Content-Type': 'application/json'});
        let firstName = ['Prophetic', 'Nightmare', 'Ghost', 'Ninja', 'Poison']
        let lastName = ['Rider', 'Defender', 'Fighter', 'Commander', 'Soldier', 'Nova', 'Vibes']

        const objToJson = {
          'first name': firstName[params['firstWuName']],
          'last name': lastName[params['lastWuName']],
        }
        res.end(JSON.stringify(objToJson));
    
    }
  }
  else if (page == '/img/wutang.jpg'){
    fs.readFile('img/wutang.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/img/scroll1.png'){
    fs.readFile('img/scroll1.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
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
