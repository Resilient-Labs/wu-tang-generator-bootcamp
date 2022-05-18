document.querySelector("button").addEventListener("click", genName);

function genName() {
  const ansOne = Number(document.querySelector("#favAlbum").value);
  const ansTwo = Number(document.querySelector("#favMovie").value);
  const ansThree = Number(document.querySelector("#favRapper").value);
  const ansFour = Number(document.querySelector("#favCity").value);
  const ansFive = Number(document.querySelector("#favSneaker").value);

console.log(ansOne, ansTwo)
let indFirstNameObj = ansOne + ansTwo;
let indSecondNameObj = ansThree + ansFour + ansFive;
let firstNamesObj = [
  "Notorious",
  "Slim",
  "Flava",
  "Ghost",
  "Lil",
];
let secondNamesObj = [
  "Flav",
  "Method",
  "Scheme",
  "Thug",
  "Spooky",
  "Tang",
  "Wu",
];
let firstName = firstNamesObj[indFirstNameObj];
let secondName = secondNamesObj[indSecondNameObj];

// if ((ansOne.value == none) || (ansTwo.value == none) || (ansThree == none) || (ansFour == none) || (ansFive == none)) {
//   document.querySelector("#result").innerText =
//     "Please answer all of the questions before continuing";
// }
//^ none

  document.querySelector("#result").innerText = `${firstName}  ${secondName}`;
}

//reading and writing from dom wouldnt work for back-end
