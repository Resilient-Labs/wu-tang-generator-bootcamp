const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring')
const figlet = require('figlet')


const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    else if (page == '/js/main.js') {
        fs.readFile('js/main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' })
            res.write(data);
            res.end();
        });
    } else if (page == '/css/style.css') {
        fs.readFile('css/style.css', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (page == '/api') {
        if ('name' in params && 'age' in params && 'hobby' in params && 'gender' in params && 'pockets' in params) {
            if (params['name'] && params['age'] && params['hobby'] && params['gender'] && params['pockets']) {
                const objToJson = {
                    name: params['name'],
                    age: params['age'],
                    hobby: params['hobby'],
                    gender: params['gender'],
                    pockets: params['pockets'],
                    firstName: ['Method', 'Killa', 'Mastah', 'Gangsta', 'Inspectah'],
                    lastName: ['Man', 'kid', 'won', 'ish'],
                    girlyLastName: ['pink', 'purple', 'rose', 'moon'],
                }

                res.end(JSON.stringify(objToJson));
            }
        }
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
server.listen(8000)