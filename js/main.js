//Worked on with Amaury,R&ndy,and Malik
const newName = document.querySelector('#newName')



// We've created a point system based on the length of the chosen answers in the form. The total amount of points is then sent to the API which will check where those point totals fall serverside. Depending on which range they fall in, a name will be chosen from an array and displayed in the DOM!

function checkPoints() {
  pointTotal = 0
  const first = document.querySelector('#first').value
  const last = document.querySelector('#last').value
  const question1 = document.querySelector('#Q1').value
  const question2 = document.querySelector('#Q2').value
  const question3 = document.querySelector('#Q3').value
console.log(question1)
  if (first.length > 0 && first.length <= 3) {
    pointTotal += 0
  } else if (first.length > 3 && first.length <= 6) {
    pointTotal += 1
  } else if (first.length > 6 && first.length <= 9) {
    pointTotal += 2
  } else if (first.length > 9 ) {
    pointTotal += 3
  }

  if (last.length > 0 && last.length <= 4) {
    pointTotal += 0
  } else if (last.length > 4 && last.length <= 6) {
    pointTotal += 1
  } else if (last.length > 6 && last.length <= 9) {
    pointTotal += 2
  } else if (last.length > 9 ) {
    pointTotal += 3
  }

  if (question1.length <= 3) {
    pointTotal += 0
  } else if (question1.length === 4) {
    pointTotal += 1
  } else if (question1.length === 5) {
    pointTotal += 2
  } else if (question1.length >= 6) {
    pointTotal += 3
  }

  if (question2.length === 4) {
    pointTotal += 1
  } else if (question2.length === 5) {
    pointTotal += 2
  } else if (question2.length > 6) {
    pointTotal += 3
  } 

  if (question3.length <= 6) {
    pointTotal += 0
  } else if (question3.length <= 12) {
    pointTotal += 1
  } else if (question3.length <= 15) {
    pointTotal += 2
  } else if (question3.length >= 16) {
    pointTotal += 3
  }
  console.log(pointTotal)
// calling the api function inside of my point function
  
if(first == ''|| last == '' || question1 == '' || question2 == '' || question3 == ''){
  return alert('Please fill out all fields and Protect Ya Neck!')
}else{
  makeReq(pointTotal)
}
}

function makeReq(pointTotal) {

  fetch(`/api?pointSystem=${pointTotal}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      newName.innerText = data.name[Math.floor(Math.random()*3)]
    });

}

document.querySelector('#clickMe').addEventListener('click', checkPoints)

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
