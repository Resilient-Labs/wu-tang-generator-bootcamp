document.querySelector('button').addEventListener('click', getName)

function getName() {
    let names = ['RZA-ish', 'GZA-ish', 'Young$', 'ray-KWON', 'God-Zll', 'Inspect-D', 'M-GOD', 'L-Kira', 'Lex-D', 'Capput-C']
    let nameIndex = Math.floor(Math.random()*10)
    console.log(nameIndex)
    let name = names [nameIndex]
    console.log(name)
    document.getElementById('wtname').innerText = name
}

//Citation: Sherrell Primo