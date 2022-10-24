let tally = 0

document.querySelector('button').addEventListener('click', generate)


function generate(){
  let initial = document.querySelector('#name').value[0] 
  console.log(initial)
  tally += parseInt(document.querySelector('input[name=fav_genre]:checked').value)
  console.log(tally)
  tally += parseInt(document.querySelector('input[name=fav_video]:checked').value)
  console.log(tally)
  tally += parseInt(document.querySelector('input[name=fav_color]:checked').value)
  console.log(tally)
  tally += parseInt(document.querySelector('input[name=fav_supe]:checked').value)
  console.log(tally)

  fetch(`/wtc?initial=${initial}&tally=${tally}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      ShowResult(data)
    });

}
function flipTails(){

  fetch(`/flip?choice=tails`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      ShowResult(data)
    });

}

function ShowResult(obj) {
  console.log(obj)
 document.querySelector('#newName').innerText = `Your Wu-Tang Clan Name is ${obj.first} ${obj.last}`
}