document.querySelector('#generate').addEventListener('click', specialName);

function specialName() {
    const questions = ['number1', 'number2', 'number3', 'number4', 'number5'];

    const answers = questions.map(function (question) {
        const picked = document.querySelector(
            'input[name="' + question + '"]:checked'
        );

        return picked ? picked.value : '';
    });

    if (answers.includes('')) {
        document.querySelector('#result').innerText = 'Protect Ya Neck';
        return;
    }
    const query = questions
        .map(function (question, index) {
            return question + '=' + answers[index];
        })
        .join('&');

    fetch('/api?' + query)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.querySelector('#result').innerText =
                'Your Name is ' + data.name;
        })
        .catch(function (error) {
            console.log('Error:', error);
            document.querySelector('#result').innerText =
                'Something went wrong!';
        });
}

