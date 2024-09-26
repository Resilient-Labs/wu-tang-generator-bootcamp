// Code Created by House Moses
let button = document.getElementById('button')
let name = document.getElementById('response')
button.addEventListener("click", () => {
var adjectives = ["Ambivalent", "Rowdy", "Animilistic", "Antsy", "Arcaic",
    "Silent", "Brutal", "Ambitious", "Biblical", "Bad Ass", "Elegant", "Holy", "Sketchy",
    "Historic", "Loquacious", "Boisterous", "Shadow Hunting", "Wonderous", "Theatrical","Slimy","Mannered"]

var nouns = ["Ninja", "Technician", "Pancake", "Zero-Assassin", "MegaLord", "Puppet Master",
    "Murderer", "Samurai", "Barnacle", "Captain", "Nibbler", "Beast", "Clerk of the Chapel",
    "Knight of night", "Glitter-Hoe", "Boogie","Slap",
    "Sensei", "StickFigure"]
    let pet = document.getElementById('pet').value
    let food = document.getElementById('food').value
    let music = document.getElementById('music').value
    let powers = document.getElementById('powers').value
    let tv = document.getElementById('tv').value
    let moive = document.getElementById('movie').value
    let noune = [food,tv,powers]
    let sumOfNoune = 0
for(let i=0; i<noune.length; i++){
  sumOfNoune += Number(noune[i])
}
    let adjective = [moive,pet,music]
    let sumOfadjective = 0
    for(let i=0; i<adjective.length; i++){
      sumOfadjective += Number(adjective[i])
    }
console.log(noune);
console.log(adjective);
console.log(sumOfNoune);
console.log(sumOfadjective);
console.log(nouns[sumOfNoune]);
console.log(adjectives[sumOfadjective]);


name.innerHTML= adjectives[sumOfadjective]+" "+nouns[sumOfNoune]


});

document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault()
  });
