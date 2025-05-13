// getElementById

// Create a simple web application
// Use http to create the server and fs to read your html file.
// Try creating a cWutang generator 
// 'Raekwon','Method Man',' Ghostface Killah', 'Inspectah Deck', Ol Dirty Bastard'



// get references for the buttons
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('nameForm');
  const result = document.getElementById('result');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // get answers from the form
    const city = form.city.value.toLowerCase()
    const weather = form.weather.value.toLowerCase()
    const personality = form.personality.value.toLowerCase()
    const dance = form.dance.value.toLowerCase()
    const weapon = form.weapon.value.toLowerCase()

    // name in the arr 
    let nameList = []

    // function to check answers and choose names
    if (personality.includes('wild') || weapon.includes('mic')) {
      nameList = ['Ol\' Dirty Bastard', 'Ghostface Killah']
    } else if (personality.includes('cool') || dance.includes('smooth')) {
      nameList = ['Method Man', 'Raekwon']
    } else if (weather.includes('fog') || personality.includes('quiet')) {
      nameList = ['Inspectah Deck']
    } else {
      nameList = ['Raekwon', 'Method Man', 'Ghostface Killah', 'Inspectah Deck', 'Ol\' Dirty Bastard']
    }

    // randomize
    const randomName = nameList[Math.floor(Math.random() * nameList.length)];

    // display result
    result.textContent = 'Your Wu-Tang name is: ' + randomName;
  });
});