//Names: Philosopher, smiling, fool, bandit, lucky, dynamite, crane, tiger, bear, bitter, menace, knight, black, night, contender, bad, last, darts, spade, king, juice, bloody, eye, great, bachelor, fiend, wildin', hot, sir, tough, loved, trick,  mad, sin, yin, tang, yan, fly, smilin', robin, sunny, golden, gambler, dice, eight ball, ice, hearts, smoke, quick, dirty, bunny, snake, eyes, little, big, young, thunder, lighting, Queen, king, stallion, mighty, dragon, fox, sly, sleek, gleamin, ace, dark, batter, dancin', light

//create event listeners 

// let nameBtn= document.querySelector('button').addEventListener('click', nameResult)


// function nameResult(){

// }




//function to retrieve users input responses to determine name generated 


//connect value of responses - to name choice ?

//function to generate a random name by selecting 2 words

// let firstName=[ ]

// let lastName= []



// function generateName(){
  // result.innerText=''
  // var randomizeNames= Math.floor(Math.random()* firstName.length)
  // var randLast = Math.round(Math.random()* lastName.length)
  // console.log(firstName[randomizeNames] + lastName[randomizeNames])
  // result.innerText= ("From this day forth you will be known as: "+first.Name[randomizeNames]+ " "+last.Name[randomizeNames])
  // `${nameResult}`
//insert else if conditonals to generate random name according to users inputs /answer values, the values of the answers that were selected the most for each question 
//}
//check to see how many question/answer values were selected ( the most? )
//define variables 
// place name strings in a an array [ ]
//else if statements 


//use Math.floor(Math.random( )* ?) to randomize name choice 



// use join() method to combine 2 strings to display result in the DOM 


let result = document.querySelector('.name_results')

let submit = document.querySelector('.submit').addEventListener('click', generateName)


//ex:
// document.querySelector('button').addEventListener('click', result)
// const result = document.querySelector('result')

// //check to see how many values were selected the most


function mostSelected(array){
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++){
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount){
            maxEl = el;
            maxCount = modeMap[el];
            console.log(maxEl)
        }
    }
    return maxEl;
}



 function generateName(){
   let one = document.querySelector('input[name=Q1]:checked').value
   let two = document.querySelector('input[name=Q2]:checked').value
   let three = document.querySelector('input[name=Q3]:checked').value
   let four = document.querySelector('input[name=Q4]:checked').value
   let five = document.querySelector('input[name=Q5]:checked').value

   let choices = [one, two, three, four, five]

   let maxElement = mostSelected(choices)

   console.log(maxElement)
   console.log(choices)

   if(maxElement === '1'){
     const adjectiveOne = [ 'Young', 'Fresh', 'Loud', 'tough', 'smiling', 'lucky', 'bitter', 'menace', 'tough' ]

     const nounOne = ['Bullet', 'Twister', 'Velvet', 'Thunder', 'Philosopher', 'fool', 'bandit', 'dynamite', 'crane', 'tiger', 'bear', 'trick', 'sin', 'yin', 'tang', 'yan', 'robin']
     
     const wordsOne = { 
       adjectiveOne, nounOne
      }

     const orderOne = ['adjectiveOne', 'nounOne']

     const selectedOne = orderOne.map((partOfSpeech) => {
       const choices = wordsOne[partOfSpeech]
       return choices[Math.floor(Math.random() * choices.length)]
     })

     const resultsOne = selectedOne.join(' ')
     result.innerText = `${resultsOne}`  

   } else if (maxElement === '2'){
     const adjectiveTwo = ['king', 'juice', 'bloody', 'eye', 'great', 'bachelor', 'fiend', 'wildin', 'dancin', 'fly', 'smilin', 'sunny', 'Red']

     const nounTwo = ['Pain', 'Storm', 'Dog', 'gambler', 'dice', 'eightball', 'ice', 'hearts', 'bunny', 'snake', 'eyes']

     const wordsTwo = { 
       adjectiveTwo, nounTwo 
      }

     const orderTwo = ['adjectiveTwo', 'nounTwo']

     const selectedTwo = orderTwo.map((partOfSpeech) => {
       const choices = wordsTwo[partOfSpeech]
       return choices[Math.floor(Math.random() * choices.length)]
     })

     const resultsTwo = selectedTwo.join(' ')
     result.innerText = `${resultsTwo}`

    } else if (maxElement === '3'){
     const adjectiveThree = ['golden', 'hot', 'sir', 'mighty', 'sly', 'sleek', 'gleamin', 'dark','quick', 'dirty','little', 'big', 'young', 'Heavy', 'Light'] 

     const nounThree = ['Money', 'night','thunder', 'lighting', 'light', 'Queen', 'King', 'dragon']

     const wordsThree = { 
       adjectiveThree, nounThree 
      }

     const orderThree = ['adjectiveThree', 'nounThree']

     const selectedThree = orderThree.map((partOfSpeech) => {
       const choices = wordsThree[partOfSpeech]
       return choices[Math.floor(Math.random() * choices.length)]
     })

     const resultsThree = selectedThree.join(' ')
     result.innerText = `${resultsThree}`

   } else if (maxElement === '4'){
     const adjectiveFour = ['Childish', 'Shiny', 'Quick', 'Dirty','mad', 'loved', 'knight', 'black', 'contender', 'bad', 'last', 'darts', 'spade']

     const nounFour = ['Handler', 'night','thunder', 'lighting', 'light', 'Queen', 'King', 'dragon', 'ace', 'stallion', 'fox', 'batter']

     const wordsFour = {
        adjectiveFour, nounFour 
      }
     const orderFour = ['adjectiveFour', 'nounFour']

     const selectedFour = orderFour.map((partOfSpeech) => {
       const choices = wordsFour[partOfSpeech]
       return choices[Math.floor(Math.random() * choices.length)]
     })

     const resultsFour = selectedFour.join(' ')
     result.innerText = `${resultsFour}`

    }

  //  let stopAnimation = document.querySelector('.submit')
  //  stopAnimation.classList.add('noAnimation')

 }