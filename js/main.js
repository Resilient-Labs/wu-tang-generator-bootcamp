document.querySelector('button').addEventListener('click', getName)
document.querySelector('#clear').addEventListener('click', clear)

function getName() {
    //used chat GPT to debug and learn about the ?.
    const nameInput = document.querySelector('#name input')?.value
    const ageInput = document.querySelector('input[name="age"]:checked')?.value;
    const genderInput = document.querySelector('input[name="gender"]:checked')?.value;
    const hobbyInput = document.querySelector('input[name="hobby"]:checked')?.value;
    const breadInput = document.querySelector('input[name="pockets"]:checked')?.value;
    let tangName;
    const resultName = document.querySelector('p')

    if (!nameInput || !ageInput || !genderInput || !hobbyInput || !breadInput) {
        resultName.innerText = '⚠️ Please fill out all fields before generating your Tang name.';
    } else {
        try {
            fetch(`/api?name=${nameInput}&&age=${ageInput}&&gender=${genderInput}&&hobby=${hobbyInput}&&pockets=${breadInput}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    /*
                    age: "option-1"
                    gender:"male"
                    hobby: "sports"
                    name: "abdi"
                    pockets: "option-1"
                    */

                    //if user age >25 && male-> Method or Killa (first) & kid or won for last 
                    //->if hobby = sports || hobby = music && pockets = >10k -> kid -> Killa & kid 
                    //else -> Method won
                    if ((data.age === 'option-1' || data.age === 'option-2') && data.gender === 'male') {
                        if ((data.hobby === 'sports' || data.hobby === 'music') && (data.pockets === 'option-1')) {
                            tangName = `${data.firstName[1]} ${nameInput.toUpperCase().substring(0, 1)}-${data.lastName[1]}`; // Killa N-kid
                        } else if ((data.pockets === 'option-4')) {
                            tangName = `${data.firstName[0]} ${nameInput.toUpperCase().substring(0, 1)}-${data.lastName[2]}`; // Method N-won
                        } else {
                            tangName = `${data.firstName[1]} ${nameInput.toUpperCase().substring(0, 1)}-${data.lastName[1]}`; // Killa N-kid
                        }
                    }
                    //else if user age <25 && male -> Mastah, Gangsta or Inspectah
                    //Inspectah if money is 10-30k gangsta if money is 30-100k, and mastah if 100k+
                    //last name will be name+ish if hobbies are art or reading
                    //else last name will be name+man if hobbies are 

                    else if ((data.age === 'option-3' || data.age === 'option-4') && data.gender === 'male') {
                        if (data.pockets === 'option-2') {
                            tangName = `${data.firstName[4]} ${nameInput.toUpperCase()} ${data.lastName[3]}`; // Inspectah + ish
                        } else if (data.pockets === 'option-3') {
                            tangName = `${data.firstName[3]} ${nameInput.toUpperCase()} ${data.lastName[3]}`; // Gangsta + ish
                        } else if (data.pockets === 'option-4') {
                            tangName = `${data.firstName[2]} ${nameInput.toUpperCase()} ${data.lastName[0]}`; // Mastah + man
                        } else {
                            tangName = `${data.firstName[0]} ${nameInput.toUpperCase()} ${data.lastName[2]}`; //Method + won
                        }
                    }
                    //else if user gender is female then -> Method or Killa (first) & last girlyLastName
                    //else if user age <25 && female -> Mastah, Gangsta or Inspectah & last girlyLastName
                    else if (data.gender === 'female') {
                        if (data.age === 'option-1' || data.age === 'option-2') {
                            if (data.pockets === 'option-1' || data.pockets === 'option-2') {
                                if (data.hobby === 'art' || data.hobby === 'reading') {
                                    tangName = `${data.firstName[0]} ${data.girlyLastName[2]}`; // Method rose
                                } else {
                                    tangName = `${data.firstName[0]} ${data.girlyLastName[0]}`; // Method pink
                                }
                            } else if (data.pockets === 'option-3') { // If pockets = option-3 (higher tier), go with "Killa"
                                if (data.hobby === 'art' || data.hobby === 'reading') {
                                    tangName = `${data.firstName[1]} ${data.girlyLastName[3]}`; // Killa moon
                                } else {
                                    tangName = `${data.firstName[1]} ${data.girlyLastName[1]}`; // Killa purple
                                }
                            }
                        } else if (data.age === 'option-3' || data.age === 'option-4') {
                            if (data.pockets === 'option-2') {
                                tangName = `${data.firstName[4]} ${data.girlyLastName[0]}`; // Inspectah pink
                            }
                            else if (data.pockets === 'option-3') {
                                tangName = `${data.firstName[3]} ${data.girlyLastName[1]}`; // Gangsta purple
                            }
                            else if (data.pockets === 'option-4') {
                                tangName = `${data.firstName[2]} ${data.girlyLastName[2]}`; // Mastah rose
                            }
                        } else {
                            tangName = `${data.firstName[0]} ${data.girlyLastName[0]}`; // Method pink
                        }
                    }

                    console.log(tangName)
                    //console.log(tangName1)
                    console.log(data.firstName[1])
                    console.log(data.lastName[1])
                    resultName.innerText = `${tangName}`
                })
        }
        catch (err) {
            console.log(`error fetching: ${err}`)
        }
    }

}


function clear(name, age, hobby, gender, bread, result) {
    document.querySelector('#name input').value = ''
    document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
    document.querySelector('p') = ''
}