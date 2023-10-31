const firstNameArray = [
  "Methodical",
  "Childish",
  "Overlord",
  "Drunken",
  "Mayor",
  "Fearless",
  "Supreme",
  "Stinky",
  "Ghost-face",
  "Warrior",
];
const secondNameArray = [
  "Man",
  "Gambino",
  "King",
  "Master",
  "Wu",
  "Lord",
  "Playa",
  "Baller",
  "Killah",
  "Sanctity",
];

const getWu = () => {
  let i = 0;
  document.querySelectorAll("select").forEach((e) => {
    i += e.selectedIndex;
  });
  document.querySelector(
    "span"
  ).innerHTML = `${firstNameArray[i]} ${secondNameArray[i]}`;
};
document.querySelector("button").addEventListener("click", getWu);
