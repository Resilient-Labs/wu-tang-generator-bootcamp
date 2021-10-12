//completed by: Team Moses
//array for the names
// from: https://github.com/unrarp/WuNameAAS/blob/master/wu_nouns.txt
// from: https://github.com/unrarp/WuNameAAS/blob/master/wu_adjs.txt
document.querySelector('#submitAnswer').addEventListener('click', nameGenerator)

let firstName = ["Mad", "Arrogant", "Fearless", "Drunken", "Misunderstood", "Foolish", "Fearless", "Lazy-assed", "Profound"]
let lastName = [ "Bandit", "Dreamer", "Magician", "Ninja", "Assasin", "Overlord", "Samurai", "Wizard", "Killah"]



//function for when the first and second output is clicked
function nameGenerator(){
    let index = 0
    document.querySelectorAll('select').forEach(e => {
        let options = Array.from(e)
        let strUser = Number(e.options[e.selectedIndex].value);
		
        //  console.log(options);
         index += strUser
    } )


   index =  Math.round(index/5)
    console.log(index);
document.querySelector('.firstName').innerText =`${firstName[index]} ${lastName[index]}`
    console.log(`${firstName[index]} ${lastName[index]}`);
}

