document.querySelector('button').addEventListener('click', ()=>{
let firstNames = ["Mastah", "General", "Emperor", "King", "Phantom", "Da", "Divine"]
let lastNames = ["Killah", "Smokuh", "Cyborg", "Rhymuh", "$tackzz", "Trappuh"]
let answerOne = document.querySelector('#answer1').value.length
let answerTwo = document.querySelector('#answer2').value.length
let answerThree = document.querySelector('#answer3').value.length
let answerFour = document.querySelector('#answer4').value.length
let answerFive = document.querySelector('#answer5').value.length
function getWuMan(){
    let wuName = document.querySelector('#wu_name')
    let answerSumOne = Math.floor((answerOne+answerTwo+answerFive)/5)
    let answerSumTwo = Math.floor((answerThree+answerFour+answerFive)/5)
    wuName.innerText = `${firstNames[answerSumOne]} ${lastNames[answerSumTwo]}`
}
getWuMan()
})
