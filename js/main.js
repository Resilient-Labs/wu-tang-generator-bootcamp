// make two variables with 2  arrays each to insert a firstname and lastname 
//make a function to function parses a string argument and returns an integer of the specified 2 between 5+

let firstName = ['Code', 'Web', 'Internet', 'Tech', 'Dev', 'App', 'Cute']
let lastName = ['Pirate', 'Maker', 'Dreamer', 'Debug', 'Master', 'Stack', 'Beast']


//Get the value of the selected radio button in question 1.
//Convert the value to an integer and store it in a variable called num1 to num5.
function findName() {
    let num1 = parseInt(document.querySelector('input[name=quest1]:checked').value)
    let num2 = parseInt(document.querySelector('input[name=quest2]:checked').value)
    let num3 = parseInt(document.querySelector('input[name=quest3]:checked').value)
    let num4 = parseInt(document.querySelector('input[name=quest4]:checked').value)
    let num5 = parseInt(document.querySelector('input[name=quest5]:checked').value)
    console.log(num1)
    console.log(num2)
    console.log(num3)
    console.log(num4)
    console.log(num5)
//make a varible with the math.round method that returns the value of a number rounded to the nearest integer
    let answer = [Math.floor(Math.random( num1 + num2 + num3 + num4 + num5) * firstName.length)];
    let answerOne = [Math.floor(Math.random(num1 + num2 + num3 + num4 + num5) * lastName.length)];
   console.log()
   //make a varible with the two arrays mix
    let results = document.querySelector('#result')
    results.innerText = `This is your name: ${firstName[answer]}  ${lastName[answerOne]}`
}


// make an eventlistener that calls the function to find for a name
  
document.querySelector('button').addEventListener('click', findName)