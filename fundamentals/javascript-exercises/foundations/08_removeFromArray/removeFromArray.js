const removeFromArray = function(arr, values) {
    values = [values].flat();

    for (let i = arr.length ; i > 0 ; i--) {
        let matchingIndex = values.indexOf(arr[i-1]); 
        if (matchingIndex >= 0) {
            arr.splice(i-1, 1);
        }
    }
}

// Do not edit below this line
module.exports = removeFromArray;

// npm test removeFromArray.spec.js