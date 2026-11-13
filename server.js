/* Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).*/
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const names = {
  a: {
    first: [
      'Ambassador', 'Gawd', 'Creator'
    ],
    last: [
      'God', 'Percenta', 'Def'
    ],

  },
  b: {
    first: [
      'Peace', 'Love', 'Money'
    ],
    last: [
      'Warrior', 'Earf', 'Moon'
    ],

  },
  c: {
    first: [
      'Wu', 'C.R.E.A.M', 'Ol Dirty'
    ],
    last: [
      'Clan', 'Kwon', 'Man'
    ],

  }
}

// we haven't created this yet
function listTaker(list) { ///<list === an array
  return list[Math.floor(Math.random() * list.length)]



}
// learning to make counts, count how many time sthe a/b/c show up and return the highest count wins

function mostPicked(answers) {
  const counts = {
    a: 0,
    b: 0,
    c: 0,

  };
  answers.forEach(function (answer) {
    if (counts[answer] !== undefined) {
      counts[answer] += 1 ///< count how many times each a/b/c comes in
    }
  });
  let winner = 'a';
  if (counts.b > counts[winner]) winner = 'b'
  if (counts.c > counts[winner]) winner = 'c'

  return winner

}


const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (page == '/api') {
    const answer = [params.a1, params.a2, params.a3, params.a4, params.a5]
    const letter = mostPicked(answer)
    const group = names[letter]
    const name = listTaker(group.first) + ' ' + listTaker(group.last)


    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ name: name }));
  }
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
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
