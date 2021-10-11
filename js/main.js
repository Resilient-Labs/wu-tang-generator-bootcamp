//pseudo code
//turn 5 questions into two names
//create two arrays one with first names, one with last names (get the indexes)
//find a way to count to numbers 

//variables



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

    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        document.querySelector('h2').innerText = data['wutang']
    });
    }


//event listeners
document.querySelector('button').addEventListener('click', showName)

