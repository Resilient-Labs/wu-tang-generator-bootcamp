document.querySelector('#clickMe').addEventListener('click', nameGenerator)
const firstPartName = ["Inspectah", "Shadow", "Master", "Method", "Mystic", "Blaze", "Ruthless", "Silent", "Divine", "Grim"];
const secondPartName = ["Deck", "Disciple", "Killa", "Assassin", "Ninja", "Man", "Monk", "Prophet", "Sage", "Destroyer"];


function nameGenerator(){
    const ans1 = document.querySelector('#question1').value
    const ans2 = document.querySelector('#question2').value
    const ans3 = document.querySelector('#question3').value
    const ans4 = document.querySelector('#question4').value
    const ans5 = document.querySelector('#question5').value



const part1 = firstPartName[(ans1.length + ans2.length) % firstPartName.length];
const part2 = secondPartName[(ans3.length + ans4.length) % secondPartName.length];


const wuTangName = `${part1} ${part2}`;

document.querySelector("#results").innerText = `Your Wu-Tang Clan name is: ${wuTangName}`;
}