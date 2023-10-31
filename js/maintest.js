//Try setting score manually to get it working then attempt to make it completly random yet return the same answer if inputted correctly with all possibilities
//try using array slicing to select a certain group amount if user's answer between a score of EX: user score is 1-3 do first 3 names & select 

// //maybe assign each question with A / B posibility so for an example all questions answered with question A = 


// //32 POS
// // AAAAA this is a combination that is unique to that answer set
// //assign that to a name AAAAA = Crazy Worlock

// // ABBAB



document.getElementById('boot').addEventListener("click", result)
// document.querySelector('button').addEventListener('button', result)

let arr = ["Big fang dragon", "Road toad", "Big Muffin Stuffin", "Lemon Pepper Wetter", "Ol dirty lord", "Young buck", "ricky lucky", "Big lil man", "Toolie tom", "Graselda",
"Smooth block rock", "Wizard yungin", "yung gun go kapow", "Childish gambino", "Vizual Prophet", "Mad Beggar", "Crazy Worlock", "Mad Criminal", "Thunderous Specialist", "Midnight Prophet", "active crow", "savage adjudicator", "barbed plastic", "humble ape", "proud Wizard", "savage thug", "reputable wildcat", "bad lansquenet", "thundery leader", "silly panthera", "twinkly Knight", "foremost venturer"];
// Array of listed name's to be grabbed randomly bases on answer's value-->
// <!--32 for possibilities Name's-->


// name = arr[(Math.floor(Math.random() * arr.length))];

// let fullName = `you shall be now known as + ${name}`

//could create an object key & value *TIP JOSE GAVE*
//  let combo = {
//  'aaaaa' : 'Big fang dragon',
//  'aaaab' : 'Road toad',

//  }

//could also do the names 

//working
function result() {
    let combination = '';

    
    let combo = { 
     "aaaaa" : arr[0],
     "aaaab" : arr[1],
     "aaaba" : arr[2],
     "aaabb" : arr[3],
     "aabaa" : arr[4],
     "aabab" : arr[5],
     "aabba" : arr[6],
     "aabbb" : arr[7],
     "abaaa" : arr[8],
     "abaab" : arr[9],
     "ababa" : arr[10],
     "ababb" : arr[11],
     "abbaa" : arr[12],
     "abbab" : arr[13],
     "abbba" : arr[14],
     "abbbb" : arr[15],
     "baaaa" : arr[16],
     "baaab" : arr[17],
     "baaba" : arr[18],
     "baabb" : arr[19],
     "babaa" : arr[20],
     "babab" : arr[21],
     "babba" : arr[22],
     "babbb" : arr[23],
     "bbaaa" : arr[24],
     "bbaab" : arr[25],
     "bbaba" : arr[26],
     "bbabb" : arr[27],
     "bbbaa" : arr[28],
     "bbbab" : arr[29],
     "bbbba" : arr[30],
     "bbbbb" : arr[31]
    };
   
    

console.log(Object.keys(combo));

    if (document.getElementById('question1a').checked && !document.getElementById('question1b').checked) {
        combination += 'a';
    } else if (document.getElementById('question1b').checked && !document.getElementById('question1a').checked) {
        combination += 'b';
    }

    if (document.getElementById('question2a').checked && !document.getElementById('question2b').checked) {
        combination += 'a';
    } else if (document.getElementById('question2b').checked && !document.getElementById('question2a').checked) {
        combination += 'b';
    }

    if (document.getElementById('question3a').checked && !document.getElementById('question3b').checked) {
        combination += 'a';
    } else if (document.getElementById('question3b').checked && !document.getElementById('question3a').checked) {
        combination += 'b';
    }

    if (document.getElementById('question4a').checked && !document.getElementById('question4b').checked) {
        combination += 'a';
    } else if (document.getElementById('question4b').checked && !document.getElementById('question4a').checked) {
        combination += 'b';
    }

    if (document.getElementById('question5a').checked && !document.getElementById('question5b').checked) {
        combination += 'a';
    } else if (document.getElementById('question5b').checked && !document.getElementById('question5a').checked) {
        combination += 'b';
    }

     let bigName = combo[combination]
    alert(combo[combination])
    document.getElementById('nameGen').textContent = bigName
}



// && document.getElementById('question1b'.)){

//working original logic based on simple testing 
//     let score = 0;
//         if (document.getElementById('question1a').checked)
//         {
//             score++; console.log("a")
//         }
//         if (document.getElementById('question2a').checked)
//         {
//             score++; console.log("a")
//         }
//         if (document.getElementById('question3a').checked)
//         {
//             score++; console.log("a")
//         }
//         if (document.getElementById('question4a').checked)
//         {
//             score++; console.log("a")
//         }
//         if (document.getElementById('question5a').checked)
//         {
//             score++; console.log("a")
//         }

//         alert(score)

// }
// random element from array
// function grab(){

//         //array name, random number method, the length of the array 
//         // console.log(arr[(Math.floor(Math.random() * arr.length))]);
// }
// grab()


// function reset(){}
















//Original check 
// function result(){
//     let combo = ''
    
//     let score = 0;
//             if (document.getElementById('question1a').checked === true && document.getElementById('question1b').checked === false){
//                  score++; console.log("a b") 
//             }if (document.getElementById('question2a').checked == true && document.getElementById('question2b').checked === false){
//                 score++; console.log("a")
//             }if (document.getElementById('question3a').checked == true && document.getElementById('question3b').checked === false){
//                 score++; console.log("a")
//             }if (document.getElementById('question4a').checked == true && document.getElementById('question4b').checked === false){
//                 score++; console.log("a")
//             }if (document.getElementById('question5a').checked == true && document.getElementById('question5b').checked === false){
//                 score++; console.log("a")
//             }
    
//             alert(score)
    
//     }
    