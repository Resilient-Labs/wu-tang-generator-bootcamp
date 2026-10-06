const button = document.querySelector('.btn')
const nameInput = document.querySelector('.city')

let woo

document.querySelector("button").addEventListener("click", woo);

function woo() {

  // Get the answer from each question 
  const color = document.querySelector('input [name ="q1"]:checked')
  const activity = document.querySelector('input [name ="q2"]:checked')
  const meal = document.querySelector('input [name ="q3"]:checked')
  const animal = document.querySelector('input [name ="q4"]:checked')
  const emotion = document.querySelector('input [name ="q5"]:checked')
} 
  // Calling all the parameters 
  fetch(`/name?color=${color}&activity=${activity}&meal=${meal}&animal=${animal}&emotion=${emotion}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

    }) 

// Each question has to be answered 
if (!color || !activity || !meal || !animal || !emotion) {
    nameInput.value = "must answer all the questions first";
    return;
  }

  // // The actual values 
  // const colorAnswer = color.value
  // const activityAnswer = activity.value
  // const mealAnswer = meal.value
  // const animalAnswer = animal.value
  // const emotionAnswer = emotion.value


  // // Build each first name 
  // const firstPart =
  //   firstNames[colorAnswer] ||
  //   firstNames[activityAnswer] ||
  //   firstNames[mealAnswer];


  // // Build each last name 
  // const secondPart =
  //   secondNames[animalAnswer] ||
  //   secondNames[emotionAnswer];

  // //The generated name into the input box 
  // const wuTangName = `${firstPart} ${secondPart}`





//function makeReq(){















//const userName = document.querySelector("#userName").value;

//let query = questions.map(function (questions, index) {
// let queue return question + '=' + userAnswers[index] // q1=a, q2=a these go into an array
//})

//fetch('/api?' + query)
//.then(response => response.json())
//.then((data) => {
//console.log(data);
//document.querySelector("#personName").textContent = data.name
//document.querySelector("#personStatus").textContent = data.status
//document.querySelector("#personOccupation").textContent = data.currentOccupation
//});

//}

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
