const generateBtn = document.getElementById('generate-btn');
const form = document.getElementById('wu-form');
const nameElement = document.getElementById('name');

generateBtn.addEventListener('click', () => {
  const wuTang = genWuTangName();
  nameElement.textContent = wuTang;
});


function genWuTangName (){
    const questions = ['What is your favorite movie?',
    'What is your favorite food?',
    'What is your favorite thing to do?',
    'What is your favorite Wu tang person?',
    'What is your Wu tang song?'
    ];

    const answers = [];

    for(let i = 0; i < questions.length; i++){
        const answer = prompt(questions[i]);
        answers.push(answer);
    }

    const partOne = answers[Math.floor(Math.random() * answers.length)];
    const partTwo = answers[Math.floor(Math.random() * answers.length)];
    const wuTang = `${partOne} ${partTwo}`;
    // const wuTang = (partOne + partTwo)

    return wuTang;
}


