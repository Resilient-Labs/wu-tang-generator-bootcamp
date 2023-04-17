// Add event listener to button with click event that triggers getNewName function

document.querySelector('button').addEventListener('click', getNewName)

// Function to generate Wu-Tang Clan name
function getNewName (){

  // Define array of possible first names
  const firstName = ['Beez', 'Boozie', 'Clonah','Deeckah'] 
  

  // Calculate index of first name by summing qOne and qTwo, and getting remainder with array length
  const qOne = document.querySelector('#year').value
  const qTwo = document.querySelector('#color').value
  const firstNameIndex = (qOne + qTwo) % firstName.length


// Define array of possible last names
  const lastName = ['Trappah', 'Dimez', 'Ganztaa', 'Runnah']


  // Get values of additional input fields

  const qthree = document.querySelector('#favorite').value
  const qfour = document.querySelector('#vacation').value
  const qfive = document.querySelector('#albums').value

  // Calculate index of last name by summing qthree, qfour, and qfive, and getting remainder with array length
  const lastNameIndex = ((qthree + qfour) + qfive) % lastName.length


  // Set result text with generated Wu-Tang Clan name using template literals
  document.querySelector('.result').innerText = `Your Wu-Tang Clan Name is ${firstName[firstNameIndex]} ${lastName[lastNameIndex]}`


 
}