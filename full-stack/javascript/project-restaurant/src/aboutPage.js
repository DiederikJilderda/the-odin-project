import grok from "./images/alien.jpg"; 

const aboutPage = function() {
    const content = document.querySelector(".content"); 

    // append title 
    const title = document.createElement("div"); 
    title.classList.add("home-title");
    title.textContent = "ABOUT ME";

    // append text 
    const description = document.createElement("div"); 
    description.classList.add("about-me"); 
    description.textContent = "Hi, I am Grok! I am an avid traveller and blogger who fell in love with all of Earth's foods. You guys are totally incredible!";

    // append image
    const grokImg = document.createElement("img"); 
    grokImg.classList.add("img-me"); 
    grokImg.src = grok; 
    
    content.append(title, description, grokImg);
}

export { aboutPage };