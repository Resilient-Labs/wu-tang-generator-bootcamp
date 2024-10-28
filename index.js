//wutang clan generator
const prefixes = ['Funky', 'Childish', 'Goofy', 'Dark', 'Hyper', 'Mean', 'Insane', 'Mad', 'Silly', 'Wacky', 'Wild', 'Wicked', 'Zany']; 
const suffixes = ['Ghost', 'Master', 'Killa', 'Blade', 'Tiger', 'Phoenix', 'Spirit', 'Warrior', 'Assassin', 'Dragon', 'Wizard', 'Pirate', 'Hawk']; 
const length = 13; 

document.querySelector('form').addEventListener('submit', generateName); 

function generateName(e) {
  e.preventDefault(); 
  
  const color = Number(document.getElementById('color').selectedOptions[0].value);
  const age = Number(document.getElementById('age').selectedOptions[0].value);
  const food = Number(document.getElementById('food').selectedOptions[0].value);
  const animal = Number(document.getElementById('animal').selectedOptions[0].value);
  const genre = Number(document.getElementById('music').selectedOptions[0].value);
  
  const prefix = prefixes[(color + age) % length]; 
  const suffix = suffixes[(food + animal + genre) % length];

  const result = `Your name is ${prefix} ${suffix}`
  document.querySelector('.result').textContent = result; 
}
