// Boiler Plate 
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const firstNames = {
  green: "Shadow",
  blue: "Ghost",
  red: "Bloody",

  sleep: "Dream",
  exercise: "Iron",
  movie: "Cinema",

  breakfast: "Golden",
  lunch: "Hungry",
  dinner: "Midnight"

}

// Last Names 
const lastNames = {
  bird: "Falcon",
  whale: "Killer",
  turtle: "Shell",

  anger: "Fist",
  love: "Heart",
  joy: "Smile"

}

// The actual values 
// const colorAnswer = color.value
// const activityAnswer = activity.value
// const mealAnswer = meal.value
// const animalAnswer = animal.value
// const emotion = emotion.value

function wu_name(color, activity, meal, animal, emotion) {


  // Build each first name 
  const firstPart =
    firstNames[color] ||
    firstNames[activity] ||
    firstNames[meal];


  // Build each last name 
  const secondPart =
    lastNames[animal] ||
    lastNames[emotion];

  //The generated name into the input box 
  const wuTangName = `${firstPart} ${secondPart}`
  console.log(wuTangName)
  return wuTangName
}


const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(data);
      res.end();
    });
  }

  else if (page == '/name') {
    if ("color" in params && "activity" in params && "meal" in params && "animal" in params && "emotion" in params) {
      let wuName = wu_name(params.color, params.activity, params.meal, params.animal, params.emotion);


      res.writeHead(200, { 'Content-Type': 'application/json' });
      const objToJson = {
        result: wuName
      }
      res.end(JSON.stringify(objToJson));
    };

  } 

else if (page == '/css/style.css') {
  fs.readFile('css/style.css', function (err, data) {
    res.write(data);
    res.end();
  }); 
} else if (page == '/js/main.js') {
  fs.readFile('js/main.js', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.write(data);
    res.end();
  });
} else {
  figlet('404!!', function (err, data) {
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
