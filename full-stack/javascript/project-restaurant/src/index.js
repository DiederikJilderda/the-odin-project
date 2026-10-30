import "./styles.css";
import { homePage } from "./homePage.js"; 
import { foodPage } from "./foodPage.js"; 
import { aboutPage } from "./aboutPage.js"; 
import { clearPage } from "./clearPage.js";


// eventlisteners 
const homeButton = document.querySelector(".button-home");
const foodButton = document.querySelector(".button-food");
const contactButton = document.querySelector(".button-contact");


// button events 
homeButton.addEventListener("click", () => {
    homeButton.classList.add("active");
    foodButton.classList.remove("active");
    contactButton.classList.remove("active");
    clearPage(); 
    homePage();
});

foodButton.addEventListener("click", () => {
    homeButton.classList.remove("active");
    foodButton.classList.add("active");
    contactButton.classList.remove("active");
    clearPage(); 
    foodPage();
});

contactButton.addEventListener("click", () => {
    homeButton.classList.remove("active");
    foodButton.classList.remove("active");
    contactButton.classList.add("active");
    clearPage(); 
    aboutPage();
});


// initial load 
homePage();
homeButton.classList.add("active");
