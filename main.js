/*Goal: Create a Wu-Tang Clan name generator. Present the user with 5 survey questions and based on those answers
randomly generate their name. The name doesn't have to be exact names, but Wu-Tang sounding-ish names.
Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator) 

Group: Shannon M, David N, Miriam K, Roxana L, Samekh R, Alexa M*/


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