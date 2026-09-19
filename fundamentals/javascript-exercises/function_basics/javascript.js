function log(input) {
    return console.log(input);
}

function add7(x) {
    return x+7;
}

function multiply(x,y) {
    return x*y;
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function lastLetter(text) {
    return text.charAt(-1);
}

log(add7(10)); 
log(multiply(2,3)); 
log(capitalize("AbCD"));
log(lastLetter("AbCDeF"));