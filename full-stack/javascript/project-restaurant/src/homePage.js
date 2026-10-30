import earth from "./images/earth.jpg"; 

const homePage = function() {
    const content = document.querySelector(".content"); 

    const title = document.createElement("div");
    title.classList.add("home-title"); 
    title.innerText = "ICONIC DISHES \n FROM PLANET EARTH";

    const imgHome = document.createElement("img"); 
    imgHome.classList.add("img-home");
    imgHome.src = earth;

    const welcome = document.createElement("div"); 
    welcome.classList.add("home-text"); 
    welcome.textContent = "Welcome to Benji's restaurant full of food from planet Earth! Here you can find some the most iconic dishes from countries all over the world. Bon appetit!";

    content.appendChild(title);
    content.appendChild(imgHome); 
    content.appendChild(welcome); 
}

export { homePage };