import { courses } from "./courses.js";

const food = function() {
    const content = document.querySelector(".content"); 
    
    // append card element 
    const card = document.createElement("div"); 
    card.classList.add("card"); 
    content.appendChild(card); 


    // append left div and right photo 
    const left = document.createElement("div");
    const photo = document.createElement("img"); 
    photo.classList.add("img-dish"); 
    photo.src = "./images/bobotie.jpg";
    card.append(left, photo); 


    // append header and description  
    const top = document.createElement("div"); 
    top.classList.add("top");
    const description = document.createElement("div");
    description.classList.add("description"); 
    description.textContent = "Minced beef cooked in fragrant masala spices and turmeric, then baked in a milk and egg custard."; 
    left.append(top, description); 


    // append flag, dish and price to header 
    const country = document.createElement("img"); 
    country.classList.add("flag"); 
    country.src = "./images/south-africa.png"; 
    const dish = document.createElement("div"); 
    dish.classList.add("dish"); 
    dish.textContent = "BOBOTIE"; 
    const price = document.createElement("div"); 
    price.classList.add("price"); 
    price.textContent = "$15"; 
    top.append(country, dish, price); 
}

export { food }; 