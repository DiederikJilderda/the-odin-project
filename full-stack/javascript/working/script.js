
let l1 = [3, 0, 4];
let l2 = [5, 6, 2, 1];

const addTwoNumbers = function(l1, l2) {
    let totalVal = 0; 
    let lists = [l1,l2];

    for (list of lists) {
        for (i = 0; i<list.length ; i++) {
            totalVal += list[i] * (10**i);
        }
    }
    console.log(totalVal);

    let sumArr = []; 

    for (let i=0 ; i<totalVal.toString.length ; i++) {
        sumArr.unshift(totalVal.toString[i]);
    }

    return sumArr;
};

console.log(addTwoNumbers(l1,l2));