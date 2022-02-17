// Declared the necessary variables, connected to the HTML
const qwerty = document.querySelector('#qwerty')
const buttons = document.querySelectorAll('#qwerty button')
const phrase = document.querySelector('#phrase ul')
const startGame = document.querySelector('.btn__reset')
const overlay = document.querySelector('#overlay')
let hearts = document.querySelectorAll('.tries')
let missed = 0;
// An array that holds phrases to be split later on
const phrases = [
    "live free die young",
    "spiderman junior",
    "gorilla gurpin",
    "see what i could pull",
    "im strange",
]
// Grabs a random phrase to be split into an array of characters
const getRandomPhraseAsArray = (arr) => {
    let getLetter = math.floor(math.random() * arr.length)
    let phrase = arr[getLetter]

    return phrase.split("");
};
// 
const addPhraseToDisplay = (arr) => {
    for(let char of arr) {
        const li = document.createElement("li")
        li.innerHTML = char;
        if (char === " ") {
            li.classList.add("space")
        } else {
            li.classList.add("letter")
        }
        phrase.append(li)
    }

}

