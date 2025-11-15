// alert("More butter please")



/*
Goal: Create a Wu-Tang Clan name generator. 
Present the user with 5 survey questions and based on those answers generate their name. 
The name doesn't have to be exact names, but Wu-Tang sounding-ish names.
// Method Man, The RZA, The GZA, U-God, Cappadonna, Raekwon, Ghostface Killah, ODB, Inspectah Deck, Masta Killa
*/

// Pseudo-Code
// Put in 5 inputs 
// Input 1: What name style do you prefer? 
// Options: Classical (Grand, Emcee, Eazy) Neo-Classical (Big, MC) Aughts (Lil)  Modern (The Rapper, The Artist, Etc.) Post-Modern (Choose a string of 3 random numbers from 1-9)

let nameType = document.querySelector('option:checked').textContent

document.getElementById('nameoptions').addEventListener('change', () => {
    nameType = document.querySelector('option:checked').textContent
})



document.querySelector('#submit').addEventListener('click', nameRun)

let firstPart
let secondPart
let thirdPart
let fourthPart
let fifthPart

let namePlace = document.getElementById('newRapName').innerHTML

function nameRun() {
    const firstPart = nameType
    console.log(firstPart)

    const worldRuleVal = document.querySelector('#firstInput').value
    secondPart = worldRuleVal
    console.log(secondPart)

    const friendsWordVal = document.querySelector('#secondInput').value
    thirdPart = friendsWordVal
    console.log(thirdPart)

    const enemyWordVal = document.querySelector('#thirdInput').value
    fourthPart = enemyWordVal
    console.log(fourthPart)

    const fieldset = document.querySelector('#fieldset');
    const selectedStyle = fieldset.querySelector('input[name="decideStyle"]:checked');
    let fifthPart = selectedStyle?.value
    console.log(fifthPart)

    if(fifthPart === "RZA"){
        let wuTangNameOne = firstPart + ' ' + secondPart[0].toUpperCase() + thirdPart[0].toUpperCase() + fourthPart[0].toUpperCase()
        console.log(wuTangNameOne)
        document.getElementById('newRapName').innerHTML = wuTangNameOne
    }else if (fifthPart === "razor"){
        let wuTangNameTwo = firstPart + ' ' + secondPart + ' ' + thirdPart + ' ' + fourthPart
        console.log('hello')
        console.log(wuTangNameTwo)
        document.getElementById('newRapName').innerHTML = wuTangNameTwo
    }else{
        document.getElementById('newRapName').innerHTML = "Where Is Your Wu-Tang Name?"
    }

}






// Issues with Code (worked on with Chris):
/*
NameType not defined correctly
Syntax errors with semicolons
When an eventListener function is called, it's called with parameters - usually an event
    From the param you can get info such as what triggered the event to be sent

*/

// document.getElementById(('classic')).addEventListener('click', checkClassic)
// document.getElementById(('neoclassic')).addEventListener('click', checkNeoClassic)
// document.getElementById(('aughts')).addEventListener('click', checkAughts)
// document.getElementById(('modern')).addEventListener('click', checkModern)
// document.getElementById(('postmodern')).addEventListener('click',checkPostModern)

// Hi Up Here -- I think I need to simplify this
// The first one should just be -- -Choose Your Prefix
// Then use dropdown.value


// document.getElementById(('classic')).addEventListener('click', checkType)
// document.getElementById(('neoclassic')).addEventListener('click', checkType)
// document.getElementById(('aughts')).addEventListener('click', checkType)
// document.getElementById(('modern')).addEventListener('click', checkType)
// document.getElementById(('postmodern')).addEventListener('click',checkType)


// document.getElementById('fieldset').addEventListener('click',checkType)


// How could I check if something was both checking the value I need and also the submit button?


// let nameType = document.getElementById(('fieldset').checked)
// function checkClassic(event) {
//     if (nameType === "classic"); {
    // let name1 = event.target.id
//         console.log("cowabunga");
//         // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value + 
//         firstPart = 'classic'
//         console.log(firstPart)
//     }
// }

// function checkNeoClassic() {
//     if (nameType == "neoclassic"); {
//         console.log("pizzaaaa");
//         // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value + 
//         firstPart = 'neoclassic'
//         console.log(firstPart)
//     }
// }


// function checkAughts() {
//     if (nameType == "aughts"); {
//         console.log("yerrrrrr");
//         // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value + 
//         firstPart = 'aughts'
//         console.log(firstPart)
//     }
// }

// function checkModern() {
//     if (nameType == "modern"); {
//         console.log("clobberintime");
//         // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value +
//         firstPart = 'modern'
//         console.log(firstPart)
//     }
// }

// function checkPostModern() {
//     if (nameType == "postmodern"); {
//         console.log("ratdaddy");
//         // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value +
//         firstPart = 'postmodern'
//         console.log(firstPart)
//     }
// }


// Input 2: If you ruled the world (imagine that), what would your title be?
// document.querySelector('#submit').addEventListener('click', nameRun)


// function nameRun(){

// if (nameType === "classic") {
//     console.log("cowabunga");
//     // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value +
//     firstPart = 'classic'
//     console.log(firstPart)
// } else if (nameType == "neoclassic") {
//     console.log("pizzaaaa");
//     // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value +
//     firstPart = 'neoclassic'
//     console.log(firstPart)
// } else if (nameType == "aughts") {
//     console.log("yerrrrrr");
//     // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value +
//     firstPart = 'aughts'
//     console.log(firstPart)
// } else if (nameType == "modern") {
//     console.log("clobberintime");
//     // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value +
//     firstPart = 'modern'
//     console.log(firstPart)
// } else if (nameType == "postmodern") {
//     console.log("ratdaddy");
    // let posName = Math.random().Math.floor(1-9)
//     // let newName = posName + '' + input2.value[need to do something here so you only get first word] + input3.value +
//     firstPart = 'postmodern'
//     console.log(firstPart)
// } else {
//     console.log("Where's your type, sir???")
// }

//     const worldRuleVal = document.querySelector('#firstInput').value
//     secondPart = worldRuleVal
//     console.log(secondPart)

//     const friendsWordVal = document.querySelector('#secondInput').value
//     thirdPart = friendsWordVal
//     console.log(thirdPart)

//     const enemyWordVal = document.querySelector('#thirdInput').value
//     fourthPart = enemyWordVal
//     console.log(fourthPart)

//     const wordDecide =  document.querySelector(('#fieldset2').checked)
//     fifthPart = wordDecide
//     console.log(fifthPart)

// }




// Input 3: What's one word that your friends would use to describe you?
// Input 4: Your enemies favorite word for you?
// Input 5: Yo RZA or Yo Razor?
// Have a function that takes in different parts of the inputs to create the name
// There could be part of the input that you check to lengthen the name
// Then there could be One where you choose the prefix
// Maybe you could ask people the adjective that they described them with when they were a kid and have that be the first word
// Then have people select if they are big or little
// Maybe include part of a clip where it says all their names
// Maybe have a question that controls which of 5-10 responses you get back
// Ask Abdirahman how he did the sound in there



// function checkType() {
//     let nameType = document.getElementById(('fieldset').checked)
//     if (nameType === "classic") {
//         console.log("cowabunga");
//         // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value + 
//         firstPart = 'classic'
//         console.log(firstPart)
//     } else if (nameType == "neoclassic") {
//         console.log("pizzaaaa");
//         // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value + 
//         firstPart = 'neoclassic'
//         console.log(firstPart)
//     } else if (nameType == "aughts") {
//         console.log("yerrrrrr");
//         // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value + 
//         firstPart = 'aughts'
//         console.log(firstPart)
//     } else if (nameType == "modern") {
//         console.log("clobberintime");
//         // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value +
//         firstPart = 'modern'
//         console.log(firstPart)
//     } else if (nameType == "postmodern") {
//         console.log("ratdaddy");
//         // let newName = input1.value + '' + input2.value[need to do something here so you only get first word] + input3.value +
//         firstPart = 'postmodern'
//         console.log(firstPart)
//     } else {
//         console.log("Where's your type, sir???")
//     }
// }


