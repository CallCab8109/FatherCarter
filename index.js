const button = document.querySelector('.pic1')
const marquee = document.querySelector('#scrolling')
const wOw = document.querySelector('#wOw')



function getQuote () {
    axios.get("/api/getQuote/")
    .then((response) => {
        const quote = response.data
        wOw.innerHTML = quote
        // console.log(response.data)
    })
}

window.onload = getQuote()
button.addEventListener('click', getQuote)