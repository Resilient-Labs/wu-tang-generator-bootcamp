const a1 = ['JawnJohn', 'Buzz' ,'Prince','Decktape']
const a2 = ['Hittah','Knuckles','Juice','Buttah']
const b1 = ['Babi','Honey','Ruby','Diamond']
const b2 = ['Concrete','Chokehold','Shotta','fighta']
const c1 = ['ALSO KNOWN AS', 'aka', 'The regime','george']
const c2 = ['Also known as', 'AK-47', 'changa','jake']

document.querySelector('#clickMe').addEventListener('click', quizResults)
document.querySelector('.reset').addEventListener('click', resetTest)
const quizAnswers = document.querySelectorAll('.choices')



let randomFirstNameOne = Math.floor(Math.random() * a1.length)
let randomLastnameOne = Math.floor(Math.random() * a2.length)
let randomFirstNameTwo = Math.floor(Math.random()* b1.length)
let randomLastNameTwo = Math.floor(Math.random()* b2.length)
let randomFirstNameThree = Math.floor(Math.random() * c1.length)
let randomLastNameThree = Math.floor(Math.random() * c2.length)

/*
Original work that i was crashing on loop wise had to have zain and suf expalin a diffrent way with two buttons and radio classes and a window reset
loops and arrays are tricky for me would like more help on them
const a1 = ['JawnJohn', 'Buzz' ,'Prince','Decktape']
const a2 = ['Hittah','Knuckles','Juice','Buttah']
const b1 = ['Babi','Honey','Ruby','Diamond']
const b2 = ['Concrete','Chokehold','Shotta','fighta']
const c1 = ['ALSO KNOWN AS', 'aka', 'The regime','george']
const c2 = ['Also known as', 'AK-47', 'changa','jake']

let responeArr = []
let arespone = []
let brespone = []
let crespone = []

document.querySelector('#clickMe').addEventListener('click', Shaolin)
function Shaolin(){
  console.log(document.querySelector('input[name="basic"]:checked').value)
  for (let i = 1; i <= 5; i++){
    responeArr.push(docuemnt.querySelector(`input[name="${i}"]:checked`).value)
  }

console.log(responeArr)*/

//worked with Suf and Zain to fix what i was doing wrong in the other JS file they helped me a lot with understanding arrays at first i was gonna loop but also weak with those

// seperation 
// from a youtube video: https://www.youtube.com/watch?v=0V2Mi16xd04
function resetTest() {
    window.location.reload()
}

function modeOfChoices(array) {
    //count amount of occurences of each chocie
    const obj = {}
    //loop over array
    //Practice this hella more Suf is kinda advanced in his objects I dont understand this like i want when i was alone if i didnt take notes i would of not been able to do this
    array.forEach(strings => {
        //for each choice("A","B","C")
        //if it doesn't already as a key on the object
        //create one and set its value to 1 
        if(!obj[strings]) {
            obj[strings] = 1
        } 
        else {
            obj[strings] += 1
        }
    }) 

    //return object key with highest value
    //set to 0 because the amount of occurences can only ever be 0 or greater
    let highestValue = 0
    let highestValueKey = -Infinity

    for(let key in obj) {
        const value = obj[key]
        if( value > highestValue) {
            highestValue = value
            highestValueKey = key
        }
    }
    return String(highestValueKey)
}


//function to find the mode of an array in order to use it to get the mode from selected choices 


//this will show the results of the quiz from the users
function quizResults() {
//https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
    let one = document.querySelector('input[name="a1"]:checked').value
    let two = document.querySelector('input[name="a2"]:checked').value
    let three = document.querySelector('input[name="a3"]:checked').value
    let four = document.querySelector('input[name="a4"]:checked').value
    let five = document.querySelector('input[name="a5"]:checked').value
    let choices = [one,two,three,four,five]  
    console.log(choices)
    let theMode = modeOfChoices(choices)
    console.log(theMode)

    if(theMode === 'a') {
        //console.log(`Your name is ${firstNameOne[randomFirstNameOne]} ${lastNameOne[randomLastnameOne]}`)
        document.querySelector('#Tidal').innerText = `Your name is ${a1[randomFirstNameOne]} ${a2[randomLastnameOne]}`
    }
    else if(theMode ==='b') {
        //console.log(`Your name is ${firstNameTwo[randomFirstNameTwo]} ${lastNameTwo[randomFirstNameTwo]}`)
        document.querySelector('#Tidal').innerText = `Your name is ${b1[randomFirstNameTwo]} ${b2[randomFirstNameTwo]}`
    }
    else if(theMode ==='c') {
        //console.log(`Your name is ${firstNameThree[randomFirstNameThree]} ${lastNameThree[randomLastNameThree]}`)
        document.querySelector('#Tidal').innerText = `Your name is ${c1[randomFirstNameThree]} ${c2[randomLastNameThree]}`
    }
}

// document.getElementById("clickMe").onclick = makeReq;
//
// function makeReq(){
//
//   var userName = document.getElementById("userName").value;
//
//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);
//
//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation
//
//       } else {
//         // We reached our target server, but it returned an error
//
//       }
//     };
//
//     request.onerror = function() {
//       // There was a connection error of some sort
//     };
//
//     request.send();
// 
