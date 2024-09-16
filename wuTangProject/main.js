const btn = document.querySelector('.wu')
const generatedName = document.querySelector('.result')

const wuNameOptions = ["Wicked Overlord","Mighty Genius", "Profound Samurai", "Wacko Wanderer", "Intellectual Dominator",
"Leon Cliffer", "Hostile Avenger", "Pikachu Charizard Handler", "Mighty Alpha" , "Midgnight Profit"]

btn.addEventListener("click", ()=>{
const color = document.querySelector(".color").value
const food = document.querySelector(".food").value
const destination = document.querySelector(".destination").value
const pokemon = document.querySelector(".pokemon").value
const coast = document.querySelector(".coast").value
const result = color*food*destination*pokemon*coast
console.log(result)
if(result<=23){
  generatedName.innerHTML = `Your wu name is ${wuNameOptions[0]}`
}else if (result<=56) {
  generatedName.innerHTML = `Your wu name is ${wuNameOptions[1]}`
}else if (result<=75){
  generatedName.innerHTML = `Your wu name is ${wuNameOptions[2]}`
}else if(result<=100){
  generatedName.innerHTML = `Your wu name is ${wuNameOptions[3]}`
}else if(result<=125){
  generatedName.innerHTML = `Your wu name is ${wuNameOptions[4]}`
}else if(result<=150){
  generatedName.innerHTML = `Your wu name is ${wuNameOptions[5]}`
}else if(result<=175){
  generatedName.innerHTML = `Your wu name is ${wuNameOptions[6]}`
}else if(result<=200){
  generatedName.innerHTML = `Your wu name is ${wuNameOptions[7]}`
}else if(result<=225){
  generatedName.innerHTML = `Your wu name is ${wuNameOptions[8]}`
}else if(result<=250){
  generatedName.innerHTML = `Your wu name is ${wuNameOptions[9]}`
}

})
