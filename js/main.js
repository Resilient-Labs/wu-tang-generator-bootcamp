//get the user's choices
//a variety of if statements to map the criteria to?
//each criteria has a value?
//Alignment = Light 50% Dark 50%
//Age between ranges?
//Birthmonth =
//Sword = pool 1
//shield = pool 2
//Grimoire = pool 3
//Char = 1
//Squirt = 2
//Bulb = 3
//Final Name equals some combo of: Adjective OR Kung-Fu + Other OR Mythology
//Adjectives: Unfathomably, Brave, Wise, Dazzling, Fierce, Lazy, Colossal, Magnificent, Awesome, Based
//Kung-Fu: Drunken, Crane, Super, Tango, Shaolin, Lucky Stars, Hustle, Ninja, Mad
//Other: Zombie, Rings, Man, Slashing, Bishop, Phantom, Troupe, Prophet, Wicked
//Mythology: Byakko, Seiryu, Amaterasu, Izanami, Iwate, Orochi, Sun, Moon, Overlord

output = document.querySelector('#output');
document.querySelector('#submitButton').addEventListener('click',doStuff)

let adjectives = ['Unfathomably', 'Brave', 'Wise', 'Dazzling', 'Fierce', 'Lazy', 'Colossal', 'Magnificent', 'Awesome', 'Based']; //10
let kungFu = ['Drunken','Crane', 'Super', 'Shaolin', 'Lucky Stars', 'Hustle', 'Ninja', 'Mad', 'Dragon', 'Tiger']; //10
let otherStuff = ['Zombie', 'Rings', 'Man', 'Slashing', 'Bishop', 'Phantom', 'Troupe', 'Prophet', 'Wicked', 'Sauce']; //10
let mythology = ['Byakko', 'Seiryu','Amaterasu', 'Izanami', 'Iwate', 'Orochi', 'Sun', 'Moon', 'Ikazuchi', 'Kirin']; //10


let myAdj = 0;
let myKungFu = 0;
let myOther = 0;
let myMyth = 0;
let finalResult = 0;

let finalAdj = '';
let finalKung = '';
let finalOther = '';
let finalMyth = '';

function doStuff() {
    const userAlignment = document.querySelector(`input[type='radio'][name='alignment']:checked`).value;
    const userAge = document.querySelector('#ageField').value;
    const userMonth = document.querySelector('#monthField').value;
    const userTools = document.querySelector(`input[type='radio'][name='tool']:checked`).value;
    const userStarter = document.querySelector(`input[type='radio'][name='Starter']:checked`).value;
    console.log(`User submitted: ${userAlignment}, ${userAge}, ${userMonth}, ${userTools}, ${userStarter}`)    

    //Alignment
    if(userAlignment === 'Light') {
        console.log(`user is ${userAlignment}`);
        myAdj = 1;
        myOther = 1
    } 
    if (userAlignment === 'Dark') {
        console.log(`user is ${userAlignment}`);
        myAdj = 2;
        myOther = 2
    }
    //Age
    if(userAge >= 0 && userAge <= 50) {
        console.log(`User is age is ${userAge} and is between 0 and 50`)
        myKungFu = 1
    }
    if(userAge >= 51 || userAge >= 100) {
        console.log(`User is age is ${userAge} and is between 51 and up`)
        myKungFu = 2
    }
    //Birth Month
    if(userMonth >=1 && userMonth <= 6) {
        console.log(`User was born between months 1 and 6`)
        myOther = 1
    }
    if(userMonth >=7 && userMonth <= 12) {
        console.log(`User was born between months 7 and 12`)
        myOther = 2
    }
    //Tools
    if(userTools === 'sword') {
        console.log(`You've chosen the ${userTools}`)
        myOther = -1
    }
    if(userTools === 'shield') {
        console.log(`You've chosen the ${userTools}`)
        myOther = -1
    }
    if(userTools === 'book') {
        console.log(`You've chosen the ${userTools}`)
        myOther = -1
    }
    //Starter
    if(userStarter === 'Charmander') {
        console.log(`${userStarter} I choose you!`)
        myMyth = 1;
    }
    if(userStarter === 'Squirtle') {
        console.log(`${userStarter} I choose you!`)
        myMyth = 2;
    }
    if(userStarter === 'Bulbasaur') {
        console.log(`${userStarter} `)
        myMyth = 3
    }
    //Final Result
    processResults(myAdj, myKungFu, myMyth, myOther);
}
function processResults(myAdj, myKungFu, myMyth, myOther) {
    console.log(`Adjective: ${myAdj} KungFu: ${myKungFu} Myth: ${myMyth} Other: ${myOther}`);
    if(myAdj === 1) {
        let min = Math.ceil(0);
        let max = Math.floor(4);
        let res = Math.floor(Math.random() * (max - min + 1)) + min;
        finalAdj = adjectives[res];
        console.log(finalAdj);
    }
    if(myAdj === 2) {
        let min = Math.ceil(5);
        let max = Math.floor(9);
        let res = Math.floor(Math.random() * (max - min + 1)) + min;
        finalAdj = adjectives[res];
        console.log(finalAdj);
    }
    if(myKungFu === 1) {
        let min = Math.ceil(0);
        let max = Math.floor(4);
        let res = Math.floor(Math.random() * (max - min + 1)) + min;
        finalKung = kungFu[res];
        console.log(finalKung);
    }
    if(myKungFu === 2) {
        let min = Math.ceil(5);
        let max = Math.floor(9);
        let res = Math.floor(Math.random() * (max - min + 1)) + min;
        finalKung = kungFu[res];
        console.log(finalKung);
    }
    if((myOther + myKungFu) < 0) {
        finalOther = '';
    }
    if((myOther + myKungFu) > 0) {
        let min = Math.ceil(5);
        let max = Math.floor(9);
        let res = Math.floor(Math.random() * (max - min + 1)) + min;
        finalOther = otherStuff[res];
        console.log(finalOther);
    }
    if(myMyth === 1) {
        let min = Math.ceil(0);
        let max = Math.floor(4);
        let res = Math.floor(Math.random() * (max - min + 1)) + min;
        finalMyth = otherStuff[res];
        console.log(finalMyth);
    }
    if(myMyth === 2) {
        let min = Math.ceil(5);
        let max = Math.floor(9);
        let res = Math.floor(Math.random() * (max - min + 1)) + min;
        finalMyth = kungFu[res];
        console.log(finalMyth);
    }
    if(myMyth === 3) {
        let min = Math.ceil(0);
        let max = Math.floor(9);
        let res = Math.floor(Math.random() * (max - min + 1)) + min;
        finalMyth = mythology[res];
        console.log(finalMyth);
    }
    printResults(finalAdj, finalKung, finalMyth, finalOther);
}

function printResults(finalAdj, finalKung, finalMyth, finalOther) {
    let min = Math.ceil(0);
    let max = Math.floor(9);
    let res = Math.floor(Math.random() * (max - min + 1)) + min;
    if(res >= 0) {
        finalResult = `${finalAdj} ${finalKung} ${finalMyth} ${finalOther}`;
        output.innerText = `Your Wu-Tang Name Is: ${finalResult}`;
    }
    if(res >=1 || res <= 5) {
        finalResult = `${finalOther} ${finalMyth} ${finalKung} ${finalAdj}`;
        output.innerText = `Your Wu-Tang Name Is: ${finalResult}`;
    }
    if(res >=6 || res <= 10) {
        finalResult = `${finalAdj} ${finalKung} ${finalMyth}`;
        output.innerText = `Your Wu-Tang Name Is: ${finalResult}`;
    }
    //console.log(`You are ${finalResult}`);
}