document.querySelector('button').addEventListener('click', generateName)

function generateName() {
    let firstNameArr = [
        'Mad',
        'Killah',
        'Shaolin',
        'Tha',
        'Dirty',
        'Masta'
    ]

    let secondNameArr = [
        'Bandit',
        'Disciple',
        'Sweet Tooth',
        'Assassin',
        'Monk',
        'Menace'
    ]


    let inputOne = document.querySelector('#q1').value
    let inputTwo = document.querySelector('#q2').value
    let inputThree = document.querySelector('#q3').value
    let inputFour = document.querySelector('#q4').value
    let inputFive = document.querySelector('#q5').value

    let numOne = Number(inputOne) + Number(inputTwo)
    let numTwo = Number(inputThree) + Number(inputFour) + Number(inputFive)
   
    // console.log(numOne)
    // console.log(numTwo)

    //if statements to ensure the index does not surpass 5
    //first array
    if(numOne > 5) {
        numOne = Math.floor(numOne / 2)
    } 

    //second array
    if(numTwo > 5) {
        numTwo = Math.floor(numTwo / 2)
    } 

    let firstName = firstNameArr[numOne]
    let lastName = secondNameArr[numTwo]

    let finalName = `${firstName} ${lastName}`
    document.querySelector('h3').innerText = finalName
    console.log(numTwo)

}