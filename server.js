const http = require('http');
const fs = require('fs')
const url = require('url');
const figlet = require('figlet')
const querystring = require('querystring');


const server = http.createServer(function(req, res) {
  const params = querystring.parse(url.parse(req.url).query);

  const page = url.parse(req.url).pathname;
  // const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      res.end();
    });
  } else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/css'
      });
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/javascript'
      });
      res.write(data);
      res.end();
    });
  } else if (page == "/api") {
    if ('choices' in params) {
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      let chosenAnswer = params['choices'];
      console.log(chosenAnswer)

      switch (chosenAnswer) {
        case "redcathorrorwinter":
          newName = 'Masta Ninja'
          break;
        case "bluecathorrorwinter":
          newName = 'Bloody Assasin'
          break;
        case "bluedoghorrorwinter":
          newName = 'Donkey Kong'
          break;
        case "reddogcomedywinter":
          newName = 'Sweet Pickle'
          break;
        case "redcatcomedywinter":
          newName = 'Sweet Caroline'
          break;
        case "bluecatcomedywinter":
          newName = 'Fabulous Cowboy'
          break;
        case "bluedogcomedywinter":
          newName = 'AAAron'
          break;
        case "reddoghorrorwinter":
          newName = 'Killah bee'
          break;
        case "redcathorrorsummer":
          newName = 'Budaha Fox'
            break;
        case "bluecathorrorsummer":
          newName = 'Child Wild'
            break;
        case "bluedoghorrorsummer":
          newName = 'Astro Royal'
            break;
        case "reddogcomedysummer":
          newName = 'Flower Face'
            break;
        case "redcatcomedysummer":
          newName = 'Dirty Laundy'
            break;
        case "bluecatcomedysummer":
          newName = 'Java Sin'
            break;
        case "bluedogcomedysummer":
          newName = 'Diamond Kitty'
            break;
        case "reddoghorrorsummer":
          newName = 'Savy Shabby '
            break;
        default:
          newName = "Childish Gambino";
      }





      console.log(newName)

      res.end(JSON.stringify(newName));
    }
  } else {
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
