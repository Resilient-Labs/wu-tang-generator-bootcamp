const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');


const names = {       // These are the possible names that can be given to the user based off the questions answered

    a: {
      first: ['Iron Lotus', 'Silent', 'Jade', 'Eight Chamber', 'Shoalin'],    // If the user selects the first option mostly, theyll get a random name from here 'First Last'
      last: ['Master', 'Assassin', 'Dragon', 'Prophet', 'Ghost']              // and same for the b and c
    },  

    b: {
      first: ['Dagi', 'Lieutenant', 'Cold Logical', 'Scholar', 'Wise'],
      last: ['Villian', 'Blade', 'Philosopher', 'Truth', 'Killah']
    }, 

    c: {
      first: ['Crimy', 'Genius', 'Insane', 'Ismail', 'Master'],
      last: ['Technician', 'Riddler', 'Conqueror', 'Bastard', 'Doom']
    }, 

}

function listTaker(list){   // this is going to ask for an array

  return list[Math.floor(Math.random() * list.length)]   // This is going to randomize a number 

}

// Learning to make counts, count how many times a,b,c show up and return the highest count wins

function mostPicked(answered){

  const counts = {        // Takes count of how many times each option is selected

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
    const answer = [params.q1, params.q2, params.q3, params.q4, params.q5];     // Takes the parameter from main.js of which optiuons were most selected
    const letter = mostPicked(answer);                                          // Variable holds most picked answer
    const group = names[letter];                                                // looks up one of the names from the most selected letter
    const name = `${listTaker(group.first)} ${listTaker(group.last)}`;          // Name someone receives 

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({name: name}));
      
  }else if (page == '/css/main.css'){
    fs.readFile('css/main.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/images/wuTangBackground.jpg'){                // Need this if block for images
    fs.readFile('images/wuTangBackground.jpg', function(err, data){
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(data);
    })
  }
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404');
  }
});

server.listen(8000);
