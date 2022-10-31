class WuTang {
    constructor(colorAnswer, showAnswer, destinationAnswer, movieAnswer, animalAnswer){
        this._colorAnswer = colorAnswer;
        this._showAnswer = showAnswer;
        this._destinationAnswer = destinationAnswer;
        this._movieAnswer = movieAnswer;
        this._animalAnswer = animalAnswer
    }

    // Getter methods
    get colorAnswer() {
        return this._colorAnswer;
    }

    get showAnswer() {
        return this._showAnswer;
    }

    get destinationAnswer() {
        return this._destinationAnswer;
    }

    get movieAnswer() {
        return this._movieAnswer;
    }

    get animalAnswer() {
        return this._animalAnswer;
    }


    // Setter method
    set colorAnswer(value) {
        this._colorAnswer = value
    }

    set showAnswer(value) {
        this._showAnswer = value
    }

    set destinationAnswer(value) {
        this._destinationAnswer = value
    }

    set movieAnswer(value) {
        this._movieAnswer = value
    }

    set animalAnswer(value) {
        this._animalAnswer = value
    }

    // Method gets value from the DOM
    valueFromDom(id) {
        return document.querySelector(id).value
    }


    // Method uses fetch to make a request
    async retrieveData() {

        try {
            const response = await fetch(`/api?answers=${this._colorAnswer} ${this._showAnswer} ${this._destinationAnswer} ${this._movieAnswer} ${this._animalAnswer}`)
            const data = await response.json()

            console.log(data)
            //Place Name in the DOM
            document.querySelector("#placeName").innerText = `${data.firstName} ${data.secondName}`

        } catch (error) {
            console.log(error)
        }
    }
}

document.querySelector('button').addEventListener('click', () => {

    // Create an instance of the class Palindrome
    const wutang = new WuTang()

    //get the value from the input
    let color = wutang.valueFromDom('#colors')
    let show = wutang.valueFromDom('#show')
    let destination = wutang.valueFromDom('#destination')
    let movie = wutang.valueFromDom('#movie')
    let animal = wutang.valueFromDom('#animal')


    // Set the value in the Class
    wutang.colorAnswer = color
    wutang.showAnswer = show
    wutang.destinationAnswer = destination
    wutang.movieAnswer = movie
    wutang.animalAnswer = animal 

    // Call the fetch
    wutang.retrieveData()
    
})