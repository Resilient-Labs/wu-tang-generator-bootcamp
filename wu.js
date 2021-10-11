/// ask 5 different questions
///create answer combinations that equate two word name
// 2 data structures (arrays)
// 1 for each name
document.querySelector('.button').addEventListener('click', getFirstName)
document.querySelector('.button').addEventListener('click', getLastName)

let firstName = ['Yung', 'Sexy', 'Golden', 'Starlight', 'Leopard', 'Grownish']
let lastName = ['Crybaby', 'Skeletor', 'Plumbus', 'Moonman', 'Chapstick']



function getFirstName() {
  console.log('hi')
  let ur = document.querySelectorAll('.ur')
  let sum = 0
  for (let i =0;i <ur.length; i++){
    sum += parseInt(ur[i].value)
  }
  let answer = Math.round(sum / ur.length)
  document.querySelector('#result').innerText = firstName[answer]

}
function getLastName() {
  console.log('hi')
  let ur2 = document.querySelectorAll('.ur2')
  let sum2 = 0
  for (let i =0;i <ur2.length; i++){
    sum2 += parseInt(ur2[i].value)
  }
  let answer = Math.round(sum2 / ur2.length)
  document.querySelector('#result2').innerText = lastName[answer]

}

// function getLastName(sum) {
//
//   return lastName[sum]
// }
// 5 questions 2 names
//
// first 2 questions - firstname
//
// first name []
// last 3 questions - last name
// last name []
//
//
// if type is chosen more than other type, two words from that type will be used to generate name
//
// not completeley random
//
// has to be multiple choice


// function getFirstName(sum){
//   return firstName[sum]
//
// }
// this is abstraction (a car's appearance (gas pedal, brake pedal, etc) vs. it's actual wiring/ internal design)
// console.log(getFirstName(3))
// function getLastName(sum){
//
// }

// 1. user answers questions in browser
// 2. submit button is clicked
// 3. browser sends answers to questions to the Server
// 4. server recieves answers and uses them to create a name
// 5. server sends created name to browser
// 6. brower displays the name
