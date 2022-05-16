document.querySelector("button").addEventListener("click", genName);

function genName() {
  const ansOne = Number(document.querySelector("#faveProg").value);
  const ansTwo = Number(document.querySelector("#birth-month").value);
  const ansThree = Number(document.querySelector("#faveAnimal").value);
  const ansFour = Number(document.querySelector("#faveMetro").value);
  const ansFive = Number(document.querySelector("#faveMusic").value);

  console.log(ansOne, ansTwo);
  let indFirstNameObj = ansOne + ansTwo;
  console.log(indFirstNameObj);
  let indSecondNameObj = ansThree + ansFour + ansFive;
  console.log(indSecondNameObj);
  let firstNamesObj = [
    "Diggity",
    "Clobbered",
    "Clumsy",
    "Cutesy-poo",
    "Wishy-Washy",
  ];
  let secondNamesObj = [
    "Gizmo",
    "Clown",
    "Boogeyman",
    "Search Warrant",
    "Carousel",
    "Gargoyle",
    "Garbage",
  ];
  let firstName = firstNamesObj[indFirstNameObj];
  let secondName = secondNamesObj[indSecondNameObj];

  if (firstName == undefined || secondName == undefined) {
    console.log("hi");
    document.querySelector("#result").innerText =
      "Please Answer All Questions.";
  } else {
    document.querySelector(
      "#result"
    ).innerText = ` What's good, ${firstName}  ${secondName}?`;
  }
}
