const button = document.querySelector('.pic1')
const marquee = document.querySelector('#scrolling')
const wOw = document.querySelector('#wOw')


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
    '"Fear the Father, Love the Daddy. That\'s the power of the home depot" -FC',
    'When Jesus dissapears for 3 days and comes back it\'s a miracle. When i do it i\'m an "alcoholic" and "ruining the easter egg hunt',
    "Our idols include but are not limited to Shrek, Master Oogway, and Myself",
    '"Crying is not an emergency, it\'s an expectation"',
    'Purble Place is one of our heavens',
    'The air in the morning before a field trip was pure',
    "We are here for a good time, not a long time",
    "We celebrate all faiths",
    "Drake and Josh are guardian angels",
    "Spread the good worm",
    '"Or Whatever" = "Amen"',
    '"You are not exempt from the concequences for your action. You will receive judgement"',
    '"Sometimes you don\'t realize the wind is pushing you, but it is" -Jared Collier'


    
 // ended on april 23 "the devil has been busy with his works"
]

function namePicker () {
    const random = Math.floor(Math.random() * names.length)
    wOw.innerHTML = names[random]
}
window.onload = namePicker()
button.addEventListener('click', namePicker)
