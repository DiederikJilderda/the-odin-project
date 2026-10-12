// const game = (() => {
//     function resetGame() {
//         for (let column of board) {
//             for (let cell of column) {
//                 cell.state = null; 
//             }
//         }
//         playerIndex === 0 ? playerIndex = 1 : playerIndex = 0;
//         console.log("gamestate is reset");
//     }

   
function testfunction(row,column) {
    console.log([row,column]);
    console.log(player);
}

function evaluateMove(column, row) {
    if ((board[column][0].state === board[column][1].state &&
        board[column][0].state === board[column][2].state &&
        board[column][0].state !== null)
        ||
        (board[0][row].state === board[1][row].state &&
        board[0][row].state === board[2][row].state &&
        board[0][row].state !== null)
        ||
        (column === row &&
        board[1][1].state === board[0][0].state &&
        board[1][1].state === board[2][2].state &&
        board[1][1].state !== null)
        ||
        (column + row === 2 &&
        board[1][1].state === board[2][0].state &&
        board[1][1].state === board[0][2].state &&
        board[1][1].state !== null)) 
        
        {
            player[playerIndex].addScore();
            console.log(player[playerIndex] + ", you win!");    
            resetGame();          
        }

    else {
        let draw = true; 
        for (i=0 ; i<3 ; i++){
            for (j=0 ; j<3 ; j++){
                if (board[i][j].state === null) {
                    draw = false;
                }
            }
        }

        // write alternative draw check with board[column].every() method

        if (draw === true) {
            console.log("this game is a draw");}
        else {
            playerIndex = player[playerIndex].nextPlayerIndex;}
    }
}



function makeMove(row,column) {
    if (board[row][column].state === null) { 
        board[row][column].state = player[playerIndex].marker;

        evaluateMove(row, column);
        console.log(game.board);
    }
    else {
        console.log("this cell is already filled");
    }
}

function createGame(nameX, nameO) {
    //create game instance container 
    const instanceContainer = document.createElement("div");
    instanceContainer.classList.add("game-instance");
    main.appendChild(instanceContainer);

    //create game header 
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("game-header");
    instanceContainer.appendChild(headerContainer);

    const playerScoreX = document.createElement("div");
    const playerScoreO = document.createElement("div");
    const removeButton = document.createElement("button");
    playerScoreX.classList.add("player-score");
    playerScoreO.classList.add("player-score");
    removeButton.classList.add("button-delete");
    playerScoreX.textContent = nameX + " has a score of 4";
    playerScoreO.textContent = nameO + " has a score of 3";
    removeButton.textContent = "X";
    headerContainer.appendChild(playerScoreX);
    headerContainer.appendChild(playerScoreO);
    headerContainer.appendChild(removeButton);


    // create board 
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board");
    instanceContainer.appendChild(boardContainer);

    let board = []; 
    for (let i=0 ; i<3 ; i++){
        board.push([]);
        for (let j=0 ; j<3 ; j++) {
            let newCellObject = new cellObject(i,j);
            const newCell = document.createElement("div");

            newCell.classList.add("cell");
            board[i].push(newCellObject)
            newCell.textContent = "";
            boardContainer.appendChild(newCell);

            // newCell.addEventListener("click", () => makeMove(i,j));
            newCell.addEventListener("click", () => testfunction(i,j));
        }
    }
    return board;
}


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
let activeGames = [];

const newGameButton = document.querySelector(".button-new");
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