document.querySelector("button").addEventListener('click', () => {

    let arrFirstName = ['Master', 'Commander', 'Beggar', 'Destroyer', 'lord', 'judge', 'Demon', 'Ambassador']
    let arrSecondName = ['Fearless', 'Arrogant', 'Sympathetic', 'Stinky', 'Small', 'Lazy-Assed', 'Ungrateful', 'Tall']

    // Get value from the select html element
    let colorValue = document.querySelector("#colors").value
    let showValue = document.querySelector("#show").value
    let destinationValue = document.querySelector("#destination").value
    let movieValue = document.querySelector("#movie").value
    let animalValue = document.querySelector("#animal").value


    let numberOne = Number(colorValue) + Number(showValue)
    let numberTwo = Number(destinationValue) + Number(movieValue) + Number(animalValue)

    // Make sure numberTwo does not go over 7. Because we only have 8 elements in our  arrSecondName
    if(numberOne > 7) {
        numberTwo = Math.floor(numberTwo / 2)
    }
    if(numberTwo > 7) {
        numberTwo = Math.floor(numberTwo / 2)
    }

    document.querySelector("#placeName").innerText = `${arrFirstName[numberOne]} ${arrSecondName[numberTwo]}`

})