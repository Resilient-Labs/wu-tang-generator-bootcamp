//Create an event listener to get name
document.querySelector('#name').addEventListener('click', generateName)
//Create a function that takes all checked user inputs to generate a name
    //to grab input select input element put name in brackets use :checked ('is checked')
    //wrap in num method to ensure inputs are ints
function generateName() {
    let q1 = Number(document.querySelector('input[name="q1"]:checked').value)
    let q2 = Number(document.querySelector('input[name="q2"]:checked').value)
    let q3 = Number(document.querySelector('input[name="q3"]:checked').value)
    let q4 = Number(document.querySelector('input[name="q4"]:checked').value)
    let q5 = Number(document.querySelector('input[name="q5"]:checked').value)
    console.log(q1)
    console.log(q2)
    console.log(q3)
    console.log(q4)
    console.log(q5)
    //create 2 arrays for first name and last name with 10 options
    let fName = ['Samurai', 'Triumphant', 'Supreme', 'Diabolical', 'Ol', 'DJ', 'Forever', 'Fatal', 'Smooth', 'Sleek']
    let lName = ['World', 'Cosmo', 'Pine', 'Deliciosa', 'Pepper', 'Moss', 'Driver', 'Iris', 'Ghost', 'Clover']
    // Generate random values from variables
        //each user input will be a diff int, you add and get avg
        //with that avg, you will get a random index from within the array
    // let random = Math.round((q1+q2+q3+q4+q5) / 25) -5
    let random = Math.floor((q3+q4+q5)/(q1 + q2))
    //Random variable will generate a random fn and ln based on user input
    let firstRandom = fName[random]
    let lastRandom = lName[random]
    document.querySelector('#result').innerText = `${firstRandom} ${lastRandom}`
    console.log(random)
} 

//To refresh 
document.querySelector('#restart').addEventListener('click', refresh)
function refresh() {
    location.href = location.href
}

// '', '', '', '', '', '', 