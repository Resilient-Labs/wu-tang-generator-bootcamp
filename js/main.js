const generateButton = document.querySelector('#get');
generateButton.addEventListener('click', generateWu);

function generateWu(event) {
  event.preventDefault();

  // Get user's input from the form
  const a1 = document.querySelector('input[name="answer1"]:checked').value;
  const a2 = document.querySelector('input[name="answer2"]:checked').value;
  const a3 = document.querySelector('input[name="answer3"]:checked').value;
  const a4 = document.querySelector('input[name="answer4"]:checked').value;
  const a5 = document.querySelector('input[name="answer5"]:checked').value;

  // Define arrays for the Wu Tang name
  const arrayOne = ['Young', 'Ol\' Dirty', 'RZA', 'GZA', 'Method', 'Inspectah', 'Raekwon', 'Ghostface', 'U-God', 'Masta', 'Cappadonna'];
  const arrayTwo = ['Masta', 'Killah', 'Genius', 'Chef', 'Face', 'Man', 'Knight', 'Tha God', 'Don', 'Fist', 'Pasta'];

  // Generate the Wu Tang name by selecting a random name from the arrays
  const randomFirst = Math.floor(Math.random() * arrayOne.length);
  const randomSecond = Math.floor(Math.random() * arrayTwo.length);
  const wuTangName = arrayOne[randomFirst] + ' ' + arrayTwo[randomSecond];

  // Display the Wu Tang name on the page
  const resultElement = document.createElement('h1');
  resultElement.textContent = `Now I name you ${wuTangName}`;
  document.body.appendChild(resultElement)
  let body = document.querySelector('.form')
  body.style.display = 'none'
  createReset()
}

function createReset() {

  const link = document.createElement('a');
  link.href = 'index.html';

  const button = document.createElement('button');
  button.innerText = 'get anotha one';
  button.classList.add('theOne')
  link.appendChild(button);

  document.body.appendChild(link);
}

