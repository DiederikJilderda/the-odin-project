const initGridSize = 16; 
const totalWidth = 480; 
let opacity = 0; 
createGrid(initGridSize);

// Check if shift is pressed: do not draw when shift is pressed  
let shiftDown = false;
document.addEventListener("keydown", (event) => {
    if (event.key === 'Shift') {
        shiftDown = true;
    }
})
document.addEventListener("keyup", (event) => {
    if (event.key === 'Shift') {
        shiftDown = false;
    }
})


// Main function te create grid 
function createGrid(gridSize) {
    opacity = 0; 
    const boxSize = totalWidth / gridSize;

    const body = document.querySelector("body");
    const container = document.createElement("container"); 
    body.appendChild(container);

    for (let i=0 ; i<gridSize ; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j=0 ; j<gridSize ; j++) {
            const box = document.createElement("div");

            box.classList.add("box");
            box.style.height = boxSize + "px"; 
            box.style.width = boxSize + "px";

            row.appendChild(box);
        }
        
        container.appendChild(row);
    }

    // Mouseover eventlistener function for cells 
    function colorBox(event,box) {
        if (shiftDown === false) {
            box.classList.add("highlight"); 
            box.style.opacity = opacity; 
            opacity += 0.05;

            let boxColor = "rgb(" + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ", " + Math.floor(Math.random()*255) + ")"; 
            box.style.backgroundColor = boxColor;
        }
    }

    const boxes = document.querySelectorAll(".box");
    for (let box of boxes) {
        box.addEventListener("mouseover", (event) => {colorBox(event,box)})
    }
}

// Check for valid input then generate grid 
function generateNewGrid() {
    const gridSize = inputField.value; 
    if (gridSize < 1 || gridSize > 100) {
        alert("Please submit an input between 1 and 100");
        inputField.value = "";
        inputField.focus();
    }
    else {
        body.removeChild(body.children[1]);
        createGrid(gridSize);
    }
}

// Clear grid
function reset() {
    opacity = 0; 
    
    const boxes = document.querySelectorAll(".highlight"); 
    for (let box of boxes) {
        box.classList.remove("highlight")
        box.style.backgroundColor = "white";
        box.style.opacity = 1;
    }
}

// Run generate function on enter 
function enterPress(event) {
    if (event.key == "Enter") {
        generateNewGrid();
    }
    else if (isNaN(event.key) && event.key != "Backspace") {
        event.preventDefault();
    }
}


const inputField = document.querySelector(".inputField");
inputField.focus();
inputField.addEventListener("keypress", (event) => {enterPress(event)});


const generateButton = document.querySelector(".generate");
generateButton.addEventListener("click", () => {generateNewGrid()})


const body = document.querySelector("body");
const resetButton = document.querySelector(".reset"); 
resetButton.addEventListener("click", () => {reset()});