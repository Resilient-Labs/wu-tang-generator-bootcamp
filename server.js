const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');


const names = {

    a: {
      first: ['Top', 'General', 'Slime', 'Doctor', 'Time'],
      last: ['Dolla', 'Slime', 'Doom', 'Question', 'Foreign']
    },  

    b: {
      first: ['Stink', 'Lieutenant', 'Tone', 'Brick', 'Old'],
      last: ['Villian', 'Frozen', 'Underground', 'Truth', 'Unc']
    }, 

    c: {
      first: ['Surreal', 'Genius', 'Insane', 'Future', 'Master'],
      last: ['Technician', 'Expert', 'Conqueror', 'Clutch', 'Deaf']
    }, 

}

function listTaker(list){   // this is going to ask for an array

  return list[Math.floor(Math.random() * list.length)]   // This is going to randomize a number 

}

// Learning to make counts, count how many times a,b,c show up and return the highest count wins

function mostPicked(answered){

  const counts = {

    a: 0,
    
    b: 0,

    c: 0,

  };

  answered.forEach(function(answer){    // this is not the monment

    if(counts[answer] !== undefined ){

      counts[answer] += 1       // Count how many times a, b, or c are coming in.

    }

  });

  let winner = 'a';
  if(counts.b > counts[winner]) winner = 'b'; 
  if(counts.c > counts[winner]) winner = 'c';
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
  }
  else if (page == '/api') {
    const answer = [params.q1, params.q2, params.q3, params.q4, params.q5];
    const letter = mostPicked(answer);
    const group = names[letter];
    const name = listTaker(group.first) + ' ' + listTaker(group.last);

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({name: name}));
      
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
  }
});

server.listen(8000);
