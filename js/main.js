document.querySelector('#generate').addEventListener('click', getName)

function getName(){
  const q1 = document.querySelector('#color-select').value
  const q2 = document.querySelector('#food-select').value
  const q3 = document.querySelector('#zodiac-select').value
  const q4 = document.querySelector('#season-select').value
  const q5 = document.querySelector('#vacation-select').value

  fetch(`/api?quiz=${q1}+${q2}+${q3}+${q4}+${q5}`)
    .then(response => response.json())
    .then((data) => {
        document.querySelector('#showName').innerText = data.firstName + ' ' + data.lastName
    });
}