// got help from Yorelisa and Ludjy on this

const wuMeBtn = document.querySelector('#wuMeBtn')
const resetBtn = document.querySelector('#resetBtn')

function generateWuTangName() {
  const q1Input = document.querySelector('#q1Input').value
  const q2Input = document.querySelector('#q2Input').value
  const partySelection = document.querySelector('#partySelection').value
  const potatoSelection = document.querySelector('#potatoSelection').value
  const seasonsSelection = document.querySelector('#seasonsSelection').value
  const wuTangNameResult = document.querySelector('#wuTangNameResult')

  // console.log(partySelection)
  // console.log(q2Input)

  // array of possible first names (options need to correspond to option length if you have 5 options, array needs to be at least 5 elements long)
  const wuFirstNames = ['Smilin', 'Lazy-assed', 'Tha', 'Dogface', 'Hollerin\'', 'Dumb', "Misunderstood", "Jazzy", "Masterful", "Thunderous", "Ghostly", "Phunky", "Fearless", "Shocking", "Rugged", "Mysterious", "Sinister", "Lyrical", "Supreme", "Silent"]

  // calculate index of first name by summing the relevant questions and getting the remainder const X = (q1 + q2) % ARRAYOFFIRSTNAMES.length
  const generatedWuFirstNameIndex = (q1Input.length + q2Input.length) % wuFirstNames.length;

  // array of possible last names
  const wuLastNames = ['Wanderer', 'Bandit', 'Mercenary', 'Menace', 'Frank', 'Baby']

  // calculate index of each name by summing the relevant questions and getting the remainder const X = (q1 + q2) % ARRAYOFLASTNAMES.length
  const generatedWuLastNameIndex = (partySelection + potatoSelection + seasonsSelection) % wuLastNames.length;

  // combine first and last names to create Wu-Tang name
  const generatedWuTangName = `${wuFirstNames[generatedWuFirstNameIndex]} ${wuLastNames[generatedWuLastNameIndex]}`;

  // update HTML to display generated name
  wuTangNameResult.textContent = generatedWuTangName;

  console.log(generatedWuTangName)
  console.log(wuFirstNames[generatedWuFirstNameIndex])

}

function reset() {
  location.reload()
}

// prevent form from submitting on button click
wuMeBtn.addEventListener('click', (event) => event.preventDefault());

// generate name on button click
wuMeBtn.addEventListener('click', generateWuTangName)

// runs the reset function when the resetBtn is clicked
resetBtn.addEventListener('click', reset)

