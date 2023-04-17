//Creating the class
class Generator {
    
    //Constructor holding the properties
    constructor() {
      this.button = document.querySelector("button");
      this.display = document.querySelector(".results");
      this.a = document.getElementsByClassName("a");
      this.b = document.getElementsByClassName("b");
      this.displayName = document.querySelector(".displayName");
      this.resetButton = document.querySelector("#reset");
      this.setup();
    }
  
    //Functions

    setup() {
    //Event Listener for the "Give me a name button"
      this.button.addEventListener("click", () => {

        const q1 = document.querySelector(".question1 input:checked").value;
        const q2 = document.querySelector(".question2 input:checked").value;
        const q3 = document.querySelector(".question3 input:checked").value;
        const q4 = document.querySelector(".question4 input:checked").value;
        const q5 = document.querySelector(".question5 input:checked").value;
  
        console.log(q1, q2, q3, q4, q5); //checking to see the selected choices
  
        //Counts all of the selected a (left-most) choices with the function and returns a number
        const aCount = this.count(this.a); //count function returns back an integer based on how many the user selected
        console.log(aCount); //checking to see if it works lol
  
        //Counts all of the selected b (right-most) choices with the function and returns a number
        const bCount = this.count(this.b); //count function returns back an integer based on how many the user selected
        console.log(bCount); // checking to see if it works lol
  

        //If more of one choice, it will decide which arrays to pull a name from.
        if (aCount > bCount) {
          this.display.innerText = this.aGenerator(); //displays full name from a arrays to DOM
          this.displayName.classList.remove("hidden"); //makes the display div show up
        } else {
          this.display.innerText = this.bGenerator(); //displays full name from b arrays to DOM
          this.displayName.classList.remove("hidden"); //makes the display div show up
        }
      });
  
      //Event listener for reset button
      this.resetButton.addEventListener("click", () => {
        this.restart();
      });
    }
  
    //function to count how many elements are checked off by the user.
    count(ab) {
      let count = 0;
      for (let i = 0; i < ab.length; i++) {
        if (ab[i].checked) {
          count++;
        }
      }
      return count; // an integer
    }
  
    //if there are more a's
    aGenerator() {
      const firstNames = ["Lovely", "Twinkling", "Luscious", "The", "Petite"];
      const lastNames = ["Sweetie ~", "Cutie ~", "Baby ~", "Dime ~", "Honey Dip ~"];
  
      const fullName = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
        lastNames[Math.floor(Math.random() * lastNames.length)]
      }`;
      return fullName;
    }
  
    //if there are more b's
    bGenerator() {
      const firstNames = ["Adorable", "Lil", "Sweet", "Precious", "Zesty"];
      const lastNames = ["Buttercup ~", "Diamond ~", "Honey Bunz ~", "Nugget ~", "Pumpkin ~"];
  
      const fullName = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
        lastNames[Math.floor(Math.random() * lastNames.length)]
      }`;
      return fullName;
    }

    //function to restart the generator and names
    restart() {
      document.querySelector(".displayName").classList.add("hidden"); //add the hidden class to hide winning message.
      this.resetRadioButtons(); 
    }
  
    //resets the radio buttons
    resetRadioButtons() {
      const radioButtons = document.querySelectorAll('input[type="radio"]');
      radioButtons.forEach((radio) => {
        radio.checked = false; //deselects the radios that are selected.
      });
    }
  }

  //Instantiate the class
  const wuTangName = new Generator();