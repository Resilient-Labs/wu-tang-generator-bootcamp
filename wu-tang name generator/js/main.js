// Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).
// create 5 questions for the survey
//answer key to determine the member you get based off the questions
// members: Raekwon, Method man, redman, Ol' dirty bastard, & ghostface killah

// Put in 5 inputs 
// Input 1: What name style do you prefer? 
// Options: Classical (Grand, Emcee, Eazy) Neo-Classical (Big, MC) Aughts (Lil)  Modern (The Rapper, The Artist, Etc.) Post-Modern (Choose a string of 3 random numbers from 1-9)
//Options: Epic (tupac or nas) noun (ice cube or too short) colorful (Sexy Redd or Kodak black) funny name (Snoop Dogg or busta rhymes) scary (21 savage or scarface)
//Received assistance from Michael Kazim, Justin Jimenez, and Justin Joshi.
document.getElementById(('epic')).addEventListener('click', checkEpic)
document.getElementById(('noun')).addEventListener('click', checkNoun)
document.getElementById(('colorful')).addEventListener('click', checkColorful)
document.getElementById(('funny')).addEventListener('click', checkFunny)
document.getElementById(('scary')).addEventListener('click',checkScary)

document.getElementById

// How could I check if something was both checking the value I need and also the submit button?
let nameType = document.getElementById(('fieldset').checked)

let firstThing
let secondThing
let thirdThing
let fourthThing
let fifthThing

function checkEpic() {
    if (nameType === "epic"); {
        console.log("Cookin");
        // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value + 
        firstThing = 'epic'
        console.log(firstThing)
    }
}

function checkNoun() {
    if (nameType == "noun"); {
        console.log("johnnyblaze");
        // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value + 
        firstThing = 'noun'
        console.log(firstThing)
    }
}

function checkColorful() {
    if (nameType == "colorful"); {
        console.log("funkdoc");
        // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value + 
        firstPart = 'colorful'
        console.log(firstPart)
    }
}

function checkFunny() {
    if (nameType == "funny"); {
        console.log("freeloadingrusty");
        // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value + 
        firstPart = 'funny'
        console.log(firstPart)
    }
}
function checkScary() {
    if (nameType == "scary"); {
        console.log("sungod");
        // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value + 
        firstPart = 'scary'
        console.log(firstPart)
    }
}

// Input 2: What's something someone can do, that may make them find out why they shouldn't f*** with you!?
document.querySelector('#submit').addEventListener('click', secondRound)

function secondRound() {
  const actionInput = document.querySelector('#firstInput').value.trim()
  secondThing = actionInput.split(" ")[0] // Take only first word
  console.log("Input 2 (Action):", secondThing)

  //input 3:one word that defines you?
  const definingWord = document.querySelector('#definingWord').value.trim()
  thirdThing = definingWord
  console.log("Input 3 (Defining Word):", thirdThing)

  //input 4:favorite borrough in New York
  const borough = document.querySelector('#borough').value
  fourthThing = borough
  console.log("Input 4 (Borough):", fourthThing)

  //input 5: music streaming preference spotify or apple music
  const platform = document.querySelector('#platform').value
  fifthThing = platform
  console.log("Input 5 (Platform):", fifthThing)

  // Generate your Wu-Tang style name
  generateName()
}

// Combine all inputs into a Wu-Tang style name
function generateName() {
  const wuTangParts = [
    "Iron", "Ghost", "Blaze", "Razor", "Dirty", "Killer", "Divine", "Mad", "Method", "Golden"
  ]

  const randomWuWord = wuTangParts[Math.floor(Math.random() * wuTangParts.length)]
  const newName = `${firstThing} ${thirdThing} ${randomWuWord}`

  console.log("Your Wu-Tang Name:", newName)

  // Display answer
  const resultDiv = document.getElementById('result')
  resultDiv.innerHTML = `<h2>Your Wu-Tang name is:</h2><p class="wuName">${newName}</p>`
}