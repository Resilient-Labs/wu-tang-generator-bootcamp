document.querySelector('#click').addEventListener('click', givenName)

function givenName() {

    const questions = ['a1', 'a2', 'a3', 'a4', 'a5']
    const answered = questions.map(function (question) {

        const picked = document.querySelector('input[name = "' + question + '"]:checked');//<- instead of using the index we are using the name  that will only grab the ones that are checked(because we are using radio)
        return picked ? picked.value : '';// an unanswered question with no input. The spot stays empty for an unchedked question and does not give us false info

    })

    if (answered.includes('')) {
        document.querySelector('#result').innerText = 'Answer the questions for your fate';
        return;

    }

    const query = questions
        .map(function (question, index) {
            return question + '=' + answered[index];
        }).join('&');

    fetch('/api?' + query)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            document.querySelector('#result').innerText = 'Your Name Is ' + data.name
        });


}