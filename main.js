//function to generate a random adjective and a random noun on click

document.querySelector('button').addEventListener('click', result)
const h1 = document.querySelector('h1')
//4 is just a variable, 

//tying to result button at 40

//check to see how many values were selected the most
//this function takes into consideratoin which value the user selects and how many times they select it
//ex: if they selected the letter B the most amount of times as their answer = this function returns the max element as "B"

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

//8-28 GOOGLED function mode is measuring how many times someone selected a,b,c,d,e
//this function result we assigned variables to the input value
//the input name was targetted and :checked is utilized to see if the user actually clikced on the button

function result(){
  let one = document.querySelector('input[name=qOne]:checked').value
  let two = document.querySelector('input[name=qTwo]:checked').value
  let three = document.querySelector('input[name=qThree]:checked').value
  let four = document.querySelector('input[name=qFour]:checked').value
  let five = document.querySelector('input[name=qFive]:checked').value
  let choices = [one, two, three, four, five]
  let maxElement = mode(choices)
  console.log(maxElement)
  console.log(choices)

  // line39 = implementing that function
  //33-37 = checking input for value
  //: checked to see if person clicked it
  //put in array at 38, named choices, goes into function at 39 
  
  if(maxElement === 'a'){
    const adjectiveOne = ['Brutal', 'Fallen', 'Chemical', 'Fresh', 'Loud']
    //assigned adjectivesOne to the list of strings
    const nounOne = ['Machine', 'Corpse', 'Honey', 'Kitten', 'Rescue']
    const wordsOne = { adjectiveOne, nounOne } //taking 2 variables from 45 and 46
    const orderOne = ['adjectiveOne', 'nounOne'] // determines the order of adjective and noun

    //what does this mean
    //asigned a variable of selectedOne to the new array partOfSpeech, then you ran the function runs orderOne function

    //line below this names the array
    //.map creates a new array from an array you already have, so partOfSpeech was named/
    //targeting the array of orderOne
    //assigned a varaible of selectedOne to the new array partsOfSpeech, then seelectedOne function runs orderOne function
    const selectedOne = orderOne.map((partOfSpeech) => {
      const choices = wordsOne[partOfSpeech]
      //we're assigning the variable choices to wordsOne (which can be a combo of any of the strings in lines 56 and 57. bc wordsOne is defined in 47). + partsofSpeech = empty array 
      
      return choices[Math.floor(Math.random() * choices.length)]
    })

//partOfSpeech is your empty plate,
//wordsOne is buffet, 
//line 73 is tongs
//its choosing 1 protein(adjective) and 1 veggie(noun)
//putting it into plate, and calling it day when there is 1 pro 1 veggie
//now it return the plates to whoever is gonna eat

    
    //made variable sof adjectives and nouns
    //53-55 googled

    const resultsOne = selectedOne.join(' ') //.join = joins the two strings and takes out the comma and adds a space (otherwise it will do "sad,bullet")
    h1.innerText = `${resultsOne}` //template literal, h1 is defined at the beginning
    //we're not monog, we are hoes, we cant just have one result
    //in 88, selectedOne is empty plate of food, 
//why in line 88 we are using template literal 


  } else if (maxElement === 'b'){
    const adjectiveTwo = ['Strong', 'Bitter', 'Dark', 'Dusky', 'Spectral']
    const nounTwo = ['Pain', 'Storm', 'Guts', 'Bastard', 'Hangover']
    const wordsTwo = { adjectiveTwo, nounTwo }
    const orderTwo = ['adjectiveTwo', 'nounTwo']
    const selectedTwo = orderTwo.map((partOfSpeech) => {
      const choices = wordsTwo[partOfSpeech]
      return choices[Math.floor(Math.random() * choices.length)]
    })

    const resultsTwo = selectedTwo.join(' ')
    h1.innerText = `${resultsTwo}`

  } else if (maxElement === 'c'){
    const adjectiveThree = ['Angry', 'Crimson', 'Trash', 'Cryptic', 'Light'] 
    const nounThree = ['Decay', 'Bones', 'Tomb', 'Harlot', 'Vixen']
    const wordsThree = { adjectiveThree, nounThree }
    const orderThree = ['adjectiveThree', 'nounThree']
    const selectedThree = orderThree.map((partOfSpeech) => {
      const choices = wordsThree[partOfSpeech]
      return choices[Math.floor(Math.random() * choices.length)]
    })

    const resultsThree = selectedThree.join(' ')
    h1.innerText = `${resultsThree}`

  } else if (maxElement === 'd'){
    const adjectiveFour = ['Childish', 'Blazing', 'Sick', 'Jaded', 'Dirty'] 
    const nounFour = ['Death', 'Smoke', 'Fangs', 'Rejects', 'Devil']
    const wordsFour = { adjectiveFour, nounFour }
    const orderFour = ['adjectiveFour', 'nounFour']
    const selectedFour = orderFour.map((partOfSpeech) => {
      const choices = wordsFour[partOfSpeech]
      return choices[Math.floor(Math.random() * choices.length)]
    })

    const resultsFour = selectedFour.join(' ')
    h1.innerText = `${resultsFour}`

  } else if (maxElement === 'e'){
    const adjectiveFive = ['Rogue', 'Stinky', 'Fevered', 'Classic', 'Scarlet']
    const nounFive = ['Worm', 'Blood', 'Flesh', 'Dust', 'Iron']
    const wordsFive = { adjectiveFive, nounFive }
    const orderFive = ['adjectiveFive', 'nounFive']
    const selectedFive = orderFive.map((partOfSpeech) => {
      const choices = wordsFive[partOfSpeech]
      return choices[Math.floor(Math.random() * choices.length)]
    })

    const resultsFive = selectedFive.join(' ')
    h1.innerText = `${resultsFive}`
  }
  let stopAnimation = document.querySelector('.submit')
  stopAnimation.classList.add('noAnimation')
}
//this stopanimation is in or css and it stops the button once it is clicked