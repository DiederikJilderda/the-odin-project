let nameList = [];

class Name {
    constructor(name, age) {
        this.name = name; 
        this.age = age;
        nameList.push(this);
    }

    callMe() {
        console.log("I am " + this.name);
    }
}

const mark = new Name("mark" ,32);
const mary = new Name("mary" ,34);
const bart = new Name("bart" ,36);


// console.log(nameList);

localStorage.setItem("namesList", JSON.stringify(nameList));

console.log(JSON.parse(localStorage.getItem("namesList")));