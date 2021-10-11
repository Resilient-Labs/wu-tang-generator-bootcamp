let firstName = ['Trey','Kay','G','Lil','Jeezy','Yung','Rico','Sway','Mac','Gino']

let lastName = ['Bandz','Sosa','Mula','Balla','Money','Santana','Gotti','Savage','Baby','Smoke']

document.querySelector('button').addEventListener('click', generate)

function generate(){

    let color = document.getElementById('color').value
    let designer = document.getElementById('designer').value
    let baller = document.getElementById('baller').value
    let swag = document.getElementById('swag').value
    let hero = document.getElementById('hero').value

    let firstNameIndex = Number(color) + Number(designer) 

    let lastNameIndex = Number(baller) + Number(swag) + Number(hero) 

    console.log(firstName[firstNameIndex]+lastName[lastNameIndex])

    document.querySelector('.wuTangName').innerHTML = 'I hereby dub thee as: ' + firstName[firstNameIndex] + ' ' + lastName[lastNameIndex]

    document.querySelector('.wuTangName').classList.add('border-background')
}