document.getElementById("gen-button").addEventListener("click", function() {

    // input values
    const element = document.getElementById("elementInput").value.trim();
    const mood = document.getElementById("moodInput").value.trim();
    const time = document.getElementById("timeInput").value.trim();
    const animal = document.getElementById("animalInput").value.trim();
    const color = document.getElementById("colorInput").value.trim();

    // wu name based on responses
    const elements = {
        "fire": "Ember", "water": "Hydro", "earth": "Muva", "wind": "Hurricane", "metal": "Gold"
    };
    const moods = {
        "happy": "Gilmore", "sad": "Murky", "excited": "Jovial", "chill": "Buddha", "angry": "Killa"
    };
    const times = {
        "morning": "Sunny", "afternoon": "Hedgehog", "evening": "Supper", "night": "Ninja"
    };
    const animals = {
        "dog": "Leash", "cat":"Scratch", "bird":"Fly", "snake":"God", "lion":"King"
    };
    const colors = {
        "black": "Devine", "gold": "Winning", "silver": "Second", "red":"Blood", "blue":"Victor"
    };


// determining names based on input (default name if input does not exist)
const elementPart = elements[element.toLowerCase()] || "Gambino";
const moodPart = moods[mood.toLowerCase()] || "Sheisty";
const timePart = times[time.toLowerCase()] || "Lord";
const animalPart = animals[animal.toLowerCase()] || "Playa";
const colorPart = colors[color.toLowerCase()] || "Draco";

 // array of name parts
 const nameParts = [elementPart, moodPart, timePart, animalPart, colorPart];
    
 // selecting two random parts
 const part1 = nameParts[Math.floor(Math.random() * nameParts.length)];
 let part2;
 do {
     part2 = nameParts[Math.floor(Math.random() * nameParts.length)];
 } while (part1 === part2);  

 // Combine parts for two-word name
 const wuName = `${part1} ${part2}`;

// diplaying wu name
const resultDiv = document.querySelector(".result");
if (resultDiv) {
    resultDiv.textContent = `Your Wu-Tang name is: ${wuName}`;
} else {
    const newResult = document.createElement("div");
    newResult.classList.add("result");
    newResult.textContent = `Your Wu-Tang name is: ${wuName}`;
    document.querySelector(".content").appendChild(newResult);
}

// clear input after name generation
document.getElementById("elementInput").value = "";
document.getElementById("moodInput").value = "";
document.getElementById("timeInput").value = "";
document.getElementById("animalInput").value = "";
document.getElementById("colorInput").value = "";
});