let ul_1 = document.querySelector(".options1")
let ul_2 = document.querySelector(".options2")
let ul_3 = document.querySelector(".options3")
let ul_4 = document.querySelector(".options4")
let ul_5 = document.querySelector(".options5")

let q1 = document.querySelector(".q1");
let q2 = document.querySelector(".q2");
let q3 = document.querySelector(".q3");
let q4 = document.querySelector(".q4");
let q5 = document.querySelector(".q5");

let surveryContainer = document.querySelector(".wutanger")
let nameResults = document.querySelector(".resultscreen")

let firstNames = ["Tha", "Intellectual", "Smiling", "Holly", "Gentlemen", "Ruff", "Phantom", "Aggressive", "Visual", "Wicked", "Amazing", "Golden", "Arrogant", "Lazy-Assed", "Violent", "Sarkastik", "Tuff", "Sarcastic", "Mad Mad", "Excessive", "Drunken", "Sarkastik", "Mad", "Ungrateful", "Misunderstood", "Fanatical", "Lazy-Assed", "Crazy"]
let lastNames = ["Raven", "Fist", "Watcher", "Swami", "Warrior", "Worlock", "Magician", "Lord", "Tiger Fist", "Commander", "Short Ferret", "'Crane",  "Ambassador", "Killah", "Mercenary", "Tiger", "Wolf", "Conqueror", "Genius", "Ninja", "Demon", "Bandit"]

ul_1.addEventListener('click', function() {
    q1.style.display ="none"
    q2.style.display ="block"
})

ul_2.addEventListener('click', function() {
    q2.style.display ="none"
    q3.style.display ="block"
})

ul_3.addEventListener('click', function() {
    q3.style.display ="none"
    q4.style.display ="block"
})

ul_4.addEventListener('click', function() {
    q4.style.display ="none"
    q5.style.display ="block"
})

ul_5.addEventListener('click', function() {
    q5.style.display ="none"
    surveryContainer = "none"
    nameResults.style.display ="block"
})
let randomNumber = (maxNum) => Math.floor(Math.random() * maxNum)

let randomWutangName = () => `${firstNames[randomNumber(firstNames.length)]} ${lastNames[randomNumber(lastNames.length)]}`

let settingUpButton = () => {
    document.querySelector('.result').innerText = randomWutangName();
}

// document.getElementById('button').addEventListener('click', settingUpButton)

settingUpButton();