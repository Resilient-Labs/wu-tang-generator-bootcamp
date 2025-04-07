document.querySelector('button').addEventListener('click',makeReq)

function makeReq(){
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;

  if (!firstName || !lastName) {
    alert('First Name and Last Name are required')
    return
  }

  fetch(`/api?firstName=${firstName}&lastName=${lastName}`)
    .then(response => response.json())
    .then((data) => {
      firstName.value = ""
      lastName.value = ""

      alert(data.result);
    });

}