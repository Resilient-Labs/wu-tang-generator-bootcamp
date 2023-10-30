//button event listener to get everything
document.querySelector('#generateButton').addEventListener('click', getName)

//Set up five questions in html.


//set up two arrays with some names for first rapper name and last rapper name
//set up enough array elements in both arrays for values including 0 and 10 so 11 full names

const firstName = ['Master', 'Superior', 'Ultimate', 'Material', 'Demon', 'Diamond', 'Savage', 'Boss', 'Respectable', 'MC', 'Judge']
const lastName = ['Flex', 'Knight', 'Rep', 'Gangsta', 'Snipah', 'Professah', 'Monk', 'Spoketh', 'Thrilla', 'Juke', 'Loquacious']


function getName() {
  if (document.querySelector('input').value == null) {
    alert('Please answer all questions')
  }
  //each question radio button has a value attribute with a value of 1 through 3
  //Get the value of each question response with parseInt from value attribute.
  let btn1 = Math.floor(parseInt(document.querySelector('input[name=anime]:checked').value))
  let btn2 = Math.floor(parseInt(document.querySelector('input[name=iceCream]:checked').value))
  let btn3 = Math.floor(parseInt(document.querySelector('input[name=superhero]:checked').value))
  let btn4 = Math.floor(parseInt(document.querySelector('input[name=development]:checked').value))
  let btn5 = Math.floor(parseInt(document.querySelector('input[name=videoGame]:checked').value))

  let score = (btn1 + btn2 + btn3 + btn4 + btn5)

  console.log(score)
  //use score as index number for each of the arrays and use it to pull the name from each array.
  let firstAnswer = firstName[score]
  let secondAnswer = lastName[score]
  //plug each name from each name array into DOM
  document.querySelector('#WuTangName').innerText = `${firstAnswer} ${secondAnswer}`




}
