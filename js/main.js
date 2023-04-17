function createName() {
    const firstNameArray = [
      'Lil', 'Big', 'Crazy', 'Funny', 'Stinky', 'Ugly', 'Small', 'Pretty', 'Loud', 'Tall'
    ];
  
    const lastNameArray = [
      'Bobby', 'Future', 'Durk', 'Drake', 'Woo', 'Jordan', 'Naruto', 'Goku', 'Jeff', 'Tony'
    ];
  
    const inputOne = Number(document.querySelector('#selectOne').value);
    const inputTwo = Number(document.querySelector('#selectTwo').value);
    const inputThree = Number(document.querySelector('#selectThree').value);
    const inputFour = Number(document.querySelector('#selectFour').value);
    const inputFive = Number(document.querySelector('#selectFive').value);
  
    let sumOne = inputOne + inputTwo;
    let sumTwo = inputThree + inputFour + inputFive;
  
    if (sumOne > 9) {
      sumOne = Math.floor(sumOne / 2);
    }
    if (sumTwo > 9) {
      sumTwo = Math.floor(sumTwo / 2);
    }
  
    const firstName = firstNameArray[sumOne];
    const lastName = lastNameArray[sumTwo];
  
    document.querySelector('h3').innerText = `${firstName} ${lastName}`;
  }
  
  document.querySelector('button').addEventListener('click', createName);
  