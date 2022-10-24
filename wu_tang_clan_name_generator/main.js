/* 

Goal: Create a Wu-Tang Clan name generator. 
Present the user with 5 survey questions and based on those answers randomly generate their name. 
The name doesn't have to be exact names, but Wu-Tang sounding-ish names. 
Ex: Childish Gambino (who actually got his name from a Wu-Tang name generator).

*/



document.querySelector('button').addEventListener('click', getName)





function getName() {

    let howWeLiving = []

    document.querySelectorAll('.checkBox').forEach((box) => { //loops throuhg check boxes to see which ones were selected
        if (box.checked) {
            howWeLiving.push(box.value) //then stores their value in an array if they are
        }
    })

    const randomLevel = document.querySelector('#randomLevel').value
    let randomLetter = document.querySelector('#letterSelector').value
    //console.log(randomLetter)
    let prefix = document.querySelector('#ChoosePrefix').value
    let suffix = document.querySelector('#ChooseSuffix').value



    //get a random word starting with a user selected letter
    fetch(`https://random-word-form.herokuapp.com/random/noun/${randomLetter}?count=${randomLevel}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)


            let namePart1 = data[Math.floor(Math.random() * data.length)]
            let namePart2 = data[Math.floor(Math.random() * data.length)]



            let ballerStatus = isBallin(howWeLiving)

            let nameGenerated = `${prefix} ${namePart1} ${namePart2} ${suffix} \n and you are most definitely ${ballerStatus} `

            document.querySelector('h2').innerText = nameGenerated

        })
        .catch(err => {
            console.log(`error ${err}`)

        });

}




function isBallin(arr) {
    let ballin = 0
    let notballin = 0

    arr.forEach(element => {
        if (element === 'Ballin') { //count responses from checkbox part of the survey
            ballin++
        } else {
            notballin++
        }
    });

    if (ballin >= notballin) { // >= to give em the benefit of the doubt lol
        return 'Ballin'
    } else {
        return 'Not Ballin'
    }
}