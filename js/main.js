
function getName(){
    const tp = +document.querySelector('input[name="tp"]:checked').value
    const mythical = +document.querySelector('input[name="mythical"]:checked').value
    const day = +document.querySelector('input[name="day"]:checked').value
    const food = +document.querySelector('input[name="food"]:checked').value
    const dish = +document.querySelector('input[name="dish"]:checked').value
    //console.log(firstName)
    //console.log(lastName)
    let firstName = ['Prada Foolish','Ambassador Dada','Teja Pluto','Menace Skrillz','Dominator Blade','Supreme Pikachu','Loaded Sarcastic','Lil','@Dimezin','Shawty Infinity','Commander Lazy-Assed','Brotha Insane','LitLate Night','Ambassador Intellectual','Johnny Gomez']
    let lastName = ['Wolf','500','Rocket','YRN','ymcmb','Hova','Basco','Waters','Dollaz','Money','Vegas','Rifle','V8','Ruff','Loonie']

    //let answerArray = Array.from(document.querySelectorAll('input').value) 

    let test = Math.round((tp+ mythical+ day+ food+ dish) / 5 ) -1 
    console.log(firstName[test],lastName[test])
    //console.log('test: ', answerArray)
    document.querySelector('#wutangName').innerText = `${firstName[test]} ${lastName[test]}`
    
}
 
function reset(){
    location.reload()
}

document.querySelector('#reset').addEventListener('click', reset)
document.querySelector('#generate').addEventListener('click', getName)