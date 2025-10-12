document.querySelector("form").onsubmit = generateName;

function generateName(e) {
  e.preventDefault();

  // get form data
  const formData = new FormData(e.target);
  const { color, city, letter, size, other } = Object.fromEntries(formData);

  // send to backend to generate name
  fetch(
    `/api?color=${color}&city=${city}&letter=${letter}&size=${size}&other=${other}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // display name in DOM
      document.querySelector("h2").innerHTML = `
        <span>${data.other}: </span>${data.newName}
      `;
    })
    .catch((err) => console.error(err));
}
