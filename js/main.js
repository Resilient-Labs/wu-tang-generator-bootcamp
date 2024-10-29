import { fetchAdjectives, fetchNouns } from './adjNounFetcher.js';

document.querySelector('input[type=button]').addEventListener('click', getWTN);


// 'async' needed with function body containing any await keywords
async function getWTN() {
  const adjectives = await fetchAdjectives();
  const nouns = await fetchNouns();

  let userInfo = {
    fname: document.querySelector('#fname').value,
    lname: document.querySelector('#lname').value,
    dob: document.querySelector('#dob').value,
    home: document.querySelector('#home').value,
    hotdog: document.querySelector('#hotdog').value
  }
  
  const score = calculateScore(userInfo);

  const adjective = adjectives[score % adjectives.length];
  const noun = nouns[score % nouns.length];
  const wuTangName = `${adjective} ${noun}`;

  alert(`Your Wu Tang name is: ${wuTangName}`)
}



function calculateScore(userInfo) {
  let score = 0;

  // name score (next: score based on vowels+consonants)
  score += userInfo.fname.length * 3;
  score += userInfo.lname.length * 2;

  // DOB score (next: score based on astrology)
  const year = Number(userInfo.dob.substring(0, 4), 10);
  const month = Number(userInfo.dob.substring(5, 7), 10);
  const day = Number(userInfo.dob.substring(8, 10), 10);
  score += day + (month * 5) + (year % 100);

  // Home score (next: score based on lat/long)
  score += userInfo.home.length * 2;

  // Home score (next: score based on lat/long)
  score += userInfo.hotdog === "yes" ? 2 : 10;
  console.log(score)
  return score;
}