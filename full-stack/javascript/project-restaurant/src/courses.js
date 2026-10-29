// import flagChina from "./images/china.jpg"; 
// import flagFrance from "./images/france.jpg"; 
// import flagSouthAfrica from "./images/south-africa.png"; 
// import flagSpain from "./images/spain.jpg"; 
// import flagSriLanka from "./images/sri lanka.jpg"; 
// import flagUkraine from "./images/ukraine.jpg"; 
// import flagUSA from "./images/usa.jpg"; 

// import courseBobotie from "./images/bobotie.jpg";
// import courseBorscht from "./images/borscht.jpg";
// import courseGazpacho from "./images/gazpacho.jpg";
// import courseJambalaya from "./images/jambalaya.jpg";
// import courseMapoTofu from "./images/mapo tofu.jpg";
// import courseNicoise from "./images/nicoise.jpg";
// import courseWatalappan from "./images/watalappan.jpeg";

const flagChina = "./images/china.jpg"; 
const flagFrance = "./images/france.jpg"; 
const flagSouthAfrica = "./images/south-africa.png"; 
const flagSpain = "./images/spain.jpg"; 
const flagSriLanka = "./images/sri lanka.jpg"; 
const flagUkraine = "./images/ukraine.jpg"; 
const flagUSA = "./images/usa.jpg"; 

const courseBobotie = "./images/bobotie.jpg";
const courseBorscht = "./images/borscht.jpg";
const courseGazpacho = "./images/gazpacho.jpg";
const courseJambalaya = "./images/jambalaya.jpg";
const courseMapoTofu = "./images/mapo tofu.jpg";
const courseNicoise = "./images/nicoise.jpg";
const courseWatalappan = "./images/watalappan.jpeg";

let courses = []; 

class Course {
    constructor(course, description, price, flag, photo, cat) {
        this.course = course; 
        this.description = description; 
        this.price = price; 
        this.flag = flag; 
        this.photo = photo;
        this.cat = cat; 

        courses.push(this);
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
    "SALADE NICOISE", 
    "Nice salad.", 
    "£8.50", 
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
    "Fragrant steamed pudding made of coconut milk and winter spices.", 
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
    "Classic cajun dish filled with sausage, chicken, shrimp, mirepoix and cajun spices.", 
    "£15", 
    flagUSA, 
    courseJambalaya, 
    "main"
); 

const display = function(course) {
    const content = document.querySelector(".content"); 
    
    // append card element 
    const card = document.createElement("div"); 
    card.classList.add("card"); 
    content.appendChild(card); 


    // append left div and right photo 
    const left = document.createElement("div");
    const photo = document.createElement("img"); 
    photo.classList.add("img-dish"); 
    photo.src = course.photo;
    card.append(left, photo); 


    // append header and description  
    const top = document.createElement("div"); 
    top.classList.add("top");
    const description = document.createElement("div");
    description.classList.add("description"); 
    description.textContent = course.description;
    left.append(top, description); 


    // append flag, dish and price to header 
    const country = document.createElement("img"); 
    country.classList.add("flag"); 
    country.src = course.flag; 
    const dish = document.createElement("div"); 
    dish.classList.add("dish"); 
    dish.textContent = course.course; 
    const price = document.createElement("div"); 
    price.classList.add("price"); 
    price.textContent = course.price; 
    top.append(country, dish, price); 
}


display(bobotie);
display(mapoTofu);
display(jambalaya);

// export { courses }; 