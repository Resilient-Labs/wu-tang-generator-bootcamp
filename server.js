const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const PORT = 8000;

const server = http.createServer((req, res) => {
    const myUrl = url.parse(req.url).pathname;
    console.log(myUrl);

    if (myUrl === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        })
    } else if (myUrl === '/styles') {
        fs.readFile('css/style.css', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        })
    } else if (myUrl === '/reset') {
        fs.readFile('css/reset.css', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        })
    } else if (myUrl.startsWith('/generator')) {
        let body = '';
        req.on('data', chunck => {  //data from the browser comes in chunks
            console.log(chunck.toString());
            body += chunck.toString();
        })
        req.on('end', () => { // end the listening
            body = querystring.parse(body);
            res.writeHead(200, { 'Content-Type': 'text/html' })
            const result = getName(body);

            fs.readFile('generator.html', (err, data) => {
                res.end(data.toString().replace('<h1 class="generated"></h1>', `<h1 class="generated">${result}</h1>`));
            });
        });
    }
});

server.listen(PORT, () => console.log(`Server running at port ${PORT}`));



function getName(body) {

    const firstPart = ['Buzz', 'Dorky', 'Hustler', 'Tipsy', 'Slimy', 'Jiggy', 'Skeezy', 'Bling', 'Wicked'];
    const lastPart = ['Warrior', 'Knight', 'D', 'Toe', 'Small', 'Supreme', 'Twinkle', 'Fingers', 'Jumper', 'Huff'];

    const firstIndex = body.animal[0].toLowerCase().charCodeAt(0) + body.element[0].toLowerCase().charCodeAt(0) +
        Number(body.number);

    const lastIndex = body.character[0].toLowerCase().charCodeAt(0) + body.power[0].toLowerCase().charCodeAt(0) +
        Number(body.number);

    return `${firstPart[firstIndex % firstPart.length]} ${lastPart[lastIndex % lastPart.length]}`;
}