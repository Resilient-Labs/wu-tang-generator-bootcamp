const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

// Function generate Wu-Tang name
function generateWuTangName(first, last, season, element, color) {
  // Arrays of badass word nicknames to mix into names, lol had fun making these names some are references to anime, comics and classic kungfu flicks like wu tang was inspired from, i went overboard w names but i enjoyed having fun haha
  var prefixes = ['Ol\' Dirty', 'Mighty', 'Ghost', 'RZA', 'Chef', 'Shimmerin', 'Iron', 'Silent', 'Shadow', 'Fresh', 'Righteous', 'Secret', 'Hidden', 'Strong', 'Wise', 'OG', 'Platinum', 'Shinin', 'Swift', 'Blazin', 'Glowin', 'Enlightened', 'Resilient', 'Metal', 'Star', 'Cosmic', 'Lone', 'Loyal', 'Yung', 'MetalFist', 'Gang', 'Cursed', 'Saint', 'Lightnin', 'Sonic', 'Deadly', 'King', 'Powerful', 'Dastardly', 'Charmin', 'All', 'Childish', 'Cloaked', 'Straw\ Hat', 'Cowboy', 'Spiked', 'Spirit', 'Unc', 'Flyin', 'Horned', 'Hollow', 'Hooded', 'Masked', 'Sacred', 'Infinite', 'MetalFace', 'Lost', 'Crouchin', 'All\ Knowin', 'Invincible', 'Steel', 'Leatherface', 'Gifted', 'Wrathful', 'Great', 'The', 'Burnin', 'Honored', 'Honorless', 'Thunda', 'Dark', 'Elden', 'Ill', 'Lil', 'Full\ Stack', 'Deep', 'Last', 'Grand\ Master', 'Student\ Of', 'Trained', 'Sharpened', 'Endless', 'Quiet', 'Deadly', 'Scarred', 'Berserk', 'Supah', 'Holy', 'Badass', 'Sick', 'Brother', 'Honed', 'Maijin', 'Disgraced', 'Holy', 'Soarin', 'Speedy', 'Power', 'Great', 'Rocky', 'Marvelous', 'Shao', 'Hell', 'Ice\ Cold', 'Jay', 'Hoverin', 'Whisperin', 'Master'];

  var suffixes = ['Warrior', 'Monk', 'Samurai', 'Blade', 'Tiger', 'Wizard', 'Ninja', 'Scholar', 'Assassin', 'Master', 'Soldier', 'Protector', 'One', 'Bull', 'Ronin', 'Jedi', 'Souljah', 'Dagger', 'Mantis', 'Lion', 'Shaolin', 'Buddha', 'Lord', 'Fist', 'Claw', 'Arrow', 'Wolf', 'Disciple', 'Titan', 'Doom', 'Starr', 'Shaman', 'Abbott', 'Venom', 'Viper', 'Fang', 'Hunter','Poison', 'Maestro', 'Ultra', 'Might', 'Gambino', 'Knife', 'Champloo', 'Bebop', 'Urchin', 'Avatar', 'Iroh', 'Bison', 'Oni', 'Shadow', 'Beast', 'Wonder', 'Flame', 'Light', 'Villain', 'Hero', 'Dragon', 'Phoenix', 'Robin', 'Kryptonian', 'Ghoul', 'Mutant', 'Swarm', 'Tide', 'End', 'Ozai', 'Roku', 'Sozin', 'Comet', 'Tarnished', 'Soul', 'Ring', 'Hammer', 'Weezy', 'Spitta', 'Coder', 'Hope', 'Kenobi', 'Sith', 'Emperor', 'Sword', 'Spear', 'Darkness', 'Cobra', 'Hulk', 'Soul', 'Guts', 'Saiyan', 'Falcon', 'Panther', 'Truth', 'Sensei', 'Frieza', 'Buu', 'Chunin', 'Hokage', 'Boss', 'Thanos', 'Hornet', 'Bullet', 'Punisher', 'Daredevil', 'Amazon', 'Atlantean', 'Ranger', 'Watcher', 'Fury', 'Houdini', 'Marciano', 'Champion', 'Chief', 'Khan', 'Scorpion', 'Polar\ Bear', 'Kang', 'Conqueror', 'Z', 'Guru', 'Spectre', 'Viltrumite', 'Lantern', 'Sorceror', 'Supreme', 'Zero', 'Cyborg', 'Android', 'Neutron', 'Avenger', 'Killa', 'Savior', 'Shredder'];

  //  names from users with rando badass nickname prefixes
  var randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  var randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  // Combo togethers all the name input + style to form new wu tang name, and adds them in capital letters
  var name = randomPrefix + ' ' + color.charAt(0).toUpperCase() + color.slice(1) + ' ' + randomSuffix;

  return name;
}

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  if (page == '/') {
    fs.readFile('index1.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });

  }else if (page == '/css/style1.css'){
      fs.readFile('css/style1.css', function(err, data) {
        res.write(data);
        res.end();
      })
    }else if (page == '/js/main1.js'){
      fs.readFile('js/main1.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });
  }

  else if (page == '/api') {
    if (  
      'firstName' in params &&
      'lastName' in params &&
      'season' in params &&
      'element' in params &&
      'color' in params
    ) {
        const name = generateWuTangName(
        params.firstName,
        params.lastName,
        params.season,
        params.element,
        params.color
      );


      // Use JSON response creation from example file
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ name }));
    } else {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Missing word needed' }));
    }

  }else{
    figlet('404!!', function(err, data) {
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

server.listen(3636); //lol i thought it would be clever to have a server of 3636 to ref the 36 chambers of shaolin