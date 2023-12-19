const prompt = require("prompt-sync")()
const menu = require("./menu et vérification")
const tableOfWords = require("./tableOfWords")
const randomize = require("./randomizingWords")
const hideword = require("./hideWord")
const showChar = require("./showCharv1")
const congrat = require("./congratulations")
const innovationMenu = require("./innovationMenu")

function play() {
    

    let hideWord = randomize.getRandomWord(tableOfWords.words)
    let hidenWord = hideword.hideword(hideWord)
    let tentatives = 1
    while (tentatives <= 10) {
        tentatives++
        let letter = prompt("veuillez saisir une lettre ou le mot complet :")
        let answer = menu.verify(letter, hideWord)
        console.log(`il vous reste ${tentatives} tentatives `)
        console.log(`le mot caché : ${hidenWord} `)
        congrat.congrat(letter, hideWord)
        hidenWord = showChar.showChar(hideWord, letter, answer, hidenWord)
        console.log(hidenWord)
        if (hidenWord == hideWord) {
            innovationMenu.win()
            break
        } if (tentatives == 10) {
            innovationMenu.lose()
        }

    }

}

exports.play = play





