//event lisener for function
document.querySelector("button").addEventListener("click", nameGenerator);
//defining a bunch of variables from the dom
const attire = document.querySelector("#attire"),
  steak = document.querySelector("#steak"),
  mac = document.querySelector("#mac"),
  earth = document.querySelector("#earth"),
  bigFoot = document.querySelector("#bigfoot"),
  result = document.querySelector("h2"),
  //two arrays of 15 random names corresponding to first and last name
  wutangFirstNames = [
    "Persia",
    "Slim",
    "Killer",
    "Echo",
    "Doom",
    "Psycho",
    "Thunder",
    "Ghost",
    "Blink",
    "Tempus",
    "Solstice",
    "Voodoo",
    "Coldcut",
    "Marduk",
    "Keres",
    "Walken",
  ],
  wutangLastNames = [
    "Bee",
    "Golly",
    "Apex",
    "Hound",
    "Slash",
    "Blair",
    "Malice",
    "Strangler",
    "Genesis",
    "Spasm",
    "Misfit",
    "Twoshots",
    "Felon",
    "Butcher",
    "Doom",
  ];

//function to check result from event lisener, first name will be set by specific index value for sum variable from lowest to highest while last name uses math random() for random last name
function nameGenerator() {
  let sum =
    Number(attire.value) +
    Number(steak.value) +
    Number(mac.value) +
    Number(earth.value) +
    Number(bigFoot.value);
  console.log(sum);
  //uses switch and case to check sum value from 45-60 which corresponds to the lowest possible out and highest possible output. First name will stay static while last name will always be random 
  switch (sum) {
    case 45:
      result.innerText = `${wutangFirstNames[0]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 46:
      result.innerText = `${wutangFirstNames[1]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 47:
      result.innerText = `${wutangFirstNames[2]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 48:
      result.innerText = `${wutangFirstNames[3]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 49:
      result.innerText = `${wutangFirstNames[4]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 50:
      result.innerText = `${wutangFirstNames[5]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 51:
      result.innerText = `${wutangFirstNames[6]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 52:
      result.innerText = `${wutangFirstNames[7]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 53:
      result.innerText = `${wutangFirstNames[8]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 54:
      result.innerText = `${wutangFirstNames[9]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 55:
      result.innerText = `${wutangFirstNames[10]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 56:
      result.innerText = `${wutangFirstNames[11]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 57:
      result.innerText = `${wutangFirstNames[12]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 58:
      result.innerText = `${wutangFirstNames[13]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 59:
      result.innerText = `${wutangFirstNames[14]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;

    case 60:
      result.innerText = `${wutangFirstNames[15]} ${
        wutangLastNames[Math.floor(Math.random() * 15)]
      }`;
      break;
  }
}
