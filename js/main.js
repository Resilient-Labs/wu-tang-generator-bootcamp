class ApiRequest {
  constructor() {
    const resultsButton = document.querySelector("#results-button");

    this.nameInput = document.querySelector("#name-input");
    this.colorSelect = document.querySelector("#color-select");
    this.animalSelect = document.querySelector("#animal-select");
    this.fruitSelect = document.querySelector("#fruit-select");
    this.shapeSelect = document.querySelector("#shape-select");

    this.newNameDisplay = document.querySelector("#new-name");
  
    resultsButton.addEventListener("click", () => this.getResults());
  }

  getResults() {
    const query = `name=${this.nameInput.value}&color=${this.colorSelect.value}&animal=${this.animalSelect.value}&fruit=${this.fruitSelect.value}&shape=${this.shapeSelect.value}`;

    fetch(`getName?${query}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      this.newNameDisplay.innerText = data.newName;
    });
  }
}

const apiRequest = new ApiRequest;