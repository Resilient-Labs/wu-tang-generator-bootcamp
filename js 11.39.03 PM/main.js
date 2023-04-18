let btn = document.querySelector('button');
let title = document.querySelector('h1');


btn.addEventListener('click', getName);

function getName() {
  let one = document.querySelector('#one').value;
  let two = document.querySelector('#two').value;
  let three = document.querySelector('#three').value;
  let four = document.querySelector('#four').value;
  let five = document.querySelector('#five').value;

  let randomName = [one, two, three, four, five];
  let ticketOne = Math.floor(Math.random() * 5);
  let ticketTwo = Math.floor(Math.random() * 5);

  let WuNameOne = randomName[ticketOne].toLowerCase();
  let WuNameTwo = randomName[ticketTwo].toLowerCase();

  let result = document.querySelector('#result');
  result.innerText = `Your Wu Tang Name is ${WuNameOne} ${WuNameTwo}`;
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
