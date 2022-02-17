
const qwerty = document.querySelector('#qwerty')
const buttons = document.querySelectorAll('#qwerty button')
const phrase = document.querySelector('#phrase ul')
const startGame = document.querySelector('.btn__reset')
const overlay = document.querySelector('#overlay')
let hearts = document.querySelectorAll('.tries')
let missed = 0;

const phrases = [
    "live free die young",
    "spiderman junior",
    "gorilla gurpin",
    "see what i could pull",
    "im strange",

]
