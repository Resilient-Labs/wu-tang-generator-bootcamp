document.querySelector('button').addEventListener('click',wuName)
// add click to button 
// take value from user answers
// randomize the answer 
// give back name 
function wuName(){
    const one = document.querySelector('#one').value
    const two = document.querySelector('#two').value
    const three = document.querySelector('#three').value
    const four = document.querySelector('#four').value
    const five = document.querySelector('#five').value 
    const sName = [one ,two, three, four, five] // array to store user inputs
    console.log(sName)
const randomName = Math.floor(Math.random()*5)
const randomName2 = Math.floor(Math.random()*5)
const giveName = sName[randomName]
const giveName2 = sName[randomName2]
document.querySelector('h2').innerText = `Your Wu-Tang Name is ${giveName} ${giveName2}`

}
//  random math 


