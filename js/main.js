// Constants for DOM elements
const generateButton = document.querySelector('button');
const firstNameInput = document.querySelector('#input-1');
const lastNameInput = document.querySelector('#input-2');
const introExtroInput = document.querySelector('#input-3');
const riskOrNotInput = document.querySelector('#input-4');
const hotOrColdInput = document.querySelector('#input-5');
const firstNameOutput = document.querySelector('#firstN');
const lastNameOutput = document.querySelector('#lastN');
const introExtroOutput = document.querySelector('#introextro');

// Name data
const firstNames = [
    "Method Man", "Ghost", "Inspectah", "Master", "U-God", "Raekwon", "RZA", "GZA", "Masta", "Ol' Dirty"
];
const lastNames = [
    'Da Vinci', 'Killah Jones', 'Eagle', 'Killa Divine', 'Maximus', 'the Scientist', 'Thunderstrike', 'the Shadow', 'Disciple', 'Professor'
];
const introvertNames = [
    'Timid', 'Shy', 'Whisper', 'Quiet', 'Shadow', 'Reluctant', 'Hidden', 'Low-key', 'Silent', 'Bashful'
];
const extrovertNames = [
    'Verbal', 'Shogun', 'Electric', 'Thunder', 'Loud Liquid', 'Social', 'Social Killa', 'Supreme Shoutmaster', 'Energetic', 'Charismatic'
];
const shyRiskTaker = [
    'Quiet Gambla', 'Stealth Rebel', 'Ghost Leaper', 'Humble Warrior', 'Silent Storm', 'Shadow Riska', 'Unassuming Danger'
];
const boldNoRisk = [
    'Cautious Killah', 'Safe-T Gambino', 'Calculated Shogun', 'Protected Ruckus', 'Wise Havoc', 'Guarded Thunder', 'Secured Mayhem'
];

// Function to get a random element from an array
function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

// Function to validate input
function validateInput(inputElement, errorMessage) {
    if (inputElement.value.length === 0) {
        alert(errorMessage);
        return false;
    }
    return true;
}

// Function to generate the Wu-Tang name
function generateWuTangName() {
    if (!validateInput(firstNameInput, "Enter your first name!") || !validateInput(lastNameInput, "Enter your last name!")) {
        return;
    }

    firstNameOutput.innerText = getRandomElement(firstNames);
    lastNameOutput.innerText = getRandomElement(lastNames);

    const introExtro = introExtroInput.value;
    const riskOrNot = riskOrNotInput.value;

    let generatedName;
    if (introExtro === 'introvert' && riskOrNot === 'risk averse') {
        generatedName = getRandomElement(introvertNames);
    } else if (introExtro === 'extrovert' && riskOrNot === 'risk taker') {
        generatedName = getRandomElement(extrovertNames);
    } else if (introExtro === 'introvert' && riskOrNot === 'risk taker') {
        generatedName = getRandomElement(shyRiskTaker);
    } else if (introExtro === 'extrovert' && riskOrNot === 'risk averse') {
        generatedName = getRandomElement(boldNoRisk);
    }

    if (generatedName) {
        introExtroOutput.innerText = generatedName;
    }
}

// Event listener
generateButton.addEventListener('click', generateWuTangName);

























// //event listener
// document.querySelector('button').addEventListener('click', namesGen)





// function namesGen() {
//     //store user answers in variables
//     let firstN = document.querySelector('#input-1').value
//     let lastN = document.querySelector('#input-2').value
//     let introExtro = document.querySelector('#input-3').value
//     let riskOrNot = document.querySelector('#input-4').value
//     let hotOrCold = document.querySelector('#input-5').value
//     const randomizeAll = Math.floor(Math.random() * 20)

//     if (firstN.length > 0) {
//         let firstnames = [

//         "Method Man ",
//         "Ghost ",
//         "Inspectah ",
//         "Master ",
//         "U-God ",
//         "Raekwon ",
//         "RZA ",
//         "GZA ",
//         "Masta ",
//         "Ol' Dirty "
//         ]
       
//         const wutangFn = firstnames[randomizeAll]
//         document.querySelector('#firstN').innerText = wutangFn
//     }
//     else {
//         alert("Enter your first name!")
//     }

//     if (lastN.length > 0) {
//         const lastNames =
//             [
//     'Da Vinci',
//     'Killah Jones',
//     'Eagle',
//     'Killa Divine',
//     'Maximus',
//     'the Scientist',
//     'Thunderstrike',
//     'the Shadow',
//     'Disciple',
//     'Professor'

//         ]
//         const wutangLn = lastNames[randomizeAll]
//         document.querySelector('#lastN').innerText = wutangLn
//     }
//     else {
//       alert("Enter your last name!")  
//     }
   
//     if (introExtro === 'introvert' && riskOrNot === 'risk averse') {
//         const introvertNames = [
//     'Timid',
//     'Shy',
//     'Whisper',
//     'Quiet',
//     'Shadow',
//     'Reluctant',
//     'Hidden',
//     'Low-key',
//     'Silent',
//     'Bashful'
//         ]
    
//        const testintronames = introvertNames[randomizeAll]
//          document.querySelector('#introextro').innerText = testintronames
//     }
//     else if (introExtro === 'extrovert' && riskOrNot === 'risk taker') {
//         const extrovertNames = [
//     'Verbal',
//     'Shogun',
//     'Electric',
//     'Thunder',
//     'Loud Liquid',
//     'Social',
//     'Social Killa',
//     'Supreme Shoutmaster',
//     'Energetic',
//     'Charismatic'
//         ]
//        const testextronames = extrovertNames[randomizeAll]
//         document.querySelector('#introextro').innerText = testextronames
//     }
//     else if (introExtro === 'introvert' && riskOrNot === 'risk taker') {
//         const shyRiskTaker =
//             [
//                 'Quiet Gambla',
//                 'Stealth Rebel',
//                 'Ghost Leaper',
//                 'Humble Warrior',
//                 'Silent Storm',
//                 'Shadow Riska',
//                 'Unassuming Danger'
//             ]
//         const result2 = shyRiskTaker[randomizeAll]
//         document.querySelector('#introextro').innerText = result2 
//     }
//     else if (introExtro === 'extrovert' && riskOrNot === 'risk averse') {
//         const boldNorisk =    
//             [
//                 'Cautious Killah',
//                 'Safe-T Gambino',
//                 'Calculated Shogun',
//                 'Protected Ruckus',
//                 'Wise Havoc',
//                 'Guarded Thunder',
//                 'Secured Mayhem'
//             ]
//         const result = boldNorisk[randomizeAll]
//         document.querySelector('#introextro').innerText = result
//     }



// }


