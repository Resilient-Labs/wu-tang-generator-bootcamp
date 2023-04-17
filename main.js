const firstNames = [
      "Furious",
      "Master",
      "Iron",
      "Golden",
      "Shadow",
      "Ancient",
      "Eternal",
      "Mystic",
      "Supreme",
      "Vicious",
    ];
    
    const lastNames = [
      "Warrior",
      "Monk",
      "Swordsman",
      "Panda",
      "Ninja",
      "Samurai",
      "Shogun",
      "Sensei",
      "Protector",
      "Destroyer",
    ];
    
    function getRandomElement(arr) {
      const index = Math.floor(Math.random() * arr.length);
      return arr[index];
    }
    
    function generateWuTangName(firstName, lastName) {
      const wuTangFirstName = getRandomElement(firstNames) + firstName.charAt(0);
      const wuTangLastName = getRandomElement(lastNames) + lastName.charAt(0);
      return `${wuTangFirstName} ${wuTangLastName}`;
    }
    
    document.addEventListener("DOMContentLoaded", () => {
      const form = document.getElementById("name-form");
      const result = document.getElementById("result");
    
      form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const wuTangName = generateWuTangName(firstName, lastName);
    
        result.innerText = `Your Wu-Tang name is: ${wuTangName}`;
      });
    });
    