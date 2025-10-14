// Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).

/*
step 1: could start off with thinking about what kind of questions we want to ask...probably some fun questions related to user's personality using a drop down menu.
step 2: probably want to use Math.random() to help generate random name
step 3: childish gambino is composed of an adjective and a noun, so need these two to generate new name
*/

document.getElementById("button").addEventListener("click", generateName);
const sounds = ['images/karate-chop.mp3', 'images/ah-sound.mp3', 'images/thud-sound.mp3'
];

const personas = [
  "Iron Panda",
  "Shadow Lotus",
  "Steel Serpent",
  "Mystic Tiger",
  "Thunder Fist",
  "Silver Dragon",
  "Ghost Crane",
  "Lightning Scorpion",
  "Jade Panther",
  "Cosmic Wolf",
];

console.log(personas)


function generateName() {
  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  const audio = new Audio(randomSound);
  // the audio.currentTime = 0 resets it so you can click multiple times without waiting for it to finish..it is only needed if you reuse the same audio object across multiple clicks...so when you were ONLY using the karate chop.
  audio.play();
  
  const animal = document.querySelector('#animal')
  const valueAnimal = animal.options[animal.selectedIndex].value
  console.log(animal, valueAnimal)

  const movie = document.querySelector('#movie')
  const valueMovie = movie.options[movie.selectedIndex].value
  console.log(movie, valueMovie)

  const snack = document.querySelector('#snack')
  const valueSnack = snack.options[snack.selectedIndex].value
  console.log(snack, valueSnack)

  const conflict = document.querySelector('#conflict')
  const valueConflict = conflict.options[conflict.selectedIndex].value
  console.log(conflict, valueConflict)

  const strength = document.querySelector('#strength')
  const valueStrength = strength.options[strength.selectedIndex].value
  console.log(strength, valueStrength)

//+ is the same as putting Number()
  const total = +valueAnimal + +valueMovie + +valueSnack + +valueConflict + +valueStrength

  console.log(total)
  
  document.querySelector('h2').innerText = `Your Wu-Tang name is: ${personas[total]}`
}

