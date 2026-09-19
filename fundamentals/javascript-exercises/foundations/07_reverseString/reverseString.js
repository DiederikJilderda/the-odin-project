const reverseString = function(str) {
    newString = [];
    for (let i = str.length ; i > 0 ; i--){
        newString.push(str[i-1]);
    }
    return newString.join("");
};

// Do not edit below this line
module.exports = reverseString;
