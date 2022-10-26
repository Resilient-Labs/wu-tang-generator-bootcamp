const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
const { join } = require('path');

// document.querySelector('#clickMe').addEventListener("click", flipCoin)
let results


// function flipCoin() {
  // results = Math.floor(Math.random() * 2)
  // console.log(results)
// }



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
  //   fs.readFile('otherpage.html', function(
  //     err, data) {
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
    let possibleNames = [ "Airy Tempest","Squally Gale", "Fresh Typhoon","Breezy Cyclone","Smoking Ember", "Spicy Bonfire", "Blazing Campfire", "Lukewarm Tinder", "Wavy H20", "Transparent Tears", "Murky Currents", "Calm Rain", "Grassy Terrain", "Rocky Clay", "Worldly Turf", "Dusty Coast"] 
    let selectedName = possibleNames[Math.floor(Math.random() * possibleNames.length)]
    console.log(selectedName)

    if('word' in params){
      if(params['word'] === params['word']) {
        
        res.writeHead(200, {'Content-Type': 'application/json'});

        const objToJson = {
          rapperName: selectedName
        }
      
        res.end(JSON.stringify(objToJson));
      }//word = leon
      
    }//word if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/img/wutang.jpg'){
      fs.readFile('img/wutang.jpg', function(err, data) {
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
