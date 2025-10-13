// array of names from ChatGPT
const names = [
    "Midnight Ronin", "Chrome Prophet", "Sacred Ghost", "Iron Lotus", "Golden Menace",
    "Silent Assassin", "Velvet Monk", "Divine Outlaw", "Electric Wanderer", "Shaolin Mystic",
    "Grimy Sage", "Hollow Poet", "Mighty Specter", "Royal Juggernaut", "Lunar Prophet",
    "Storm Disciple", "Shadow Samurai", "Crimson Oracle", "Arcane Warrior", "Neon Pharaoh",
    "Bronze Dragon", "Obsidian Nomad", "Black Lotus", "Silver Blade", "Cosmic Wanderer",
    "Goldfang Monk", "Void Poet", "Solar Ronin", "Storm Prophet", "Iron Wraith",
    "Midnight Disciple", "Wild Pharaoh", "Jade Assassin", "Scarlet Mystic", "Urban Prophet",
    "Steel Samurai", "Divine Ghost", "Neon Wanderer", "Sacred Outlaw", "Lunar Oracle"
];

// objects of choices with questions as keys and options for values
const choices = {
    element: ["fire", "water", "air", "earth", "lightning"],
    animal: ["tiger", "panther", "dragon", "wolf", "serpent"],
    style: ["calm", "fast", "silent", "strategic", "power"],
    color: ["gold", "red", "black", "purple", "white"],
    essence: ["wisdom", "fury", "soul", "power", "shadow"]
};

const categories = ["element", "animal", "style", "color", "essence"];

const generateBtn = document.querySelector("#generate");
const resultEl = document.querySelector("#name");

// make sure same answers produce same names
generateBtn.addEventListener("click", function () {
    let total = 0;
    let answered = 0;

    // help from ChatGPT
    categories.forEach(category => {
        const selected = document.querySelector(`input[name="${category}"]:checked`);
        if (selected) {
            answered++;
            total += choices[category].indexOf(selected.value);
        }
    });


    if (answered < 5) {
        resultEl.textContent = "Please answer all five first.";
        return;
    }

    const index = total % names.length;
    resultEl.textContent = names[index];
});
