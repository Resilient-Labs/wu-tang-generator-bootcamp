document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userName = document.querySelector("#userName").value
  const userLast = document.querySelector("#userLast").value
  const userTime = document.querySelector("#userTime").value
  const userSign = document.querySelector("#userSign").value

  fetch(`/api?name=${userName}${userLast}${userTime}${userSign}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#FirstName").textContent = data.FirstName
      document.querySelector("#LastName").textContent = data.LastName
      document.querySelector("#timeOfDay").textContent = data.timeOfDay
      document.querySelector("#ZodiacSign").textContent = data.ZodiacSign
      document.querySelector("#FavoriteSeason").textContent = data.FavoriteSeason
      
    });
  generateWuTangName()
}

function generateWuTangName() {
  const firstNameOptions = [ 'Flex',  'Luna', 'Golden', 'Inspectah', 'Masta', 'Raine', 'Sunna']
  const lastNameOptions = ['Star', 'Genius', 'Rebel', 'Heaven', 'Zilla', 'Ason', 'God', 'Justice']

  
  const wufirstName = firstNameOptions[Math.floor(Math.random() * firstNameOptions.length)]
  const wulastName = lastNameOptions[Math.floor(Math.random() * lastNameOptions.length)]
  
  const wuTangName = `${wufirstName} ${wulastName}`
  
  document.querySelector("#wutangName").textContent =  `Your Wu-Tang Clan name is: ${wuTangName}`
}
// document.getElementById("clickMe").onclick = makeReq;
//
// function makeReq(){
//
//   var userName = document.getElementById("userName").value;
//
//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);
//
//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation
//
//       } else {
//         // We reached our target server, but it returned an error
//
//       }
//     };
//
//     request.onerror = function() {
//       // There was a connection error of some sort
//     };
//
//     request.send();
// }
