document.querySelector('button').addEventListener('click', generateName)

function generateName() {
    const answerOne = Number(document.querySelector('#chicken').value)
    const answerTwo = Number(document.querySelector('#sport').value)
    const answerThree = Number(document.querySelector('#car').value)
    const answerFour = Number(document.querySelector('#anime').value)
    const answerFive = Number(document.querySelector('#date').value)


    console.log(answerOne, answerTwo, answerThree, answerFour, answerFive)
    let FirstNameFormula = answerOne + answerTwo
    let LastNameFormula = answerThree + answerFour + answerFive
    let FirstNameArr = [
        'Bossman',
        'No Nail',
        'Surgical',
        'Lawd',
        'Brown Suga',
        'Oldhead',
    ]

    let LastNameArr = [
        'Slim',
        'Pusha',
        'Arguer',
        'Loverr',
        'Phar-O',
        'Kidd',
    ]

    let FirstName = FirstNameArr[FirstNameFormula]
    let LastName = LastNameArr[LastNameFormula]


    document.querySelector("#name").innerText = `${FirstName}  ${LastName}`

}