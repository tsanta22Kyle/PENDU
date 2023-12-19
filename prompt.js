const prompt = require ("prompt-sync")();
const addWord = require("./addWord")
const play = require("./play")
const tableOfWords = require("./tableOfWords")

/**
 * @function askChoice
 * @returns number
 */
function askChoice() {
    //menu();
    return + prompt("Veuillez choisir entre les menus: ");
}

/**
 * @function userChoice
 * @param {number} choice 
 * @returns 
 */
function userChoice() {
    let choice;
    do {
        choice = askChoice()
        if (choice == 1) {
            //fonction jouez;
            play.play()
        }
        else if (choice == 2) {
           /**addword */
            addWord.addWord(tableOfWords.words)
        }
        else if (choice == 3) {
            return ("Merci d'avoir jouer! A bientôt.");
        }
        else{
            console.log ("invalide commmand")
        }
    } while (choice != 3)
}

/**
 * @function promptChoice permet de demander et d'executer la requête de l'utilisateur
 * @returns string || function 
 */

function promptChoice (){
    return userChoice();  
}
;
exports.promptChoice = promptChoice






