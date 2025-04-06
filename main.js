document.querySelector('button').addEventListener('click', submitForm)
function submitForm(){

    let arrayOfAnswerValues = [] 

    const nodeList = document.getElementsByName('albums')
    for (let i = 0; i < nodeList.length; i++ ){
        if(nodeList[i].checked) {
            arrayOfAnswerValues.push(Number(nodeList[i].value))
        }
    }

    const nodeListTwo = document.getElementsByName('verse')
    for (let i = 0; i < nodeListTwo.length; i++ ){
        if(nodeListTwo[i].checked) {
            arrayOfAnswerValues.push(Number(nodeListTwo[i].value))
        }
    }

    const nodeListThree = document.getElementsByName('spiceGirl')
    for (let i = 0; i < nodeListThree.length; i++ ){
        if(nodeListThree[i].checked) {
            arrayOfAnswerValues.push(Number(nodeListThree[i].value))
        }
    }

    const nodeListFour = document.getElementsByName('spiceVerse')
    for (let i = 0; i < nodeListFour.length; i++ ){
        if(nodeListFour[i].checked) {
            arrayOfAnswerValues.push(Number(nodeListFour[i].value))
        }
    }

    const nodeListFive = document.getElementsByName('city')
    for (let i = 0; i < nodeListFive.length; i++ ){
        if(nodeListFive[i].checked) {
            arrayOfAnswerValues.push(Number(nodeListFive[i].value))
        }
    }

    console.log(arrayOfAnswerValues)


    let sumOfAnswerValues = arrayOfAnswerValues.reduce((acc, curr) => acc + curr, 0)

    console.log(sumOfAnswerValues)

    let wuSpiceName = wuTangFirstNames[sumOfAnswerValues] + ' ' + spicegirlLastNames[sumOfAnswerValues]
       console.log(wuSpiceName)

    document.querySelector('#result').innerText = wuSpiceName

    document.querySelector('form').reset();
}




let wuTangFirstNames = ['TaiZae', 'Danzu', 'GekiKwon', 'Supreme', 'Aiyo', 'Inspektah', 'Dyrektah', 'iGod', 'uGod', 'Liquid', 'SwordzMan', 'Iron', 'Old Dirty', 'Nefarious', 'Full Metal', 'ZenKwon', 'Jahleel', 'Ason', 'Wizard-of', 'RumbleDon']

let spicegirlLastNames = ['Wooshi-Spice', 'Str8-Spice', 'Spicington', 'Spicealot', 'Saucey-Spice', 'Bitter-Spice', 'Sour-Spice', 'Spiceratops', 'Spice-inator','Splashy-Spice', 'DasherSpice', 'WingSpice', 'Spice-Sight', 'Spice', 'Herbal-Spice', 'Mellow-Spice', 'Spectral Spice', 'SpiceAble', 'Ice Spice', 'Spice-O-Life']
