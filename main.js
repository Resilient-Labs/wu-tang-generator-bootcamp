//Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).

document.querySelector("#button").addEventListener("click", generateName)

function generateName(){
    let sum = 0
    const name = ['Crazy Dreamer','Arrogant Ambassador','Profound Ambassador','Irate Mastermind','Midnight Specialist','Master Bandit','Crazy Dreamer','Mighty Genius','Wacko Wanderer','Fearless Assassin','Thunderous Knight','X-pert Mercenary','Amelia','Drunken Conqueror','Arrogant Contender','Arrogant Beggar','Master Prophet','Misunderstood Wizard','X-pert Samurai','Scratchin Artist','Quiet Demon','Violent Mercenary'];
    const randomName = document.querySelector("h2")
    //randomName.innerHTML = name[Math.floor(Math.random()*name.length)];

    const first = document.querySelector("#first").value.length

    const second = document.querySelector("#second").value.length

    const third = document.querySelector("#third").value.length

    const fourth = document.querySelector("#fourth").value.length

    const fifth = document.querySelector("#fifth").value.length
    
    sum += first + second + third + fourth + fifth
    
    randomName.innerHTML = name[sum % name.length]

   
}