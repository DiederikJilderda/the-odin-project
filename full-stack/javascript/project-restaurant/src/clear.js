const clear = function() { 
    const content = document.querySelector(".content"); 
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

export { clear }; 