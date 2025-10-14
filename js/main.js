document.querySelector("form").onsubmit = generateName;

function generateName(e) {
  e.preventDefault();

  // get form data
  const formData = new FormData(e.target);
  const { color, city, letter, hobby } = Object.fromEntries(formData);
  const size = document.querySelector("input[name='size']:checked")?.value;

  // send to backend to generate name
  fetch(
    `/api?color=${color}&city=${city}&letter=${letter}&size=${size}&hobby=${hobby}`
  )
    .then((res) => res.json())
    .then((data) => (document.querySelector("h2").innerHTML = data.newName))
    .catch((err) => console.error(err));
}
