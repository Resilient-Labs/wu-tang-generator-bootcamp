// Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names. Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).

// Function to grab the values from the selected options in the dropdown menu
function generateName() {
    const selectedFood = document.getElementById('food').value
    const selectedCar = document.getElementById('car').value
    const selectedAnimal = document.getElementById('animal').value
    const selectedColor = document.getElementById('color').value
    const selectedVacation = document.getElementById('vacation').value

    // Array of users selected options
    const selectedOptions = [selectedFood, selectedCar, selectedAnimal, selectedColor, selectedVacation]

    // Error handling
    // Filter out empty selections by making sure it is not an empty option
    // Create variable to store the options selected plus filtered empty
    const filteredOptions = selectedOptions.filter(option => option !== '')

    // Create var to hold the randomly selected two names from filtered options, array
    const randomNames = []
    // While there are 2 names to choose from and no empty options the function runs to randomize
    while (randomNames.length < 2 && filteredOptions.length > 0) {
        // Variable to store the 5 options and use math random and math floor to randomize 0-5(length) and round decimal to nearest whole
        const randomIndex = Math.floor(Math.random() * filteredOptions.length)
        // We want to take the random index to grab from filtered options
        // Push onto array that holds the chosen names
        randomNames.push(filteredOptions[randomIndex])
        // debug
        // After picking an option we remove it from the list of available options
        // ensures unique selections
        filteredOptions.splice(randomIndex, 1)
    }

    // Display random name
    const nameElement = document.getElementById('name')
    nameElement.textContent = randomNames.join(' ')
}

const nameBtn = document.getElementById('nameBtn')
nameBtn.addEventListener('click', generateName)