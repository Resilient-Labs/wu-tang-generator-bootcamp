document.querySelector('#generate').addEventListener('click', getName)

// function getWuName(){

//   let num1 = q1 + q2 + q3
//   let num2 = q4 + q5
  
//   let a = null
//   let b = null

//   num1 < 9 ? a = num1 : a = Math.floor(num1 / 2)
//   num2 < 9 ? b = num2 : b = Math.floor(num2 / 2)
//   document.querySelector('#wuTangName').innerHTML = firstName[a] + ' ' + lastName[b]
//   console.log(firstName[a], lastName[b])
// }

function getName(){
  const q1 = Number(document.querySelector('#color-select').value)
  const q2 = Number(document.querySelector('#food-select').value)
  const q3 = Number(document.querySelector('#zodiac-select').value) 
  const q4 = Number(document.querySelector('#season-select').value)
  const q5 = Number(document.querySelector('#vacation-select').value)

  fetch(`/api?quiz=${q1}+${q2}+${q3}+${q4}+${q5}`)
    .then(response => response.json())
    .then((data) => {
        console.log(typeof data.userInput[0])
    });
}