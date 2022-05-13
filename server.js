const http = require('http');
const fs = require('fs')                                                                                                                             
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
const params = querystring.parse(url.parse(req.url).query);
const page = url.parse(req.url).pathname;

console.log(page);

if (page == '/') {
    fs.readFile('index.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
    });
}
else if (page == '/api') {
    if (params['sport'] === 'football') {
        if (params['weather'] === 'summer') {
            if (params['pet'] === 'cats') {
                if (params['vacation'] === 'mountains') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Naruto"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Sasuke"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                } else if (params['vacation'] === 'beaches') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Sakura"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Kiba"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                }
            } else if (params['pet'] === 'dogs') {
                if (params['vacation'] === 'mountains') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Hinata"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Shino"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                } else if (params['vacation'] === 'beaches') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Shikamaru"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Ino"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                }
            }
        } else if (params['weather'] === 'winter') {
            if (params['pet'] === 'cats') {
                if (params['vacation'] === 'mountains') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Choji"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Neji"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                } else if (params['vacation'] === 'beaches') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Tenten"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Lee"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                }
            } else if (params['pet'] === 'dogs') {
                if (params['vacation'] === 'mountains') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Kakashi"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Kurenai"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                } else if (params['vacation'] === 'beaches') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Asuma"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Guy"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                }
            }
        }
    } else if (params['sport'] === 'basketball') {
        if (params['weather'] === 'summer') {
            if (params['pet'] === 'cats') {
                if (params['vacation'] === 'mountains') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Jiraiya"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Tsunade"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                } else if (params['vacation'] === 'beaches') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Orochimaru"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Itachi"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                }
            } else if (params['pet'] === 'dogs') {
                if (params['vacation'] === 'mountains') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Kisame"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Deidara"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                } else if (params['vacation'] === 'beaches') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Sasori"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Hidan"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                }
            }
        } else if (params['weather'] === 'winter') {
            if (params['pet'] === 'cats') {
                if (params['vacation'] === 'mountains') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Kakuzu"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Pain"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                } else if (params['vacation'] === 'beaches') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Konan"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Obito"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                }
            } else if (params['pet'] === 'dogs') {
                if (params['vacation'] === 'mountains') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Madara"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Zetsu"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                } else if (params['vacation'] === 'beaches') {
                    if (params['system'] === 'playstation') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Mizuki"
                        }
                        res.end(JSON.stringify(objToJson));
                    } else if (params['system'] === 'xbox') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        const objToJson = {
                            name: "Jugo"
                        }
                        res.end(JSON.stringify(objToJson));
                    }
                }
            }
        }
    }
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
