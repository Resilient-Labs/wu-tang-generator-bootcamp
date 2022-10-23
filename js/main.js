// target the inputs using value
document.querySelector('button').addEventListener('click', generateName)

function generateName() {
    let first = document.querySelector('input[name=breakfast]:checked').value
    let second = document.querySelector('input[name=rapper]:checked').value
    let third = document.querySelector('input[name=pet]:checked').value
    let forth = document.querySelector('input[name=movie]:checked').value
    let fifth = document.querySelector('input[name=marvel]:checked').value
    let arrayOfPicks = [first,second,third,forth,fifth]
    console.log(arrayOfPicks)
 
    // function randomizeNames(){
        let name1 = ['Topcat', 'Love', 'Lil', 'Blue', 'Sunny', 'The']
        let name2 = ['Katana', 'Orchid', 'Al', 'Treez', 'Capital', 'Daq']
        console.log(name1,name2)
        console.log(name1)

    //}
    if(arrayOfPicks[0] === 'eggs' && arrayOfPicks[1] === 'unknown' && arrayOfPicks[2] === 'cat' && arrayOfPicks[3] === 'mean' && arrayOfPicks[4] === 'iron'){
        name1 =  name1[Math.floor(Math.random()* name1.length)]
        name2 = name2[Math.floor(Math.random()* name2.length)]
        console.log(name1[0])
        console.log(name2[0])
    
        document.querySelector('#result').innerText = `${name1} ${name2}`
    
    } else if(arrayOfPicks[0] === 'oats' && arrayOfPicks[1] === 'doja' && arrayOfPicks[2] === 'dog' && arrayOfPicks[3] === 'scar' && arrayOfPicks[4] === 'wanda'){
        name1 =  name1[Math.floor(Math.random()* name1.length)]
        name2 = name2[Math.floor(Math.random()* name2.length)]

        console.log(name1)
        console.log(name2)
        document.querySelector('#result').innerText = `${name1} ${name2}`

    } else if(arrayOfPicks[0] === 'coffee' && arrayOfPicks[1] === 'aj' && arrayOfPicks[2] === 'parrot' && arrayOfPicks[3] === 'coco' && arrayOfPicks[4] === 'hawk'){
        name1 =  name1[Math.floor(Math.random()* name1.length)]
        name2 = name2[Math.floor(Math.random()* name2.length)]
        console.log(name1)
        console.log(name2)
        document.querySelector('#result').innerText = `${name1} ${name2}`

     } 
     else if(arrayOfPicks[0] === 'pastries' && arrayOfPicks[1] === 'raekwon' && arrayOfPicks[2] === 'goldfish' && arrayOfPicks[3] === 'country' && arrayOfPicks[4] === 'thor'){
        name1 =  name1[Math.floor(Math.random()* name1.length)]
        name2 = name2[Math.floor(Math.random()* name2.length)]
        console.log(name1)
        console.log(name2)
        document.querySelector('#result').innerText = `${name1} ${name2}`
    } else {
        name1 =  name1[Math.floor(Math.random()* name1.length)]
        name2 = name2[Math.floor(Math.random()* name2.length)]
        document.querySelector('#result').innerText = `${name1} ${name2}`

    }

 }

 