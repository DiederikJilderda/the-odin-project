let tries = 1; 
const maxTries = 8; 
let finished = false;
let result = []; 

// Eventlistener for button click -> run game function
const inputs = document.querySelectorAll(".input");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    if (input.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
        }
    })
})

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && input.value === "" && index > 0) {
        inputs[index - 1].focus();
        console.log(index)
        }
    else if (e.key === 'Enter') {
        evalGuess();
        }
    })
})


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

    const focusElement = document.querySelector(".input");
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
        
        // 
        const body = document.querySelector("body");
        const guessSpace = document.querySelector(".guessSpace .center");
        const guessEntry = document.createElement("div");

        // Create the number of guesses text box on the left 
        const guessNumber = document.createElement("div");
        guessNumber.textContent = "Guess " + tries + "/" + maxTries;
        guessNumber.classList.add("guessText", "column", "left");
        
        // Create the guessed numbers in boxes in the middle 
        const guessRow = document.createElement("div"); 
        for (i=0 ; i<4 ; i++) {
            const guessItem = document.createElement("span");
            guessItem.classList.add("box");
            guessItem.textContent = input[i];
            guessRow.appendChild(guessItem);
        }

        // Review result  
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

        // Create result boxes on the right 
        const resultBox = document.createElement("div");
        resultBox.classList.add("column", "right");

        const matchBox = document.createElement("span");
        matchBox.classList.add("box", "matched");
        matchBox.textContent = matchesCounter;
        resultBox.appendChild(matchBox);

        const mislocatedBox = document.createElement("span");
        mislocatedBox.classList.add("box", "mislocated");
        mislocatedBox.textContent = mislocatedCounter;
        resultBox.appendChild(mislocatedBox);

        // Appends the tries text, input and result to a new entry
        guessEntry.appendChild(guessNumber);
        guessEntry.appendChild(guessRow);
        guessEntry.appendChild(resultBox);
        body.appendChild(guessEntry);
        
        // Check if guess is correct 
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

        // Increase number of tries and close game if max tries 
        tries += 1; 
        if (tries <= maxTries){
            const focusElement = document.querySelector(".input");
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