// Make variables for the questions in the array

document.querySelector('button').addEventListener('click', wuTang)

function wuTang(){
    const questions = ['q1', 'q2', 'q3', 'q4', 'q5']
    const answers = questions.map(function(question){
        const picked = document.querySelector('input[name = "' + question + '"]:checked') // Instead of using index, we're using the name; we're using the map function to map each one going through the array. NOTE: ":checked" will only grab the ones checked.
        return picked ? picked.value : '' // This makes sure an unaswered question that has no input has a spot that stays empty, so we can move on & not expereince an error/false information.
    
    })

    if(answers.includes('')){
        document.querySelector('#result').innerText = 'Protect your NECK, lol'
        return
    }
    const query = questions
    .map(function(question,index){
        return question + '=' + answers[index];
    })
    .join('&') // This puts them all together with an end in between; we're storing that in a vriable called 'query'

    fetch('/api?' + query)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            document.querySelector('#result').innerText = 'Your Name Is ' + data.name
        })
         
}