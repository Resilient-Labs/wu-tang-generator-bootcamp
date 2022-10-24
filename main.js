//worked with Sufyan A.


document.querySelector('.submit').addEventListener('click', getName)
document.querySelector('.reset').addEventListener('click', restart)
document.querySelector('.result')

const firstNameOne = ['Crazy','Lazy-assed', 'Annoyin’', 'Mighty', 'Ruff', 'Tuff', 'E-ratic', 'Respected', 'Bittah', 'Fearless', 'Unlucky', 'Master','Foolish','B-loved']
const lastNameOne = ['Thighs', 'Ninja', 'Beggar', 'Criminal', 'Mastermind', 'Madman', 'Bandit', 'Warlock', 'Menace', 'Demon','Leader','Wanderer','Knight','Genius','Hunter','Bastard' ]
const firstNameTwo = ['Crazy','Lazy-assed', 'Annoyin’', 'Mighty', 'Ruff', 'Tuff', 'E-ratic', 'Respected', 'Bittah', 'Fearless', 'Unlucky', 'Master','Foolish','B-loved']
const lastNameTwo = ['Thighs', 'Ninja', 'Beggar', 'Criminal', 'Mastermind', 'Madman', 'Bandit', 'Warlock', 'Menace', 'Demon','Leader','Wanderer','Knight','Genius','Hunter','Bastard' ]
const firstNameThree = ['Crazy','Lazy-assed', 'Annoyin’', 'Mighty', 'Ruff', 'Tuff', 'E-ratic', 'Respected', 'Bittah', 'Fearless', 'Unlucky', 'Master','Foolish','B-loved']
const lastNameThree = ['Thighs', 'Ninja', 'Beggar', 'Criminal', 'Mastermind', 'Madman', 'Bandit', 'Warlock', 'Menace', 'Demon','Leader','Wanderer','Knight','Genius','Hunter','Bastard' ]
let randomFirstOne = Math.floor(Math.random() * firstNameOne.length)
let randomLastOne = Math.floor(Math.random() * lastNameOne.length)
let randomFirstTwo = Math.floor(Math.random() * firstNameTwo.length)
let randomLastTwo = Math.floor(Math.random() * lastNameTwo.length)
let randomFirstThree = Math.floor(Math.random() * firstNameThree.length)
let randomLastThree = Math.floor(Math.random() * lastNameThree.length)

let randomNumberOne = Math.round(Math.random() * firstNameOne.length)
let randomNumberLastOne = Math.round(Math.random() * lastNameOne.length)
let randomNumberTwo = Math.round(Math.random() * firstNameTwo.length)
let randomNumberLastTwo = Math.round(Math.random() * lastNameTwo.length)
let randomNumberThree = Math.round(Math.random() * firstNameThree.length)
let randomNumberLastThree = Math.round(Math.random() * lastNameThree.length)


//https://www.youtube.com/watch?v=0V2Mi16xd04

function nameChoice (array) {
    const object = {}
    array.forEach(strings => {
        //for each choice (A,B,C)
        //if value doesnt have a key on the object, then create one and set it to 1
        if (!object[strings]) {
            object[strings] = 1
        } else {
            object[strings] += 1
        }
    })

    let highValue = 0
    let valueKey = -Infinity

    for(let key in object) {
        let value = object[key]
        if (value > highValue) {
            highValue = value
            valueKey = key 
        }
    }
    return String(valueKey)
}


//this will show the user their name
function getName() {
   let one = document.querySelector('input[name="qOne"]:checked').value
   let two = document.querySelector('input[name="qTwo"]:checked').value
   let three = document.querySelector('input[name="qThree"]:checked').value
   let four =  document.querySelector('input[name="qFour"]:checked').value
   let five = document.querySelector('input[name="qFive"]:checked').value
   let inputs = document.querySelectorAll('input')
   inputs.forEach(input => input.checked= false)
   let names = [one, two, three, four, five]
   let choice = nameChoice(names)
   
    if (choice === 'a') {
    document.querySelector('#result').innerText =(`${firstNameOne[randomNumberOne]} ${lastNameOne[randomNumberOne]}`)
        } else if (choice === 'b') {
            document.querySelector('#result').innerText = (`${firstNameTwo[randomNumberTwo]} ${lastNameTwo[randomNumberLastTwo]}`)
     
        } else if (choice === 'c') {
            document.querySelector('#result').innerText = (`${firstNameThree[randomNumberThree]} ${lastNameThree[randomNumberLastThree]}`)
        } 
  
    }    
    
    function restart () {
        window.location.reload()
    }