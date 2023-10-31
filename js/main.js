document.querySelector('#clickMe').addEventListener('click', getName)

function getName(){

  //grab values from input in HTML
  let games = document.querySelector('.games').value.toLowerCase().trim()
  let cook = document.querySelector('.cook').value.toLowerCase().trim()
  let veg = document.querySelector('.veg').value.toLowerCase().trim()
  let science = document.querySelector('.science').value.toLowerCase().trim()
  let instrument = document.querySelector('.instrument').value.toLowerCase().trim()


  let firstName
  let lastName
  let points = 0

  //store all the values from html in an array
  let valueArray=[veg, cook, games, science, instrument]

  let number = Math.round(Math.random() * 4)
  let number2 = Math.round(Math.random() * 4)

  //Wutang name values
  let array = ["Shaolin", "Inspectah", "Method", "Killah", "Ghostface"]
  let array2 = ["Uzi", "Mamba", "Gravedigga", "Tragedy", "Priest"]

  //check to see if there is more than one yes 
  let yesses= valueArray.filter( element => element === 'yes')

  //check for non-relevant values

let answers = valueArray.every(element => element === 'yes' || element ==="no")
console.log(answers)

if (!answers){
  alert('Please answer all questions with yes or no')
  return

}
  if (yesses.length > 1){
    firstName = array[number]
    console.log(number)
  } else {

    if (instrument === 'yes'){

      points += 0
      firstName = array[points]

    } else if(cook === 'yes'){

      points += 1
      firstName = array[points]

    } else if(games === 'yes'){

      points += 2 
      firstName = array[points]

    } else if (veg === 'yes'){

      points += 3 
      firstName = array[points]

    } else if(science === 'yes'){

      points += 4
      firstName = array[points]

    }
  }


  lastName = array2[number2]

  document.querySelector('h2').textContent = `Your Wu-Tang name is ${firstName} ${lastName}`

}



