const survey = document.querySelector('#survey').addEventListener('submit', getRandomName)
const result = document.querySelector('#result');

const wutangNames = [
    'RZA', 'GZA', 'Method Man', 'Ghostface Killah', 'ODB', 'Raekwon',
    'Inspectah Deck', 'Masta Killa', 'Cappadonna', 'U-God'
];
const randomNames = [
    'Young Ironfist',
    'Ghostly Prophet',
    'Shaolin Shadow',
    'ODB Kid',
    'Method Menace',
    'Inspectah Genius',
    'RZA Rebel',
    'Liquid Swordsmaster',
    'GZA Gladiator',
    'Red Lotus Warrior',
    'Raekwon the Chef\'s Apprentice',
    'U-God\'s Disciple',
    'Rebel Alliance Killer',
    'C.R.E.A.M. Crusader',
    'Wu-Tang Warrior Monk',
    'Killa Bee King',
    'Ghostface Assassin',
    'Masta Killa Cypher',
    'Iron Lung Knight',
    'Method Maniac',
    'Ol\' Dirty Disciple',
    'RZA\'s Apprentice',
    'GZA\'s Protege',
    'The Chef\'s Sous-Chef',
    'Liquid Sword Sensei'
  ];

function getRandomName(event) {
    event.preventDefault();
    const randomName = Math.floor(Math.random() * wutangNames.length);
    const firstName = wutangNames.splice(randomName, 1)[0];
    
    const otherRandomName = Math.floor(Math.random() * randomNames.length);
    const secondName = randomNames.splice(otherRandomName, 1)[0];
    
    const newWutangName = `${firstName} the ${secondName}`;
    result.innerText = newWutangName;
}