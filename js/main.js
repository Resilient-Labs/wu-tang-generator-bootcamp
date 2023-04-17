document.querySelector('button').addEventListener('click', getWutangName)
const theName = document.querySelector('h2')

function getWutangName(){
let questions = document.querySelectorAll('select')
let getTheName = 0
for (let i = 0; i < questions.length; i++) {
    getTheName += parseInt(questions[i].value);
    console.log(questions[i].value)
  }

 if ( getTheName === 5) {
        theName.innerText = "The Operator"
} else if (getTheName >= 6 && getTheName <= 10) {
    theName.innerText = "Magic Rakeem";
} else if (getTheName >= 11 && getTheName <= 15) {
    theName.innerText = "The Post Man";
} else if (getTheName >= 16 && getTheName <= 20) {
    theName.innerText = "HeavySpittah";
} else if (getTheName >= 21 && getTheName <= 25) {
    theName.innerText = "FlowGod";
} else if (getTheName >= 26 && getTheName <= 30) {
    theName.innerText = "Da Suzuki Samuri";
} else if (getTheName >= 31 && getTheName <= 34) {
    theName.innerText = "Black Ganhdi";
} else if ( getTheName === 35) {
    theName.innerText = "Filthy Phantom";
}








}









