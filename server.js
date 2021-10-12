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
  // else if (page == '/otherpage') {
  //   fs.readFile('otherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  // else if (page == '/otherotherpage') {
  //   fs.readFile('otherotherpage.html', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'text/html'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  else if (page == '/api') {
    if('quiz' in params){
      // THIS IS WHERE MY LOGIC GOES! 
      const firstName = ['Whoosah', 'DeterMIND', 'Dynamic', 'Fortunate', 'Childish',  'T-ruthful',  'Loyal', 'Goofy',  'Vivacous']

      const lastName = ['Gambino', 'Degular', 'Wizrd', 'Zealot', 'Pepita', 'Punkin\'', 'Spice', 'Monstarr', 'Terminator',  ]

      let userInput = params['quiz']
      let splitValues = `${userInput}`
      let userAnswers = splitValues.split(' ')
     
      res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          firstName: firstName,
          lastName: lastName,
          userInput: userAnswers
        }
        res.end(JSON.stringify(objToJson));
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

server.listen(8000);
