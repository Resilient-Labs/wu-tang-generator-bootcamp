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
  else if (page == '/api') {
    res.writeHead(200, {
      'Content-Type': 'application/json'
  });
  
  let choices = params.choices
  console.log(choices)
 
  let result
  if (choices == 'pizza-soccer-The Office'){
    result = 'Vizual Madman'
  } else if (choices == 'burger-soccer-The Office') {
    result = 'Wicked Worlock'
  }else if (choices == 'burger-basketball-The Office') {
    result = 'Crazy Ambassador'
  }else if (choices == 'pizza-basketball-The Office') {
    result = 'Violent Swami'
  }else if (choices == 'burger-soccer-Breaking Bad') {
    result = 'Arrogant Menace'
  }else if (choices == 'pizza-soccer-Breaking Bad') {
    result = 'Phantom Demon'
  }else if (choices == 'pizza-basketball-Breaking Bad') {
    result = 'Pesty Genius'
  }else if (choices == 'burger-basketball-Breaking Bad') {
    result = 'Mad Hunter'
  }else {
    result = 'Midnight Killah'
  }
  

  let object = {
    results: result
  }



  res.end(JSON.stringify(object));

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
