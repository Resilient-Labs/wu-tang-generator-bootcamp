const button = document.querySelector('button').addEventListener('click', getName)

const firstName = document.getElementById('firstName').value;
const lastName = document.getElementById('lastName').value;
const age = document.getElementById('age').value;
const color = document.getElementById('color').value;
const season = document.getElementById('season').value

let generatedName = []    


function getName(){

const shortNames = ["Ghost", "Fang", "Storm", "Monk", "Mirage"]
const longNames = ["Tempest", "Reaper", "Ronin", "Lotus", "Midnight"]
const shortLastNames = ["Claw", "Fang", "Storm", "Flame", "Iron"]
const longLastNames = ["Sentinel", "Crimson", "Obsidian", "Mystic", "Spirit"]
const youngBasedNames = ["Zyro", "Nova", "Echo", "Kai", "Blaze"]
const oldBasedNames = ["Sage", "Elder", "Silent", "Ancient", "Titan"]
const color = ["Sapphire", "Emerald", "Golden", "Ivory ", "Scarlet"]
const season = ["Frost", "Blizzard", "Solar", "Harvest", "Twilight"]

let randomIndex = Math.floor(Math.random()* 5);

    if(firstName.length >= 6){
        const nickname = shortNames[randomIndex]
        generatedName.push(nickname)
    }else if(firstName.length <= 6){
        const nickname2 = longNames[randomIndex]
        generatedName.push(nickname2)
    }

    if(lastName.length >= 6){
        const nickname3 = shortLastNames[randomIndex]
        generatedName.push(nickname3)
    }else if(lastName.length <= 6){
        const nickname4 =longLastNames[randomIndex]
        generatedName.push(nickname4)
    }

    if(age >= 50){
        const nickname5 = youngBasedNames[randomIndex]
        generatedName.push(nickname5)
    }else{
        const nickname6 = oldBasedNames[randomIndex]
        generatedName.push(nickname6)
    }    
    
    //need to work on
    if(color){
        newColor = color[randomIndex]
        generatedName.push(newColor)
    }

    //need to work on
    if(season){
        newSeason = season[randomIndex]
        generatedName.push(newSeason)
    }


document.querySelector('h2').innerHTML = generatedName





























//     const apiKey = '95f5297c929756acb02ba8d4ca020d8b'; 
//     const url = `https://parser.name/api/generate-random-name/?gender=${gender}&country_code=${country}&amount=${amount}`;
    
//     fetch(url, {
//         headers: {
//             'X-Api-Key': apiKey
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log("Generated Names:", data.names);
//         const nameList = document.getElementById('nameList');
//         nameList.innerHTML = ""; // Clear previous results

//         data.names.forEach(name => {
//             const li = document.createElement('li');
//             li.textContent = name;
//             nameList.appendChild(li);

//         })
//     })
//     .catch(error => {
//         console.error("Error fetching names:", error);
//     });

}