const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('./node_modules/figlet/dist/types/cjs/figlet.d.cts');

const names = {
    a: {
        first: ['Lebron', 'Stephen', 'Kawahi', 'Jason', 'Kobe'],
        last: ['James', 'Curry', 'Lenard', 'Tatum', 'Bryant']
    },

    b: {
        first: ['Varvaxtos', 'Cosmo', 'Divine', 'Shrimp', 'Nerite'],
        last: ['Blackout', 'Betta', 'Cory', 'Rainbow', 'Cherry']
    },

    c: {
        first: ['Komodo', 'Electro', 'MegaKnight', 'Mystique', 'Wolverine'],
        last: ['Seahorse', 'Dragon', 'Wizard', 'Justice', 'Vision']
    }
};

function listTaker(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function mostPicked(answered) {
    const counts = {
        a: 0,
        b: 0,
        c: 0
    };

    answered.forEach(function(answer) {
        if (counts[answer] !== undefined) {
            counts[answer] += 1;
        }
    });

    let winner = 'a';
    if (counts.b > counts[winner]) winner = 'b';
    if (counts.c > counts[winner]) winner = 'c';
    return winner;
}

const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);

    console.log(page);
    if (page == '/') {
        fs.readFile('index.html', function(err, data) {
            if (err) {
                res.writeHead(500);
                res.end('Error loading page');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });

    } else if (page == '/api') {
        const answer = [
            params.q1,
            params.q2,
            params.q3,
            params.q4,
            params.q5
        ];
        const letter = mostPicked(answer);
        const group = names[letter];
        const name = listTaker(group.first) + ' ' + listTaker(group.last);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({name: name}));

    } else if (page == '/css/wuTang.css') {
        fs.readFile('css/wuTang.css', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end();
                return;
            }
            res.write(data);
            res.end();
        });
    } else if (page == '/js/wuTang.js') {
        fs.readFile('js/wuTang.js', function(err, data) {
            if (err) {
                res.writeHead(404);
                res.end();
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.write(data);
            res.end();
        });

    } else {
        figlet('404!!', function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                res.end();
                return;
            }
            res.write(data);
            res.end();
        });
    }
});
server.listen(8000);