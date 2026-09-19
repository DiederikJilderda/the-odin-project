let tries = 1; 
const maxTries = 8; 
let finished = false;
let result = []; 

const button = document.querySelector("button");
button.addEventListener("click", () => evalGuess());

// Generates a four digit code and outputs a single number  
function generateCode() {
    let numbers = []; 
    for (i=0 ; i<4 ; i++) {
        numbers.push((Math.floor(Math.random()*10)));
    }
    return numbers;
}

// Creates the code layout on the page 
function insertCodeRow(number) {
    const codeContainers = document.querySelectorAll(".code");
    for (i=0 ; i<4 ; i++){
        codeContainers[i].textContent = number[i];
    }
}

// const inputElements = document.querySelectorAll("input");
// for (inputElement of inputElements) {
//     inputElement.addEventListener("keydown", 
//         (event) =>  {event.preventDefault(); 
//                     inputElement.nextSibling.focus()}
//     )
// }

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

function evalGuess() {
    if (finished == false) {
        let input = requestInput();
        
        const body = document.querySelector("body");
        const guessRow = document.createElement("div"); 
        
        for (i=0 ; i<4 ; i++) {
            let codeMask = code.slice();

            const guessItem = document.createElement("span");
            guessItem.classList.add("box");
            guessItem.textContent = input[i];

            if (input[i] == codeMask[i]){
                result.push("Matched!");
                guessItem.classList.add("matched");
            }
            else if (codeMask.includes(input[i])) {
                result.push("Mislocated!");
                guessItem.classList.add("mislocated");
            }
            else {
                result.push("Nope!");
                guessItem.classList.add("nope");
            }
            guessRow.appendChild(guessItem);
        }

        body.appendChild(guessRow);

        if (result[0] == "Matched!" && 
            result[1] == "Matched!" &&
            result[2] == "Matched!" &&
            result[3] == "Matched!") {
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