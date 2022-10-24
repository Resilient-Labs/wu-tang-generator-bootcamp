// Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey
// questions and based on those answers randomly generate their name. The name
// doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino
// (who actually got his name from a Wu-Tang name generator).

//what's your go to food spot?
// 1. bodega    2. pizza shop   3. bagel shop
// fill in the blank: could you lend a brotha a _____?
// 1. salami    2. pencil   3. aux cord?
// what rules everything around you?
// 1. pizza     2. timbs    3. ${cash}
// what animal do you envision with your 3rd eye?
// 1. grasshopper   2. tiger    3. panda
// what did you want to be when you grew up?
// 1. ninja     2. DJ       3. hypeman

document.querySelector('button').addEventListener('click', getName)

function getName(){
    let q1 = document.querySelector('#food-choice').value
    let q2 = document.querySelector('#lend-choice').value
    let q3 = document.querySelector('#cream-choice').value
    let q4 = document.querySelector('#animal-choice').value
    let q5 = document.querySelector('#job-choice').value
    let sum = Number(q1) + Number(q2) + Number(q3) + Number(q4) + Number(q5)

    function random(sum){
        sum += Math.floor(Math.random() * 2)
        return sum
    }
    console.log(random(sum))

    let i = Math.floor(sum / 3)

    firstName = [
        'Old Dirty',
        'Grym',
        'Ressurected',
        'Dusty A$$',
        'Loud Masta',
        'DJ',
        'The Fresh'
    ]

    lastName = [
        'Pizza Man',
        'Yung Chef',
        'Milk Man',
        'Timbs',
        'Mozzarellah',
        'Lil Grasshoppa',
        'Deli Meats'
    ]

    let result = document.querySelector('#result')
    result.innerText = `${firstName[i]} ${lastName[i]}`

}

