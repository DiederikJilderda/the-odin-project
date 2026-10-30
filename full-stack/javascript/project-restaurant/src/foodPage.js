// import { allCourses as courses} from "./courses.js";
import flagChina from "./images/china.jpg"; 
import flagFrance from "./images/france.jpg"; 
import flagSouthAfrica from "./images/south-africa.png"; 
import flagSpain from "./images/spain.jpg"; 
import flagSriLanka from "./images/sri lanka.jpg"; 
import flagUkraine from "./images/ukraine.jpg"; 
import flagUSA from "./images/usa.jpg"; 

import courseBobotie from "./images/bobotie.jpg";
import courseBorscht from "./images/borscht.jpg";
import courseGazpacho from "./images/gazpacho.jpg";
import courseJambalaya from "./images/jambalaya.jpg";
import courseMapoTofu from "./images/mapo tofu.jpg";
import courseNicoise from "./images/nicoise.jpg";
import courseWatalappan from "./images/watalappan.jpeg"; 


let allCourses = []; 
class Course {
    constructor(course, description, price, flag, photo, type) {
        this.course = course.toUpperCase(); 
        this.description = description; 
        this.price = price; 
        this.flag = flag; 
        this.photo = photo;
        this.type = type; 

        this.addCourse(); 
    }

    addCourse() {
        allCourses.push(this);
    }

    createCard() {
        const courseType = document.querySelector("." + this.type);
    
        // append card element 
        const card = document.createElement("div"); 
        card.classList.add("card"); 
        courseType.after(card); 


        // append left div and right photo 
        const left = document.createElement("div");
        const photo = document.createElement("img"); 
        photo.classList.add("img-dish"); 
        photo.src = this.photo;                             // course photo
        card.append(left, photo); 


        // append header and description  
        const top = document.createElement("div"); 
        top.classList.add("top");
        const description = document.createElement("div");
        description.classList.add("description"); 
        description.textContent = this.description;         // course description 
        left.append(top, description); 


        // append flag, dish and price to header 
        const country = document.createElement("img"); 
        country.classList.add("flag"); 
        country.src = this.flag;                            // course flag  
        const dish = document.createElement("div"); 
        dish.classList.add("dish"); 
        dish.textContent = this.course;                     // course name 
        const price = document.createElement("div"); 
        price.classList.add("price"); 
        price.textContent = this.price;                     // course price 
        top.append(country, dish, price); 
    }
}


const mapoTofu = new Course (
    "MAPO TOFU", 
    "Minced meat and tofu cooked in a spicy blend of chilli peppers, spicy bean paste and Sichuan peppers.", 
    "£12", 
    flagChina, 
    courseMapoTofu, 
    "main"
);

const nicoise = new Course (
    "SALADE nicoise", 
    "Salad of tomatoes, cucumber, lettuce, boiled eggs, tuna and a classic vinaigrette.", 
    "£6.50", 
    flagFrance, 
    courseNicoise, 
    "starter"
); 

const bobotie = new Course (
    "BOBOTIE", 
    "Minced beef cooked in fragrant masala spices and turmeric, then baked in a milk and egg custard.", 
    "£15", 
    flagSouthAfrica, 
    courseBobotie, 
    "main"
); 

const gazpacho = new Course (
    "GAZPACHO", 
    "A refreshing cold tomato soup.", 
    "£6", 
    flagSpain, 
    courseGazpacho, 
    "soup"
); 

const watalappan = new Course (
    "WATALAPPAN", 
    "Fragrant steamed pudding made of coconut milk and winter spices, garnished with syrup and chopped peanuts.", 
    "£6.50", 
    flagSriLanka, 
    courseWatalappan, 
    "dessert"
); 

const borscht = new Course (
    "BORSCHT", 
    "Hearty beetroot soup, served with sour cream.", 
    "£6.50", 
    flagUkraine, 
    courseBorscht, 
    "soup"
); 

const jambalaya = new Course (
    "JAMBALAYA", 
    "Classic cajun dish filled with mixed proteins and vegetables stewed in tomato sauce and cajun spices.", 
    "£15", 
    flagUSA, 
    courseJambalaya, 
    "main"
); 



const foodPage = function() {
    const content = document.querySelector(".content"); 

    // create type titles 
    const starter = document.createElement('div'); 
    starter.classList.add("type", "starter");
    starter.textContent = "STARTERS"; 

    const soup = document.createElement('div'); 
    soup.classList.add("type", "soup");
    soup.textContent = "SOUPS"; 

    const main = document.createElement('div'); 
    main.classList.add("type", "main");
    main.textContent = "MAINS"; 

    const dessert = document.createElement('div'); 
    dessert.classList.add("type", "dessert");
    dessert.textContent = "DESSERTS"; 

    content.append(starter, soup, main, dessert);

    // append courses 
    for (let course of allCourses) {
        course.createCard();
    }
}

export { foodPage }; 