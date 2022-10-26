
// Goal: Create a Wu-Tang Clan rapperName generator.
// Present the user with 5 survey questions 
// and based on those answers randomly generate their rapperName. 
// The rapperName doesn't have to be exact rapperNames, but Wu-Tang sounding-ish rapperNames. 
// Ex: Childish Gambino (who actually got his rapperName from a Wu-Tang rapperName generator).

//listenser for generate button/ submission of form
document.querySelector("#generate").addEventListener("click", getAnswers)
let name

//array for answers
answers = []
//Step 1: Get User's Answers back 
function getAnswers(event) {
    event.preventDefault()
    console.log("passes vibecheck")
    //get the answer 1-5
    name = document.querySelector('#name').value
    let answer1 = document.querySelector('input[Name="elements"]:checked').value
    let answer2 = document.querySelector('input[Name="teams"]:checked').value
    let answer3 = document.querySelector('input[Name="shows"]:checked').value
    let answer4 = document.querySelector('input[Name="genres"]:checked').value
    let answer5 = document.querySelector('input[Name="vehicles"]:checked').value
    //push into answers 
    answers.push(answer1)
    answers.push(answer2)
    answers.push(answer3)
    answers.push(answer4)
    answers.push(answer5)
    console.log(answers)
    compareAnswers()    

    //for loop to grab all answers 
        //push into answers 
}
//check answers because trust issues
console.log(answers)
let option1 = 0
let option2 = 0
let option3 = 0
let option4 = 0
//Step 2: Associate answers with parameters to generate them
function compareAnswers() {
    //each switch is counting what answer is selected with counters(.ex option1++)
    switch(answers[0]) {
        case 'wind': option1++ ; break;
        case 'water': option2++ ; break;
        case 'earth': option3++ ; break;
        case 'fire': option4++ ; break;

    }
    switch(answers[1]) {
        case 'sixers': option1++ ; break;
        case 'warriors': option2++ ; break;
        case 'celtics': option3++ ; break;
        case 'heat': option4++ ; break;
    }
    switch(answers[2]) {
        case 'naruto': option1++ ; break;
        case 'mha': option2++ ; break;
        case 'op': option3++ ; break;
        case 'ff': option4++ ; break;
    }
    switch(answers[3]) {
        case 'hip-pop': option1++ ; break;
        case 'jazz': option2++ ; break;
        case 'rock': option3++ ; break;
        case 'r&b': option4++ ; break;
   
    }
    switch(answers[4]) {
        case 'helicopter': option1++ ; break;
        case 'yacht': option2++ ; break;
        case 'tank': option3++ ; break;
        case 'truck': option4++ ; break;
    }
    //trust issues
    console.log(option1)
    console.log(option2)
    console.log(option3)
    console.log(option4)
    generateName()
}


//four arrays
let windTypes = [ "Airy Tempest","Squally Gale", "Fresh Typhoon","Breezy Cyclone"]
let waterTypes = ["Wavy H20", "Transparent Tears", "Murky Currents", "Calm Rain"]
let earthTypes = ["Grassy Terrain", "Rocky Clay", "Worldly Turf", "Dusty Coast"]
let fireTypes = ["Smoking Ember", "Spicy Bonfire", "Blazing Campfire", "Lukewarm Tinder"]
let rapperName = ""

//depending option

//Step 3: Generate them 
function generateName() {
    if (option1 >= 3) {
        rapperName = windTypes[option1-3]
        console.log(rapperName)
        document.querySelector("#original-name").innerHTML = `Congrats ${name}, you will now be known as.. `
        document.querySelector("#generated-name").innerHTML = rapperName
        option1 = 0;option2 = 0;option3 = 0; option4 = 0;
     
       
    }
   
    else if (option2 >= 3) {
        rapperName = waterTypes[option2-3]
        document.querySelector("#original-name").innerHTML = `Congrats ${name}, you will now be known as... `
        document.querySelector("#generated-name").innerHTML = rapperName
        //resetting value for counters
        option1 = 0;option2 = 0;option3 = 0; option4 = 0;
    }
    else if (option3 >= 3) {
        rapperName = earthTypes[option3-3]
        document.querySelector("#original-name").innerHTML = `Congrats ${name}, you will now be known as... `
        document.querySelector("#generated-name").innerHTML = rapperName
        option1 = 0;option2 = 0;option3 = 0; option4 = 0;
    }
    else if (option4 >= 3) {
        rapperName = fireTypes[option4-3]
        document.querySelector("#original-name").innerHTML = `Congrats ${name}, you will now be known as... `
        document.querySelector("#generated-name").innerHTML = rapperName
        option1 = 0;option2 = 0;option3 = 0; option4 = 0;
    }

  
}


//Step 4: Output rapperName to user



// const adjectives = ["adamant", "bold", "brave", "bashful", "calm", "docile", "naughty", "hardy", "brave", "lonely", "impish", "lax", "relaxed", "modest", "mild", "rash", "quiet", "gentle", "careful", "quirky", "sassy", "timid", "hasty", "jolly", "naive", "serious"]

// const nouns = ["helicopter", "smoke", "savage", "gambino", "scooter"]

// const getRandomrapperName = () =>  `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`

// console.log(getRandomrapperName)