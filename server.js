const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 5454;

const server = http.createServer(async (req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (req.method === 'GET') {
    if (pathname === '/') {
      res.setHeader('Content-Type', 'text/html');
      const html = fs.readFileSync('./public/index.html', 'utf-8');
      res.end(html);
    } else if (pathname === '/client.js') {
      res.setHeader('Content-Type', 'application/javascript');
      const js = fs.readFileSync('./public/client.js', 'utf-8');
      res.end(js);
    }
  } else if (req.method === 'POST' && pathname === '/generate') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { firstName, lastName } = JSON.parse(body);
      const wuTangName = generateWuTangName(firstName, lastName);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ wuTangName }));
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

function getRandomElement(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function generateWuTangName(firstName, lastName) {
  const firstNames = [
    "Furious",
    "Master",
    "Iron",
    "Golden",
    "Shadow",
    "Ancient",
    "Eternal",
    "Mystic",
    "Supreme",
    "Vicious",
  ];

  const lastNames = [
    "Warrior",
    "Monk",
    "Swordsman",
    "Panda",
    "Ninja",
    "Samurai",
    "Shogun",
    "Sensei",
    "Protector",
    "Destroyer",
  ];

  const wuTangFirstName = getRandomElement(firstNames) + firstName.charAt(0);
  const wuTangLastName = getRandomElement(lastNames) + lastName.charAt(0);
  return `${wuTangFirstName} ${wuTangLastName}`;
}
