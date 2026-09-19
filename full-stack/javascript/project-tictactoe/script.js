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

            if (draw === true) {
                console.log("this game is a draw");}
            else {
                playerIndex = player[playerIndex].nextPlayerIndex;}
        }
    }
    

    function makeMove(column, row) {
        if (board[column][row].state === null) { 
            board[column][row].state = player[playerIndex].marker;
 
            evaluateMove(column, row);
            console.log(game.board);
        }
        else {
            console.log("this cell is already filled");
        }
    }

    

    return {board, player, makeMove}
})();

