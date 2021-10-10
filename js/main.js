let p = document.querySelector('p')
document.querySelector('button').addEventListener('click', getWutangName)

function getWutangName(){
    // get value from q1 - q5
    let borough = document.querySelector('#borough-select').value
    let bagel = document.querySelector('#bagel-select').value
    let mta = document.querySelector('#mta-select').value
    let time = document.querySelector('#time-select').value
    let drink = document.querySelector('#drink-select').value

    // add points depending on which choice. lowest: 0 highest: 26
    let sum = Number(borough) + Number(bagel) + Number(mta) + Number(time) + Number(drink)

    console.log(sum)
    
    // 10 first and last names
    let firstNames = ["Omnimu", "Nudrule", "Milni", "Dhedalzi", "Sathruc", "Zuthurn", "Cefridi", "Ebsiro", "Birdrah", "Ghounel", "Amnuri"]
    let lastNames = ["Kobunvri", "Tangiemosh", "Phrasric", "Gebunvraeh", "Dhurthigush", "Bhaeguma", "Wosruc", "Umiestre", "Bushreer", "Thinidriat", "Khraerdan"]

    random(sum) // highest: 31

    let num = Math.floor(sum / 3)

    p.innerText = `${firstNames[num]} ${lastNames[num]}`
}

function random(sum){
    sum += Math.floor(Math.random() * 2) // either 0, 1
    return sum
}