document.querySelector('button').addEventListener('click', randomName)


function randomName(){
const firstQ = document.querySelector('#firstQ').value
const secondQ = document.querySelector('#secondQ').value
const thirdQ = document.querySelector('#thirdQ').value
const fourthQ = document.querySelector('#fourthQ').value
const fifthQ = document.querySelector('#fifthQ').value
    const wuWords = ['Shadow','Phantom','Venom','Blaze','Mystic','Iron','Ghost','Supreme','Lunar','Viper']
    const userInput = [firstQ, secondQ, thirdQ, fourthQ ,fifthQ]
    const wuName = userInput[Math.floor(Math.random() * userInput.length)]
    const wuNameTwo = Math.floor(Math.random() * wuWords.length)
    console.log(`${wuName} ${wuWords[wuNameTwo]}`)
   document.querySelector('h2').innerText = `${wuName} ${wuWords[wuNameTwo]}`
}