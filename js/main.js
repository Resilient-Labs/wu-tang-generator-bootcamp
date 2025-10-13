document.querySelector('#generateName').addEventListener('click', makeReq);

function makeReq() {

  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;
  const q4 = document.getElementById("q4").value;
  const q5 = document.getElementById("q5").value;

  fetch(`/api?q=${q1},${q2},${q3},${q4},${q5}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#result").textContent = `Your Wu-Tang Name is ${data.random1} ${data.random2}.`
      console.log(`${data.random1}`)
      console.log(`${data.random2}`)
    });
}