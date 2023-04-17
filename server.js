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
  }else if(page == "/name"){
    res.writeHead(200, {'Content-Type': 'application/json'});
    const randomFirst = ["Mighty","Butter","Gentleman","X-cessive","Intellectual","Wicked","Visual","E-ratic","Respected","Wild","Loose","Tha","Violent","Fearless","Midnight","Local","Cookie","Phantom","Wicked","Master"]
    const randomLast = ["Knight","Commander","Goblin","Professional","Dog","Hunter","Wanderer","Queen","Ninja","Turtle","Criminal","Watcher","Bastard","Beggar","Prophet","Specialist","Madman","Mercenary","Genius","Contender"]

    const shuffle1 = Math.floor(Math.random() * 20)
    const shuffle2 = Math.floor(Math.random() * 20)

    const p1 = params["firstname"]
    const p2 = params["lastname"]
    const p3 = params["q1"]
    const p4 = params["q2"]
    const p5 = params["q3"]
    const objToJson = {
      name: `${randomFirst[shuffle1]} ${randomLast[shuffle2]}`,
      p1 : p1,
      p2 : p2,
      p3: p3,
      p4: p4,
      p5: p5
    }
    res.end(JSON.stringify(objToJson));
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

server.listen(5555);
