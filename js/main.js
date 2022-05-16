// Worked with Nafessah S 

// create an event listener that checks that all of the option values are filled when the user presses the button
// OOP => create an object to house the properties and methods
const wuTangName = {
// create an array of 15 wu-tang clan names
    names: ['', '', '', '', '','Sizzilin Toasta','Crypt Walkaz', 'Chef Vybz', 'Cultchaz Li', 'BZA', 'King Lerox', 'Booz Shootah', 'Delight Flightz', 'Coddle Cakez', 'Slink daLink', 'Panini Linx'],
// pull the answers from the form
    getMyName() {
        const questionOne = document.querySelector('#questionOne').value
        const questionTwo = document.querySelector('#questionTwo').value
        const questionThree = document.querySelector('#questionThree').value
        const questionFour = document.querySelector('#questionFour').value
        const questionFive = document.querySelector('#questionFive').value
        if (questionOne !== '' && questionTwo !== '' && questionThree !== '' && questionFour !== '' && questionFive !== '') {
            console.log(Number(questionOne) + Number(questionTwo) + Number(questionThree) + Number(questionFour) + Number(questionFive))
            document.querySelector('#resultName').innerText = "Your Wu-Tang name is: " + wuTangName.names[Number(questionOne) + Number(questionTwo) + Number(questionThree) + Number(questionFour) + Number(questionFive)]
        } else {
            document.querySelector('#resultName').innerText = "Please make sure you answer all of the questions before submitting your answers!"
        }
    },
// questions one and two will be added together for the first part of the name

// questions 

// questions four and five will be added together for the second part of the name 

// once answers are submitted and name is generated, createElement button to the DOM to reset the page append child to reset button section

// else all answers not filled in, function will return a message to complete the survey
}

document.querySelector('.submit').addEventListener('click', wuTangName.getMyName)