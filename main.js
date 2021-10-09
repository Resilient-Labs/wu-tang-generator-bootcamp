//function to generate random names

//variable that lists opetions for first and last names

//randomize first and last name with click

const firstNames = ["Lil", "Hot", "BA$$"];

const lastNames = ["Baby","Cheeto", "MAMA/POPPA"];



const getRandomName = () => 
`${firstNames[Math.floor(Math.random() * firstNames.length)]}; ${secondNames[Math.floor(Math.random() * secondNames.length)]}`

console.log(getRandomName());
