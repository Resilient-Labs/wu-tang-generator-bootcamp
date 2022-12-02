// add event listener to button
//make array for names
let firstName = ['Bittah', 'Tha', 'Mad', 'Master', 'Dynamic', 'E-ratic', 'Wacko', 'Fearless', 'Misunderstood', 'Quiet', 'Pesty', 'Gentlemen']
// ['Profound', 'Respected', 'Amateur', 'Shriekin`', 'Lucky', 'Phantom', 'Smilin`', 'Thunderous', 'Tuff', 'Scratchin`', 'Drunken', 'X-cessive', 'X-pert', 'Zexy', 'Ruff', 'Intellectual', 'Unlucky', 'Vizual', 'Foolish', 'Midnight', 'Mighty', 'Violent', 'Vulgar', 'Crazy', 'Annoyin`', 'Arrogant', 'B-loved', 'Sarkastik', 'Insane', 'Irate', 'Wicked', 'Lazy-assed', 'Amazing']
let secondName = ['Madman', 'Sandwich', 'Chicken', 'Beef', 'Steak', 'Greg', 'Genius', 'Hunter', 'Killah', 'Professional', 'Artist', 'Dreamer']
// ['Observer', 'Bastard', 'Wizard', 'Swami', 'Wanderer', 'Assassin', 'Bandit', 'Leader', 'Ambassador', 'Warrior', 'Menace', 'Worlock', 'Conqueror', 'Lover', 'Magician', 'Desperado', 'Specialist', 'Mercenary', 'Ninja', 'Contender', 'Mastermind', 'Demon', 'Watcher', 'Destroyer', 'Beggar', 'Commander', 'Dominator', 'Overlord', 'Samurai', 'Knight', 'Pupil', 'Prophet', 'Criminal',]
document.querySelector('#generate').addEventListener('click', findWuTangName)

// make an array for the possible first and last names to get generated
// select two names from the list and present them to the user


function findWuTangName() {
    let q1 = parseInt(document.querySelector('input[name=question1]:checked').value)
    let q2 = parseInt(document.querySelector('input[name=question2]:checked').value)
    let q3 = parseInt(document.querySelector('input[name=question3]:checked').value)
    let q4 = parseInt(document.querySelector('input[name=question4]:checked').value)
    let q5 = parseInt(document.querySelector('input[name=question5]:checked').value)
    console.log(q1)
    console.log(q2)
    console.log(q3)
    console.log(q4)
    console.log(q5)

    let average = Math.round((q1 + q2 + q3 + q4 + q5) / 5) - 1
    console.log()
    let results = document.querySelector('#results')
    results.innerText = firstName[average] + ' ' + secondName[average]
}
//worked with Sarah David Ney on this function ^


const resetBtn = document.querySelector('#reset')

resetBtn.addEventListener('click', () => {
    // window.location.reload()
    let inputs = document.querySelectorAll('input')
    inputs.forEach(input => input.checked = false)
})
// had help from Jasmine M. and Sarah on this reset button ^