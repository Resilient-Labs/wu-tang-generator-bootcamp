const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')


const names = {
    a: {
        first: [
            'Golden', 'Supreme', 'Iron', 'Royal', 'Mighty'
        ],
        last: [
            'Genius', 'Cipher', 'Shadow', 'Scholar', 'Rebel'
        ]
    },

    b: {
        first: [
            'Silent', 'Master', 'Divine', 'Midnight', 'Wise'
        ],
        last: [
            'Chef', 'Architect', 'Sage', 'Prophet', 'Monk'
        ]
    },

    c: {
        first: [
            'Cosmic', 'Electric', 'Wild', 'Mystic', 'Rogue'
        ],
        last: [
            'Storm', 'Dragon', 'Blaze', 'Justice', 'Vision'
        ]
    },
}


function listTaker(list){ // List will ask for an array (i.e., list doesnt mean anything until we call it something)
    return list[Math.floor(Math.random() * list.length)] // This will randomize a number. 
}

// Counting how many times A, B, & C show up and return the one with the highest count; the highest count wins.

function mostPicked(answered){ // Only gives one letter
    const counts = {
        a: 0,
        b: 0,
        c: 0,
    };

    answered.forEach(function(answer){
        if(counts[answer] !== undefined){
            counts[answer] +=1 // Count how many times each 'a', 'b' and 'c' comes in. 
        }
    });
    let winner = 'a';
    if(counts.b > counts[winner]) winner = 'b';
    if(counts.c > counts[winner]) winner = 'c'; // Possible switch for later
    return winner
}

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

  }else if(page == '/api'){
    const answer = [params.q1, params.q2, params.q3, params.q4, params.q5]
    const letter = mostPicked(answer)
    const group = names [letter]
    const name = listTaker(group.first) + ' ' + listTaker(group.last)

    res.writeHead(200, { 'Content-Type': 'application/json'});
    // res.write(data);
    res.end(JSON.stringify({name: name}));
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
