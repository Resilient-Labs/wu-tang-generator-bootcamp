/*
Contributors:
Samekh
Miriam
Alexa
Shannon
David
Roxana*/


//array for the names
// from: https://github.com/unrarp/WuNameAAS/blob/master/wu_nouns.txt
// from: https://github.com/unrarp/WuNameAAS/blob/master/wu_adjs.txt
document.querySelector('#submitAnswer').addEventListener('click', nameGenerator)

let firstName = ["Powerful", "Arrogant", "Fearless", "Drunken", "Misunderstood", "Foolish", "Fearless", "Charming", "Profound"]
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

console.log('hi from JS');
// document.querySelector('firstName').innerHTML = (".firstName")
// document.querySelector('secondName').innerHTML = (".secondName")


//re-assign each number to a possible answer?
/*ex "Mad" = 0, "Arrogant" = 1, etc etc
//point system? assigning each word a numberical value and the output
//will be a range based on choice

/*

*/

//each question should be linked to each answer

//output result to the DOM