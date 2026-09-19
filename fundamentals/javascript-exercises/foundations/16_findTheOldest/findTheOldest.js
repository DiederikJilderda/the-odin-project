const findTheOldest = function(people) {
    for (person of people) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = 2026;
        }
    }

    let sorted = people.sort((a,b) => 
        (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
    );
    return sorted[0];

};


// npm test findTheOldest.spec.js


// Do not edit below this line
module.exports = findTheOldest;
