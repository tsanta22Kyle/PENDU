const menu = require("./menu et vérification");
const prompt = require("./prompt");
const innovationMenu = require("./innovationMenu");
function game() {
    innovationMenu.starting()
    menu.menu()
    prompt.promptChoice()

}
game()









