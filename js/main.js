let btn = document.querySelector('button')
let result = document.querySelector('h2')


btn.addEventListener('click', getName)

function getName(){
    let questionOne = document.querySelector('#questionOne').value
    let questionTwo = document.querySelector('#questionTwo').value
    let questionThree = document.querySelector('#questionThree').value
    let questionFour = document.querySelector('#questionFour').value
    let questionFive = document.querySelector('#questionFive').value
   
    let randomName = [questionOne, questionTwo, questionThree, questionFour, questionFive]
    let ticketOne = [Math.floor(Math.random() * 5)]
    let ticketTwo = Math.floor(Math.random() * 5)

    let newNamePartOne = randomName [ticketOne]
    let newNamePartTwo = randomName [ticketTwo]

    result.innerText = `Your Wu-Tang Name Is ${newNamePartOne} ${newNamePartTwo}`


}
