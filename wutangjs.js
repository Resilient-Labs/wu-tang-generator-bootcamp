const wuTangName = document.querySelector("#wuTangName")
const generateButton = document.querySelector("#generateButton")
const colorSelect = document.querySelector("#colorSelect")
const continentSelect = document.querySelector("#continentSelect")
const animalSelect = document.querySelector("#animalSelect")
const ageSelect = document.querySelector("#ageSelect")
const numberSelect = document.querySelector("#numberSelect")

generateButton.addEventListener('click', () => generateName())

const firstNames = [
    "Domingo", "Lunes",
    "Martes", "Miércoles",
    "Jueves", "Viernes", "Sabado"]
const lastNames = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]


function generateName() {
    let wuTangFirstName = getFirstName()
    let wuTangLastName = getLastName()
    wuTangName.innerText = wuTangFirstName + " " + wuTangLastName
}

function getFirstName() {
    return firstNames[Math.floor(Math.random() * firstNames.length)]
}

function getLastName() {
    return lastNames[Math.floor(Math.random() * lastNames.length)]
}
