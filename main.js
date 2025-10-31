//completed this assignment with classmates

document.querySelector("#button").addEventListener("click", generateName);

function generateName() {
    let sum = 0;

    const names = ["Silent Shadow", "DJ Scientist", "Iron Fist", "Midnight Ninja", "Ghost Samurai",
    "Crimson Tiger", "Dark Monk", "Mighty Dragon", "Phantom Blade",
    "Thunder Assassin", "Vengeful Doc", "Shadow Bandit", "Rogue Scholar",
    "Mystic Warrior", "Cunning Phantom", "Golden Panther", "Master Alchemist",
    "Stealth Mercenary", "Fearless Robin", "X-pert Conqueror", "Broken Sage",
    "Hidden Phantom", "Silent Storm", "Irate Ninja", "Master Enigma",
    "Shadow Reaper", "Quiet Assassin", "Violent Oracle", "Midnight Raider",
    "Twilight Warden", "Chaos Samurai", "The Chemist"];


    //we gonna generate a name based on sum

    const color = document.querySelector("#color").value.length;
    const animal = document.querySelector("#animal").value.length;
    const bodypart = document.querySelector("#body").value.length;
    const drink = document.querySelector("#drink").value.length;
    const number = document.querySelector("#number").value.length;

    sum = color + animal + bodypart + drink + number;

    const randomWuName = names[sum % names.length];

    document.querySelector(".wuName").innerHTML = `Your Wu-Tang Name is: ${randomWuName}`;

}
