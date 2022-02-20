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

// Loops through the array of characters to see which are spaces and which are letters
const addPhraseToDisplay = (arr) => {
    for(let char of arr) {
        const li = document.createElement("li")
        li.innerText = char;
        if (char === "letter") {
            li.classList.add("letter")
        } else {
            li.classList.add("space")
        }
        phrase.append(li)
    }
}

// Checks to see if a button matches a letter in any of the phrases
const checkLetter = (button) => {
    let match = null
    const listItms = phrase.children

    button.disabled = true
    for (let li of listItms) {
        if (button.innerText === li.innerText) {
            li.classList.add("show")
            match = button.innerText
        }
    }
    return match 
}

// listens for a click which then will decide whether to dock a heart or add the 'chosen' class to a letter
qwerty.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON" && !e.target.classList.contains("chosen")) {
        e.target.classList.add("chosen")
        let match = checkLetter(e.target)
        if (match != checkLetter) {
            hearts.missed.innerHTML = '<img src="images/lostHeart.png" height="35px" width="30px"/>'
            missed += 1
        }
    }
    checkWin()
});

// checks if the letter and show constants are equal in length, then checks to see if missed is greater than four
const checkWin = () => {
    const letter = document.querySelectorAll(".letter")
    const show = document.querySelectorAll(".show")
    let message = document.querySelector(".title")

    if (letter.length === show.length) {
        overlay.className = "Win"
        message.innerText = "Nice job, you won!"
        overlay.style.display = "flex"
    }
    if (missed > 4) {
        overlay.className = "Lose"
        message.innerText = "Too bad, you lost!"
        overlay.style.display = "flex"
    }
} 

// listens for when to resart the game using the resetGame function
startGame.addEventListener('click', () => resetGame())
