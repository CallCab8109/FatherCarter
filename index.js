const button = document.querySelector('.pic1')
const marquee = document.querySelector('#scrolling')
const wOw = document.querySelector('#wOw')
const confessionsForm1 = document.getElementById('confessionsForm')
const confessionsInput = document.getElementById('confessions-input')
const confessionsButton = document.querySelector('.confessionsButton')


function getQuote () {
    axios.get("/api/getQuote/")
    .then((response) => {
        const quote = response.data
        wOw.innerHTML = quote
        // console.log(response.data)
    })
}

function pushConfession (event) {
    event.preventDefault()

    const confession = {
    confession: confessionsInput.value
    }

    confessionsInput.value = ''

    axios.post("/api/confessionsForm/", confession)
    .then((response) => {
        console.log(response.data)
    })
    .catch((err) => {
        console.log(err)
    })
}

function getConfessions () {
    axios.get("/api/getConfessions/")
    .then((response) => {
    const quote = response.data
    console.log(quote)
    })
}

window.onload = getQuote()
button.addEventListener('click', getQuote)

confessionsForm1.addEventListener('submit', pushConfession)
// confessionsButton.addEventListener('click', getConfessions)