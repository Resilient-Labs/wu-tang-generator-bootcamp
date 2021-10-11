document.querySelector('button').addEventListener('click', nameGenerator)

let firstName = ["Mad", "Arrogant", "Fearless", "Drunken", "Misunderstood", "Foolish", "Fearless", "Lazy-assed", "Profound","floater" ]
let lastName = [ "Bandit", "Dreamer", "Magician", "Ninja", "Assasin", "Overlord", "Samurai", "Wizard", "Killah", "sanctity"]

function nameGenerator(){
    let index = 0
    document.querySelectorAll('select').forEach(e => {
       index +=  e.selectedIndex
    })
    index =  Math.floor(index/5)
    document.querySelector('h2').innerText =`${firstName[index]} ${lastName[index]}`
}

