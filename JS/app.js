const btn = document.querySelector('button').addEventListener('click', getWuTangName)
//function that will genertate wu tang name
function getWuTangName(){

    //list of possible first names of Wu Tang Name, I got this list from a repository on github
    const adjectives = [
        "Arrogant",
        "Amateur",
        "Amazing",
        "Annoyin",
        "B-loved",
        "Bittah",
        "Crazy",
        "Drunken",
        "Dynamic",
        "E-ratic",
        "Fearless",
        "Foolish",
        "Gentlemen",
        "Insane",
        "Intellectual",
        "Irate",
        "Lazy-assed",
        "Lucky",
        "Mad",
        "Master",
        "Midnight",
        "Mighty",
        "Misunderstood",
        "Pesty",
        "Phantom",
        "Profound",
        "Quiet",
        "Respected",
        "Ruff",
        "Sarkastik",
        "Scratchin",
        "Shriekin",
        "Smilin",
        "Tha",
        "Thunderous",
        "Tuff",
        "Unlucky",
        "Violent",
        "Vizual",
        "Vulgar",
        "Wacko",
        "Wicked",
        "X-cessive",
        "X-pert",
        "Zexy"
    ]

    //To figure out the first name you have to calculate the index of the first two questions that the user choose and then get the remainder with an array length
    const queryOne = document.querySelector("#member").value
    const queryTwo = document.querySelector("#color").value
    //this change was madew when I tried to run the error through chatgpt
    const firstName = (queryOne.length + queryTwo.length) % adjectives.length
    console.log(firstName)
    //list of possible last names of Wu Tang Name, I got this list from a repository on github
    const nouns = [
        "Ambassador",
        "Artist",
        "Assassin",
        "Bandit",
        "Bastard",
        "Beggar",
        "Commander",
        "Conqueror",
        "Contender",
        "Criminal",
        "Demon",
        "Desperado",
        "Destroyer",
        "Dominator",
        "Dreamer",
        "Genius",
        "Hunter",
        "Killah",
        "Knight",
        "Leader",
        "Lover",
        "Madman",
        "Magician",
        "Mastermind",
        "Menace",
        "Mercenary",
        "Ninja",
        "Observer",
        "Overlord",
        "Professional",
        "Prophet",
        "Pupil",
        "Samurai",
        "Specialist",
        "Swami",
        "Wanderer",
        "Warrior",
        "Watcher",
        "Wizard",
        "Worlock"
    ]

    //To figure out the last name you have to calculate the index of the last three questions that the user choose and then get the remainder with an array length
    const queryThree= document.querySelector("#animal").value
    const queryFour = document.querySelector("#weapon").value
    const queryFive = document.querySelector("#weather").value
    const lastName = (queryThree.length + queryFour.length + queryFive.length) % nouns.length
    // console.log(lastName)



    //generate a name in results 
    document.querySelector('.result').innerHTML = `You are and forever more known as ${adjectives[firstName]} ${nouns[lastName]}`
}