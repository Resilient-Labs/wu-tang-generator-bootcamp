document.querySelector('button').addEventListener('click', rap)

function rap(){

    // const choice = document.querySelector('input').value
    // console.log(choice)
    //const city = document.querySelector('input').value
    //const country = document.querySelector('input').value
    const url = `https://randomuser.me/api/ `
    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.results[0].name.first
    })
    
    .catch(err => {
        console.log('error ${err}')

    });
}