document.querySelector('button').addEventListener('click', sendReq)

function sendReq() {
    // const word = document.querySelector('input').value;
var firstName = document.querySelector('#firstName').value.trim(); //removes whitespaces from ends of str
var lastName = document.querySelector('#lastName').value.trim();
var season = document.querySelector('#seasons').value;
var element = document.querySelector('#elements').value;
var color = document.querySelector('#colors').value;

console.log('First Name:', firstName);
console.log('Last Name:', lastName);
  //message check if names arent typed into input bars
  if (firstName === '' || lastName === '') {
    document.querySelector('h2').innerText = 'Please enter full name, young grasshoppa!';
    return;
  } //Stop function if names are missing, puts message in my h2 w id of wutangname

  var apiUrl = `/api?firstName=${firstName}&lastName=${lastName}&season=${season}&element=${element}&color=${color}`;

  fetch(apiUrl)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log(data);
    document.querySelector('h2').innerText = `Your Wu-Tang Clan Name: ${data.name}`;
  })
  .catch(function(err) {
    console.error('Darn, Something went wrong:', err);
    });
  };
    // fetch(apiUrl)
    // .then (res => res.json())
    // .then (data => {

    //     console.log(data)
    //     document.querySelector('h2').innerHTML = data.message

    // })
