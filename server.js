const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
const { create } = require('domain');

let firstNameArray = ['Visual', 'Amazing', 'Sympathetic', 'Small', 'Mighty', 'Fanatical', 'Mad Mad', 'Smiling Killer', 'Arrogant', 'Sympathetic']
let secondNameArray = ['Tiger fist', 'Warlock', 'Hunter', 'Raven', 'Tiger', 'Monkey', 'Beggar', ' Pop', 'Warrior', 'Mastermind']

function createName(answer1, answer2, answer3, answer4, answer5){
  let firstIndex = (parseInt(answer1) + parseInt(answer2) - 2) % firstNameArray.length 
  let secondIndex = (parseInt(answer3) + parseInt(answer4) + parseInt(answer5) - 3) % secondNameArray.length
  console.log(firstIndex, secondIndex)
  let firstName = firstNameArray[firstIndex]
  let secondName = secondNameArray[secondIndex]
  return `${firstName} ${secondName}`
}

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  console.log(params)
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/api') {
    if('answer1' in params){
      let wutang = createName(params['answer1'],
      params['answer2'],
      params['answer3'],
      params['answer4'],
      params['answer5'] 
      )
      
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {'wutang':wutang
        }
        res.end(JSON.stringify(objToJson));
      }

  //else if
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
  }else if (page == '/css/img/wu.png'){
    fs.readFile('css/img/wu.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image'});
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
