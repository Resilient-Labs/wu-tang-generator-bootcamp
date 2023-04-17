document.querySelector('#clickMe').addEventListener('click', random)

function random(){

  const firstQ = document.querySelector("#first").value;
  const secondQ = document.querySelector("#second").value;
  const thirdQ = document.querySelector("#third").value;
  const fourthQ = document.querySelector("#fourth").value;
  const fifthQ = document.querySelector("#fifth").value;

  fetch(`/name?p1=${firstQ}?p2=${secondQ}?p3=${thirdQ}?p4=${fourthQ}?p5=${fifthQ}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#result").textContent = data.name
    });

}