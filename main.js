const firstName = ['Amateur', 'Shriekin`', 'Lucky', 'Phantom', 'Smilin`', 'Thunderous', 'Tuff', 'Scratchin`', 'Drunken', 'X-cessive', 'X-pert', 'Zexy', 'Ruff', 'Intellectual', 'Unlucky', 'Vizual', 'Foolish', 'Midnight', 'Mighty', 'Violent', 'Vulgar', 'Crazy', 'Annoyin`', 'Arrogant', 'B-loved', 'Sarkastik', 'Insane', 'Irate', 'Wicked', 'Lazy-assed', 'Amazing']
const secondName= ['Swami', 'Wanderer', 'Assassin', 'Bandit', 'Leader', 'Ambassador', 'Warrior', 'Menace', 'Worlock', 'Conqueror', 'Lover', 'Magician', 'Desperado', 'Specialist', 'Mercenary', 'Ninja', 'Contender', 'Mastermind', 'Demon', 'Watcher', 'Destroyer', 'Beggar', 'Commander', 'Dominator', 'Overlord', 'Samurai', 'Knight', 'Pupil', 'Prophet', 'Criminal',]

document.getElementById('getName').addEventListener('click', setName)
//create function 
// let getRandomName = () => `${firstName[Math.floor(Math.random() * firstName.length)]} ${firstName[Math.floor(Math.random() * firstName.length)]}`

console.log(getRandomName())



function setName() {
    //Grabbing the value of the selected input and returning that value from string to number
    let questionOne = parseInt(document.querySelector('input[name=checkboxOne]:checked').value)
    let questionTwo = parseInt(document.querySelector('input[name=checkboxTwo]:checked').value)
    let questionThree = parseInt(document.querySelector('input[name=checkboxThree]:checked').value)
    let questionFour= parseInt(document.querySelector('input[name=checkboxFour]:checked').value)
    let questioFive = parseInt(document.querySelector('input[name=checkboxFive]:checked').value)

    console.log(questionOne)
//get average of the values of each selected answer
    let averageOfNames = Math.round((questionOne+questionTwo+questionThree+questionFour+questioFive) / 5) - 1
    let randomName = document.querySelector('#randomName')
    //this assigns the average number to an index in the array above
    randomName.innerText = firstName[averageOfNames] + ' ' + secondName[averageOfNames]

}




//worked with Carter