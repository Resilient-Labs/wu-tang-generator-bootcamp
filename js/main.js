

console.log(document.querySelectorAll('option'))

let clickedOptions = [];
const options = document.querySelectorAll('option');
const submitButton = document.querySelector('#submit');

options.forEach(option => {
  option.addEventListener('click', () => {
    clickedOptions.push(parseInt(option.value));
    console.log(clickedOptions)
  });
});

submitButton.addEventListener('click', () => {
  let num = clickedOptions.reduce((acc, val) => acc + val, 0);
  console.log(num);
  const newNum = num % 4;

  fetch(`/wutang?num=${newNum}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector('#result').innerText = data.generatedName
  });

});






// let num = 0

// function makeReq(){
//   document.querySelectorAll('option').forEach(option => num += parseInt(option.value))
//   newNum = num % 5
//   console.log (num % 5)

//   fetch(`/wutang?num=${newNum}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       document.querySelector('#result').innerText = data.generatedName
//     });
// }


// document.querySelector('#submit').addEventListener('click', makeReq)
