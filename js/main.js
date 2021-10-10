document.querySelector('#get').addEventListener('click', generateName)

function generateName() {
    let answerOne = document.querySelector('input[name="a1"]:checked').value
    let answerTwo = document.querySelector('input[name="a2"]:checked').value
    let answerThree = document.querySelector('input[name="a3"]:checked').value
    let answerFour = document.querySelector('input[name="a4"]:checked').value
    let answerFive = document.querySelector('input[name="a5"]:checked').value
    let firstNameArray = ["RZA", "GZA", "Method Man", "Ol’ Dirty Bastard"]
    let secondNameArray = ["Raekwon", "Ghostface Killah", "!Important One", ""]

    sumOne = Number(answerOne) + Number(answerTwo) + Number(answerThree)
    firstSelection = (sumOne - 3) % firstNameArray.length
    sumTwo = Number(answerFour) + Number(answerFive)
    secondSelection = (sumTwo - 2) % secondNameArray.length
    wuTangName = firstNameArray[firstSelection] + " " + secondNameArray[secondSelection]

    document.querySelector('.welcome').innerText = 'Welcome to the Clan, '
    document.querySelector('.result').innerText = wuTangName

   
}

// function createReset() {
//     const newButton = document.createElement('button')
//     newButton.innerText = "get another name"
//     document.body.appendChild(newButton)
// }

    // //trying to get button to refresh the page, good source:
    // https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click
