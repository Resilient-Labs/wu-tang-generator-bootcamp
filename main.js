/* Pseudocode

Random Name Generator

User needs to:

Select answers from drop-down
Handled w HTML

Press submit and have their answers evaluated
Event listener and querySelector.value?

A random name is generated
Arrays and Math.floor()/Math.random()

See name on screen
('p').innerText = ''
 
function to count how many of each answer 

Press a button to start again 
reload()? */




// console.log(value);

class NameGenerator {
  constructor() {
    this.userEmoCount = 0
    this.userIsABoyCount = 0
    this.emoFirstNames = ['Rawr', 'XD', 'All-black', 'Perpetual', 'Bleach', 'Melancholic', 'Axe', 'Toxic', 'Inked']
    this.emoLastNames = ['Heartbreak', 'Skateshop', 'Cyclops', 'Horizon', 'Screech', 'Hot-Wrist', 'Cold-Heart', 'Composition', 'Loner']
    this.isABoyFirstNames = ['Litty', 'Cleanface', 'Tiny', 'Bro', 'Dirty', 'Hazardous', 'Dry-eyed', 'Wunada', 'Abercrombie']
    this.isABoyLastNames = ['Boyz', 'Kickback', 'Gang', 'Games', 'Skinned-Knees', 'Ponytail', 'Baller', 'Sweats', 'Hoodie']
    this.firstName = ''
    this.lastName = ''
    this.nameMessage = document.querySelector('.nameMessage')
  }
  chooseEmoOrBoy(e) {
    const selects = document.querySelectorAll('select');
    console.log('selects', selects)
    selects.forEach(select => {
      console.log('select', select)
      // console.log(select.selectedIndex, select.id)
      let selectedOption = select.options[select.selectedIndex] //select.options = array of options, select.selectedIndex = index number of selected option
      if (selectedOption.classList.contains('isAnEmo')) {
        this.userEmoCount++
      } else if (selectedOption.classList.contains('isABoy')) {
        this.userIsABoyCount++
      }
    })
    console.log('emo', this.userEmoCount)
    console.log('boy', this.userIsABoyCount)
    let choice = 'isABoy'
    if(this.userEmoCount > this.userIsABoyCount) {
      choice = 'emo'
    
    } else {
      choice = 'isABoy'
    }
    this.userEmoCount = 0
    this.userIsABoyCount = 0
    return choice
  }
  selectName () {
    const nameType = this.chooseEmoOrBoy()
    const firstIndex = Math.floor(Math.random() * 9)
    const lastIndex = Math.floor(Math.random() * 9)
    console.log(nameType)
    if(nameType === 'emo') {
      this.firstName = this.emoFirstNames[firstIndex]
      this.lastName = this.emoLastNames[lastIndex]
    } else {
     this.firstName = this.isABoyFirstNames[firstIndex]
      this.lastName = this.isABoyLastNames[lastIndex]
    }
    this.printName()
    return (this.firstName, this.lastName)
  }
  printName() {
//    this.nameMessage.innerText = this.firstName + ' ' + this.lastName
    this.nameMessage.innerText = `${this.firstName} ${ this.lastName}`
  }
}
const newGame = new NameGenerator

const button = document.querySelector("button")
button.addEventListener('click', (e) => newGame.selectName())


// document.querySelector('button').addEventListener('click', NameGenerator.countAnswerValue(e))

// const selectFear= document.getElementById('fear-select');
// const fearValue = selectFear.options[selectFear.selectedIndex].value;

// const selectClothes= document.getElementById('clothes-select');
// const clothesValue = selectClothes.options[selectClothes.selectedIndex].value;

// const selectHobby= document.getElementById('hobby-select');
// const HobbyValue = selectHobby.options[selectHobby.selectedIndex].value;

// const selectPlace= document.getElementById('place-select');
// const placeValue = selectPlace.options[selectPlace.selectedIndex].value;

// const selectSentence= document.getElementById('sentence-select');
// const sentenceValue = selectSentence.options[selectSentence.selectedIndex].value;

// const selectValue= document.querySelectorAll('select').selectedIndex;