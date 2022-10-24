// Added an event listener for the button to generate a name
// Added an event listener for the button to reset the page
document.querySelector('#resetButton').addEventListener('click', resetButton)
document.querySelector('.button').addEventListener('click', getName)

// Declared a function called getName, passing in a parameter e as the event object
function getName(e){
// Preventing the default action of the form (submit) when you submit it to take place
e.preventDefault()

// Decalared variables for each of the questions, and grabbed the id's from the sections
let questionOne = document.querySelector('#color')
let questionTwo = document.querySelector('#shoeBrand')
let questionThree = document.querySelector('#choclate')
let questionFour = document.querySelector('#season')
let questionFive = document.querySelector('#movieGenre')


// Declared a variable array
let wuTangNames = [
  'Golden Magician', 
  'Mad Lover', 
  'Long Block Warrior', 
  'Mighty Pupil', 
  'Philosophical Buddist', 
  'Foolish Lover', 
  'Amazing Hunter', 
  'Vulgar Lion', 
  'Excessive Dragon', 
  'Pinky Mastermind', 
  'Violent Monkey', 
  'Crazy Mastermind',
  'Mad Mad Bandit', 
  'Midnight Lord', 
  'Stinky Wanderer', 
  'Bitter Conqueror', 
  'Respected Lover'
]

// Turning the values that are in strings into a number data type
let answer = Number(questionOne.value) + Number(questionTwo.value) + Number(questionThree.value) + Number(questionFour.value) + Number(questionFive.value)




// Math.abs - turns any number into positive (absolute value)
// Calculate the max(25) - 8
// get a number between 0 and 16
let name = Math.abs((answer - 8) % wuTangNames.length)

let getArray = wuTangNames[name]


console.log(name)

document.querySelector('.result').innerText = getArray

}


// RESET BUTTON

function resetButton(){
  window.location.reload()
}

