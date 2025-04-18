document.querySelector('button').addEventListener('click', generateName)

function generateName() {
    const food = document.getElementById('food').value
    const car = document.getElementById('car').value
    const animal = document.getElementById('animal').value
    const color = document.getElementById('color').value
    const vacation = document.getElementById('vacation').value

    const firstName = food + car
    const lastName = animal + color + vacation

    document.querySelector('h2').innerText = `${firstName} ${lastName}`
}

