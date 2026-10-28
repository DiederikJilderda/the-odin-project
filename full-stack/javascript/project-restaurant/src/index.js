import "./styles.css";
import { home } from "./home.js"; 
import { food } from "./food.js"; 
import { contact } from "./contact.js"; 
import { clear } from "./clear.js";

home();

// eventlisteners 
const homeButton = document.querySelector(".button-home");
const foodButton = document.querySelector(".button-food");
const contactButton = document.querySelector(".button-contact");

homeButton.addEventListener("click", () => {
    homeButton.classList.add("active");
    foodButton.classList.remove("active");
    contactButton.classList.remove("active");
    clear(); 
    home();
});

foodButton.addEventListener("click", () => {
    homeButton.classList.remove("active");
    foodButton.classList.add("active");
    contactButton.classList.remove("active");
    clear(); 
    food();
});

contactButton.addEventListener("click", () => {
    homeButton.classList.remove("active");
    foodButton.classList.remove("active");
    contactButton.classList.add("active");
    clear(); 
    contact();
});
