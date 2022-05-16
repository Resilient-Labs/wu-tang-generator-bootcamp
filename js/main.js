//function to generate a random adjective and a random noun on click

document.querySelector('button').addEventListener('click', result)
const h1 = document.querySelector('h1')

//check to see how many values were selected the most
//this function takes into consideration which value the user selects and how many times they select it 
// ex: if they selected the letter B the most amount of times as their answer - this function returns the max element as "B" 
function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

// this function result we assigned variables to the input value 
// the input name was targetted and :checked is utilizede to see if the user actually clicked on the button
function result(){
  let one = document.querySelector('input[name=qOne]:checked').value
  let two = document.querySelector('input[name=qTwo]:checked').value
  let three = document.querySelector('input[name=qThree]:checked').value
  let four = document.querySelector('input[name=qFour]:checked').value
  let five = document.querySelector('input[name=qFive]:checked').value
  let choices = [one, two, three, four, five]
  let maxElement = mode(choices) // mode as in the math term whatever choice is selected the most
  console.log(maxElement)
  console.log(choices)
  
  if(maxElement === 'a'){
    const adjectiveOne = ['Sad', 'Happy', 'Young', 'Fresh', 'Loud'] // assigned adjectivesOne to the list of strings
    const nounOne = ['Bullet', 'Topanga', 'Twister', 'Velvet', 'Thunder']
    const wordsOne = { adjectiveOne, nounOne } //taking the 2 variables from 45 & 46 arrays 
    const orderOne = ['adjectiveOne', 'nounOne'] // line 48 determines the order of adjective and noun 

   
    // assigned a variable of selectedOne to the new array partOfSpeech, then selectedOne function runs orderOne function 
    // line 54 = we're making a variable which takes in the new array "partOfSpeech" (hence the square bracket notation b/c there is an array) 
    const selectedOne = orderOne.map((partOfSpeech) => {
      const choices = wordsOne[partOfSpeech] // we're assigned the variable choices to wordsOne (which can be a combo of any of the strings in lines 45 and 46 b/c wordsOne is defined in line 47) + partOfSpeech = empty array 
      return choices[Math.floor(Math.random() * choices.length)]
    })

    //Gabby's Analogy: partOfSpeech = empty plate
    // wordsOne = buffet
    // line 55 = our tongs and it's choosing one protein (adjective) and one veggie (noun) and then the plate is full and it returns to the person who is gonna eat AKA the user 

    const resultsOne = selectedOne.join(' ') // 'join' takes out the comma invetween the adjective and noun b/c resultsOne will return "ex: sad,bullet"
    h1.innerText = `${resultsOne}` // template literal was chosen b/c resultsOne is always diferent and it enables us to pass multiple plates of food into it 
    
  } else if (maxElement === 'b'){
    const adjectiveTwo = ['Strong', 'Weak', 'Sassy', 'Quiet', 'Red']
    const nounTwo = ['Pain', 'Storm', 'Sasquatch', 'Bastard', 'Dog']
    const wordsTwo = { adjectiveTwo, nounTwo }
    const orderTwo = ['adjectiveTwo', 'nounTwo']
    const selectedTwo = orderTwo.map((partOfSpeech) => {
      const choices = wordsTwo[partOfSpeech]
      return choices[Math.floor(Math.random() * choices.length)]
    })

    const resultsTwo = selectedTwo.join(' ')
    h1.innerText = `${resultsTwo}`

  } else if (maxElement === 'c'){
    const adjectiveThree = ['Angry', 'Little', 'Big', 'Heavy', 'Light'] 
    const nounThree = ['Money', 'Nugget', 'Biscuit', 'Animal', 'Foot']
    const wordsThree = { adjectiveThree, nounThree }
    const orderThree = ['adjectiveThree', 'nounThree']
    const selectedThree = orderThree.map((partOfSpeech) => {
      const choices = wordsThree[partOfSpeech]
      return choices[Math.floor(Math.random() * choices.length)]
    })

    const resultsThree = selectedThree.join(' ')
    h1.innerText = `${resultsThree}`

  } else if (maxElement === 'd'){
    const adjectiveFour = ['Childish', 'Shiny', 'Fat', 'Quick', 'Dirty'] 
    const nounFour = ['Handler', 'Smoke', 'Doctor', 'Creek', 'Strip']
    const wordsFour = { adjectiveFour, nounFour }
    const orderFour = ['adjectiveFour', 'nounFour']
    const selectedFour = orderFour.map((partOfSpeech) => {
      const choices = wordsFour[partOfSpeech]
      return choices[Math.floor(Math.random() * choices.length)]
    })

    const resultsFour = selectedFour.join(' ')
    h1.innerText = `${resultsFour}`

  } else if (maxElement === 'e'){
    const adjectiveFive = ['Black', 'Pissy', 'Pretty', 'Classic', 'Slow']
    const nounFive = ['Worm', 'Snake', 'Heat', 'Bunny', 'Sandwich']
    const wordsFive = { adjectiveFive, nounFive }
    const orderFive = ['adjectiveFive', 'nounFive']
    const selectedFive = orderFive.map((partOfSpeech) => {
      const choices = wordsFive[partOfSpeech]
      return choices[Math.floor(Math.random() * choices.length)]
    })

    const resultsFive = selectedFive.join(' ')
    h1.innerText = `${resultsFive}`
  }
  let stopAnimation = document.querySelector('.submit') //
  stopAnimation.classList.add('noAnimation') // "noAnimation is in our CSS and it stops once it is clicked"
}