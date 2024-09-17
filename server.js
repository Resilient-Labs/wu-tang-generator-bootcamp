const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

function generator(q1, q2, q3, q4, q5) {
	const combinations = {
		tigerrednewYorkpaintingpizza: "RZAlect",
		dragonbluelosAngelesdancingburger: "GZAzzle",
		snakeblackchicagoplayingMusictaco: "Method Monk",
		tigerbluenewYork: "Ghostface KillaBee",
		dragonredpainting: "Raekwon the Chefs Apprentice",
		snakelosAngelesdancing: "U-Godly",
		snakeblackburger: "Masta KillaStrike",
		tigerplayingMusic: "Cappadonna Sage",
		dragonblue: "Ol Dirty Bastion",
		tigerblackchicago: "Young God",
		dragongreennewYorkdancing: "Wu-Tang Warrior",
		snakeredlosAngelespaintingpizza: "Shaolin Monk",
		tigerblueplayingMusicburger: "Mad Samurai",
		dragonyellowchicagodancingtaco: "Funky Buddha",
		snakegreennewYorkplayingMusicpizza: "Iron Fist",
		tigerpurplelosAngelespaintingburger: "Golden Dragon",
		dragonblackchicagoplayingMusictaco: "Mystical Ninja",
		snakebluechicagodancing: "Venomous Viper",
		tigerrednewYorkplayingMusicpizza: "Blade Master",
		dragongreenschicagopaintingtaco: "Shaolin Master",
		snakeredchicagodancingpizza: "Vicious Viper",
		tigeryellowlosAngelesplayingMusicburger: "Golden Tiger",
		dragonpurplenewYorkpaintingtaco: "Mystic Dragon",
		tigerblacklosAngelesdancingpizza: "Shadow Tiger",
		snakegreenchicagoplayingMusicburger: "Emerald Serpent",
		dragongreennychicagopaintingtaco: "Verdant Dragon",
		tigerbluechicagodancingpizza: "Azure Tiger",
		dragonredchicagoplayingMusicburger: "Crimson Dragon",
		snakebluechicagopaintingtaco: "Sapphire Serpent",
		tigerpurplelosAngelesdancingburger: "Amethyst Tiger",
	};

	const name = combinations[`${q1}${q2}${q3}${q4}${q5}`];
	return name || "Childish Gambino"; // little easter egg hahahahahaha @ Leon/EIR that is reading my code
}

const server = http.createServer(function (req, res) {
	const page = url.parse(req.url).pathname;
	const params = querystring.parse(url.parse(req.url).query);
	console.log(page);
	if (page == "/") {
		fs.readFile("index.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			res.end();
		});
	} else if (page == "/otherpage") {
		fs.readFile("otherpage.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			res.end();
		});
	} else if (page == "/otherotherpage") {
		fs.readFile("otherotherpage.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			res.end();
		});
	} else if (page == "/api") {
		if (
			"q1" in params &&
			"q2" in params &&
			"q3" in params &&
			"q4" in params &&
			"q5" in params
		) {
			res.writeHead(200, { "Content-Type": "application/json" });
			let wuTangNameGen = generator(
				params.q1,
				params.q2,
				params.q3,
				params.q4,
				params.q5
			);
			const objToJson = {
				result: wuTangNameGen,
			};
			res.end(JSON.stringify(objToJson));
		} else {
			res.writeHead(200, { "Content-Type": "application/json" });
			const objToJson = {
				name: "Please Answer all the questions",
			};
			res.end(JSON.stringify(objToJson));
		}
	} else if (page == "/css/style.css") {
		fs.readFile("css/style.css", function (err, data) {
			res.write(data);
			res.end();
		});
	} else if (page == "/js/main.js") {
		fs.readFile("js/main.js", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/javascript" });
			res.write(data);
			res.end();
		});
	} else {
		figlet("404!!", function (err, data) {
			if (err) {
				console.log("Something went wrong...");
				console.dir(err);
				return;
			}
			res.write(data);
			res.end();
		});
	}
});

server.listen(8000);
