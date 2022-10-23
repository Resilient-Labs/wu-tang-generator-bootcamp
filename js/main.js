document.getElementById("btn").onclick = makeReq;

function makeReq(){
  let userFood = document.querySelector('#food').value
  let userSport = document.querySelector('#sport').value
  let userShow = document.querySelector('#show').value

  let choices =  `${userFood}-${userSport}-${userShow}`

  fetch(`/api?choices=${choices}`)
    .then((response) => response.json())
    .then((data) => {
    console.log(data);
    document.querySelector('#result').innerHTML = `your wu tang name is ${data.results}`
   
  })
  
}

