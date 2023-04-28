const button = document
  .querySelector(".button")
  .addEventListener("click", submitResults);
const wuName = document.querySelector("#newName");

let vowels = "aeiouy";
let oldName = [];
let vowelPoints = 0;
let constPoints = 0;
let age = 0;
let snakeMeal = [];
let stretchResults = [];
let gptResults = [];
let spiceResults = 0;
let firstWuNamePoints = 0;
let lastWuNamePoints = 0;
function submitResults() {
  oldName = document.querySelector("#name").value.toLowerCase().split("");
  oldName.forEach((letter) => {
    if (vowels.includes(letter)) {
      vowelPoints += 1;
    } else if (letter.includes(" ")) {
      constPoints -= 0.5;
    } else {
      constPoints += 0.5;
    }
  });
  age = document.querySelector("#q1").value / 2;
  vowelPoints += age / 2;
  constPoints += age / 2;

  snakeMeal = document.querySelector("#q2").value.toLowerCase().split("");
  snakeMeal.forEach((letter) => {
    if (vowels.includes(letter)) {
      vowelPoints += 1;
    } else if (letter.includes(" ")) {
      constPoints -= 0.5;
    } else {
      constPoints += 0.5;
    }
  });
  stretchResults = document.querySelector("#q3").value.toLowerCase().split("");
  stretchResults.forEach((letter) => {
    if (vowels.includes(letter)) {
      vowelPoints += 1;
    } else if (letter.includes(" ")) {
      constPoints -= 0.5;
    } else {
      constPoints += 0.5;
    }
  });
  gptResults = document.querySelector("#q4").value.toLowerCase().split("");
  gptResults.forEach((letter) => {
    if (vowels.includes(letter)) {
      vowelPoints += 1;
    } else if (letter.includes(" ")) {
      constPoints -= 0.5;
    } else {
      constPoints += 0.5;
    }
  });
  spiceResults = document.querySelector("#q5").value;
  if (spiceResults < 4) {
    constPoints += 1;
  } else if (spiceResults <= 9 && spiceResults >= 4) {
    constPoints += 2;
  } else if (spiceResults === 10) {
    vowelPoints += 2;
  }
  console.log(vowelPoints);
  console.log(constPoints);
  console.log(age);

  firstWuNamePoints = Math.round(vowelPoints / 2);
  lastWuNamePoints = Math.round(constPoints / 2);

  if (firstWuNamePoints > 15) {
    firstWuNamePoints = Math.round(vowelPoints / 3);
    if (firstWuNamePoints > 15) {
      firstWuNamePoints = firstWuNamePoints / 2;
    }
  }

  generator();
}

function generator() {
  let url = `/wutang?generate=${firstWuNamePoints}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      wuName.innerText = data.firstWuName;
    });
}
