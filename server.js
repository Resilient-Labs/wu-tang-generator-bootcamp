const http = require('http'); // give me built in http module and store it in "http". This gives tools for deling w/ HTTP requests/responses , like http.createServer()
const fs = require('fs') // fs = File System; this loads node's built in file-system module, later allowing "fs.readFile('index.html',...)
const url = require('url');// loads tools for dealing w/ url's. This module helps my code break URLs apart .(/api?student=leon), (/otherpage) 
//const querystring = require('querystring'); // gives Node tools for dealing with query strings. Ex.) /api?student=leon; query string = (student=leon) querystring module eventually makes that {student:'leon'}
//const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const page =parsedUrl.pathname;
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/css/style.css'){
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

  } else if (page == '/api') {
   let answers = parsedUrl.query.answers || '';
   let firstNames = ['Cobra','Ghost','Shadow','Golden','Mystic','Silent','Rogue','Secret']
  let lastNames = ['Monk','Temple','Cipher','Killah','Scholar','Tundra','Conqueror','Savior']      
  
  let number = 0;
  for(let i =0; i < answers.length; i++){
  
    number += answers.charCodeAt(i);
  }
  let firstName = firstNames[number % firstNames.length];
  let lastName = lastNames[(number *7)% lastNames.length];
  let wuTangName = `${firstName} ${lastName}`;
  res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({name:wuTangName}));
 


  }else{
    res.writeHead(404)
    
      res.end('Not Found');
    
  }
});

server.listen(8000);

