//Variables
let btn = document.querySelector('#btn')
let rstBtn = document.querySelector('#resetBtn')
let youAre = document.querySelector('h2')

//addEventListeners
btn.addEventListener('click', generateName)
rstBtn.addEventListener('click', () => {

    let inputs = document.querySelectorAll('input')
    inputs.forEach(input => input.value = "")
})

//Possible Choices
let question1 = ['red', 'blue', 'green', 'yellow', 'orange', 'brown', 'purple', 'pink']
let question2 = ['the bronx', 'manhattan', 'brooklyn', 'queens', 'staten island']
let question3 = ['pizza', 'chopped cheese']
let question4 = ['50 cent', 'nas', 'biggie', 'mase', 'slick rick', 'rakim', 'll cool j', 'mos def', 'busta rhymes', 'lil kim', 'ghostface killah', 'asap rocky', 'cardi b', 'pop smoke', 'fabolous', 'q-tip', 'joey badass', 'fat joe', 'remy ma', 'nicki minaj']
let question5 = ['sincere', 'happy', 'thoughtful', 'funny', 'patient', 'sociable', 'genuine', 'reliable', 'optimistic', 'evil', 'fearless', 'easygoing', 'understanding']

function generateName() {

    //User Answers
    let answer1 = document.querySelector('#q1').value.toLowerCase()
    let answer2 = document.querySelector('#q2').value.toLowerCase()
    let answer3 = document.querySelector('#q3').value.toLowerCase()
    let answer4 = document.querySelector('#q4').value.toLowerCase()
    let answer5 = document.querySelector('#q5').value.toLowerCase()

    //Outcomes
    let nameGroup = ['OJ Crush', 'Duke Dah Finesse', 'Flex-A-Lot', 'Two Tone', 'D Push', 'Blue Smoke', 'Pump Fake', 'Mr. Outta Pocket', 'Vanilla Soul', 'The FZA', 'Two Rock', 'Supreme Dream']
    let badNameGroup = ['G Stank', 'Weeble Dweeb', 'The Frogguh', 'Quagmire Spittah', 'Country Gump']

    let outcome = nameGroup[Math.floor(Math.random() * nameGroup.length)]
    let badOutcome = badNameGroup[Math.floor(Math.random() * badNameGroup.length)]

    if (question1.includes(answer1)) {
        youAre.innerText = `You will now be known as: ${outcome}`
    } else if (question2.includes(answer2)) {
        youAre.innerText = `You will now be known as: ${outcome}`
    } else if (question3.includes(answer3)) {
        youAre.innerText = `You will now be known as: ${outcome}`
    } else if (question4.includes(answer4)) {
        youAre.innerText = `You will now be known as: ${outcome}`
    } else if (question5.includes(answer5)) {
        youAre.innerText = `You will now be known as: ${outcome}`
    } else {
        youAre.innerText = `You will now be known as: ${badOutcome}`
    }
}

