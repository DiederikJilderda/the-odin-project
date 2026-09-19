const palindromes = function (str) {
    reducedStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    .replace(/\s{2,}/g,"")
    .replace(/\s/g,"")
    .toLowerCase();
    console.log(reducedStr);
    reversedStr = reducedStr.split("").reverse().join("");
    console.log(reversedStr);

    return reducedStr == reversedStr;
};

// npm test palindromes.spec.js

// Do not edit below this line
module.exports = palindromes;
