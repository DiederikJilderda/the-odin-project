const repeatString = function(str, n) {
    let arr = [];

    if (n >= 0){
        for (let i = 0 ; i < n ; i++){ 
            arr.push(str);
        }
        return arr.join("");
    }
    else {
        return 'ERROR';
    }
            
    // return str.repeat(n);
}


// Do not edit below this line
module.exports = repeatString;
