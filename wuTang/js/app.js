// make variables for the inputs (5 of them)
const fName = document.querySelector('#name')
const birthday = document.querySelector('#birthday')
const age = document.querySelector('#age')
const color = document.querySelector('#color')
const area = document.querySelector('#areaCode')
const butt = document.querySelector('#thebutt')
const wutang = document.querySelector('#wutang')

 console.log('hello')
const getMonth = () => {
    let month = birthday.value.toString().split('-')[1]
    console.log(month)
    }
    function fNameLength() {
    const nameNum = fName.value.length()

    console.log(nameNum)
    }

function generator() {
    console.log('function to get total of inputs...')
    const month = Number(birthday.value.toString().split('-')[1])
    const firstName = Number(fName.value.length)
    const ageNum = Number(age.value)
    const colorNum = Number(color.value.length)
    const areaCode = Number(area.value)

    const total = month + firstName + ageNum + colorNum + areaCode

    console.log(`the total is ${total}`)

    const totalArray = total.toString().split('')
    const adjNum = totalArray.shift()
    const nounNum = totalArray.pop()

    console.log(`the array of the total is ${totalArray}`)

    console.log(`the adjNum is ${adjNum}`)
    console.log(`the nounNum is ${nounNum}`)

    fullName(findAdjective(adjNum), findNoun(nounNum) )
}


function findAdjective(adjNum){
    let realAdj = ''
    if (adjNum == 0) {
        realAdj = 'The'
    }else if (adjNum == 1) {
        realAdj = 'Smooth'
    }else if (adjNum == 2) {
        realAdj = 'Messy'
    }else if (adjNum == 3) {
        realAdj = 'Evil'
    }else if (adjNum == 4) {
        realAdj = 'Lil'
    }else if (adjNum == 5) {
        realAdj = 'Big'
    }else if (adjNum == 6) {
        realAdj = "Dirty Ol'"
    }else if (adjNum == 7) {
        realAdj = 'Icy'
    }else if (adjNum == 8) {
        realAdj = 'Ruthless'
    }if (adjNum == 9) {
        realAdj = 'Doctor'
    }
    return realAdj
}
function findNoun(nounNum){
    let realNoun = ""
    if (nounNum == 0) {
        realNoun = 'Killah'
    }else if (nounNum == 1) {
        realNoun = 'Bastard'
    }else if (nounNum == 2) {
        realNoun = 'Demon'
    }else if (nounNum == 3) {
        realNoun = 'Cat'
    }else if (nounNum == 4) {
        realNoun = 'Boss'
    }else if (nounNum == 5) {
        realNoun = 'Baby'
    }else if (nounNum == 6) {
        realNoun = 'Papa/Mama'
    }else if (nounNum == 7) {
        realNoun = 'Dogg'
    }else if (nounNum == 8) {
        realNoun = 'Stallion'
    }if (nounNum == 9) {
        realNoun = 'Savage'
    }
    return realNoun
}

function fullName(realAdj, realNoun) {
    wutang.innerText = `You're name is ${realAdj} ${realNoun}`
}

butt.addEventListener('click', generator)