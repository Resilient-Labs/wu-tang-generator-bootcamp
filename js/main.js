//event listener
document.querySelector('#btn').addEventListener('click', generateName)

// p.innerText = ""
//function to generate a Wu Tang name
function generateName(){
  const name = document.querySelector("#name").value

  const gender = document.querySelector("#gender").value
  console.log(gender)
  const birthdayMonth= document.querySelector("#birthdayMonth").value
  console.log(birthdayMonth)
  const favColor = document.querySelector("#favColor").value
  console.log(favColor)
  const favAlbum = document.querySelector("#favAlbum").value
  console.log(favAlbum)

  //calculate the total
  let total = Number(gender) + Number(birthdayMonth) + Number(favColor) + Number(favAlbum)
  console.log(total)

  //set arrays for Wu Tang name options
  const firstNames = ['Savage', 'Silent', 'Gritty', 'Master']
  const lastNames = ['Assassin', 'Killah', 'Observer', 'Poet']

  if(total == 4){
    document.querySelector('#wuTangFirstName').innerText = firstNames[0]
    document.querySelector('#wuTangLastName').innerText = lastNames[0]
  }else if(total == 5){
    document.querySelector('#wuTangFirstName').innerText = firstNames[1]
    document.querySelector('#wuTangLastName').innerText = lastNames[1]
  }else if(total == 6){
    document.querySelector('#wuTangFirstName').innerText = firstNames[2]
    document.querySelector('#wuTangLastName').innerText = lastNames[2]
  }else if(total == 7){
    document.querySelector('#wuTangFirstName').innerText = firstNames[3]
    document.querySelector('#wuTangLastName').innerText = lastNames[3]
  }else if(total == 8){
    document.querySelector('#wuTangFirstName').innerText = firstNames[0]
    document.querySelector('#wuTangLastName').innerText = lastNames[1]
  }else if(total == 9){
    document.querySelector('#wuTangFirstName').innerText = firstNames[0]
    document.querySelector('#wuTangLastName').innerText = lastNames[2]
  }else if(total == 10){
    document.querySelector('#wuTangFirstName').innerText = firstNames[0]
    document.querySelector('#wuTangLastName').innerText = lastNames[3]
  }else if(total == 11){
    document.querySelector('#wuTangFirstName').innerText = firstNames[1]
    document.querySelector('#wuTangLastName').innerText = lastNames[0]
  }else if(total == 12){
    document.querySelector('#wuTangFirstName').innerText = firstNames[1]
    document.querySelector('#wuTangLastName').innerText = lastNames[2]
  }else if(total == 13){
    document.querySelector('#wuTangFirstName').innerText = firstNames[1]
    document.querySelector('#wuTangLastName').innerText = lastNames[3]
  }else if(total == 14){
    document.querySelector('#wuTangFirstName').innerText = firstNames[2]
    document.querySelector('#wuTangLastName').innerText = lastNames[0]
  }else if(total == 15){
    document.querySelector('#wuTangFirstName').innerText = firstNames[2]
    document.querySelector('#wuTangLastName').innerText = lastNames[1]
  }else if(total == 16){
    document.querySelector('#wuTangFirstName').innerText = firstNames[2]
    document.querySelector('#wuTangLastName').innerText = lastNames[3]
  }
  
  nameReveal.innerText = `${name}, you will forever be known as`
}

