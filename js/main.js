// Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator)

// user enters answers to survey questions
// when answers are entered, they press button 'generate name'

// computer listens for "button" click
// call the function
// grab infomation from inputs
// create array of random names 
// apply randomization with math.random
// find 

// display names in div id get.elementbyID

document.querySelector('button').addEventListener('click', getName)

function getName() {
    let names = ['RZA-ish', 'GZA-ish', 'Money-pee', 'Silver-bob', 'Savage-G','Lex Diamonds','Booby Steels', 'Lucky Hands', 'Cappachino', 'Noodles' ]
    let nameIndex = Math.floor(Math.random()*10) 
    console.log(nameIndex)
    let name = names[nameIndex]
    console.log(name)
    document.getElementById('wtname').innerText = name
}

// completed with the help of Layomi and MJ during weekend community work session
