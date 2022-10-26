document.querySelector('#generate').addEventListener('click', makeReq)

function makeReq(event){
  event.preventDefault()
  const name = document.querySelector("#name").value;
  // let answer1 = document.querySelector('input[Name="elements"]:checked').value
  // let answer2 = document.querySelector('input[Name="teams"]:checked').value
  // let answer3 = document.querySelector('input[Name="shows"]:checked').value
  // let answer4 = document.querySelector('input[Name="genres"]:checked').value
  // let answer5 = document.querySelector('input[Name="vehicles"]:checked').value


  fetch(`/api?word=${name}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#original-name").innerHTML =  `Congrats ${name}, you will now be known as.. `
      document.querySelector("#generated-name").textContent = data.rapperName
    });

}
