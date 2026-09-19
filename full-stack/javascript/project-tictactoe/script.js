function createBoard(size) {
    function cellObject(column, row) {
        let state = null; 
        return {column, row, state};
    }

    let board = []; 
    for (i=0 ; i<size ; i++){
        board.push([]);
        for (j=0 ; j<size ; j++) {
            board[i].push(cellObject(i, j))
        }
    }
    return board; 
}

function createPlayer(name, marker, nextPlayerIndex) {
    let score = 0; 
    const getScore = () => score; 
    const addScore = () => {score ++; }; 

    return {name, marker, nextPlayerIndex, getScore, addScore};
}


const game = (() => {
    let board = createBoard(3);
    const player = [createPlayer("Josh", "X", 1), 
                    createPlayer("Mary", "O", 0)];
    let playerIndex = 0;


    function resetGame() {
        for (let column of board) {
            for (let cell of column) {
                cell.state = null; 
            }
        }
        playerIndex === 0 ? playerIndex = 1 : playerIndex = 0;
        console.log("gamestate is reset");
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
    

    function makeMove(column, row) {
        if (board[column][row].state === null) { 
            board[column][row].state = player[playerIndex].marker;
            // newCell.textContent = player[playerIndex].marker;

            evaluateMove(column, row);
            console.log(game.board);
        }
        else {
            console.log("this cell is already filled");
        }
    }

    

    return {board, player, makeMove}
})();



const main = document.querySelector(".main");
const inputX = document.querySelector("#input-X"); 
const inputO = document.querySelector("#input-O"); 


const newGameButton = document.querySelector(".button-new");
newGameButton.addEventListener("click", () => {   
    constructDisplay(inputX.value, inputO.value);
    inputX.textContent = "";
    inputO.textContent = "";
    }
)
    
function constructDisplay(nameX, nameO) {
    //create game instance container 
    const gameInstance = document.createElement("div");
    gameInstance.classList.add("game-instance");
    main.appendChild(gameInstance);

    //create game header 
    const gameHeader = document.createElement("div");
    const boardContainer = document.createElement("div");
    gameHeader.classList.add("game-header");
    boardContainer.classList.add("board");
    // boardContainer.textContent = "grid";
    gameInstance.appendChild(gameHeader);
    gameInstance.appendChild(boardContainer);

    //create header elements 
    const playerScoreX = document.createElement("div");
    const playerScoreO = document.createElement("div");
    const removeButton = document.createElement("button");
    playerScoreX.classList.add("player-score");
    playerScoreO.classList.add("player-score");
    removeButton.classList.add("button-delete");
    playerScoreX.textContent = nameX + " has a score of 4";
    playerScoreO.textContent = nameO + " has a score of 3";
    removeButton.textContent = "X";
    gameHeader.appendChild(playerScoreX);
    gameHeader.appendChild(playerScoreO);
    gameHeader.appendChild(removeButton);

    //create grid 

    function cellObject(row, column) {
        let state = null; 
        return {column, row, state};
    }

    let board = []; 
    for (i=0 ; i<3 ; i++){
        board.push([]);
        for (j=0 ; j<3 ; j++) {
            let newCellObject = new cellObject(i,j);
            const newCell = document.createElement("div");

            newCell.classList.add("cell");
            board[i].push(newCellObject)
            newCell.textContent = "00";
            boardContainer.appendChild(newCell);

            newCell.addEventListener("click", () => game.makeMove(newCellObject.row, newCellObject.column));
        }
    }

}

function deleteDisplay() {
    return 
}





// press new game button 
// read player names and type 

// create new game instance 
// within game instance create header and grid 
// within grid create cells and cellobjects 
// attach eventlistener to cellobjects 

// click cell, run game.makeMove(cell.column, cell.row)