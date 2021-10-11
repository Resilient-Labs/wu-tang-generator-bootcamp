// we're requiring more modules this time
// url gives us access to the url

const http = require('http');
const querystring = require('querystring');
const fs = require('fs')
// tells me what page im on
const url = require('url');
// the last bit of the url (like a query [api] in an api url)

const server = http.createServer(function(req, res) {

  const page = url.parse(req.url).pathname;
  console.log('hello')
  // the forward slash represents the main page's root
  if (page == '/') {
    console.log('hi')
    fs.readFile('wu.html', function(err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      res.end();
      console.log('done')
    });
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write('<h1>hello</h1>');
    // res.end();
  }

  // conditional logic leads to another page using node
  else if (page == '/wu.css') {
    console.log('flip')
    fs.readFile('wu.css', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/wu.js') {
    fs.readFile('wu.js', function(err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/javascript'
      });
      res.write(data);
      res.end();
    });

  } else if (page == '/answer') {
    res.writeHead(200, {
      'Content-Type': 'text/javascript'
    });
    // parsing out query of url (everything after the ?.)
    const query = url.parse(req.url).query;
    //parsing query into an object
    let questions = querystring.parse(query);
    console.log(questions)
    let sum = parseInt(questions.q1) + parseInt(questions.q2)
    let sum2 = parseInt(questions.q3) + parseInt(questions.q4) + parseInt(questions.q5)
    res.write('{firstName:"' + getFirstName(sum) + '",  lastName:"' + getLastName(sum2) + '"}' );
    res.end();
    console.log(url.parse(req.url).query)
    //parsing out url to get query

  }
})
server.listen(8000);

let firstName = ['Magnificent', 'Monstera', 'Golden', 'Starlight', 'Outfit', 'Cursed', 'Grownish', 'Sunshine', 'Mommy', 'Yung']
let lastName = ['Poppet', 'Skeletor', 'Rick', 'DJ', 'Chapstick', 'Gambino', 'Plumbus', 'Pluto', 'Moonman', 'Flava']


function getFirstName(sum) {
  return firstName[sum]

}
// this is abstraction (a car's appearance (gas pedal, brake pedal, etc) vs. it's actual wiring/ internal design)
console.log(getFirstName(3))

function getLastName(sum) {
  return lastName[sum]
}

// 1. user answers questions in browser
// 2. submit button is clicked
// 3. browser sends answers to questions to the Server
// 4. server recieves answers and uses them to create a name
// 5. server sends created name to browser
// 6. brower displays the name
