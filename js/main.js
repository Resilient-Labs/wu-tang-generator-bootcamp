


let submit = document.querySelector('#submit')

submit.addEventListener('click', generateName)

function generateName(){
    let enteredName = document.querySelector('#enteredName').value

    console.log(enteredName)

    let newName = document.getElementById('wuTang')

    fetch(`/api?oldName=${enteredName}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)

        newName.innerText = `${data.wuName}`

    })
    .catch(err =>{
        console.log(`error ${err}`)
    })

}






