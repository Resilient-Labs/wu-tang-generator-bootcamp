document.querySelector("button").addEventListener("click", givName);

function givName() {
    const ansOne = Number(document.querySelector("#color-select").value);
    const ansTwo = Number(document.querySelector("#bootcamp-select").value);
    const ansThree = Number(document.querySelector("#pet-select").value);
    const ansFour = Number(document.querySelector("#meal-select").value);
    const ansFive = Number(document.querySelector("#sport-select").value);


    console.log(ansOne, ansTwo, ansThree, ansFour, ansFive)
    let indFirstNameobj = ansOne + ansTwo;
    let indSecondNameobj = ansThree + ansFour + ansFive;
    let FirstNameobj = [
        "ssaylI",
        "ramO",
        "nailuJ",
        "lliW",
        "ylleK",
        "xelA",
        

    ];

    let SecondNameobj = [
        "Docanto",
        "Rosa",
        "Hattal",
        "Daoud",
        "Castanos",
        "Sanchez",
        

    ];

    let FirstName = FirstNameobj[indFirstNameobj]
    let SecondName = SecondNameobj[indSecondNameobj]


    document.querySelector("#yerrr").innerText = `${FirstName}  ${SecondName}`;


}