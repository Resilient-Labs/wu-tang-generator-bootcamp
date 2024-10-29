// I am going to be making a name generator that upon click of button, a random first name and a random last name will be combined to give the user a new rapper name. 

// I will need a querySelector to add an event listener to my button to trigger a function called getYaName to generate the names.

// I will have two arrays, one for first names and one for last names. they will be filled with 6 names each. 

// I used these links to help with the code for randomization of a string: https://stackoverflow.com/questions/7350363/select-a-random-string-from-an-array
//https://www.tutorialrepublic.com/faq/how-to-get-a-random-item-from-a-javascript-array.php

// I want to return the new names into the #result on the dom.

//I also need a generic form in html asking for 5 basic questions, four of those will be first name, last name, city you are from and email, and the last question doesn't matter. I want to take the data from this form and parse some items to use in my random name generator. 

document.querySelector('#nameButton').addEventListener('click', getYaName);
document.querySelector('#resetButton').addEventListener('click', reset);

function getYaName (){

const city = document.getElementById('city').value
const oldFirst = document.getElementById('oldFirstName').value
const oldLast = document.getElementById('oldLastName').value

    //arrays of names to be chosen at random for first and last names.
    const first = ['Doom', 'Masta', 'Childish', 'Ol', 'Method', "Mr."]
    const last = ['Warrior', 'Gambino', 'Man', 'Killah', 'Tricksta', 'Doom' ]
    // methods to randomly choose a str out of each array.
    const firstRandom = first[Math.floor(Math.random() * first.length)]
    const lastRandom = last[Math.floor(Math.random() * last.length)]
    // Displays the results of the names on the DOM
    
    document.querySelector('#result').innerHTML = `You, ${oldFirst} ${oldLast}, shall henceforth be known as : <br> ${firstRandom} ${lastRandom}. Hailing from the slums of ${city} Land.`
}


function reset(){
    document.querySelector('#result').innerHTML = ''  
    document.getElementById('#form').reset(); 
}
