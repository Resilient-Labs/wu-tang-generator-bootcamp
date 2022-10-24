// The Assignment
//Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).
//2 dropdown of options that correalate to the object (memebers properties/?')
//template literas for options 
//ranomized array of name options 
//it hangs low [0] = FontFaceSetLoadEvent

// LOGIC: 
// questions with drop down in HTML
// each question has 3 options  
// each answer has # value
// depending on the total of the numbers ( answers) = first + last name
// question 1 + question2 + quetion 3= first name && question 4 + question 5 = last name 
// each drop down option has a value
// answers create an array
// you can take 2 out of the Newarray we created


document.querySelector('button').addEventListener('click', generateName)

function generateName(e){
  e.preventDefault()
let answer1 = document.getElementById('colorQ')
let answer2 = document.getElementById('chainQ')
let answer3 = document.getElementById('pizzaQ')
let answer4 = document.getElementById('pokemonQ')
let answer5 = document.getElementById('videoGameQ')

console.log(answer1.value)

let firstNameArray = [
  'Mad', 
  'Hoodoo', 
  'Fearless', 
  'E-ratic', 
  'Prophet',  
];

let lastNameArray = [
  'Savage', 
  'Killah', 
  'Magician', 
  'Menace', 
  'Commander', 
];


let firstSum = Number(answer1.value) + Number(answer2.value) + Number(answer3.value)
let secondSum = Number(answer4.value) + Number(answer5.value)

console.log(firstSum)

// firstSum - 3 because the losest value in firstNameArray could only be 3
let firstSelection = (firstSum - 3) % firstNameArray.length
// secondSum - 2 because the losest value in secondNameArray could only be 2
let secondSelection = (secondSum - 2) % lastNameArray.length

console.log(firstSelection)
console.log(secondSelection)


let firstName = firstNameArray[firstSelection]
let secondName = lastNameArray[secondSelection]

console.log(`${firstName} ${secondName}`)

document.querySelector('#result').innerText = `You will now be known as: ${firstName} ${secondName}`

}











