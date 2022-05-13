
document.querySelector('button').addEventListener('click', start)
let wuOne=['E-ratic Artist','Violent Magician','Amateur Wanderer','Dirty','Dragon','X-pert Dreamer','Gucci','Ignint','Vizual Hunter','Inspectah,Killah','Lil Bill']
let wuTwo=['Misunderstood Conqueror','Tha Conqueror','Wicked Specialist','Phantom Madman','Arrogant Ninja','Master Destroyer']
let wuuu=['Big','Buddah','Cheese','Dirtya','Dragon','Foolish','Gucci','Ignint','Insane','Inspectah','Killah','Lil']
let wuuuTwo=['Artist','Wanderer','Dreamer','Bill','Killah']
// function start(){
  function inputs(){
  let firstQ =Number(document.querySelector('.game').value)
  let secondQ =Number(document.querySelector('.animals').value)
  let thirdQ =Number(document.querySelector('.artist').value)
let sum1=(firstQ +secondQ+thirdQ) % 3
  let fourthQ =Number(document.querySelector('.food').value)
  let fifthQ =Number(document.querySelector('.place').value)
  let sum2=(fourthQ+fifthQ)%2
  // return [firstQ,secondQ,thirdQ,fourthQ,fifthQ]
  // let joe=[firstQ,secondQ,thirdQ,fourthQ,fifthQ]
  // console.log(joe);
  return [sum1,sum2]
}
function start(){
  // let grab =inputs()
  let input =inputs()
  let firstName =wuuu[input[0]]
  let lastName = wuuuTwo[input[1]]
  let name =document.querySelector('input').value
  // alert(`${firstName} ${lastName}`)
  document.querySelector('h2').innerHTML=`${name} will now be known as ${firstName} ${lastName}`
}
