const fibonacci = function(a) {
    let num = Number(a);

    if (num < 0) {
        return 'OOPS';
    }
    else {
        let values = [0, 1]; 
        for (let i=1 ; i<(num+1) ; i++) {
            let newValue = values[i]+values[i-1];
            values.push(newValue);
        }
        return values[num];
    }
};

// npm test fibonacci.spec.js

// Do not edit below this line
module.exports = fibonacci;
