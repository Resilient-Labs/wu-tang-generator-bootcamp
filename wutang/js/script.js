// Html;
// Create a five question, put them each in their own section. 
// Give each input a radio type, a common class/id name (or attribute to grab), and give them all a different value (0-3, 0-2)
// - The reason for the values is so that the numbers can be grabbed and used to find the array in js

// Create a submit button- the submit button will trigger the functions to add up the score AND to present a name
// Have an empty tag to implement both of the names. You could have them be spans in their own class, making them both inline. 
// ex. <p> and your name is: <span id=‘last’></span> <span id=‘first’></span>. Move well with your new title.</p>


// Create a reload or take quiz again button. (simple location.reload() )



// Create two arrays with an equal number of names. 
// First one 10 names  (0-9)(max you can get)
// Last one 5 names (0-4)(max you can get)
// object with sayings 

//one for each thing. something to look for and something to watch out for. 
let firstSaying = [ 'you can leave someone scarred and searing, just for the words your hurla nd they hearing', 'your importance is known around the globe', 'oh wow you\'re bright as the sun, ain\t nobody like you you\'re the only one', 'look at you, you stylish moment, they try to copy; you they hide that they notice', 'wild... yet cultivated... alluring oddity is how you\'re appreciated', 'not in the pocket, but you pure in the heart, looking for a fresh start', 'afraid of no haunting, nothng\'s ever daunting-to you', 'the world is sad, and you see it, keep your vision, you gone need it', 'your intelligence is astounding, the brilliance is resounding', 'just like the archer trained hard, you got the arrow, pointed on the bullseye, and for dinner there\'s the sparrow' ]
let lastSaying = [ 'be careful of those that try to tame you', 'you are beautiful and many people do not know you or understand you...yet', 'your personality is infectuous', 'you know how quick you are to run, from a fight, expectations, from death...', 'you try to fix everyone, and you can. but, you get evil when you start charging a price....']
let firstName = [ 'scathing', 'paramount', 'jaunty', 'modish', 'agrestal', 'bankrupt', 'intrepid', 'dolorous', 'sagacious', 'precise'] 
let lastName = [ 'pony', 'sea angel', 'germ', 'road runner', 'cardiologist']
console.log(firstSaying.length)
console.log(lastSaying.length)
console.log(firstName.length)
console.log(lastName.length)


//these will return an array, which can be looped through to find something
let firstChoice = document.querySelectorAll('.firstQuestion')
let secChoice = document.querySelectorAll('.secondQuestion')
let thirdChoice = document.querySelectorAll('.thirdQuestion')
let fourthChoice = document.querySelectorAll('.fourthQuestion')
let fifthChoice = document.querySelectorAll('.fifthQuestion')

let firstNameTotal = 0
let lastNameTotal = 0

console.log(firstChoice)
console.log(secChoice)
console.log(thirdChoice)



//how do we measures those points? by a point system
//so each question has a point. and that value is accessed through that property's attribute of value. 
    //how do we access this in javascript... like we always do, .value (.src to get an image
    //how do we access this value? maybe through a querySelector?

// //access the array as firstName[0] lastName[0] would give you ‘Scathing Pony'



// Function that gathers the selected values of each question, then puts the sum into a variable to return it
// //take the value 

// Function that takes that variable and inserts it into appropriate name to gather a name from the array

// First name question:
// What time of the day you like? Time ain’t real/Morning Night  day? (0/1/2/3)
// What do you drink for breakfast?Orange juice/Tea or coffee or water ? (0/1/2/3/)
// Where would you like to go? Cave/Forest/ desert/beach? (0/1/2/3)

// Last name questions:
// Fave out of the two? Pls don’t make me choose (0); Winter or fall (1/2)
// Fave out of the two? Again, I would prefer not to chose (0)spring or summer (1/2)



// It works by point system 

// A 1 
// B 2 
// C 3 
// D 4 
// E 5
// Make it through an input?
// Points go 
// 0-7 {get a random name from this object that will have two arrays}
// 8-17 {get a random name from this object that will have two arrays}
// 18-25 {get a random name from this object that will have two arrays}


// Point object = 0
//you can also do this with a keypress, 'e', and just call the find name function inside. 
document.querySelector('.submitBtn').addEventListener('click', findName)

function findName(){

    function forFindingNames(){
    
        for(let i = 0; i <firstChoice.length; i++){
            if(firstChoice[i].checked){
                
                console.log(parseInt(firstChoice[i].value))
                firstNameTotal += parseInt(firstChoice[i].value)
                console.log(firstNameTotal)
            }
        }
        for(let i = 0; i <secChoice.length; i++){
            if(secChoice[i].checked){
                console.log(parseInt(secChoice[i].value))
                firstNameTotal += parseInt(secChoice[i].value)
                console.log(firstNameTotal)
            }
        }
        for(let i = 0; i <thirdChoice.length; i++){
            if(thirdChoice[i].checked){
                console.log(parseInt(thirdChoice[i].value))
                firstNameTotal += parseInt(thirdChoice[i].value)
                console.log(firstNameTotal)
            }
        }
        for(let i = 0; i <fourthChoice.length; i++){
            if(fourthChoice[i].checked){
                console.log(parseInt(fourthChoice[i].value))
                lastNameTotal += parseInt(fourthChoice[i].value)
                console.log(lastNameTotal)
            }
        }
        for(let i = 0; i <fifthChoice.length; i++){
            if(fifthChoice[i].checked){
                console.log(parseInt(fifthChoice[i].value))
                lastNameTotal += parseInt(fifthChoice[i].value)
                console.log(lastNameTotal)
            }
        }
    }
    forFindingNames()
    let first = findName1() 
    let last = findName2()
    
    console.log(`you are the ${first} ${last}`)
    document.querySelector('.itsTheFirst').innerText = first
    document.querySelector('.itsTheSecond').innerText = last

}

function findName1(){
    //function to generate a random number
    // let number1 = Math.round(Math.random() * 9)
    let first = firstName[firstNameTotal]
    findSaying1(firstNameTotal)
    return first 
}

function findName2(){
    // let number = Math.round(Math.random() *4)
    let last = lastName[lastNameTotal]
    findSaying2(lastNameTotal)
    return last 
}

function findSaying1(x){
    console.log(firstSaying[x])
    document.querySelector('.saying1').innerText = firstSaying[x]
}

function findSaying2(y){
    console.log(lastSaying[y])
    document.querySelector('.saying2').innerText = lastSaying[y]
}

document.querySelector('.restartBtn').addEventListener('click', resetNameGenerator)

function resetNameGenerator(){
    location.reload()
}






