// Worked with Yorelisa


let values = ['a', 'b', 'c', 'd', 'e'];
let names = ['Blue Whale', 'trenches', 'SuburbanKid', 'TimmyToes', 'Saint', 'King TaQuan', 'Killmatic', '2necklaces'];
document.getElementById('submit').addEventListener('click', getName)

function getName(){
    let firstQ = values.indexOf(document.querySelector('input[name="q1"]:checked').value);
    let secondQ = values.indexOf(document.querySelector('input[name="q2"]:checked').value);
    let thirdQ = values.indexOf(document.querySelector('input[name="q3"]:checked').value);
    let fourthQ = values.indexOf(document.querySelector('input[name="q4"]:checked').value);
    let fifthQ = values.indexOf(document.querySelector('input[name="q5"]:checked').value);

    let nameIndex = (firstQ + secondQ + thirdQ + fourthQ + fifthQ) % names.length;

    document.getElementById('results').innerText = `${names[nameIndex]}`;
}



