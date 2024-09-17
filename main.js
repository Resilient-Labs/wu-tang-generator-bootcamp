document.querySelector("#clickMe").addEventListener("click", makeReq);

function makeReq() {
	let q1 = document.getElementById("q1").value;
	let q2 = document.getElementById("q2").value;
	let q3 = document.getElementById("q3").value;
	let q4 = document.getElementById("q4").value;
	let q5 = document.getElementById("q5").value;

	fetch(`/api?q1=${q1}&q2=${q2}&q3=${q3}&q4=${q4}&q5=${q5}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			document.querySelector("#personName").textContent = data.result;
		});
}
