 // please work on a simple node app that lets a user enter a string. The app will then let the user know if the string is a palindrome or not.

// User should be able to enter a userInput/phrase
// Click a button to submit their stringify
// They expect and see if theyre userInput or phrase is a palindrome
// Need to capture their phrase
// Store their phrase
// Used store phrase to see if it is a palindrome
// Palindrome : When a userInput can be read forward and backuserInput the same

const btn = document.querySelector('button')
const result = document.querySelector('#result')
let arrOne= ['Coast','Wud','Siz','Shalla','Diamond']
let arrTwo= ['Rizza','Giraffe','Sphnix','Tical','Arizona']


btn.addEventListener('click',()=>{
  let topOne= document.querySelector('.topOne').value
  let topTwo= document.querySelector('.topOne').value
  let topThree= document.querySelector('.topOne').value
  let topFour= document.querySelector('.topOne').value
  let topFive= document.querySelector('.topOne').value

  let sumOne= Number(topOne) + Number(topTwo)
  let sumTwo = Number(topThree) + Number(topFour) + Number(topFive)
  let firstName= arrOne[sumOne]
  let lastName= arrTwo[sumTwo]
  result.textContent= `Your Wu-tang name is: ${firstName} ${lastName}`
})


//   function checkName(){
//   // let userInput= document.querySelector('#userWords').value
//   document.querySelectorAll("yesAnswer").value = "Yes";
//   console.log()
//   let userSelection = document.querySelector('')
//   fetch(`/api?userInput=${userInput}`)
//   .then(res => res.json())
//   .then(res =>{
//     let object = res.statement
//     if(object === 'true'){
//       result.innerHTML= `${userInput} is a palindrome`
//     }else{
//       result.innerHTML = `${userInput} is not a palindrome`
//     }
//   })
//   .catch(err =>{
//     console.log(`error ${err}`)
//     alert("sorry, no results")
//   });
// }
//   let newString= userInfo();
//   isPalindrome(userInput,newString)
//   // document.querySelector('#result').innerHTML = isPalindrome();
//   function userInfo(){
//     let convertString= userInput.split('').reverse().join('');
//     return convertString
//   }
//    function isPalindrome(userInput,newString){
//       if(userInput === newString){
//       document.querySelector('#result').innerHTML= `${newString} is palindrome`;
//       } else{
//         document.querySelector('#result').innerHTML= `${newString} is not a palindrome`;
//       }
//   }
// }
// btn.addEventListener('click',()=>{
// checkToSeeIfTheyArePalindrome()
//
// })
