document.querySelector('button').addEventListener('click', total)

// function makeReq(){

//   const userName = document.querySelector("#userName").value;

//   // fetch(`/api?findName=${}`)
//   //   .then(response => response.json())
//   //   .then((data) => {
//   //     console.log(data);
      
//   //   });

// }
function total(){ //tallying uo the characters in the woreds to get points
  let firstName = document.querySelector("#firstName").value
  let lastName = document.querySelector("#lastName").value
  let color = document.querySelector("#color").value
  let wuName = document.querySelector("#wuName").value
  let martialArts = document.querySelector("#martialArts").value
  let pointTotal = 0

  if(firstName.length <=5){
    pointTotal += 2
  }else if(firstName.length <=6){
    pointTotal += 3
  }else if(firstName.length <=7){
    pointTotal += 4
  }else if(firstName.length >=8){
    pointTotal += 5
  }

  if(lastName.length <=5){
    pointTotal += 2
  }else if(lastName.length <=6){
    pointTotal += 3
  }else if(lastName.length <=7){
    pointTotal += 4
  }else if(lastName.length >=8){
    pointTotal += 5
  }

  if(color.length <=5){
    pointTotal += 2
  }else if(color.length <=6){
    pointTotal += 3
  }else if(color.length <=7){
    pointTotal += 4
  }else if(color.length >=8){
    pointTotal += 5
  }

  if(wuName.length <=5){
    pointTotal += 2
  }else if(wuName.length <=6){
    pointTotal += 3
  }else if(wuName.length <=7){
    pointTotal += 4
  }else if(wuName.length >=8){
    pointTotal += 5
  }

  if(martialArts.length <=5){
    pointTotal += 2
  }else if(martialArts.length <=6){
    pointTotal += 3
  }else if(martialArts.length <=7){
    pointTotal += 4
  }else if(martialArts.length >=8){
    pointTotal += 5
  }
  odb(pointTotal)
}

function odb(pointTotal){
  let result = document.querySelector('#result')
  if(pointTotal == 10){
    result.innerText = 'The 10th Wonder'
  }else if(pointTotal <=12){
    result.innerText = 'Gaslight Alwayz'
  }else if(pointTotal <=14){
    result.innerText = '48 Powers'
  }else if(pointTotal <=16){
    result.innerText = `Ol' Dirty Bizarro`
  }else if(pointTotal <=18){
    result.innerText = 'U-God of War'
  }else if(pointTotal <=20){
    result.innerText = 'Masta Killa Bee'
  }else if(pointTotal <=22){
    result.innerText = 'The Black Lotus'
  }else if(pointTotal >=24){
    result.innerText = 'Celestial Cenobite'
  }
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
