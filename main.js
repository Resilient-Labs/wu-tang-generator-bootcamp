// event listener for button
document.querySelector('button').addEventListener('click', getName)

function getName(){
    //query selectors for each value
    const answerOne = Number(document.querySelector('#favColor').value)
    const answerTwo = Number(document.querySelector('#favPet').value)
    const answerThree = Number(document.querySelector('#favDisney').value)
    const answerFour = Number(document.querySelector('#favPlace').value)
    const answerFive = Number(document.querySelector('#favFood').value)

    //variables to add each values
    let indfirstNameObj = answerOne + answerTwo
    let indsecondNameObj = answerThree + answerFour + answerFive


    let firstNames = ['Little', 'Dippy', 'Cool', 'Deputy','Captain', 'Goofy','Silly', 'Whopper', 'Marble', 'Macdonald', 'Banjo', 'Fluffy', 'Peanut', 'Spunky', 'Yippie', 'Astro', 'Bingo', 'Domino']
    let secondNames = ['Berrybee', 'Banana', 'Googlehuckle',, 'Dizzy', 'Sir', 'Merryweather', 'Hulanugget', 'Pumpkinton', 'Wrinklehoffer']

    let firstName = firstNames[indfirstNameObj]
    let lastName = secondNames[indsecondNameObj]

    document.querySelector('#result').innerText = `${firstName} ${lastName}`

}

