// Exercise 01: Map to names 
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item.name)

// console.log("Exercise 01:");
// console.log(names);


// Exercise 02: Map to objects 
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({
//     fullName: String(user.name + " " + user.surname),
//     id: user.id
// }));

// console.log("Exercise 02:");
// console.log(usersMapped[1].id);
// console.log(usersMapped[1].fullName);


// Exercise 03: Sort users by age
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(arr) {
//     return arr.sort((a,b) => (a.age - b.age)); 
// }

// sortByAge(arr);

// console.log("Exercise 03:");
// console.log(arr[0].name + "(" + arr[0].age + ")");
// console.log(arr[1].name + "(" + arr[1].age + ")");
// console.log(arr[2].name + "(" + arr[2].age + ")");


// Exercise 04: Get average age 
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(arr) {
//     const N = arr.length;

//     let totalAge = 0; 
//     for (user of arr) {
//         totalAge += user.age;
//     }

//     return totalAge / N;
// }

// console.log("Exercise 04:");
// console.log(getAverageAge(arr));


// Exercise 05: Create keyed object from array 
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

let usersById = groupById(users);

console.log("Exercise 05:");
console.log(usersById);