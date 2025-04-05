//button to collect answers
const button = document.getElementsByTagName('button')[0].addEventListener('click', wuTangGen)
const wuTangName = document.getElementsByClassName('wu-TangName')[0]

const wordAssociations = {
    color: {
        red: ['Crimson', 'Scarlet', 'Ruby'],
        blue: ['Azure', 'Cobalt', 'Navy'],
        pink: ['Rose', 'Blush', 'Fuchsia'],
        green: ['Emerald', 'Jade', 'Olive']
    },
    food: {
        mexican: ['Titan', 'Ninja', 'Baron'],
        ethiopian: ['Injera', 'Sage', 'kejelcha'],
        italian: ['Prince', 'Paladin', 'Rogue'],
        greek: ['Gladiator', 'Slayer', 'Oracle']
    },
    season: {
        summer: ['Samurai', 'Hero', 'Solar'],
        winter: ['Frostbite', 'Chill', 'Snowfall'],
        autumn: ['Hunter', 'Crisp', 'Leaf'],
        spring: ['Bloom', 'Floral', 'Spirit']
    },
    animal: {
        tiger: ['Tamer', 'Feline', 'bold'],
        crow: ['Clever', 'Shadow', 'Blackbird'],
        elephant: ['Wise', 'Mighty', 'Titan'],
        dog: ['Defender', 'Commander', 'king']
    },
    era: {
        ancient: ['Sphinx', 'Oracle', 'Pharaoh'],
        medieval: ['Knight', 'Dame', 'Bard'],
        renaissance: ['Visionary', 'Savant', 'Prodigy'],
        modern: ['Maverick', 'Innovator', 'Guru']
    }
};



function wuTangGen(){
    const color = document.querySelector('input[name="color"]:checked').value
    const food = document.querySelector('input[name="food"]:checked').value
    const season = document.querySelector('input[name="season"]:checked').value
    const animal = document.querySelector('input[name="animal"]:checked').value
    const era = document.querySelector('input[name="era"]:checked').value
    console.log(color,food,season,animal,era)

    
    function getRandomWord(category, choice){
        const words = wordAssociations[category][choice]
        const rng = Math.floor(Math.random() * words.length)
        return words[rng]
    }
    
    let colorVal = getRandomWord('color',color)
    let foodVal = getRandomWord('food', food)
    let seasonVal = getRandomWord('season', season)
    let animalVal = getRandomWord('animal', animal) 
    let eraVal = getRandomWord('era', era)

    let answers = [colorVal,foodVal,seasonVal,animalVal,eraVal]

    let x = Math.floor(Math.random() * answers.length)
    answers.splice(x,1)
    let y = Math.floor(Math.random() * answers.length)


    const result = `Your Wu-Tang name is a ${answers[x]} ${answers[y]}`
    wuTangName.innerText = result

    console.log(result)
   
}