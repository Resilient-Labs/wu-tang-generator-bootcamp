const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname
    const params = querystring.parse(url.parse(req.url).query)
    console.log(page)

    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
    }

    else if (page == '/wutang') {
        const firstName = params.firstName.length
        const lastName = params.lastName.length
        const age = Number(params.age)
        const food = params.food.charCodeAt(0) - 96 // UTF code of character
        const option = Number(params.option)

        const wuNames = [
            'RZA (Ruler Zig-Zag-Zig Allah)',
            'GZA (The Genius)',
            'Method Man',
            'Raekwon (The Chef)',
            'Ghostface Killah',
            'Inspectah Deck',
            'U-God',
            'Masta Killa',
            'Cappadonna',
            'The RZArector',
            'The Abbott',
            'The Genius',
            'The Rebel INS',
            'WZA',
            'Black Widow',
            'The Shark',
            'The Ill Figure',
            'Grave Digger',
            'The Sinister',
            'The Overlord'
        ]

        // Formula for assigning Wu name
        const i = Math.floor((food + age + option) / (firstName + lastName))
        const wuName = wuNames[i]
        
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ wuName }))
    }

    else if (page == '/css/style.css') {
        fs.readFile('css/style.css', function (err, data) {
            res.write(data)
            res.end()
        })
    }
    
    else if (page == '/js/main.js') {
        fs.readFile('js/main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' })
            res.write(data)
            res.end()
        })
    }
    
    else {
        figlet('404!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...')
                console.dir(err)
                return
            }
            res.write(data)
            res.end()
        })
    }
})

server.listen(8000)