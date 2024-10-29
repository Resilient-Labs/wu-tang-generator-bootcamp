document.querySelector("#generateBtn").addEventListener("click", generateName);

// Get the input elements
const questOne = document.querySelector("#question1");
const questTwo = document.querySelector("#question2");
const questThree = document.querySelector("#question3");
const questFour = document.querySelector("#question4");
const questFive = document.querySelector("#question5");

function generateName(e) {
  e.preventDefault();

  const name = document.querySelector("#generatedName");

  // Intialize empty arrays
  const firstNameArr = [];
  const lastNameArr = [];

  // Get the values of the input elements
  const answerOne = questOne.value;
  const answerTwo = questTwo.value;
  const answerThree = questThree.value;
  const answerFour = questFour.value;
  const answerFive = questFive.value;

  // Add values to arrays using push() method
  firstNameArr.push(answerOne, answerTwo, answerThree);
  lastNameArr.push(answerFour, answerFive);

  // Randomize the elements inside of each array
  const randomFirstName =
    firstNameArr[Math.floor(Math.random() * firstNameArr.length)];
  const randomLastName =
    lastNameArr[Math.floor(Math.random()) * lastNameArr.length];

  // Display the generated name on the DOM
  name.innerText = `${randomFirstName} ${randomLastName}`;

  clearInputs();
}

function clearInputs() {
  questOne.value = "";
  questTwo.value = "";
  questThree.value = "";
  questFour.value = "";
  questFive.value = "";
}
