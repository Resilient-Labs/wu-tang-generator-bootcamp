document.getElementById('submit').addEventListener('click', () => {
    let survey = document.getElementById('survey');
    let inputs = survey.getElementsByTagName('input');
    let yes = [];
  
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        yes.push(inputs[i].value);
      }
    }
  
    generateName(yes);
});
  
function generateName(value) {
    let names = [
        'Ghostface Killah',
        'Method Man',
        'Raekwon',
        'GZA',
        'Inspectah Deck',
        'U-God',
        'Masta Killa',
        'Cappadonna',
        'ODB',
        'RZA'
    ];

    if (value.length === 5) {
        var name = names[Math.floor(Math.random() * names.length)];
        document.getElementById('nameGenerator').innerText = `${name}`;
    } else {
        document.getElementById('nameGenerator').innerText = 'Please answer all the questions';
    }
}