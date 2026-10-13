// create new game instance  
function gameInstance(nameX, nameO) {
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

    // create game board UI and underlying arrays 
    function createGame() {
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
        playerScoreX.textContent = player[0].name + ": " + player[0].getScore();
        playerScoreO.textContent = player[1].name + ": " + player[1].getScore();
        removeButton.textContent = "X";
        headerContainer.appendChild(playerScoreX);
        headerContainer.appendChild(playerScoreO);
        headerContainer.appendChild(removeButton);

        removeButton.addEventListener("click", (event) => event.target.parentNode.parentNode.remove());

        // create board 
        const boardContainer = document.createElement("div");
        boardContainer.classList.add("board");
        instanceContainer.appendChild(boardContainer);

        // create cells and attach click event handler
        let board = []; 
        for (let i=0 ; i<3 ; i++){
            board.push([]);
            for (let j=0 ; j<3 ; j++) {
                let newCellObject = new cellObject(i,j);
                const newCell = document.createElement("div");


                newCell.classList.add("cell");
                board[i].push(newCellObject);
                boardContainer.appendChild(newCell);

                newCell.addEventListener("click", (event) => makeMove(event,i,j));
            }
        }
        return board;
    }


    // make move on click 
    const colors = ["red", "blue"];
    function makeMove(event,row,column) {
        if (board[row][column].state === null) { 
            board[row][column].state = player[playerIndex].marker;
            event.target.textContent = player[playerIndex].marker;
            event.target.classList.add(colors[playerIndex]);

            evaluateMove(event, row, column);
            console.log(board);
        }
        else {
            console.log("this cell is already filled");
        }
    }

    // evaluate move if valid 
    function evaluateMove(event, column, row) {
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
                resetGame(event);          
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
                resetGame(event);
            }
            else {
                playerIndex = player[playerIndex].nextPlayerIndex;
            }
        }
    }

    // reset board 
    function resetGame(event) {
        // reset cell state 
        for (let column of board) {
            for (let cell of column) {
                cell.state = null; 
            }
        }

        // reset cell content 
        let cells = event.target.parentNode.querySelectorAll(".cell");
        for (let cell of cells) {
            cell.textContent = ""; 
        }
        
        // update score displays 
        let scoreDisplays = event.target.parentNode.parentNode.querySelector(".game-header").querySelectorAll(".player-score")
        for (i=0 ; i<2 ; i++) {
            scoreDisplays[i].textContent = player[i].name + ": " + player[i].getScore()
        }

        // pass starting player to other player 
        playerIndex === 0 ? playerIndex = 1 : playerIndex = 0;
    }

    
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
    inputX.value = null;
    inputO.value = null;
    }


)


// starting game 
activeGames.push(gameInstance("Brendan", "Conor"));
// console.log(activeGames)
