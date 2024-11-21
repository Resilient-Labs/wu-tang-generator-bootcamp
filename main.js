
console.log('javaascript')
document.querySelector('button').addEventListener('click', getName)
const names = ['Shadow Ghost',
    'Iron Fist Sage',
    'Silent Assassin',
    'Mystic Tiger',
   ' Lyrical Phantom',
    'Golden Lotus',
   ' Midnight Wraith',
   ' Cipher Blade']

function getName(){
const select1 = document.querySelector('#q1')
const selectValue1 = Number(select1.options[select1.selectedIndex].value)
console.log(selectValue1)

const select2 = document.querySelector('#q2')
const selectValue2 = Number(select2.options[select2.selectedIndex].value)
console.log(selectValue2)

const select3 = document.querySelector('#q3')
const selectValue3 = Number(select3.options[select3.selectedIndex].value)
console.log(selectValue3)

const select4 = document.querySelector('#q4')
const selectValue4 = Number(select4.options[select4.selectedIndex].value)
console.log(selectValue4)

const select5 = document.querySelector('#q5')
const selectValue5 = Number(select5.options[select5.selectedIndex].value)
console.log(selectValue5)

const total = selectValue1 + selectValue2 + selectValue3 + selectValue4 + selectValue5
console.log(total)

 if(total < 3){
    clanName = 'Shadow Ghost'
 }else if(total < 6){
    clanName = 'Silent Assassin'
 }else if(total < 9){
    clanName = 'Silent Assassin'
 }else if(total < 12){
    clanName = 'Lyrical Phantom'
 }else if(total < 15){
    clanName = 'Golden Lotus'
 }else if(total < 18){
clanName = ' Midnight Wraith'
    }else{
        clanName = ' Cipher Blade'
    }

document.querySelector('p').innerText = `Your clan name is ${clanName}`
}