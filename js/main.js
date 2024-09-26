document.querySelector('button').addEventListener('click', getWuName)

function getWuName() {
    const firstName = document.querySelector('#firstName').value
    const lastName = document.querySelector('#lastName').value
    const age = document.querySelector('#age').value
    const food = document.querySelector('#food').value.toLowerCase()
    const select = document.querySelector('select')
    const option = select.options[select.selectedIndex].value

    fetch(`/wutang?firstName=${firstName}&lastName=${lastName}&age=${age}&food=${food}&option=${option}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            document.querySelector("#wuName").innerText = data.wuName
        })
}