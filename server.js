const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');


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
  
  //writing a conditional for the points so name will appear to user 
  else if (page == '/api') {
    if('wuTangg' in params){
      if(params['wuTangg'] <=0 && params ['wuTangg'] ==4 ){
        res.writeHead(200, {'Content-Type': 'application/json'});
        console.log(params['wuTangg'])
        const objToJson = {
          name: "Masta Killa",
        
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['wuTangg'] >=5 && params ['wuTangg'] <= 6){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Method Man",
        }
        res.end(JSON.stringify(objToJson));
      }

      else if(params['wuTangg'] >=7 && params ['wuTangg'] <= 8){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "U-God",
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['wuTangg'] >=9 && params ['wuTangg'] <=16){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Ghostface Killah",
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/JS/main.js'){
    fs.readFile('JS/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
  
});

server.listen(3000);
