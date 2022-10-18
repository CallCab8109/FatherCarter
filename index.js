
const button = document.querySelector('.button')
const marquee = document.querySelector('#scrolling')
const wOw = document.querySelector('#wOw')
console.log('it clicked')


const names = [
    "Can\'t mistakey if not awakey",
    "Do not be led astray, for satan also uses education",
    "Touching another at the urinal is an offense that will send you STRAIGHT to hell",
    "You may fascinate a woman with cheese. This is an old spell but quite effective",
    "Harambe dying triggered a curse",
    "Ever since pluto wasn't a planet, this happened",
    "We do not stan Frosted Flakes or Cornflakes",
    "If you microwave mayonnaise, you will go straight to hell",
    "If mayonnaise ever comes in cans, take it as a sign of the end times and find your loved ones because the time is nigh",
    "\"In the beginning the universe was created. This made a lot of people angry and has been widely regarded as a bad move.\" -Douglas Adams",
    "\"The most memorable moments in life are the ones you never planned\" -Unknown",
    "\"Premonitions may be found in candy and beef jerky\" -Father Carter",
    "\"Life isn't always pickles and peaches\" -a random 3rd grader",
    "\"Father, Son, and Holy Ghost. Head, shoulders, knees, and toes, heyyyyy macarena\" -F.C.",
    "I draw the line at child murder. Shouldn\'t you?",
    "\"If you go knocking on enough doors to see the devil, eventually he may answer.\" -Unknown",
    "\"Thou shalt not abuse the gift of prophecy\" -Father",
    "\"If you die laughing at your own joke, you will go straight to heaven\" -Father Carter",
    "\"If someone else dies laughing at your joke, you both go to heaven\" -Father Carter",
    "\"Do not let the worms dictate your lifestyle\" -Unknown",
 // ended at april 17 on FC 1:12
]

function namePicker () {
    console.log('it works')
    const random = Math.floor(Math.random() * names.length)
    wOw.innerHTML = names[random]
}

button.addEventListener('click', namePicker)
