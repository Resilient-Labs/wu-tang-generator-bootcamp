

    let selectionOne = 0;
    let selectionTwo = 0; //2
    let selectionThree = 0; //3
    let selectionFour = 0; //4
    let selectionFive = 0;
    let selectionSix = 0; //6
    let selectionSeven = 0;
    let selectionEight = 0; //8
    let selectionNine = 0;
    let selectionTen = 0; //10

document.getElementById("red").addEventListener('click', function() {
 // alert ("potato")
  selectionOne = parseInt(document.getElementById("red").value); //1
  //console.log(selectionOne)
})

document.getElementById("blue").addEventListener('click', function() {
selectionTwo = parseInt(document.getElementById("blue").value)
})

document.getElementById("dogs").addEventListener('click', function() {
selectionThree = parseInt(document.getElementById("dogs").value)
})

document.getElementById("platypus").addEventListener('click', function() {
selectionFour = parseInt(document.getElementById("platypus").value)
})

document.getElementById("cheese").addEventListener('click', function() {
  selectionFive = parseInt(document.getElementById("cheese").value); //5
  //console.log(selectionTwo)
})

document.getElementById("chicken").addEventListener('click', function() {
selectionSix = parseInt(document.getElementById("chicken").value)
})

document.getElementById("young").addEventListener('click', function() {
  selectionSeven = parseInt(document.getElementById("young").value); //7
})

document.getElementById("old").addEventListener('click', function() {
selectionEight = parseInt(document.getElementById("old").value)
})

document.getElementById("hipHop").addEventListener('click', function() {
selectionNine = parseInt(document.getElementById("hipHop").value)
})

document.getElementById("reggaeton").addEventListener('click', function() {
selectionTen = parseInt(document.getElementById("reggaeton").value)
})

document.querySelector("button").addEventListener('click', function() {
 let sum = selectionOne + selectionTwo + selectionThree + selectionFour + selectionFive + selectionSix + selectionSeven + selectionEight + selectionNine + selectionTen
console.log(sum)
if(sum === 23){
  document.getElementById("hi").innerText = "Wu-tang"
}else if(sum === 24){
  document.getElementById("hi").innerText = "Childish Gambino"
}else if(sum === 25){
  document.getElementById("hi").innerText = "Noble Leon"
}else if(sum === 26){
  document.getElementById("hi").innerText = "Permiscuous Penguin"
}else if(sum === 27){
  document.getElementById("hi").innerText = "Zeus's neice"
}else if(sum === 28){
  document.getElementById("hi").innerText = "N'bdy's BIZNIS"
}else if(sum === 29){
  document.getElementById("hi").innerText = "Foxy Foxy"
}else{
  document.getElementById("hi").innerText = "Sorry, no result."
}
})
