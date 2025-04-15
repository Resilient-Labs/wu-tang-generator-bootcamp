
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    if (page === '/'){
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error loading index.html');
                return;
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data)
                return;
            }
        })
    } else if (page === '/api' && req.method === 'GET') {
        //get values from the form and extracting it
        const queryParams = url.parse(req.url, true).query;
        const monthSelectValue = queryParams.month
        const seasonSelectValue = queryParams.season
        const yearSelectValue = queryParams.year
        const continentSelectValue = queryParams.continent
        const milkSelectValue = queryParams.milk

        let score = 0;
        let wuTangName = "";
        

        if (monthSelectValue === "january" || monthSelectValue === "february" || monthSelectValue === "march"){
            score += 0.25;
        } else if (monthSelectValue === "april" || monthSelectValue === "may" || monthSelectValue === "june"){
            score += 0.5;
        } else if (monthSelectValue === "july" || monthSelectValue === "august" || monthSelectValue === "september") {
            score += 0.75;
        } else if (monthSelectValue === "october" || monthSelectValue === "november" || monthSelectValue === "december") {
            score += 1;
        }

        if (seasonSelectValue === "winter"){
            score += 0.25;
        } else if (seasonSelectValue === "spring"){
            score += 0.5;
        } else if (seasonSelectValue === "summer"){
            score += 0.75;
        } else if (seasonSelectValue === "fall") {
            score += 1;
        }

        if (yearSelectValue <= 2025 && yearSelectValue >= 2006){
            score += 0.25;
        } else if (yearSelectValue <= 2005 && yearSelectValue >= 1986){
            score += 0.5;
        } else if (yearSelectValue <= 1986 && yearSelectValue >= 1966){
            score += 0.75;
        } else if (yearSelectValue <= 1965 && yearSelectValue >= 1945){
            score += 1;
        }

        if(continentSelectValue === "antarctica"){
            score += 0
        } else if (continentSelectValue === "australia"){
            score += 0.25
        } else if (continentSelectValue === "southAmerica" || continentSelectValue === "africa"){
            score += 0.5
        } else if (continentSelectValue === "northAmerica" || continentSelectValue === "europe"){
            score += 0.75
        } else if (continentSelectValue === "asia") {
            score += 1
        }

        if(milkSelectValue === "before"){
            score += 0;
        } else if(milkSelectValue === "after"){
            score += 1;
        }

        if(score >= 0 && score < 1){
            wuTangName = "Dimwit Shaolin"
        } else if (score >= 1 && score < 2){
            wuTangName = "Blunted Disciple"
        } else if (score >= 2 && score < 3){
            wuTangName = "Mid-Mind Mantle"
        } else if (score >= 3 && score < 4){
            wuTangName = "Cerebral Tiger"
        } else if (score >= 4 && score <= 5) {
            wuTangName = "The Grandmaster Cortex"
        }

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({name: wuTangName, score: score}));
        return;

    } else if (page === '/css/style.css'){
        fs.readFile(path.join(__dirname, 'css/style.css'), (err, data) => {
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error loading styles.css');
                return;
            } else {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.end(data)
                return;
            }
        })
    } else if (page === '/js/main.js'){
        fs.readFile(path.join(__dirname, 'js/main.js'), (err, data) => {
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error loading main.js');
                return;
            } else {
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.end(data)
                return;
            }
        })
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Not found'}));
        return;
    }
})

server.listen(8000);