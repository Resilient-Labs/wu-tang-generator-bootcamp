//worked with Sufyan A.


document.querySelector('.submit').addEventListener('click', getName)
document.querySelector('.reset').addEventListener('click', restart)
document.querySelector('.result')

const firstName = ['Crazy','Lazy-assed', 'Annoyin’', 'Mighty', 'Ruff', 'Tuff', 'E-ratic', 'Respected', 'Bittah', 'Fearless', 'Unlucky', 'Master','Foolish','B-loved']
const lastName = ['Thighs', 'Ninja', 'Beggar', 'Criminal', 'Mastermind', 'Madman', 'Bandit', 'Warlock', 'Menace', 'Demon','Leader','Wanderer','Knight','Genius','Hunter','Bastard' ]
let randomFirst = Math.floor(Math.random() * firstName.length)
let randomLast = Math.floor(Math.random() * lastName.length)
let randomNumberFirst = Math.round(Math.random() * firstName.length)
let randomNumberLast = Math.round(Math.random() * lastName.length)


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
    document.querySelector('#result').innerText =(`${firstName[randomNumberFirst]} ${lastName[randomNumberLast]}`)
        } else if (choice === 'b') {
            document.querySelector('#result').innerText = (`${firstName[randomNumberFirst]} ${lastName[randomNumberLast]}`)
     
        } else if (choice === 'c') {
            document.querySelector('#result').innerText = (`${firstName[randomNumberFirst]} ${lastName[randomNumberLast]}`)
        } 
  
    }    
    
    function restart () {
        window.location.reload()
    }