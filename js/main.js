/*

GOAL: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).

0. The user selects from 3 answers per survey question (5 questions = 15 answer combinations total)
0. Count up the points that each answer is worth as the user selects them (total += userAnswer2)
0. (Already have the group lists created) and determine what group the user belongs to based on their final score
Range: 5-29
- Group 1 (5-10): Name List 1 (At least 10): Gentleman, Arrogant, Pupil, Shriekin', Wizard, Foolish, Wicked, Vizual, Lazy-assed, Insane = DONE
- Group 2 (11-15): Name List 2 (At least 10): Lover, Bastard, Swami, Prohpet, X-cessive, Professional, Dominator, Phantom, Killah, Mercenary = DONE
- Group 3 (16-20): Name List 3 (At least 10): Amateur, Ambassador, Misunderstood, Desperado, Leader, Wacko, Mad, Tha, Scratchin', B-loved = DONE
- Group 4 (21-29): Name List 4 (At least 10): Watcher, Respected, Lucky, Pesty, Destroyer, Intellectual, Commander, Dynamic, Artist, Crazy = DONE

0. Randomize the names from each group twice for the final generated name and add into variable as a string
0. Display the name!


*/

// Catch all of the user's answer total
// let zodiacAnswer = 0
// let seasonAnswer = 0
// let colorAnswer = 0
// let emojiAnswer = 0
// let mindsetAnswer = 0



// Listen for clicks on all of the zodiac sign radio buttons
/*Used the following as a resource: https://www.javatpoint.com/how-to-check-a-radio-button-using-javascript*/

// document.querySelector('input[name="zodiac-sign"]').addEventListener('click', getZodiacAnswer)
document.getElementById('survey').addEventListener('click', calcAnswers)

function calcAnswers() {

    // CONDITIONAL ONLY WORKS FOR ONE OPTION
    // if(document.getElementById('aries').checked == true) {   
    //     zodiacAnswer = 1
    //     console.log(zodiacAnswer)
    // } else if (document.getElementById('taurus').checked == true){
    //     zodiacAnswer = 2
    //     console.log(zodiacAnswer)
    //     console.log("Zodiac function works!")
    // } else {
    //     console.log("AHH")
    // }

    const form = document.getElementById('survey');
    let totalPoints = 0;

    console.log("click worked")

    if (form['zodiac-sign'].value === "1") {
        totalPoints += 1; // Aries
    } else if (form['zodiac-sign'].value === "2") {
        totalPoints += 2; // Taurus
    } else if (form['zodiac-sign'].value === "3") {
        totalPoints += 3; // Gemini
    } else if (form['zodiac-sign'].value === "4") {
        totalPoints += 4;
    } else if (form['zodiac-sign'].value === "5") {
        totalPoints += 5;
    } else if (form['zodiac-sign'].value === "6") {
        totalPoints += 6;
    } else if (form['zodiac-sign'].value === "7") {
        totalPoints += 7;
    } else if (form['zodiac-sign'].value === "8") {
        totalPoints += 8;
    } else if (form['zodiac-sign'].value === "9") {
        totalPoints += 9;
    } else if (form['zodiac-sign'].value === "10") {
        totalPoints += 10;
    } else if (form['zodiac-sign'].value === "11") {
        totalPoints += 11;
    } else if (form['zodiac-sign'].value === "12") {
        totalPoints += 12;
    }
    // } else {
    //     console.log("stop playing there's no other values hmph")
    // }

    if (form['season'].value === "1") {
        totalPoints += 1; 
    } else if (form['season'].value === "2") {
        totalPoints += 2; 
    } else if (form['season'].value === "3") {
        totalPoints += 3; 
    } else if (form['season'].value === "4") {
        totalPoints += 4;
    }

    if (form['color'].value === "1") {
        totalPoints += 1;
    } else if (form['color'].value === "2") {
        totalPoints += 2;
    } else if (form['color'].value === "3") {
        totalPoints += 3;
    } else if (form['color'].value === "4") {
        totalPoints += 4;
    } else if (form['color'].value === "5") {
        totalPoints += 5;
    } else if (form['color'].value === "6") {
        totalPoints += 6;
    } else if (form['color'].value === "7") {
        totalPoints += 7;
    }

    if (form['emoji'].value === "1") {
        totalPoints += 1; 
    } else if (form['emoji'].value === "2") {
        totalPoints += 2; 
    } else if (form['emoji'].value === "3") {
        totalPoints += 3; 
    } else if (form['emoji'].value === "4") {
        totalPoints += 4;
    }

    if (form['mindset'].value === "1") {
        totalPoints += 1; 
    } else if (form['mindset'].value === "2") {
        totalPoints += 2; 
    }

    console.log(totalPoints)

    // function makeGlobal() {
    //     let finalNumber = totalPoints;
    //     return finalNumber;
    //   }

    // return makeGlobal()

    // return totalPoints




    // DETERMINE WHICH GROUP TO CHOOSE THE NAMES FROM BASED ON TOTAL POINTS EARNED
    if (totalPoints > 4 && totalPoints < 11) {
        groupOne()
        console.log("Group 1")
    } else if (totalPoints > 10 && totalPoints < 16) {
        groupTwo()
        console.log("Group 2")
    } else if (totalPoints > 15 && totalPoints < 21) {
        groupThree()
        console.log("Group 3")
    } else if (totalPoints > 20 && totalPoints < 30) {
        groupFour()
        console.log("Group 4")
    }

    function groupOne() {
        // Group 1 (5-10): Name List 1 (At least 10): Gentleman, Arrogant, Pupil, Shriekin', Wizard, Foolish, Wicked, Vizual, Lazy-assed, Insane = DONE
        let listOfNames = [
            'Gentleman',
            'Arrogant',
            'Pupil',
            'Shriekin',
            'Wizard',
            'Foolish',
            'Wicked',
            'Vizual',
            'Lazy-assed',
            'Insane'
        ];
    
        // Generates a random index from the list of names above
        const randomIndex1 = Math.floor(Math.random() * listOfNames.length); 
        const randomIndex2 = Math.floor(Math.random() * listOfNames.length);
    
        // Random names stored in variables
        firstName = listOfNames[randomIndex1]
        secondName = listOfNames[randomIndex2]
    
        // Final output
        let finalName = `${firstName} ${secondName}`
        console.log(`${firstName} ${secondName}`)

        document.getElementById('result').innerText = finalName
    }

    function groupTwo() {
        // Group 2 (11-15): Name List 2 (At least 10): Lover, Bastard, Swami, Prohpet, X-cessive, Professional, Dominator, Phantom, Killah, Mercenary = DONE
        let listOfNames = [
            'Lover',
            'Bastard',
            'Swamni',
            'Prophet',
            'X-cessive',
            'Professional',
            'Dominator',
            'Phantom',
            'Killah',
            'Mercenary'
        ];
    
        // Generates a random index from the list of names above
        const randomIndex1 = Math.floor(Math.random() * listOfNames.length); 
        const randomIndex2 = Math.floor(Math.random() * listOfNames.length);
    
        // Random names stored in variables
        firstName = listOfNames[randomIndex1]
        secondName = listOfNames[randomIndex2]
    
        // Final output
        let finalName = `${firstName} ${secondName}`
        console.log(`${firstName} ${secondName}`)

        document.getElementById('result').innerText = finalName
    }

    function groupThree() {
        // Group 3 (16-20): Name List 3 (At least 10): Amateur, Ambassador, Misunderstood, Desperado, Leader, Wacko, Mad, Tha, Scratchin', B-loved = DONE
        let listOfNames = [
            'Amateur',
            'Ambassador',
            'Misunderstood',
            'Desperado',
            'Leader',
            'Wacko',
            'Mad',
            'Tha',
            'Scratchin',
            'B-love'
        ];
    
        // Generates a random index from the list of names above
        const randomIndex1 = Math.floor(Math.random() * listOfNames.length); 
        const randomIndex2 = Math.floor(Math.random() * listOfNames.length);
    
        // Random names stored in variables
        firstName = listOfNames[randomIndex1]
        secondName = listOfNames[randomIndex2]
    
        // Final output
        let finalName = `${firstName} ${secondName}`
        console.log(`${firstName} ${secondName}`)

        document.getElementById('result').innerText = finalName
    }

    function groupFour() {
        // Group 4 (21-29): Name List 4 (At least 10): Watcher, Respected, Lucky, Pesty, Destroyer, Intellectual, Commander, Dynamic, Artist, Crazy = DONE
        let listOfNames = [
            'Watcher',
            'Respected',
            'Lucky',
            'Pesty',
            'Destroyer',
            'Intellectual',
            'Commander',
            'Dynamic',
            'Artist',
            'Crazy'
        ];
    
        // Generates a random index from the list of names above
        const randomIndex1 = Math.floor(Math.random() * listOfNames.length); 
        const randomIndex2 = Math.floor(Math.random() * listOfNames.length);
    
        // Random names stored in variables
        firstName = listOfNames[randomIndex1]
        secondName = listOfNames[randomIndex2]
    
        // Final output
        let finalName = `${firstName} ${secondName}`
        console.log(`${firstName} ${secondName}`)

        document.getElementById('result').innerText = finalName
    }

    // } else {
    //     console.log("stop playing there's no other values hmph")
    // }

    // document.getElementById('result').innerText = 'Total Points: ' + totalPoints;
    // let selected = document.querySelector('input[name="zodiac-sign"]:checked')

    // if (selected != null){
    //     const aries = document.getElementById("aries");
    //     const taurus = document.getElementById("taurus");

    //     if (aries.checked) {
    //         zodiacAnswer = 1
    //     } else if (taurus.checked) {
    //         zodiacAnswer = 2
    //     } else {
    //         console.log("I need sleep")
    //     }
    // } else {
    //     console.log("AHHH")
    // }

    // if (document.getElementById('aries').checked) {
    //     console.log("aries is selected")
    //   } else if (document.getElementById('taurus').checked) {
    //     console.log("taurus is selected")
    //   } else {
    //     console.log("AHHH")
    //   }
    

    }








    // OPTION 2- Was trying to figure out how to generate the name on click, but figured out how to generate the name based on the responses, so I completed the requirements

    // let finalNumber = calcAnswers();
    // console.log(finalNumber)

    // document.getElementById('submit').addEventListener('click', getRandomName)
    
    // function getRandomName() {

    //     // let finalNumber = calcAnswers();
    //     console.log(finalNumber);

    //     if (finalNumber > 4 && finalNumber < 11) {
    //         groupOne()
    //         console.log("Group 1")
    //     }
    
    //     function groupOne() {
    //         // Group 1 (5-10): Name List 1 (At least 10): Gentleman, Arrogant, Pupil, Shriekin', Wizard, Foolish, Wicked, Vizual, Lazy-assed, Insane = DONE
    //         let listOfNames = [
    //             'Gentleman',
    //             'Arrogant',
    //             'Pupil',
    //             'Shriekin',
    //             'Wizard',
    //             'Foolish',
    //             'Wicked',
    //             'Vizual',
    //             'Lazy-assed',
    //             'Insane'
    //         ];
        
    //         // Generates a random index from the list of names above
    //         const randomIndex1 = Math.floor(Math.random() * listOfNames.length); 
    //         const randomIndex2 = Math.floor(Math.random() * listOfNames.length);
        
    //         // Random names stored in variables
    //         firstName = listOfNames[randomIndex1]
    //         secondName = listOfNames[randomIndex2]
        
    //         // Final output
    //         let finalName = `${firstName} ${secondName}`
    //         console.log(`${firstName} ${secondName}`)

    //         document.getElementById('result').innerText = finalName
    //     }
    //   };

    ///// END OF OPTION TWO





    // let zodiacAnswers = document.getElementsByName('zodiac-sign');
    // for (let answer of zodiacAnswers) {
    //     if (answer.checked) {

    //         if (answer === 'aries') {
    //             zodiacAnswer = 1
    //             console.log(zodiacAnswer)
    //         } else if (answer === 'taurus') {
    //             zodiacAnswer = 2
    //             console.log(zodiacAnswer)
    //         } else {
    //             return "blah"
    //         }
    //     } else {
    //         console.log("New zodiac answers conditional isn't working :(")
    //     }
    // }
     


// console.log(zodiacAnswer)


// Add up all of the answers into one number
// total = zodiacAnswer + seasonAnswer + colorAnswer + emojiAnswer + mindsetAnswer

// If the total is within a certain range call upon that method to generate from that specific list of names
// if (total > 4 && total < 11) {
//     groupOne()
// }








// document.querySelectorAll('input[name="zodiac"]').addEventListener('click', zodiacClick(e) ,{


//     let zodiacScore = 0,
    
//     let element = e.target,

//     console.log(element),

//     if (id == 'aries'); {
//         zodiacScore = 1
//         return 1
//     } else {
//         return 'no'
//     }

//     console.log(element)

//     return


// })