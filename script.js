const firstNamePossibility = ['Silver', 'Platinum', 'Celestial', 'Ghost', 'Serpent', 'Cobra', 'Thunder', 'Shadow', 'Crimson', 'Silent']
const lastNamePossibility = ['Master', 'Pharaoh', 'Shadow', 'Phantom', 'Lion', 'Storm', 'Strike', 'Blaze', 'Blade', 'Dragon']

document.querySelector('.button').addEventListener('click', generateName)

function generateName() {
    let firstName = Math.floor(Math.random() * firstNamePossibility.length)
    let lastName = Math.floor(Math.random() * lastNamePossibility.length)
    document.querySelector('.result1').innerText = firstNamePossibility[firstName]
    document.querySelector('.result2').innerText = lastNamePossibility[lastName]
}