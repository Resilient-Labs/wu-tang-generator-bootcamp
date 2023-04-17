//enables server to listen to request and respond
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  //allows you to grab the querystring
  const params = querystring.parse(url.parse(req.url).query);
  //logs pages
  console.log(page);
  if (page == '/') {
    //use fs and grab the file with that name
    fs.readFile('index.html', function(err, data) {
      //respond with this
      res.writeHead(200, {'Content-Type': 'text/html'});
      console.log(res.writeHead)
      res.write(data);
      res.end();
    });
  }
  //type of request that server takes
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/zebra') {
    fs.readFile('jumanji.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/api') {
    //is the student in the parameters
    if('student' in params){
      if(params['student']== 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] != 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    console.log('hello, I am CSS!')
    console.log(page)
    //use filesystem read file that named that 
    fs.readFile('css/style.css', function(err, data) {
      //and serves its data in the DOM
      res.write(data);
      //finish
      res.end();
    });
  }else if (page == '/js/main.js'){
    console.log('hello, I am JS!')
    console.log(page)
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
