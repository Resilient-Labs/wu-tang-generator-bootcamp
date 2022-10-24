const firstWuName=['The', 'MC', 'Shaolin', 'Mad', 'Lyrical', 'Smooth']
const secondWuName=['Battler', 'Killa', 'Samurai', 'Shadow', 'Man', 'God']

document.querySelector('form').addEventListener('submit', getName)

function shuffle(firstWuName, secondWuName) {
  let currentIndexOne = firstWuName.length,  randomIndexOne
  // While there remain elements to shuffle.
  while (currentIndexOne != 0) {
    // Pick a remaining element.
    randomIndexOne = Math.floor(Math.random() * currentIndexOne)
    currentIndexOne--;
    // And swap it with the current element.
    [firstWuName[currentIndexOne], firstWuName[randomIndexOne]] = [
      firstWuName[randomIndexOne], firstWuName[currentIndexOne]]
  }
  let currentIndexTwo = secondWuName.length,  randomIndexTwo
  // While there remain elements to shuffle.
  while (currentIndexTwo != 0) {
    // Pick a remaining element.
    randomIndexTwo = Math.floor(Math.random() * currentIndexTwo)
    currentIndexTwo--;
    // And swap it with the current element.
    [secondWuName[currentIndexTwo], secondWuName[randomIndexTwo]] = [
      secondWuName[randomIndexTwo], secondWuName[currentIndexTwo]]
  }
  return firstWuName, secondWuName
}

shuffle(firstWuName, secondWuName)
console.log(firstWuName, secondWuName)

function getName(e){
  e.preventDefault()
  let rapper = parseInt(document.querySelector('input[name=rapper]:checked').value)
  let season = parseInt(document.querySelector('input[name=season]:checked').value)
  let movies = parseInt(document.querySelector('input[name=movies]:checked').value)
  let visit = parseInt(document.querySelector('input[name=visit]:checked').value)
  let iceCream = parseInt(document.querySelector('input[name=iceCream]:checked').value)
  let average = Math.round(((rapper + season + movies + visit + iceCream )/ 5))
  console.log(`${firstWuName[average]} ${secondWuName[average]}`)
  document.querySelector('h2').innerText = `${firstWuName[average]} ${secondWuName[average]}`

}
// const userName = document.querySelector("#userName").value;

