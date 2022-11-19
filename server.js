const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');


http.createServer(function (req, res) {

    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);

    // Function will be called based on the path. 
    const readWrite = (file, content) => {
        fs.readFile(file, function(err, data) {
          res.writeHead(200, {'Content-Type': content});
          res.write(data);
          res.end();
        });
    }

    switch(page) {

        case '/':
            readWrite("index.html", "text/html")
            break;
        case '/js/main.js':
            readWrite("js/main.js", "text/javascript")
            break;
        case '/css/style.css':
            fs.readFile('css/style.css', function(err, data) {
            res.write(data);
            res.end();
            });
            break;
    
        case '/css/normalize.css':
            fs.readFile('css/normalize.css', function(err, data) {
                res.write(data)
                res.end()
            });
            break;

        case '/api': 

            if('answers' in params){

                let arrFirstName = ['Master', 'Commander', 'Beggar', 'Destroyer', 'lord', 'judge', 'Demon', 'Ambassador']
                let arrSecondName = ['Fearless', 'Arrogant', 'Sympathetic', 'Stinky', 'Small', 'Lazy-Assed', 'Ungrateful', 'Tall']

                // Get the query param
                let userValue = params['answers']

                // We'll be getting back a string, use the split method to convert it into an array
                let arr = userValue.split(" ")

                // Convert arr that holds string into an array that holds numbers
                let numArray = arr.map(function (x) { 
                    return parseInt(x); 
                  });
                  
                
                let numberOne = numArray[0] + numArray[1]
                let numberTwo = numArray[2] + numArray[3] + numArray[4]

                // Make sure numberTwo does not go over 7. Because we only have 8 elements in our  arrSecondName
                if(numberTwo > 7) {
                    numberTwo = Math.floor(numberTwo / 2)
                }

                // Create an object and respond back to the user
                res.writeHead(200, {'Content-Type': 'application/json'});
                const objToJson = {
                    firstName: arrFirstName[numberOne],
                    secondName: arrSecondName[numberTwo]

                }
                res.end(JSON.stringify(objToJson));
            } 
            break;
    }

}).listen(process.env.PORT || 8000);