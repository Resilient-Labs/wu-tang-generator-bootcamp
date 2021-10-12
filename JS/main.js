document.querySelector('#enter').addEventListener('click', wutangGenerator)
let name1 = ["Tha","Irate","Sarkastik","Shriekin’","Misunderstood","Pesty","Dynamic","Lazy-assed","X-cessive"]
let name2 = ["Beggar","Conqueror","Lover","Dominator","Overlord","Criminal","Menace","Wizard","Contender"]
function wutangGenerator(){
  let index = 0
  document.querySelectorAll('select').forEach(e => {
    let options = Array.from(e)
    let strUser = Number(e.options[e.selectedIndex].value);
    index += strUser
  })

  index = Math.round(index/5)
  document.getElementById('firstName').innerText = `${name1[index]} ${name2[index]}`
  

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
