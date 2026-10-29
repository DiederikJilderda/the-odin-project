class Course {
    constructor(dish, description, price, flag, photo, cat) {
        this.dish = dish; 
        this.description = description; 
        this.price = price; 
        this.flag = flag; 
        this.photo = photo;
        this.cat = cat; 
    }
}

const bobotie = new Course(
    "bobotie", 
    "Minced beef cooked in fragrant masala spices and turmeric, then baked in a milk and egg custard.", 
    "$15",
    "./images/south-africa.png",
    "./images/bobotie.jpg", 
    "main"
)


const food = function(bobotie) {
    // import flagImg from bobotie.flag;
    // import photoImg from bobotie.photo;

    const content = document.querySelector(".content"); 
    
    // append card element 
    const card = document.createElement("div"); 
    card.classList.add("card"); 
    content.appendChild(card); 


    // append left div and right photo 
    const left = document.createElement("div");
    // const photo = document.createElement("img"); 
    // photo.classList.add("img-dish"); 
    // photo.src = photoImg;
    card.append(left); 


    // append header and description  
    const header = document.createElement("div"); 
    header.classList.add("top");
    const description = document.createElement("div");
    description.classList.add("description"); 
    description.textContent = bobotie.description; 
    left.append(header, description); 


    // append flag, dish and price to header 
    // const flag = document.createElement("img"); 
    // flag.classList.add("flag"); 
    // flag.src = flagImg; 
    const dish = document.createElement("div"); 
    dish.classList.add(dish); 
    dish.textContent = bobotie.dish; 
    const price = document.createElement("div"); 
    price.classList.add("price"); 
    price.textContent = bobotie.price; 
    header.append(dish, price); 
}


export { food }; 