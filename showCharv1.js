const prompt = require("prompt-sync")();
/**
 * @fonction showChar
 * @param {string} word
 * @param {string} char
 * @param {boolean} answer
 * @param {string} theHidenWord
 * @returns string
 */

function showChar(word, char, answer, theHidenWord) {
    let tab = theHidenWord.split("");

    if (answer == true) {
        for (let i = 0; i < tab.length; i++) {
            if (word[i] == char) {
                tab[i] = char
            }
        } 
    }
    
    return tab.join("");
}
const theHidenWord = showChar("abega", "a", true, "*****"); 
//console.log(showChar("abega", "b", true, theHidenWord));
//console.log(showChar("abega", "a", true, theHidenWord));
//console.log(theHidenWord)
exports.showChar = showChar

