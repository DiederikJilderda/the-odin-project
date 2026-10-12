// player object constructor 
function createPlayer(name, marker, nextPlayerIndex) {
    let score = 0; 
    const getScore = () => score; 
    const addScore = () => {score ++; }; 

    const human = true;

    return {name, marker, nextPlayerIndex, human, getScore, addScore};
}

// cell object constructor 
function cellObject(row, column) {
    let state = null; 
    return {row, column, state};
}






// create new game instance  
function gameInstance(nameX, nameO) {
    // create player instances 
    const player = [createPlayer(nameX, "X", 1), 
                    createPlayer(nameO, "O", 0)];
    let playerIndex = 0;

    // create board instance 
    let board = createGame(nameX, nameO);

    return {player, board};
}


// initialise game 
const main = document.querySelector(".main");
const inputX = document.querySelector("#input-X"); 
const inputO = document.querySelector("#input-O"); 

const newGameButton = document.querySelector(".button-new");
let activeGames = [];
newGameButton.addEventListener("click", () => {  
    activeGames.push(gameInstance(inputX.value, inputO.value));
    inputX.value = "";
    inputO.value = "";
    console.log(activeGames)
    }

)

// starting game 
activeGames.push(gameInstance("Brendan", "Conor"));
console.log(activeGames)