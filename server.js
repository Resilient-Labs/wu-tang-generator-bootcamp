const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
//const figlet = require('figlet')
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
    else if (page == '/css/style.css'){
      fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
      });
    }else if (page == '/js/main.js'){
      fs.readFile('js/main.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
    } else if (page == '/api') {
        if('oldName' in params){
          let input = params['oldName']
          let oldName = `${input}`

          let nameArray = Array.from(oldName)
          console.log(nameArray)
          let wuFirst = ['tame','Excessive','great', 'insensitive', 'undue','hot','childish','speedy', 'niffy', 'charitable', 'Intellectual', 'strong','Amazing', 'unreasonable', 'brave', 'unreasonable', 'unpleasant', 'quick', 'governing', 'masta', 'method', 'ghostface', 'dirty','inspectah', 'impressive', 'barbed']
         
        
          let wuLast = ['doge', 'drifter', 'monwhooper', 'big cat', 'victor','lansquenet','gambino', 'paw', 'danger', 'Dominator', 'monwhooper', 'Doctor', 'stylist', 'master', 'pioneer', 'wolf', 'fiend', 'floater','Iron','superior','jaguar','designer','Buddist','short ferret','creator','genius']

          let oldFirstLetter = nameArray[0]
          let lastLetterIndex = nameArray.length - 1
          let oldLastLetter = nameArray[lastLetterIndex]
        
        
          let wuRandomIndex = Math.floor(Math.random() * nameArray.length)
        
          console.log(wuRandomIndex)
            
          let newFirst = wuFirst[wuRandomIndex]
          let newLast = wuLast[wuRandomIndex]
        
          if (oldFirstLetter === 'd'&& oldLastLetter === 'r'){
              newFirst = wuFirst[6]
              newLast = wuLast[6]
        
               this.wuName = `${newFirst} ${newLast}`
          } else {
              if (wuRandomIndex === 6){
                wuRandomIndex += 1
              }
               this.wuName = `${newFirst} ${newLast}`
            }
        
        }

        res.writeHead(200, {'Content-Type': 'application/json'});

        const objToJson = {
            wuName: this.wuName
          }
    
        res.end(JSON.stringify(objToJson));
        //student != leon
      }/* else {
        figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      });
    }*/
  });
  
  server.listen(9000);