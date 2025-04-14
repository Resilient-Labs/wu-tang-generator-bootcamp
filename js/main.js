document.querySelector("#generateName").addEventListener("click", generateName)

function generateName() {
    let enteredName = document.querySelector("#name").value
    let age = document.querySelector("#age").value
    let yesBugs = document.querySelector("#yes")
    let noBugs = document.querySelector("#no")
    let flower = document.querySelector("#flower-select").value

    let adjective = ['Abloom', 'Evergreen', 'Celestial', 'Verdant', 'Ethereal', 'Idyllic', 'Pristine', 'Lush', 'Majestic', 'Serene', 'Tranquil', 'Abundant', 'Overflowing', 'Blooming', 'Crisp', 'Brisk', 'Captivating', 'Dazzling', 'Enchanting', 'Flourishing', 'Thriving', 'Glorious', 'Sun-Drenched', 'Spectacular', 'Wondrous', 'Abloom', 'Evergreen', 'Celestial', 'Verdant', 'Ethereal', 'Idyllic', 'Pristine', 'Lush', 'Majestic', 'Serene', 'Tranquil', 'Abundant', 'Overflowing', 'Blooming', 'Crisp', 'Brisk', 'Captivating', 'Dazzling', 'Enchanting', 'Flourishing', 'Thriving', 'Glorious', 'Sun-Drenched', 'Spectacular', 'Wondrous']

    let noun = ['Spoondrift', 'Grove', 'Moonglade', 'Cloud', 'Petrichor', 'Honeyfur', 'Goldfoil', 'Clinkerbell', 'Fern', 'Arbor', 'Shrubs', 'Milkweed', 'Moss', 'Sweetgrass', 'Galaxy', 'Sunrise', 'Sunset', 'Meadow', 'Gulf', 'Shore', 'Coast', 'Valley', 'Forest', 'Gathering', 'Nook', 'Sanctuary', 'Spoondrift', 'Grove', 'Moonglade', 'Cloud', 'Petrichor', 'Honeyfur', 'Goldfoil', 'Clinkerbell', 'Fern', 'Arbor', 'Shrubs', 'Milkweed', 'Moss', 'Sweetgrass', 'Galaxy', 'Sunrise', 'Sunset', 'Meadow', 'Gulf', 'Shore', 'Coast', 'Valley', 'Forest', 'Gathering', 'Nook', 'Sanctuary']

    if(yesBugs){
        let first = adjective[Math.floor(Math.random() * enteredName.length - flower.length)]
        let second = noun[Math.floor(Math.random() * age - flower.length / 5)]
        document.querySelector("h3").innerText = `Congratulations! Your garden's name is ${first} ${second}`
    }

    if(noBugs){
        let first = adjective[Math.floor(Math.random() * enteredName.length + flower.length)]
        let second = noun[Math.floor(Math.random() * age + flower.length / 5)]
        document.querySelector("h3").innerText = `Congratulations! Your garden's name is ${first} ${second}`
    }
}