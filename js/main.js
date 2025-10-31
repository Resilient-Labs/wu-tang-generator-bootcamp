const clanName = [
  "Ghost Lotus",
  "Divine Shadow",
  "Rebel Sage",
  "Swift Falcon",
  "Iron Thunder",
  "Mystic Crane",
  "Zen Viper",
  "Lunar Blade",
  "Cunning Serpent",
  "Silent Hawk",
  "Fist of Fury",
  "Mystic Tiger",
  "Iron Monk",
  "Swift Dragon",
  "Jade Cobra",
  "Silent Shadow",
  "Nobel Phoenix",
  "Mystic Raven",
  "Jade Serpent",
  "Silent Blade",
  "Noble Hawk",
  "Diamond Ghost",
  "Lunar God",
  "Papa Spider",
  "Method Man"
];

console.log(clanName)

const questionTypes = ['hotDrink', 'nightOut', 'personalStyle', 'animal', 'tylerPerry']

document.getElementById('button').addEventListener('click', generateName)

function generateName() {
    let total = 0 //we are generating names based on the users answers and converting those answers into numbers, so start off with 0
    
    for (let i = 0; i < questionTypes.length; i++){
    const selectElement = document.getElementById(questionTypes[i])

    //turns users answer into its value
    const answerValue = selectElement.options[selectElement.selectedIndex].value

    //adds to total
    total += Number(answerValue)
    }
    //i didn't have enough names so it allows the answer to stay in the array by looping to start of list if the total is more than 25
    total = total % clanName.length

    const wuTangName = clanName[total]

  const resultElement = document.getElementById('result')
  resultElement.innerText = `Your Wu-Tang name is: ${wuTangName}`

}