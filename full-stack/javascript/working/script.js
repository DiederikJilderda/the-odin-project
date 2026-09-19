// function outer() {
//   const outerVar = "I'm the outer var";

//   function inner() {
//     const innerVar = "hey I'm an inner var";
//     console.log(innerVar);
//     console.log(outerVar);
//   }

//   return inner; 
// }

// const innerFn = outer();

// innerFn();


// function createGreeting(greeting = "") {
//   const myGreet = greeting.toUpperCase();

//   return function(name) {
//     return myGreet + " " + name;
//   }
// }

// const sayHello = createGreeting("hello");
// console.log(sayHello("wes"));


function createGame(gameName) {
  let score = 0; 

  return function win(){
    score ++; 
    return "Your name " + gameName + " score is " + score;    
  }
}

const hockeyGame = createGame('Hockey');
const footballGame = createGame('Football');


// hockeyGame();
// hockeyGame();

// console.log(hockeyGame);