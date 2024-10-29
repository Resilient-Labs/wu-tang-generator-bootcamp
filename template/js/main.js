function generateName() {
    const form = document.getElementById('nameGeneratorForm');
    let score = 0;
  
    for (let i = 1; i <= 5; i++) {
      const question = form[`q${i}`];
      for (let option of question) {
        if (option.checked) {
          score += parseInt(option.value);
        }
      }
    }
  
    const names = [
      "Dynamic Ghost", "Methodical Madman", "Iron Hawk", "Silent Destroyer",
      "Sonic Fang", "Divine Genius", "Mystic Hunter", "Shadow Assassin",
      "Fierce Panther", "Dark Samurai", "Thunderous Monk", "Wise Tiger",
      "Noble Assassin", "Electric Wolf", "Swift Cobra", "Mighty Scorpion",
      "Invisible Ninja", "Rebel Shadow", "Savage Owl", "Fearless Dragon",
      "Viper King", "Mystic Warrior", "Blaze Phantom", "Silent Flame",
      "Cunning Cobra"
    ];
  
    const nameIndex = score % names.length;
    const wuTangName = names[nameIndex];
  
    document.getElementById('result').innerText = `Your Wu-Tang Name is: ${wuTangName}`;
  }
  