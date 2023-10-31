//First create an event listener for the generator button and the reset button

document.querySelector('#generate').addEventListener('click', wuTangName)
document.querySelector('#reset').addEventListener('click', reset)

//Then create the function to generate the wu tang name based off the value of the user's choices

function wuTangName(){
//pull the value from each question
const anime = Number(document.querySelector('input[name = anime]:checked').value)
const soda = Number(document.querySelector('input[name = soda]:checked').value)
const tea = Number(document.querySelector('input[name = tea]:checked').value)
const phone = Number(document.querySelector('input[name = phone]:checked').value)
const book = Number(document.querySelector('input[name = book]:checked').value)




//add each value together //average the total of the values
let average = (anime + soda + tea + phone + book)/5
console.log(average)

// for each possible average return a wutang clan name 

switch(average) {
    case 5:
        document.querySelector('#wutang-name').innerText = 'From this day forth you will be known as: Masta Killah Shaolin'
        break
    case 5.2:
        document.querySelector('#wutang-name').innerText = 'From this day forth you will be known as: Brickface Karate Thug'
        break
    case 5.4:
        document.querySelector('#wutang-name').innerText = 'From this day forth you will be known as: Killer Bee Warcloud'
        break
    case 5.6:
        document.querySelector('#wutang-name').innerText = 'From this day forth you will be known as: Wombo Combo Witch Doctor'
        break
    case 5.8:
        document.querySelector('#wutang-name').innerText = 'From this day forth you will be known as: Spicy Avocado Poon Tang Magnet'
        break
    case 6:
        document.querySelector('#wutang-name').innerText = 'From this day forth you will be known as: Ghostface Popcorn Playa'
        break   
}

}




//then create the function to reset the values 
//this should clear all the input values
//create an nodelist of all the input elements
//create an array our of the nodelist
//loop through each element of the array and clear the value