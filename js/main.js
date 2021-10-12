


document.querySelector('button').addEventListener('click', checkPoints)

qOnePoints = 0
qTwoPoints = 0
qThreePoints = 0
qFourPoints = 0

function checkPoints(){


    let qOne = document.querySelector('.questionOne')
    let qTwo = document.querySelector('.questionTwo')
    let qThree = document.querySelector('.questionThree')
    let qFour = document.querySelector('.questionFour')


    for(i = 0; i < qOne.length; i++){
       if(qOne[i].checked){
           qOnePoints += parseInt(qOne[i].value)

           console.log(parseInt(qOne[i].value))
           
       }
       
    }


    for(i = 0; i < qTwo.length; i++){
        if(qTwo[i].checked){
           qTwoPoints += parseInt(qTwo[i].value)
 
            console.log(parseInt(qTwo[i].value))
            
        }
        
    }


    for(i = 0; i < qThree.length; i++){
        if(qThree[i].checked){
            qThreePoints += parseInt(qThree[i].value)
            
 
            
        }
        
    }

    for(i = 0; i < qFour.length; i++){
        if(qFour[i].checked){
            qFourPoints += parseInt(qFour[i].value)
 
         
            
        }
        
    }

    let total = qOnePoints + qTwoPoints + qThreePoints + qFourPoints
    console.log(total)
    if(total <= 25){
         document.querySelector('.results').innerHTML = "E-ratic Artist"
     } else if(total <= 30 && total >= 25){
        document.querySelector('.results').innerHTML = "Midnight Samurai"
     } else if(total <= 40 && total >= 31){
        document.querySelector('.results').innerHTML = "Shriekin Ambassador"
     } else if(total <= 41 && total >= 51){
        document.querySelector('.results').innerHTML = "X-cessive Demon" 
     }


}