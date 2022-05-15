/*
Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).
*/

//user anwsers survey questions
//pull value from each
//use value to pull name from array
//return it.

let firstQuestion = document.querySelector('#firstQuestion')
let secondQuestion = document.querySelector('#secondQuestion')
let thirdQuestion = document.querySelector('#thirdQuestion')
let fourthQuestion = document.querySelector('#fourthQuestion')
let fifthQuestion = document.querySelector('#fifthQuestion')
let response = document.querySelector('span')

function getWuTangName(){

    let firstSum = parseInt(firstQuestion.value) + parseInt(fourthQuestion.value) - 2
    let secondSum = parseInt(thirdQuestion.value) + parseInt(secondQuestion.value) + parseInt(fifthQuestion.value) - 3
  
    fetch(`/api?firstWuName=${firstSum}&lastWuName=${secondSum}`)
      .then(response => response.json())
      .then((data) => {
        //console.log(data)
        //console.log(data['first name'], data['last name']);

        let wutangName = `${data['first name']} ${data['last name']}`
        response.innerText = wutangName
      });
  
}


document.querySelector('input').addEventListener('click', getWuTangName)