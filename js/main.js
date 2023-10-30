//FIRST I ADDED AN EVENT LISTENER FOR THE BUTTON TO RUN 
document.querySelector('#create').addEventListener('click', nameGen)

//here we run the function
function nameGen() {
    //we start by taking the vaules of all 5 buttons which each have a unique vaule and store it in a variable
    //we also use + a unary operator to convert all the strings to numbers (that would be the vaule i assigned)
    const brand = +document.querySelector('input[name="brand"]:checked').value;
    const team = +document.querySelector('input[name="team"]:checked').value;
    const car = +document.querySelector('input[name="car"]:checked').value;
    const college = +document.querySelector('input[name="college"]:checked').value;
    const food = +document.querySelector('input[name="food"]:checked').value;

    //we then take all the numbers stored in the variable add them up and divide by 5
    //the reulst depending on choices will either br 1 of 6 options
    let math = ((brand + team + car + college + food) / 5)

    //we use a switch case to run through the math variable which now is holding 1 of the 6 responses
    //and depending on what the user picked it will give out the name matching the math number vaiable
    switch (math) {
        case 5:
            document.getElementById("nameOutput").innerHTML = "Insane Mastermind";
            break;
        case 5.2:
            document.getElementById("nameOutput").innerHTML = "Quiet Assassin";
            break;
        case 5.4:
            document.getElementById("nameOutput").innerHTML = "Vicious Monk";
            break;
        case 5.6:
            document.getElementById("nameOutput").innerHTML = "Phantom Samurai";
            break;
        case 5.8:
            document.getElementById("nameOutput").innerHTML = "Lethal Wizard";
            break;
        case 6:
            document.getElementById("nameOutput").innerHTML = "Mystic Shadow";
    }


}

//here we create a event listener for the reset button
document.querySelector('#reset').addEventListener('click', reset)


function reset() {
    //we then select all inputs and set the to an empty string
    let inputs = document.querySelectorAll('input');
    document.getElementById("nameOutput").innerHTML = ""
    //then we run through the array and uncheck every checked box and set it from true to false
    Array.from(inputs).forEach((element) => {
        element.checked = false
    } )
}