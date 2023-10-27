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
    if('pointSystem' in params){
      if(params['pointSystem'] >= 0 && params['pointSystem'] < 5){
        res.writeHead(200, {'Content-Type': 'application/json'});
        console.log(params['pointSystem'])
        const objToJson = {
          name : ['Young filthy','Mathematical Dignitary','Wushu Warlock']
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['pointSystem'] >= 5 && params['pointSystem'] <= 6){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: ['Capital-G','Sensational Wombat','Fryman the Cook Person']
        }
        res.end(JSON.stringify(objToJson));
        
      }else if(params['pointSystem'] >= 7 && params['pointSystem'] <= 8){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: ["Ol' Crunchy",'Woo-hah The Menance','Ficticous Wonder']
        }
        res.end(JSON.stringify(objToJson));
        
      }else if(params['pointSystem'] >= 9 && params['pointSystem'] <= 15){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: ["Mad Wanderer",'G-GOLLY','Beebop the Wise']
        
        }
        res.end(JSON.stringify(objToJson));
        
      }//student != leon
    }//student if
  }//else if
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

server.listen(9900);
