//Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).


//make 5 questions
//allow user to answer each question
//have a button for the user to submit those questions
//if any of the five questions is NOT answered, throw an error when the button is clicked
//if all 5 questions are answered, grab a random name from random name array when button is clicked


document.querySelector('#generateName').addEventListener('click', generateClanName)
const fullClanNameDisplay = document.querySelector('#clanName')


function generateClanName() {
    const answerValue = getAnswerValue()
    const fullClanName = `${generateFirstName(answerValue)} ${generateLastName(answerValue)}`
    displayClanName(fullClanName)
}

function getAnswerValue() {
    const question1 = document.querySelector('#question1').value
    const question2 = document.querySelector('#question2').value
    const question3 = document.querySelector('#question3').value
    const question4 = document.querySelector('#question4').value
    const question5 = document.querySelector('#question5').value
    const valueArray = [question1, question2, question3, question4, question5]

    const totalValue = valueArray.reduce((acc, sum) => Number(acc) + Number(sum), 0)

    return totalValue
}

function generateFirstName(answerValue) {
    //if answer value is even, generate first name from first half of firstname array
    if(answerValue % 2 === 0) {
       const randomNum = Math.floor( Math.random() * 25 )
        console.log(wuTangFirstNames[randomNum])
        return wuTangFirstNames[randomNum]
    //otherwise get from second half
    }else {
        const randomNum = Math.floor( Math.random() * 25 ) + 25
        console.log(wuTangFirstNames[randomNum])
        return wuTangFirstNames[randomNum]
    }
}

function generateLastName(answerValue) {
        //if answer value is even, generate last name from first half of lastname array
        if(answerValue % 2 === 0) {
            const randomNum = Math.floor( Math.random() * 25 )
            console.log(wuTangLastNames[randomNum])
            return wuTangLastNames[randomNum]
        //otherwise get from second half
        }else {
            const randomNum = Math.floor( Math.random() * 25 )
            console.log(wuTangLastNames[randomNum])
            return wuTangLastNames[randomNum]
        }
}

function displayClanName(fullClanName) {
    fullClanNameDisplay.innerText = `Your Name: ${fullClanName}`
}






const wuTangFirstNames = [
    "Shadowed", "Thunderous", "Enigma", "Mystic Jade", "Hidden", "Spirit", "Echo", "Darkened", "Silvered", "Fabled",
    "Cursed", "Fallen", "Fierce", "Ironclad", "Noble", "Titan", "Shining", "Ancient", "True", "Red Mask",
    "Crimson Ghost", "Burning", "Fierce Wind", "Sunlit", "Diamond", "Astral", "Scarred", "Twisted", "Golden Eye", "Iron Fang",
    "Warborn", "Wise", "Lone", "Wretched", "Bright", "Lethal", "Wicked Jade", "Unseen", "Whispered", "Blood Moon",
    "Hawk Eye", "Ice Cold", "Moonstruck", "Radiant", "Ebon", "Painted", "Keen", "Forsaken", "Blazing", "Sacred"
  ]


  const wuTangLastNames = [
    "Mirage", "Slayer", "Killer Bee", "Magi", "Enforcer", "Hydra", "Leviathan", "Vandal", "Striker", "Crescent",
    "Seraph", "Whisper", "Wanderer", "Crusher", "Vanguard", "Cobra", "Tornado", "Saber", "Herald", "Nightshade",
    "Dust", "Glimmer", "Eclipse", "Pulse", "Rift", "Warden", "Blaze", "Frost", "Stalker", "Reign",
    "Crusader", "Inferno", "Sentinel", "Thunderbolt", "Vengeance", "Titan", "Blade Runner", "Viper", "Phantom", "Seeker",
    "Ghostface", "Brimstone", "Forge", "Hawk Talon", "Throne", "Wildcard", "Rook", "Prophetess", "Ice Fang", "Midnight"
  ]