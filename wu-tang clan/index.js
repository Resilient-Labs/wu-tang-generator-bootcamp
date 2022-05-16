document.querySelector("button").addEventListener('click' , getName);

function getName(){
const numOne = Number(document.querySelector('#favRapper').value);
const numTwo = Number(document.querySelector('#favTvShow').value);
const numThree = Number(document.querySelector('#favFood').value);
const numFour = Number(document.querySelector('#favColor').value);
const numFive= Number(document.querySelector('#favTool').value);

 console.log(numOne, numTwo, numThree,numFour,numFive,)
let indnameObjectOne = numOne + numTwo;
let indnameObjectTwo = numThree + numFour + numFive;
let nameOnjectOne = [
    'The Dude',
    'funk Master',
    'Blue Jay',
    'Ole Funk',
    'Pack-Man',
    'Long'
];
let nameObjectTwo=[
    'red Fin',
    'grey Fin',
    'blue Fin',
    'Green Fin',
    'Purple Fin',
    'Long Fin',
    'Dick Fin'

];
let firstName = nameOnjectOne[indnameObjectOne]
let secondName = nameObjectTwo[indnameObjectTwo]
document.querySelector('#blueFish').innerText = `${firstName} ${secondName}`;
}