function wuTang(){
  totalPoint = 0
  const firstName = document.querySelector("#firstName").value
  const lastName = document.querySelector("#lastName").value
  const color = document.querySelector("#color").value
  const season = document.querySelector("#season").value
  const flavor = document.querySelector("#flavor").value

  if (firstName.length <= 2){
    totalPoint += 0
  } else if (firstName.length <=4){
    totalPoint += 1
  } else if (firstName.length <= 6){
    totalPoint +=2
  } else if (firstName.length <=8){
    totalPoint +=3
  }
  if (lastName.length <= 10){
    totalPoint += 0
  } else if (lastName.length <= 12){
    totalPoint += 1
  } else if (lastName.length <=14){
    totalPoint +=2
  } else if (lastName.length <=16){
    totalPoint +=3
  }
  if (color.length <= 2){
    totalPoint += 0
  } else if (color.length <=4){
    totalPoint += 1
  } else if (color.length <= 6){
    totalPoint +=2
  } else if (color.length <=8){
    totalPoint +=3
  }
  if (season.length <= 10){
    totalPoint += 0
  } else if (season.length <= 12){
    totalPoint += 1
  } else if (season.length <=14){
    totalPoint +=2
  } else if (season.length <=16){
    totalPoint +=3
  }

  if (flavor.length <= 2){
    totalPoint += 0
  } else if (flavor.length <=4){
    totalPoint += 1
  } else if (flavor.length <= 6){
    totalPoint +=2
  } else if (flavor.length <= 8){
    totalPoint +=3
   
  }
  checkWu(totalPoint)
  console.log(totalPoint)
}

function checkWu(totalPoint){


  fetch(`/api?wuTangg=${totalPoint}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
     document.querySelector('#display').innerText= data.name
    });
  }


document.querySelector('#clickMe').addEventListener('click', wuTang)
