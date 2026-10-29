import grok from "./images/alien.jpg"; 

const contact = function() {
    const content = document.querySelector(".content"); 

    // append card 
    const card = document.createElement("div"); 
    card.classList.add("card"); 
    content.append(card); 

    // append left div and photo 
    const left = document.createElement("div"); 
    const right = document.createElement("div"); 
    const grokImg = document.createElement("img"); 
    grokImg.classList.add("img-me"); 
    grokImg.src = grok; 
    card.append(left, right); 
    right.append(grokImg);

    // append text 
    const title = document.createElement("div"); 
    title.classList.add("contact-title");
    title.textContent = "ABOUT ME";
    const description = document.createElement("div"); 
    description.classList.add("contact-text"); 
    description.textContent = "Hi, I am Grok! I am an avid traveller and blogger who fell in love with all of Earth's foods. You guys are totally incredible!";
    left.append(title, description);
}

export { contact };