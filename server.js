const path = require('path');
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

const server = http.createServer(function (req, res) {

    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);

    const names = {
        a: {first: ['Pizza','Corn','Dog','Cat','Rain'],
            last: ['Flower','Donkey','Queen','Warrior','King']},

        b: {first: ['Chocolate','Summer','Friendly','Running','Powerful'],
            last: ['Zebra','Hippo','Lion','Panther','Hero']},

        c: {first: ['Outgoing','Smiling','Crying','Happy','Crazy'],
            last: ['Lobster','Napper','Yapper','Psychic','Athlete']}
    };

    function listRandom(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    function mostPicked(answered) {

        const counts = {
            a: 0,
            b: 0,
            c: 0
        };

        answered.forEach(function (answer) {

            if (counts[answer] !== undefined) {
                counts[answer] += 1;
            }
        });

        let winner = 'a';

        if (counts.b > counts[winner]) {
            winner = 'b';
        }

        if (counts.c > counts[winner]) {
            winner = 'c';
        }
        return winner;
    }
    console.log(page);

    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error loading index.html');
                return;
            }

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if (page == '/api') {
        const answer = [
            params.number1,
            params.number2,
            params.number3,
            params.number4,
            params.number5
        ];
        const letter = mostPicked(answer);
        const group = names[letter];
        const name = listRandom(group.first) + ' ' + listRandom(group.last);
        res.writeHead(200, {'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            name: name
        }));

    } else if (page == '/css/style.css') {
        fs.readFile('css/style.css', function (err, data) {

            if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('CSS file not found');
            return;
            }

            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
            res.end();
        });

    } else if (page == '/js/main.js') {
        fs.readFile('js/main.js', function (err, data) {
            if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('JavaScript file not found');
            return;
            }
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();
        });
    } else if (page.startsWith('/img')) {
        const imagePath = '.' + page;
        const ext = path.extname(imagePath).toLowerCase();
        const mimeTypes = {
            '.gif': 'image/gif',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg'
        };
        fs.readFile(imagePath, function (err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Image not found');
                return;
            }

            res.writeHead(200, {'Content-Type':mimeTypes[ext] || 'application/octet-stream'
            });

            res.write(data);
            res.end();
        });
    } else {
        figlet('404!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);

                res.writeHead(500);
                res.end('Server error');
                return;
            }

            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });

            res.write(data);
            res.end();
        });
    }

});


server.listen(8000);




