const button = document.querySelector("button")
const name = document.querySelector("h2")
const resetBtn = document.querySelector('.again')

const firstName = ['Lit', 'Rubble', 'Fickle', 'Master', 'Platinum', 'Needy', 'Wacko', 'Smoke', 'Misunderstood', 'Determined', 'Pastey', 'Sympathetic']

const secondName = ['Coyote', 'Threat', 'Dada', 'Vanquisher', 'Shrimp', 'Old Greg', 'Genius', 'Hunter', 'Professional', 'Artist', 'Sleeper']


const generateRandomIndex = () => {
  const questionOne = Math.random(
    // (+document.querySelector('input[name="questOne"]:checked').value?? 0) 
    )* 12
  const questionTwo = Math.random(
    // (+document.querySelector('input[name="questTwo"]:checked').value?? 0)
     )* 12
  const questionThree = Math.random(
    // (+document.querySelector('input[name="questThree"]:checked').value?? 0)
     )* 12
  const questionFour = Math.random(
    // (+document.querySelector('input[name="questFour"]:checked').value?? 0)
     )* 12
  const questionFive = Math.random(
    // (+document.querySelector('input[name="questFive"]:checked').value?? 0)
     )* 12
  console.log(document.querySelector('input[name="questOne"]:checked'))
  console.log(questionOne)

  return Math.round((questionOne + questionTwo + questionThree + questionFour + questionFive) / 5)
}

function getName() {
 const randomOne = generateRandomIndex() //dont really need this 
 const randomTwo = generateRandomIndex() //dont really need this 


  console.log(`random1:${randomOne}, random2: ${randomTwo}`)
  name.innerText = firstName[randomOne] + ' ' + secondName[generateRandomIndex()]
}


button.addEventListener('click', getName)

resetBtn.addEventListener('click', () => {

  let inputs = document.querySelectorAll('input')
  inputs.forEach(input => input.checked = false)
  name.innerText = ''
})




