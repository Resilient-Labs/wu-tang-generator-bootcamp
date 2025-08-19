const firstName = document.getElementById('firstName').value
const lastName = document.getElementById('lastName').value
const city = document.getElementById('city').value
const color = document.getElementById('color').value
const animal = document.getElementById('animal').value



document.getElementById('generate').addEventListener('click', getWuName)

function getIndexFromLetter(letter) {
    if (!letter) return null;
    const code = letter.toUpperCase().charCodeAt(0);
    if (code >= 65 && code <= 90) {
        return code - 65
    }
}

const firstNameWords = [
    "Phantom",
    "Savage",
    "Eternal",
    "Childish",
    "Mystic",
    "Silent",
    "Iron",
    "Brutal",
    "Divine",
    "Grimy",
    "Fearless",
    "Ruthless",
    "Ancient",
    "Heavenly",
    "Lyrical",
    "Obscure",
    "Vengeful",
    "Noble",
    "Thundering",
    "Unseen",
    "Xenial",
    "Young",
    "Zen",
    "Quiet",
    "Killer",
    "Wicked"
];
const lastNameWords = [
    "Ronin",
    "Dragon",
    "Shadow",
    "Prophet",
    "Ghost",
    "Monk",
    "Gambino",
    "Sage",
    "Warrior",
    "Shogun",
    "Emperor",
    "Rebel",
    "Ninja",
    "Pharaoh",
    "Oracle",
    "Wizard",
    "Lion",
    "Rogue",
    "Samurai",
    "Master",
    "Vigilante",
    "Thief",
    "Seeker",
    "Hunter",
    "Outlaw",
    "Pilgrim"
];
const cityWords = [
    "Annihilator",
    "Blade",
    "Cipher",
    "Dragonfist",
    "Enigma",
    "Firebrand",
    "Ghostface",
    "Hurricane",
    "Ironclad",
    "Jedi",
    "Knight",
    "Lethal",
    "Mystic",
    "Nemesis",
    "Oracle",
    "Punisher",
    "Quasar",
    "Razor",
    "Shadow",
    "Thunder",
    "Umbra",
    "Viper",
    "Warlock",
    "Xecutioner",
    "Yakuza",
    "Zenith"
];
const colorWords = [
    "Shimmering",
    "Deep",
    "Bold",
    "Rugged",
    "Gleaming",
    "Vibrant",
    "Verdant",
    "Warm",
    "Mysterious",
    "Serene",
    "Dusty",
    "Fragrant",
    "Vivid",
    "Brooding",
    "Tangerine",
    "Playful",
    "Mercurial",
    "Crimson",
    "Shining",
    "Tranquil",
    "Rustic",
    "Regal",
    "Pure",
    "Misty",
    "Blazing",
    "Steely"
];
const animalWords = [
    "Leaping",
    "Ferocious",
    "Venomous",
    "Mythical",
    "Soaring",
    "Sly",
    "Mighty",
    "Keen",
    "Fleet",
    "Stealthy",
    "Calm",
    "Roaring",
    "Nimble",
    "Melodious",
    "Silent",
    "Prowling",
    "Quick",
    "Bounding",
    "Slithering",
    "Crouching",
    "Mystical",
    "Circling",
    "Howling",
    "Scurrying",
    "Sturdy",
    "Striped"
];

function getWuName() {
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const city = document.getElementById('city').value
    const color = document.getElementById('color').value
    const animal = document.getElementById('animal').value

    const fullName = []

    const firstIndex = getIndexFromLetter(firstName[0]);
    if (firstIndex !== null) {
        fullName.push(firstNameWords[firstIndex]);
    }

    const lastIndex = getIndexFromLetter(lastName[0]);
    if (lastIndex !== null) {
        fullName.push(lastNameWords[lastIndex]);
    }

    const colorIndex = getIndexFromLetter(color[0]);
    if (colorIndex !== null) {
        fullName.push(colorWords[colorIndex]);
    }

    const animalIndex = getIndexFromLetter(animal[0]);
    if (animalIndex !== null) {
        fullName.push(animalWords[animalIndex]);
    }

    const cityIndex = getIndexFromLetter(city[0]);
    if (cityIndex !== null) {
        fullName.push(cityWords[cityIndex]);
    }

    document.getElementById('result').textContent = `${firstName} from this day foward you wiil be know as ${fullName.join(' ')}`;
}