const sumAll = function(a, b) {
    values = [a,b].sort((a,b) => a - b);
    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
        return sumFunction(values[0],values[1]);
    }
    else {
        console.log('error');
        return 'ERROR';
    }
    
    function sumFunction(a,b) {
        let num = 0; 
        for (let i = a ; i <= b ; i++){
            num += i;
        } 
        console.log(num);
    }
};

// Do not edit below this line
module.exports = sumAll;

// npm test sumAll.spec.js
