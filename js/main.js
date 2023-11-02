// userWuTangName;
document.querySelector("#wuTangName").addEventListener("click", generateWuTangName);


function generateWuTangName() {

console.log(document.querySelector("#superhero"));

let selectElement = document.querySelector("#superhero")
let questionOne = parseInt(selectElement.options[selectElement.selectedIndex].value);
console.log(' Question 1: ')
console.log(questionOne)
console.log("Select Element: ");
console.log(selectElement);


let selectElementTwo = document.querySelector("#rapper");
let questionTwo = parseInt(selectElementTwo.options[selectElementTwo.selectedIndex].value);
console.log(" Question 2: ");
console.log(questionTwo);
console.log("Select Element Two: ");
console.log(selectElementTwo);

let selectElementThree = document.querySelector("#theCulture");
let questionThree = parseInt(selectElementThree.options[selectElementThree.selectedIndex].value);
console.log(" Question 3: ");
console.log(questionThree);
console.log("Select Element Three: ");
console.log(selectElementThree);

let selectElementFour = document.querySelector("#soundtrack");
let questionFour = parseInt(selectElementFour.options[selectElementFour.selectedIndex].value);
console.log(" Question 4: ");
console.log(questionFour);
console.log("Select Element Four: ");
console.log(selectElementFour);

let selectElementFive = document.querySelector("#truOrDarOption");
let questionFive = parseInt(selectElementFive.options[selectElementFive.selectedIndex].value);
console.log(" Question 5: ");
console.log(questionFive);
console.log("Select Element Five: ");
console.log(selectElementFive);

let fullName = ''
console.log('total : ')
console.log(
  questionOne + questionTwo + questionThree + questionFour + questionFive
);



let random = Math.floor(Math.random()* 2)
console.log("random : ")
console.log(random)

let options = []
switch (
  questionOne + questionTwo + questionThree + questionFour + questionFive
) {
  case 25:
    // code block
    options = ["Coo Fangz", "Master Elite"];
  
    console.log(options[random])
    fullName = options[random]
    break;
  case 26:
    // code block
    options = ["Ghos'N Tech", "Batzy Kila"];
    fullName = options[random];
    break;
  case 27:
    // code block
    options = ["Bigi Set", "Insect Ya Jetz"];
    fullName = options[random];
    break;
  case 28:
    // code block
    options = ["Cheta Getta", "Flowz Slept"];
    fullName = options[random];
    break;
  case 29:
    // code block
    options = ["Rizza Zu", "Pac Collecter"];
    fullName = options[random];
    break;
  case 30:
    // code block
    options = ["Checkz Lozah", "Dont fret"];
    fullName = options[random];
    break;
  default:  ["Wu Squaw"]
  fullName = options[random];

}

document.querySelector("#userWuTangName").innerText = fullName 

} 


