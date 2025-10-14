class Names {
    constructor() {
        this.one = "Anointed Guardian"
        this.two = "Scientific Operative"
        this.three = "Celestial Dreamer"
        this.four = "Phantom Soldier"
        this.five = "Furious Warlord"
        this.six = "Blessed Destroyer"
        this.seven = "Notorious Healer"
        this.eight = "Hood Ambassador"
        this.nine = "Supreme Palm"
        this.ten = "True Guide"
        this.eleven = "Snake Hustler"
        this.twelve = "The Raging Sage"
        this.thirteen = "Grind Sovereign"
        this.fourteen = "Vengeful Kicker"
        this.fifteen = "Chosen Swordsman"
        this.sixteen = "Hidden Prophet"
    }
}

const name = new Names()


document.querySelector('button').addEventListener('click', getName)

function getName() {
    const first = document.querySelector('#one')
    const second = document.querySelector('#two')
    const third = document.querySelector('#three')
    const fourth = document.querySelector('#four')
    const fifth = document.querySelector('#five')

    const output = document.querySelector('#name')

    //grabbing the length of all inputs combined, checking how many times it goes into sixteen. if it goes into sixteen evenly
    const lengthOfInput = first.value.length + second.value.length + third.value.length + fourth.value.length + fifth.value.length

    const timesIntoSixteen = Math.floor(lengthOfInput/16)
    const lettersOverSixteen = lengthOfInput%16

    let valueToBeChecked = lengthOfInput

    for(let i = 1; i <= timesIntoSixteen; i++){
        valueToBeChecked = valueToBeChecked - 16
        console.log('hi')
    }

    console.log(valueToBeChecked)

    if (first.value && second.value && third.value && fourth.value && fifth.value) {


        if (valueToBeChecked == 1) {
            output.innerText = `${name.one}`
        } else if (valueToBeChecked == 2) {
            output.innerText = `${name.two}`
        } else if (valueToBeChecked == 3) {
            output.innerText = `${name.three}`
        }
        else if (valueToBeChecked == 4) {
            output.innerText = `${name.four}`
        }
        else if (valueToBeChecked == 5) {
            output.innerText = `${name.five}`
        }
        else if (valueToBeChecked == 6) {
            output.innerText = `${name.six}`
        }
        else if (valueToBeChecked == 7) {
            output.innerText = `${name.seven}`
        }
        else if (valueToBeChecked == 8) {
            output.innerText = `${name.eight}`
        }
        else if (valueToBeChecked == 9) {
            output.innerText = `${name.nine}`
        }
        else if (valueToBeChecked == 10) {
            output.innerText = `${name.ten}`
        }
        else if (valueToBeChecked == 11) {
            output.innerText = `${name.eleven}`
        }
        else if (valueToBeChecked == 12) {
            output.innerText = `${name.twelve}`
        }
        else if (valueToBeChecked == 13) {
            output.innerText = `${name.thirteen}`
        }
        else if (valueToBeChecked == 14) {
            output.innerText = `${name.fourteen}`
        }
        else if (valueToBeChecked == 15) {
            output.innerText = `${name.fifteen}`
        }
        else if (valueToBeChecked == 16) {
            output.innerText = `${name.sixteen}`
        }else if (valueToBeChecked == 0) {
            output.innerText = `${name.sixteen}`
        }

    }

}
