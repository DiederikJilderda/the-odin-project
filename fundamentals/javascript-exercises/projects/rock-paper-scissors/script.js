let humanChoice = "";
const dT = 2000; 
let computerScore = 0; 
let humanScore = 0;


const score = document.querySelector(".row"); 
score.textContent = "Human: " + humanScore + " - Computer: " + computerScore;

// Button eventlisteners 
const humanBoxes = document.querySelectorAll(".human");
for (let humanBox of humanBoxes) {

    // Events for mouseover highlight 
    humanBox.addEventListener("mouseover", () => {
        humanBox.classList.add("highlight");
    })

    humanBox.addEventListener("mouseout", () => {
        humanBox.classList.remove("highlight");
    })

    // Events for click 
    humanBox.addEventListener("click", () => {
        if (humanBox.classList.contains("rock")) {
            humanChoice = 'rock';
        }
        else if (humanBox.classList.contains("paper")) {
            humanChoice = 'paper';
        }
        else if (humanBox.classList.contains("scissors")) {
            humanChoice = 'scissors';
        }

    playRound(humanChoice);

    })
}

// Random computer choice 
function getComputerChoice() {
        let randomNum = Math.floor(Math.random()*3);
        let options = ["rock", "paper", "scissors"]; 
        return options[randomNum];
    }

function reset(box) {
    box.classList.remove("win", "lose", "draw");
    return;
}

function printResult(humanChoice, computerChoice, roundResult) {
    const selectedComputerBox = document.querySelector(".computer." + computerChoice);
    const selectedHumanBox = document.querySelector(".human." + humanChoice);

    if (roundResult == 'win') {
        humanScore += 1;
        selectedComputerBox.classList.add("lose");
        selectedHumanBox.classList.add('win');
        setInterval(() => reset(selectedComputerBox), dT);
        setInterval(() => reset(selectedHumanBox), dT);
    }

    else if (roundResult == 'lose') {
        computerScore += 1; 
        selectedComputerBox.classList.add("win");
        selectedHumanBox.classList.add('lose');
        setInterval(() => reset(selectedComputerBox), dT);
        setInterval(() => reset(selectedHumanBox), dT);
    }

    else if (roundResult == 'draw') {
        selectedComputerBox.classList.add("draw");
        selectedHumanBox.classList.add('draw');
        setInterval(() => reset(selectedComputerBox), dT);
        setInterval(() => reset(selectedHumanBox), dT);
    }

    score.textContent = "Human: " + humanScore + " - Computer: " + computerScore;

}

function evaluateChoices(humanChoice, computerChoice) {
    let roundResult = ""; 

    if (humanChoice === computerChoice) {
        roundResult = 'draw';
    } 
    else if 
        ((humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper"))  {
        roundResult = 'win';

    } 
    else {
        roundResult = 'lose';
    }
    printResult(humanChoice, computerChoice, roundResult);
}

function playRound(humanChoiceChoice) {
    const computerChoice = getComputerChoice();
    evaluateChoices(humanChoice,computerChoice);
}