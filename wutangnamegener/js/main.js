function generateName(event) {
    event.preventDefault()
    const names = [
        ["Ruby", "Bloodthirsty", "Killer", "Ruthless", "Menacing"],
        [" The Silent", "Venomous", "The Lethal", "Deadly", "Da Savage"],
        ["Innovative", "Intellectual", "Achieving", "Enterprising", "Surviving"],
        ["MC", "Gambino", "Cool Cat", "Raver", "Clubber"],
        ["Bostonite", "Tokyoite", "Parisian", "Carioca", "Samurai"]
    ];

    const q1 = document.querySelector('input[name="question1"]:checked').value;
    const q2 = document.querySelector('input[name="question2"]:checked').value;
    // const q3 = document.querySelector('input[name="question3"]:checked').value;
    // const q4 = document.querySelector('input[name="question4"]:checked').value;
    // const q5 = document.querySelector('input[name="question5"]:checked').value;

    const name =
        names[q1][Math.floor(Math.random() * 3)] +
        " " +
        names[q2][Math.floor(Math.random() * 5)];
    console.log(name)

    document.querySelector('h2').innerText = name;

}

document.querySelector("button").addEventListener("click", generateName)




