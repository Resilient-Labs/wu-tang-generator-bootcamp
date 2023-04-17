// create a button
// create inner text for name result
// assign value to options

document.querySelector("button").addEventListener("click", wuMe)


function wuMe(){

    let dropDown = document.querySelectorAll("select")

    let total = 0

    let result = document.querySelector("h2")

    for (let i = 0; i < dropDown.length; i++){

        total += parseInt(dropDown[i].value)

        console.log(dropDown[i].value)
    }

    console.log(total)

    if(total === 5){
        result.innerText = "Meme Mafia"
    } else if(total >= 6 && total <= 8){
        result.innerText = "Samurai Jack"
    } else if(total >= 9 && total <= 11){
        result.innerText = "Uncle Grandpa"
    } else if(total >= 12 && total <= 14){
        result.innerText = "s6x God"
    } else if(total >= 15 && total <= 17){
        result.innerText = "Rowdy Regulator"
    } else if(total >= 18 && total <= 20){
        result.innerText = "Bougie Bada$$"
    } else if(total >= 21 && total <= 23){
        result.innerText = "Palace Prince"
    } else if(total === 24){
        result.innerText = "Yung Flexer"
    } else if(total === 25){
        result.innerText = "Notorious Stepper"
    } 

}
