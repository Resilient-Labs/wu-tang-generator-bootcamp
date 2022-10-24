document.querySelector('button').addEventListener('click', generateName)

function generateName() {
   

    let firstNameArr = ['Prada', 'Balenciaga', 'Gucci', 'Lanvin', 'Givenchy', 'Valentino', 'Chanel', 'Burberry', 'Hermes', 'Cartier'];

    let surNameArr = ['Smith', 'Jones', 'Williams', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson'];

    let inputOne = document.querySelector('#factor1').value
    let inputTwo=document.querySelector('#factor2').value
    let inputThree=document.querySelector('#factor3').value
    let inputFour=document.querySelector('#factor4').value
    let inputFive=document.querySelector('#factor5').value


    let sumOne = Number(inputOne) + Number(inputTwo) 
    let sumTwo = Number(inputThree) + Number(inputFour) + Number(inputFive)

    if (sumOne > 9) {
        sumOne = Math.floor(sumOne / 2)
    }
    if (sumTwo > 9) {
        sumTwo = Math.floor(sumTwo / 2)
    }

    let firstName = firstNameArr[sumOne]
    let surName = surNameArr[sumTwo]

    document.querySelector('h3').innerText = firstName + ' ' + surName
        console.log(sumTwo)
}









 










 
