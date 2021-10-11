document
  .querySelector("#submitAnswer")
  .addEventListener("click", nameGenerator);

let firstName = [
  "Mad",
  "Arrogant",
  "Fearless",
  "Drunken",
  "Misunderstood",
  "Foolish",
  "Fearless",
  "Lazy-assed",
  "Profound",
];
let lastName = [
  "Bandit",
  "Dreamer",
  "Magician",
  "Ninja",
  "Assasin",
  "Overlord",
  "Samurai",
  "Wizard",
  "Killah",
];

function nameGenerator() {
  let index = 0;
  document.querySelectorAll("select").forEach((e) => {
    let options = Array.from(e);
    let strUser = Number(e.options[e.selectedIndex].value);

    index += strUser;
  });

  index = Math.round(index / 5);
  console.log(index);
  document.querySelector(
    "h2"
  ).innerText = `${firstName[index]} ${lastName[index]}`;
  console.log(`${firstName[index]} ${lastName[index]}`);
}

//Contributors: House Moses- Shannon, Alexa, David, Miriam, Roxana
