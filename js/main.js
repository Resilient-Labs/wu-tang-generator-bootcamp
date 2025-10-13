//  psuedo code
//  create class wutang
//  get all inputs, buttons, names, and event listeners
//  get values from selected options (yes or no)
//  decide first name
//  decide last name

//event listen on click
document.querySelector('#generate').addEventListener('click', getName)

function getName(){

// user inputs dom elements
  let games = document.querySelector('.games').value.toLowerCase().trim()
  let cook = document.querySelector('.cooking').value.toLowerCase().trim()
  let sing = document.querySelector('.sing').value.toLowerCase().trim()
  let instrument = document.querySelector('.instrument').value.toLowerCase().trim()
  let life = document.querySelector('.life').value.toLowerCase().trim()

// name variables stored as empty strings and counter
  let firstName =  ""
  let lastName = ""

// store all user values yes or no for each question into array
  let inputArray = [games, cook, sing, instrument, life]

// random index for first name and last name generation
  let randomIndexOne = Math.round(Math.random() * 4)
  let randomIndexTwo = Math.round(Math.random() * 4)

// random names array
  let firstNameArray = ["Fang", "Inspectah", "Slice", "Jokah", "Reaper"]
  let lastNameArray = ["Mantis", "Speedy", "Slam Hustle", "Lil Uzi", "Baddie"]
// games       -> 0
// cooking     -> 1
// sing        -> 2
// instrument  -> 3
// life        -> 4

//check for # of yes
  //use of filter referenced StackOverflow: https://stackoverflow.com/questions/36366570/advanced-array-prototype-filter-with-javascript
  let yesCounter= inputArray.filter( element => element === 'yes')

// if any item is not 'yes' or 'no', set userInput = false and stop the loop
  let userInput = true;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== 'yes' && inputArray[i] !== 'no') {
      userInput = false;
      break; 
    }
  }
  console.log(userInput);

// no user input put out alert
  if (!userInput){
    alert('Please answer all questions with yes or no')
    return
  }

// decide first name based on how many times user answers yes
  if (yesCounter > 1) {
    firstName = firstNameArray[randomIndexOne];
  } else {
    const answers = [games, cook, sing, instrument, life];
    // findIndex() returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned
    // referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    const index = answers.findIndex(answer => answer === 'yes');
    if (index !== -1) {
      firstName = firstNameArray[index];
    }
  }
  lastName = lastNameArray[randomIndexTwo]
  document.querySelector('h2').textContent = `Your Wu-Tang name is ${firstName} ${lastName}`
}

//Citations:
// Referenced from StackOverflow, Mozilla, Google AI Overview, Chatgpt for syntax and debug


// OOP Style referenced from Co-Pilot Agent to study

// class WuTangNameGenerator {
//   constructor() {
//     this.games = document.querySelector('.games');
//     this.cooking = document.querySelector('.cooking');
//     this.sing = document.querySelector('.sing');
//     this.instrument = document.querySelector('.instrument');
//     this.life = document.querySelector('.life');
//     this.button = document.querySelector('#clickMe');
//     this.result = document.querySelector('h2');
//     this.firstNames = ["Fang", "Inspectah", "Slice", "Jokah", "Reaper"];
//     this.lastNames = ["Mantis", "Speedy", "Slam Hustle", "Lil Uzi", "Baddie"];
//     this.button.addEventListener('click', () => this.generateName());
// }
//   getValues() {
//     return {
//       games: this.games.value.toLowerCase().trim(),
//       cooking: this.cooking.value.toLowerCase().trim(),
//       sing: this.sing.value.toLowerCase().trim(),
//       instrument: this.instrument.value.toLowerCase().trim(),
//       life: this.life.value.toLowerCase().trim()
//     };
//   }
//   validate(values) {
//     // Check for blank answers
//     if (
//       values.games === "" ||
//       values.cooking === "" ||
//       values.sing === "" ||
//       values.instrument === "" ||
//       values.life === ""
//     ) {
//       alert("Please answer all the questions!");
//       return false;
//     }
//     for (let key in values) {
//       if (values[key] !== "yes" && values[key] !== "no") {
//         alert("Please answer only with 'yes' or 'no'.");
//         return false;
//       }
//     }
//     return true;
//   }
//   getFirstName(values) {
//     let yesCount = 0;
//     if (values.games === "yes") yesCount++;
//     if (values.cooking === "yes") yesCount++;
//     if (values.sing === "yes") yesCount++;
//     if (values.instrument === "yes") yesCount++;
//     if (values.life === "yes") yesCount++;

//     let firstName;

//     if (yesCount > 1) {
//       const randomIndex = Math.floor(Math.random() * this.firstNames.length);
//       firstName = this.firstNames[randomIndex];
//     } else {
//       if (values.instrument === "yes") {
//         firstName = this.firstNames[0];
//       } else if (values.cooking === "yes") {
//         firstName = this.firstNames[1];
//       } else if (values.games === "yes") {
//         firstName = this.firstNames[2];
//       } else if (values.sing === "yes") {
//         firstName = this.firstNames[3];
//       } else if (values.life === "yes") {
//         firstName = this.firstNames[4];
//       } else {
//         const randomIndex = Math.floor(Math.random() * this.firstNames.length);
//         firstName = this.firstNames[randomIndex];
//       }
//     }

//     return firstName;
//   }
//   getLastName() {
//     const randomIndex = Math.floor(Math.random() * this.lastNames.length);
//     return this.lastNames[randomIndex];
//   }
//   generateName() {
//     const values = this.getValues();
//     if (!this.validate(values)) {
//       return;
//     }
//     const firstName = this.getFirstName(values);
//     const lastName = this.getLastName();
//     this.result.textContent = "Your Wu-Tang name is " + firstName + " " + lastName;
//   }
// }
// document.addEventListener('DOMContentLoaded', function () {
//   new WuTangNameGenerator();
// });

