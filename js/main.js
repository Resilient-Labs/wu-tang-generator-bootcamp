//grab elements in the DOM
//send it server side
//return name back

const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', generateName)

function generateName(e){
    e.preventDefault();

    //month season year continent milk
    let monthSelect = document.querySelector('#monthSelect'); //4 quaters
    let seasonSelect = document.querySelector('#seasonSelect'); //4 seasons
    let yearSelect = document.querySelector('#yearSelect'); //4 year range categories
    let continentSelect = document.querySelector('#continentSelect'); //7 continents
    let milkSelect = document.querySelector('#milkSelect'); //2 different categories

    //grabing the selected value
    let monthSelectValue = monthSelect.options[monthSelect.selectedIndex].value;
    let seasonSelectValue = seasonSelect.options[seasonSelect.selectedIndex].value;
    let yearSelectValue = yearSelect.options[yearSelect.selectedIndex].value;
    let continentSelectValue = continentSelect.options[continentSelect.selectedIndex].value;
    let milkSelectValue = milkSelect.options[milkSelect.selectedIndex].value;
    
    const dataToSend = {
        monthSelected: monthSelectValue,
        seasonSelected: seasonSelectValue,
        yearSelected: yearSelectValue,
        continentSelected: continentSelectValue,
        milkSelected: milkSelectValue
    }

    //grabbing the selected values to put the url to make an API call to the server side
    let url = `/api?month=${monthSelectValue}&season=${seasonSelectValue}&year=${yearSelectValue}&continent=${continentSelectValue}&milk=${milkSelectValue}`;

    fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('Could not return response');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            document.querySelector('#displayName').innerText = `Name: ${data.name}`;
            document.querySelector('#displayScore').innerText = `Score: ${data.score}`;
        })
        .catch(err => {
            console.log(err);
        })
}
