



document.querySelector('button').addEventListener('click', wuTang);


function wuTang(){

    const questions = [ 'q1', 'q2', 'q3', 'q4', 'q5' ]
    const answers = questions.map(function(question){
        const picked = document.querySelector('input[name = "' + question + '"]:checked') // Will only grab the indexes that are checked
        return picked ? picked.value : ''       // This makes sure an if an unanswered question stays empty instead of giving an error or default value 
    })

    if(answers.includes('')){
        document.querySelector('#result').innerText = 'Protect your NECK'
        return
    }
    
    const query = questions 
                            .map(function(question, index) {
                                return question + '=' + answers[index];
                            })
                            .join('&')
                            fetch('/api?' + query)
                                .then(function(response) {
                                    return response.json();
                                })
                                .then(function(data) {
                                    document.querySelector('#result').innerText = 'Your name is ' + data.name
                                })
}