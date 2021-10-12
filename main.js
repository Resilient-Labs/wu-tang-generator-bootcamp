//function to generate random names

//variable that lists opetions for first and last names

//randomize first and last name with click



const firstNames = ["Lil", "Hot", "BA$$",];

const lastNames = ["Baby","Cheeto", "MAMA/POPPA",];


const getRandomNumber = (max) => Math.floor(Math.random() * max);


const getRandomName = () => 
`${firstNames[Math.floor(Math.random() * firstNames.length)]}; ${lastNames[Math.floor(Math.random() * lastNames.length)]}`

console.log(getRandomName());
const setRandomName = () => {
  document.getElementById('random-name').innerHTML = getRandomName();

}

document.querySelector("button").addEventListener('click', getRandomName);

document.getElementById("wuMe").addEventListener('click', setRandomName);