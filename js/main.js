document.querySelector('button').addEventListener('click', getName);

function getName() {
    //create variables for the values that could be picked for each question
    const coast = document.querySelector('input[name="coast"]:checked').value;
    const pizza = document.querySelector('input[name="pizza"]:checked').value;
    const vaca = document.querySelector('input[name="vacation"]:checked').value;
    const zombie = document.querySelector('input[name="zombie"]:checked').value;
    const phone = document.querySelector('input[name="phone"]:checked').value;

    //create an array for the possibilities of the first and second name
    let firstName = ['Madi', 'Sir', 'King', 'Most High', 'Commader', 'Amazing', 'Hero', 'Lord', 'Genius', 'Grand'];
    let secondName = ['Schmurda', 'Cole', 'the IV', 'Almighty', 'Curren$y', 'Dominator', 'Desperado', 'Menace', 'Mastermind', 'the Scientist'];

    // Generate a random index within the range of arrays
    //10 for the number of elements in each array
    let randomIndex = Math.floor(Math.random() * 10);

    document.querySelector('#results').innerText = `Your new name is: ${firstName[randomIndex]} ${secondName[randomIndex]}`;
}


