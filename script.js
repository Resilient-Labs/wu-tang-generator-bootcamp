// Each answer unlocks its own word pool, so the survey actually shapes the name.
// Q2 (mood) -> adjectives
const moodWords = {
  calm: ['Silent', 'Golden', 'Patient', 'Zen', 'Steady', 'Quiet'],
  loud: ['Thunder', 'Raging', 'Iron', 'Supreme', 'Heavy', 'Boomin'],
  mysterious: ['Ghost', 'Shadow', 'Hidden', 'Phantom', 'Midnight', 'Smoky'],
  wild: ['Crazy', 'Chaotic', 'Dirty', 'Feral', 'Lunatic', 'Reckless'],
};

// Q3 (fighting style) -> nouns
const styleWords = {
  sword: ['Blade', 'Ronin', 'Samurai', 'Swordsman', 'Steel', 'Dagger'],
  fists: ['Fist', 'Tiger', 'Mantis', 'Brawler', 'Hammer', 'Knuckles'],
  mind: ['Monk', 'Genius', 'Oracle', 'Prophet', 'Scholar', 'Sage'],
  words: ['Poet', 'Verse', 'Rhyme', 'Mic', 'Lyricist', 'Bard'],
};

// Q4 (training spot) -> titles that go in front of the name
const placeTitles = {
  temple: ['Masta', 'Sifu', 'Abbot', 'Grand'],
  block: ['Inspectah', 'Boss', 'Don', 'Chief'],
  mountain: ['Hermit', 'Elder', 'Sensei', 'Lone'],
  basement: ['Professah', 'Young', 'DJ', 'Rogue'],
};

// Wu-style "spelled wrong on purpose" endings
const suffixes = ['Killah', 'Bandit', 'Assassin', 'Wonder', 'Dee', 'Starks'];

// Q5 (chamber number) picks the shape of the name. Q1 (first name) shows up in some of them.
const patterns = [
  (p) => `${p.adjective} ${p.noun}`,          // Ghost Blade
  (p) => `${p.noun} ${p.suffix}`,             // Monk Killah
  (p) => `${p.initial}-${p.noun}`,            // J-Tiger (U-God style)
  (p) => `${p.title} ${p.noun}`,              // Inspectah Verse
  (p) => `${p.firstName} the ${p.noun}`,      // Jordan the Sage
  (p) => `${p.title} ${p.adjective} ${p.suffix}`, // Masta Silent Killah
];

const form = document.querySelector('#survey');
const formError = document.querySelector('#form-error');
const resultSection = document.querySelector('#result');
const nameDisplay = document.querySelector('#wu-name');
const breakdown = document.querySelector('#breakdown');
const remixButton = document.querySelector('#remix');
const startOverButton = document.querySelector('#start-over');

let lastAnswers = null; // saved so Remix can reroll without re-reading the form
let lastName = '';

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// "jORDAN" -> "Jordan"
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function getAnswers() {
  const data = new FormData(form);
  return {
    firstName: (data.get('firstName') || '').trim(),
    mood: data.get('mood'),
    style: data.get('style'),
    place: data.get('place'),
    chamber: (data.get('chamber') || '').trim(),
  };
}

// Returns { questionName: 'message' } for every answer that's missing or bad
function validate(answers) {
  const errors = {};

  if (!answers.firstName) {
    errors.name = 'Tell us your first name.';
  } else if (!/^[A-Za-z][A-Za-z' -]*$/.test(answers.firstName)) {
    errors.name = 'Letters only please (spaces, hyphens and apostrophes are ok).';
  }

  if (!answers.mood) errors.mood = 'Pick how you walk into a room.';
  if (!answers.style) errors.style = 'Choose a fighting style.';
  if (!answers.place) errors.place = 'Pick where you trained.';

  const chamber = Number(answers.chamber);
  if (!answers.chamber) {
    errors.number = 'Pick a chamber number.';
  } else if (!Number.isInteger(chamber) || chamber < 1 || chamber > 36) {
    errors.number = 'There are only 36 chambers - pick a whole number from 1 to 36.';
  }

  return errors;
}

function showErrors(errors) {
  document.querySelectorAll('.question').forEach((fieldset) => {
    const message = errors[fieldset.dataset.question] || '';
    fieldset.querySelector('.error').textContent = message;
    fieldset.classList.toggle('invalid', message !== '');
  });

  const count = Object.keys(errors).length;
  formError.textContent = count
    ? `Answer all 5 questions first (${count} still need${count === 1 ? 's' : ''} attention).`
    : '';
}

function buildName(answers) {
  // only use the first word of the name so "Mary Jane" doesn't make it huge
  const firstName = capitalize(answers.firstName.split(/[ -]/)[0]);

  const parts = {
    firstName,
    initial: firstName.charAt(0),
    adjective: pickRandom(moodWords[answers.mood]),
    noun: pickRandom(styleWords[answers.style]),
    title: pickRandom(placeTitles[answers.place]),
    suffix: pickRandom(suffixes),
  };

  // same chamber number = same name shape every time, the words are what get shuffled
  const pattern = patterns[Number(answers.chamber) % patterns.length];
  return pattern(parts);
}

function showName(answers) {
  // reroll a few times so Remix doesn't hand back the exact same name
  let name = buildName(answers);
  for (let tries = 0; name === lastName && tries < 10; tries++) {
    name = buildName(answers);
  }
  lastName = name;

  nameDisplay.textContent = name;
  // restart the pop animation - removing then re-adding the class needs a reflow in between
  nameDisplay.classList.remove('reveal');
  void nameDisplay.offsetWidth;
  nameDisplay.classList.add('reveal');

  showBreakdown(answers);
  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// shows the player which answer fed which part of the name
function showBreakdown(answers) {
  const moodLabel = form.querySelector(`input[name="mood"][value="${answers.mood}"]`).parentElement.textContent.trim();
  const styleLabel = form.querySelector(`#style option[value="${answers.style}"]`).textContent;
  const placeLabel = form.querySelector(`input[name="place"][value="${answers.place}"]`).parentElement.textContent.trim();

  breakdown.innerHTML = '';
  const lines = [
    ['Name', `${answers.firstName} - may show up in the name`],
    ['Entrance', `${moodLabel} - sets the attitude`],
    ['Style', `${styleLabel} - sets your weapon word`],
    ['Training', `${placeLabel} - sets your title`],
    ['Chamber', `#${answers.chamber} - decides the name's shape`],
  ];

  // building with textContent instead of innerHTML so a weird name can't inject HTML
  lines.forEach(([label, text]) => {
    const item = document.createElement('li');
    const strong = document.createElement('strong');
    strong.textContent = `${label}: `;
    item.append(strong, text);
    breakdown.appendChild(item);
  });
}

function handleSubmit(event) {
  event.preventDefault();

  const answers = getAnswers();
  const errors = validate(answers);
  showErrors(errors);

  if (Object.keys(errors).length > 0) {
    resultSection.hidden = true;
    // jump to the first problem so it's obvious what's missing
    const firstInvalid = form.querySelector('.question.invalid input, .question.invalid select');
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  lastAnswers = answers;
  showName(answers);
}

function handleRemix() {
  if (lastAnswers) showName(lastAnswers);
}

function handleStartOver() {
  form.reset();
  showErrors({});
  resultSection.hidden = true;
  lastAnswers = null;
  lastName = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('#first-name').focus();
}

// clear a question's error as soon as the user fixes it
function handleInput(event) {
  const fieldset = event.target.closest('.question');
  if (!fieldset || !fieldset.classList.contains('invalid')) return;
  const errors = validate(getAnswers());
  if (!errors[fieldset.dataset.question]) {
    fieldset.classList.remove('invalid');
    fieldset.querySelector('.error').textContent = '';
  }
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('input', handleInput);
form.addEventListener('change', handleInput);
remixButton.addEventListener('click', handleRemix);
startOverButton.addEventListener('click', handleStartOver);
