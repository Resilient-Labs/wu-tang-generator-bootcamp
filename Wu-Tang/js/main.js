const a1 = ['JawnJohn', 'Buzz' ,'Prince','Decktape']
const a2 = ['Hittah','Knuckles','Juice','Buttah']
const b1 = ['Babi','Honey','Ruby','Diamond']
const b2 = ['Concrete','Chokehold','Shotta','fighta']
const c1 = ['ALSO KNOWN AS', 'aka', 'The regime','george']
const c2 = ['Also known as', 'AK-47', 'changa','jake']

let responeArr = []
let arespone = []
let brespone = []
let crespone = []

document.querySelector('#clickMe').addEventListener('click', Shaolin)
function Shaolin(){
  console.log(document.querySelector('input[name="basic"]:checked').value)
  for (let i = 1; i <= 5; i++){
    responeArr.push(docuemnt.querySelector(`input[name="${i}"]:checked`).value)
  }

console.log(responeArr)
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
