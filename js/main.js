
let button = document.querySelector('button').addEventListener('click', calculate)
let points = 0 

function calculate(){
  let fname = document.querySelector('#first').value
  let lname = document.querySelector('#last').value
  let chambers = document.querySelector('#chambers').value
  let clan = document.querySelector('#clan').value
  let tearz = document.querySelector('#tearz').value
  let cash = document.querySelector('#cash').value
  let chef = document.querySelector('#chef').value
  

  if(fname.length <= 5){
    points += 1
  } else if(fname.length >= 6){
    points += 2
    console.log(points)
  } if(lname.length <= 5){
    points += 1
  } else if(lname.length >= 6){
    points += 2
  } if(chambers.length <= 5){
    points += 1
  } else if(chambers.length >= 6){
    points += 2
  } if(clan.length <= 5){
    points += 1
  } else if(clan.length >= 6){
    points += 2
  } if(tearz.length <= 5){
    points += 1
  } else if(tearz.length >= 6){
    points += 2
  } if(cash.length <= 5){
    points += 1
  } else if(cash.length >= 6){
    points += 2
  } if(chef.length <= 5){
    points += 1
  } else if(chef.length >= 6){
    points += 2
  }
  generate()
}



function generate(){
  let result = document.querySelector('#result')
  if(points === 7){
    result.innerText = 'Rizz RZA'
  } else if(points === 8){
    result.innerText = 'Gravel PitStain'
  } else if(points === 9){
    result.innerText = 'Violent Wu'
  } else if(points === 10){
    result.innerText = 'Neighborhood Spider-Man'
  } else if(points === 11){
    result.innerText = 'Debt Collecta Inspecta'
  }else if(points === 12){
    result.innerText = 'Crime CEO'
  } else if(points === 13){
    result.innerText = 'Dolla Dolla Bill'
  } else if(points === 14){
    result.innerText = 'Method Mania'
  } 
  console.log(points)
}





