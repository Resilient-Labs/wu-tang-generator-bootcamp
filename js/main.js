/* GOAL: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator). */

class Generator {
  // create a generator class
  // what can this generator do? run a quiz, get the next question for the quiz, generate the name based on the score from the quiz, and restart the quiz if the user wants to go again
  constructor(names) {
    // params - the generator will take in a list of names to display to the user based on their quiz results, and if the quiz is running or not to construct the object
    this.names = names;
    this.answers = [];
    // the generator has these elements that it will interact with
    this.questions = document.querySelectorAll(".q");
    this.startBtn = document.querySelector("#startBtn");
    this.submitBtn = document.querySelector("#submitBtn");
    this.main = document.querySelector("main");
    this.q1 = document.querySelector("#q1");
    this.q5 = document.querySelector("#q5");
    this.result = document.querySelector("#result");
    this.resetBtn = document.querySelector("#resetBtn");
    this.subtitle = document.querySelector("#subtitle");
  } // end of constructor

  runQuiz() {
    // method to run the quiz
    if (!this.startBtn.classList.contains("hidden") && this.main.classList.contains("hidden")) {
      // if the start button is visible, and main is hidden: hide the start button + subtitle and display main and the first question of the quiz
      this.startBtn.classList.toggle("hidden");
      this.main.classList.toggle("hidden");
      this.q1.classList.toggle("hidden");
      this.subtitle.classList.toggle("hidden");
    } else {
      // for quiz restarts, only show the first question again
      this.q1.classList.toggle("hidden");
    } // end of conditionals

    this.questions.forEach((question, i) => {
      question.addEventListener("click", (event) => {
        // adding event listeners to the questions
        if (event.target.classList.contains("choices")) {
          this.answers[i] = Number(event.target.value); // listening for a click event on the input elements and adding that value to the answers array
        } else if (event.target.classList.contains("nextBtn")) {
          this.nextQuestion(question, i); // if the user clicks on next, it will take them to the next question
        } // end of conditionals
      }); // end of adding event listeners for questions
    }); // end of questions loop
  } // end of runQuiz()

  nextQuestion(question, i) {
    // method to flip to the next question
    const radioButtons = question.querySelectorAll('.choices[type="radio"]'); // get all the choices from the question and put them into an array
    const checkedRadio = Array.from(radioButtons).find(
      (radio) => radio.checked // Check if any radio button is checked in the current question and save it to checkedRadio
    ); // end of finding checked radio buttons

    if (checkedRadio) {
      // if a radio button is checked
      question.classList.add("hidden"); // hide the current question
      const nextIndex = i + 1; // get the index of the next question
      if (nextIndex < this.questions.length) {
        // Check if there is a next question
        this.questions[nextIndex].classList.remove("hidden"); // Show the next question
      } // end of nextIndex conditionals
    } else {
      console.log("Please select an option before proceeding to the next question."); // Handle the case where no radio button is checked
    } // end of checkedRadio conditionals
  } // end of nextQuestion()

  genName() {
    // method to generate the result
    const total = this.answers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // get the total of the answers array using reduce
    // if the score is a certain number greater than or equal to five, give the user a name from the array names passed into the object (wutangNames)
    const name =
      total === 5
        ? this.names[0]
        : total === 6
        ? this.names[1]
        : total === 7
        ? this.names[2]
        : total === 8
        ? this.names[3]
        : total === 9
        ? this.names[4]
        : total === 10
        ? this.names[5]
        : total === 11
        ? this.names[6]
        : total === 12
        ? this.names[7]
        : total === 13
        ? this.names[8]
        : total === 14
        ? this.names[9]
        : this.names[10]; // end of name conditionals

    q5.classList.add("hidden"); // hide the last question
    result.classList.toggle("hidden"); // display the result
    result.innerHTML = `Your Wu-Tang Name is <span>${name}</span>`; // display the user's wu-tang name
    resetBtn.classList.toggle("hidden"); // show the restart button
  } // end of genName

  clearQuiz() {
    this.questions.forEach((question) => {
      // loop through each question and grab all the radio buttons, then clear the checked radio buttons from the previous quiz
      const radioButtons = question.querySelectorAll('.choices[type="radio"]');
      Array.from(radioButtons).forEach((radio) => (radio.checked = false));
    }); // end of questions loop
    this.answers = []; // clear the answers array

    result.innerHTML = ""; // clear the result that generated from the last quiz
    result.classList.add("hidden"); // hide the result
    resetBtn.classList.add("hidden"); // hide the reset button
  } // end of clearQuiz
} // end of generator class

// array of wu-tang themed names to pass into the generator
const wutangNames = [
  "Killah Beez",
  "Shaolin Scribe",
  "Street Sensei",
  "Cipher Supreme",
  "Midnight Marauder",
  "Shogun Assassin",
  "Liquid Dagger",
  "Mastermind Menace",
  "Rhyme Reaper",
  "Mystical Monk",
  "Emerald Fist",
];

// create a generator object using the wutangNames
const wutangGenerator = new Generator(wutangNames);

// event listener for start btn, when clicked, run runQuiz()
startBtn.addEventListener("click", () => {
  wutangGenerator.runQuiz();
});

// event listener for submit btn, when clicked, run getName()
submitBtn.addEventListener("click", () => {
  wutangGenerator.genName();
});

// event listener for the reset button, when clicked, run clearQuiz() and runQuiz()
resetBtn.addEventListener("click", () => {
  wutangGenerator.clearQuiz();
  wutangGenerator.runQuiz();
}); 