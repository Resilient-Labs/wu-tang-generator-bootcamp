document.querySelector('button').addEventListener('click', wuTang)

function wuTang() {
     let results = docudocument.querySelector('#result').innerText
     
    const questions = ['q1', 'q2', 'q3', 'q4', 'q5']
    const answers = questions.map(function(question) {
        const picked = document.querySelector(`input[name = "${question}"]:checked`)
        return picked ? picked.value : ''
    })

    if (answers.includes('')) {
        results = "Don't Get Necked cuzzo..."
        return
    }
    const query = questions
        .map(function(question, index) {
            return question + '=' + answers[index]
        })
        .join('&')

    fetch('/api?' + query)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            results = `Your Name is ${data.name}`
        })
}