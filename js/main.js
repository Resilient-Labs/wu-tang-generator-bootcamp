//pseudo code
//turn 5 questions into two names
//create two arrays one with first names, one with last names (get the indexes)
//find a way to count to numbers 

//variables
// let firstNameArray = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6', 'Name7', 'Name8', 'Name9', 'Name10']
// let secondNameArray = ['Name11', 'Name12', 'Name13', 'Name14', 'Name15', 'Name16', 'Name17', 'Name18', 'Name19', 'Name20']

//functions
function showName(){
    
    
    let answer1 = document.querySelector('#answer1')
    let value1 = answer1.value
    
    let answer2 = document.querySelector('#answer2')
    let value2 = answer2.value
    
    let answer3 = document.querySelector('#answer3')
    let value3 = answer3.value
    
    let answer4 = document.querySelector('#answer4')
    let value4 = answer4.value
    
    let answer5 = document.querySelector('#answer5')
    let value5 = answer5.value
    console.log(value1, value2, value3, value4, value5)

    fetch(`/api?answer1=${value1}&answer2=${value2}&answer3=${value3}&answer4=${value4}&answer5=${value5}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data.wutgangName);
      document.querySelector('h2').innerText = `From this day forward you will also be known as ${data.wutangName}!`
});
}

// //functions
// function showName(){
//     let answer1 = document.querySelector('#answer1')
//     let value1 = answer1.value
    
//     let answer2 = document.querySelector('#answer2')
//     let value2 = answer2.value
    
//     let answer3 = document.querySelector('#answer3')
//     let value3 = answer3.value
    
//     let answer4 = document.querySelector('#answer4')
//     let value4 = answer4.value
    
//     let answer5 = document.querySelector('#answer5')
//     let value5 = answer5.value
//     console.log(value1, value2, value3, value4, value5)


//     console.log(createName())
//     document.querySelector('h2').innerText = createName(value1, value2, value3, value4, value5)
// }

// function createName(answer1, answer2, answer3, answer4, answer5){
//    let firstIndex = (parseInt(answer1) + parseInt(answer2) - 2) % firstNameArray.length 
//    let secondIndex = (parseInt(answer3) + parseInt(answer4) + parseInt(answer5) - 3) % secondNameArray.length
//    console.log(firstIndex, secondIndex)
//    let firstName = firstNameArray[firstIndex]
//    let secondName = secondNameArray[secondIndex]
//     return `${firstName} ${secondName}`


// }

//event listeners
document.querySelector('button').addEventListener('click', showName)

