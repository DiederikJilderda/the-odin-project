let tries = 1; 
const maxTries = 8; 
let finished = false;
let result = []; 

// Eventlistener for button click -> run game function
const button = document.querySelector("button");
button.addEventListener("click", () => evalGuess());

// Eventlistener for inputfield inputs 
const inputElements = document.querySelectorAll("input");
for (inputElement of inputElements) {
    inputElement.addEventListener("keypress", function(e) {
        if (e.key === 'Enter') {
            evalGuess();
        }
        else {
            console.log(e.key.type);
            // console.log(typeof(inputElement));
            // console.log(inputElement.nextSibling);
            // inputElement.focus();
            return;
        }
    })
}

// Generates a four digit code of nonrepeating integers 
function generateCode() {
    let numbers = [];
    while (numbers.length < 4) {
        let number = (Math.floor(Math.random()*10));
        if (numbers.includes(number) == false) {
            numbers.push(number);
        }
    }
    return numbers;
}

// Creates the code layout on the page 
function insertCodeRow(number) {
    const codeContainers = document.querySelectorAll(".code");
    for (i=0 ; i<4 ; i++){
        codeContainers[i].textContent = number[i];
    }

    const focusElement = document.querySelector("input");
    focusElement.focus();
    return;
}

// Reveal code numbers 
function revealCode() {
    const codeNumbers = document.querySelectorAll(".code");
    for (number of codeNumbers) {
        number.classList.remove("code");
        number.classList.add("revealed");
    }
    return finished = true;
}

// parse input on button click
function requestInput() {
    let input = [];
    const inputFields = document.querySelectorAll(".input");
    for (inputField of inputFields) {
        input.push(Number(inputField.value));
        inputField.value = "";
    }
    return input;
}


function checkMatches(input) {
    let matchesCounter = 0; 
    for (i=0 ; i<4 ; i++) {
        if (input[i] == code[i]){
            matchesCounter += 1;
        }
    }

    const matchBox = document.createElement("span");
    matchBox.classList.add("box", "matched");
    matchBox.textContent = matchesCounter;
    rightColumn.appendChild(matchBox);
}

function checkMislocated(input) {
    let mislocatedCounter = 0; 
    for (i=0 ; i<4 ; i++) {
        if (code.includes(input[i])){
            mislocatedCounter += 1;
        }
    }

    const mislocatedBox = document.createElement("span");
    mislocatedBox.classList.add("box", "matched");
    mislocatedBox.textContent = mislocatedCounter;
    rightColumn.appendChild(mislocatedBox);
}

function evalGuess() {
    if (finished == false) {
        let input = requestInput();
        
        const body = document.querySelector("body");
        const guessSpace = document.querySelector(".guessSpace .center");
        const guessRow = document.createElement("div"); 
        
        for (i=0 ; i<4 ; i++) {
            const guessItem = document.createElement("span");
            guessItem.classList.add("box");
            guessItem.textContent = input[i];
            guessRow.appendChild(guessItem);
        }
        guessSpace.appendChild(guessRow);

        let matchesCounter = 0; 
        let mislocatedCounter = 0;
        for (i=0 ; i<4 ; i++) {
            if (input[i] == code[i]){
                matchesCounter += 1;
            }
            else {
                if (code.includes(input[i])){
                mislocatedCounter += 1;
                }
            }
        }
        // console.log(matchesCounter);
        // console.log(mislocatedCounter);
        console.log(code);
        const rightColumn = document.querySelector(".guessSpace .right");
        const resultBox = document.createElement("div");

        const matchBox = document.createElement("span");
        matchBox.classList.add("box", "matched");
        matchBox.textContent = matchesCounter;
        resultBox.appendChild(matchBox);

        const mislocatedBox = document.createElement("span");
        mislocatedBox.classList.add("box", "mislocated");
        mislocatedBox.textContent = mislocatedCounter;
        resultBox.appendChild(mislocatedBox);

        rightColumn.appendChild(resultBox);

        const leftColumn = document.querySelector(".guessSpace .left");
        const guessNumber = document.createElement("div");
        guessNumber.textContent = "Guess " + tries + "/" + maxTries;
        guessNumber.classList.add("guessText");
        leftColumn.appendChild(guessNumber);


        if (matchesCounter == 4) {
                const resultStr = document.createElement("div");
                resultStr.textContent = "Well done!";
                resultStr.classList.add("resultStr");
                body.appendChild(resultStr);
                revealCode();
                return; 
            }
        else {
            result = [];
        }

        tries += 1; 
        if (tries <= maxTries){
            const focusElement = document.querySelector("input");
            focusElement.focus();
            return;
        }
        else {
            const resultStr = document.createElement("div");
            resultStr.textContent = "Too bad!";
            resultStr.classList.add("resultStr");
            body.appendChild(resultStr);
            revealCode();
        }
    }
}


// runs code generation and placement 
const code = generateCode();
insertCodeRow(code);