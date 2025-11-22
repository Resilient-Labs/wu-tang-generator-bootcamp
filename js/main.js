
//  Generates a Wu-Tang Clan name based on user input.
//  Enter a name, user click button to generate a Wu-Tang name.
//  generate name from an array of wutang names. 
//  use Math.random to select a random name from the array
//  display generated name on the screen

//some help with Layomi


document.querySelector('#button').addEventListener('click', generateName)

function generateName() {

  // const input = document.querySelector("#Name").value;

  const grabNames = ['High Chief', 'Shallah. The Original', 'Hott dolla', 'U-Godzilla', 'Candy Love', '5th Boss', 'Jizah', 'Prince Rakeem', 'Masta Shotta', 'Queen Don']

  let nameIndex = Math.floor(Math.random() * 10)


  let name = grabNames[nameIndex]
  console.log(nameIndex)

  document.getElementById('genName').innerText = name




};
