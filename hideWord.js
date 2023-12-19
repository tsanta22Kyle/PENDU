

//Jeu du pendu ;
//fonction bedebe
/* creer une fonction qui transforme un mot, en une serie de "*". Le nombre de * affiché est équivalent a la longueur du mot
*Retournez le résultat*/

function hideword(word) {

    let hider = ""
    for (let i = 1; i <= word.length; i++) {
        hider += '*'
        //ou "*".repeat(word.length); 
    }
    return hider
}
//hideword("hello");

/*

Autre version

function HideWord(word){
let   hider = word.spl
    caractere = '*'
 }
    );
    console.log(hider)

}
HideWord("yo")




function showWord(word) {
    hideword(word)
    let showLetter = ""
    let showWord = ""
    for (let i = 1; i <= word.length; i++) {
        let letter = saisie("")
        let showLetter = ""
        let hider = ""
        for (let i = 1; i <= word.length-1; i++) {
            hider += '*'
             
        }
showWord += letter
        showLetter =  hider +showWord //atao moin le hider 
console.log(showLetter)
}
return console.log(showLetter)



}

showWord("hello")
*/
exports.hideword = hideword



