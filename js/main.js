//Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. 
// The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).

let firstNameArray = ['Quiet', 'Thunderous', 'Genius', 'Profound', 'Vizual', 'Respected', 'Bittah', 'Annoyin', 'Pesty', 'E-ratic']
let lastNameArray = ['Assassin', 'Intellectual', 'Mastermind', 'Dreamer', 'Prophet', 'Ninja', 'Wanderer', 'Ambassador', 'Samurai', 'Knight']

document.querySelector('button').addEventListener('click', newName)

function newName(){
    let color = document.getElementById('color').value
    let shape = document.getElementById('shape').value
    let destination = document.getElementById('destination').value
    let artist = document.getElementById('artist').value
    let song = document.getElementById('song').value
    
    let firstNameIndex = Number(color) + Number(shape) + Number(destination) + Number(artist) + Number(song)

    let lastNameIndex = Number(color) + Number(shape) + Number(destination) + Number(artist) + Number(song)

    console.log(firstNameArray[firstNameIndex] + lastNameArray[lastNameIndex])

    document.querySelector('.wuTangName').innerText = firstNameArray[firstNameIndex] + ' ' + lastNameArray[lastNameIndex]
}