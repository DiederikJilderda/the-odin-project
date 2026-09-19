const myLibrary = [];

//Book object constructor 
function Book(title, author, pages, year, cover, status, id) {
    this.title = title, 
    this.author = author, 
    this.pages = pages, 
    this.year = year, 
    this.status = status,
    this.cover = cover,
    this.id = id
}

// Create unique 6 digit ID 
function createID() {
    return "#3653-" + Math.floor(100000 + Math.random() * 900000);
}

function createLocalPath(fakePath) {
    let fileName = fakePath.split("C:\\fakepath\\");
    let localPath = String("/home/diederik/full-stack/javascript/project-library/covers/" + fileName[1]);
    return localPath;
}

// Create new book object
function addBookToLibrary() {

    // Define input fields 
    const inputTitle = document.getElementById("title");
    const inputAuthor = document.getElementById("author");
    const inputPages = document.getElementById("pages");
    const inputYear = document.getElementById("year");
    const inputStatus = document.getElementById("status");
    const inputCover = document.getElementById("cover");

    // Convert fake path to local path 
    let localPath = createLocalPath(cover.value);

    // Generate unique ID 
    let id = createID();

    // Create new book object and append 
    const newBook = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputYear.value, localPath, inputStatus.value, id);
    myLibrary.push(newBook);
}


//Create new book card
function addBookCard(lastEntry) {

    // Define book card elements 
    const main = document.querySelector(".main");

    const bookCard = document.createElement("div"); 
    bookCard.classList.add("book-card");

    const cardContent = document.createElement("div");
    cardContent.classList.add("book-card-content");

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("book-card-title");
    cardTitle.textContent = lastEntry.title;

    const cardAuthor = document.createElement("div");
    cardAuthor.classList.add("book-card-author");
    cardAuthor.textContent = lastEntry.author;

    const cardPages = document.createElement("div");
    cardPages.classList.add("book-card-pages");
    cardPages.textContent = lastEntry.pages + " pages";

    const cardYear = document.createElement("div");
    cardYear.classList.add("book-card-year");
    cardYear.textContent = lastEntry.year;

    const cardID = document.createElement("div");
    cardID.classList.add("book-card-id");
    cardID.textContent = lastEntry.id;

    const statusField = document.createElement("div");
    statusField.classList.add("status-field");

    const cardStatus = document.createElement("div");
    cardStatus.classList.add("book-card-status");
    cardStatus.textContent = lastEntry.status;

    const cardToggle = document.createElement("button");
    cardToggle.classList.add("button-toggle");
    cardToggle.addEventListener("click", (e) => toggleStatus(e));

    const cardCover = document.createElement("img");
    cardCover.classList.add("cover");
    cardCover.setAttribute("src", lastEntry.cover);


    // Create book card 
    main.appendChild(bookCard);

    bookCard.appendChild(cardContent);
    bookCard.appendChild(cardCover);

    const cardItems = [cardTitle, cardAuthor, cardPages, cardYear, cardID, statusField]; 
    for (let item of cardItems) {
        cardContent.appendChild(item);
    } 

    statusField.appendChild(cardToggle);
    statusField.appendChild(cardStatus);
}


// Create book object from form contents and construct book card 
function buttonClick() {
    addBookToLibrary();

    let libLength = myLibrary.length;
    addBookCard(myLibrary[libLength-1]);
}

// Toggle read/unread status 
function toggleStatus(e) {
    let targetNode = e.target.nextSibling; 
    targetNode.textContent == "Read" ? targetNode.textContent="Unread" : targetNode.textContent="Read";
}

// Submit button event 
const submitButton = document.querySelector(".button-submit"); 
submitButton.addEventListener("click", buttonClick);


// Add initial set of book entries 
function initialiseLibrary() {
    const initialBooks = [
        new Book(
            "Dracula", 
            "Bram Stoker",  
            512, 
            1897, 
            "/home/diederik/full-stack/javascript/project-library/covers/dracula.webp", 
            "Read",
            createID()
        ), 
        new Book(
            "Around the World in Eighty Days", 
            "Jules Verne", 
            288, 
            1872, 
            "/home/diederik/full-stack/javascript/project-library/covers/around-the-world.webp", 
            "Unread",
            createID()
        ), 
        new Book(
            "Animal Farm", 
            "George Orwell",  
            128, 
            1945, 
            "/home/diederik/full-stack/javascript/project-library/covers/animal-farm.webp", 
            "Read",
            createID()
        ), 
        new Book(
            "Monkey King", 
            "Wu Cheng'en",  
            384, 
            1592, 
            "/home/diederik/full-stack/javascript/project-library/covers/monkey-king.webp", 
            "Unread",
            createID()
        ),
        new Book(
            "Oliver Twist", 
            "Charles Dickens",  
            608, 
            1838, 
            "/home/diederik/full-stack/javascript/project-library/covers/oliver-twist.webp", 
            "Read",
            createID()
        ), 
        new Book(
            "Don Quixote", 
            "Miguel de Cervantes",  
            1056, 
            1605, 
            "/home/diederik/full-stack/javascript/project-library/covers/don-quixote.webp", 
            "Unread",
            createID()
        ),
        new Book(
            "Les Miserables", 
            "Victor Hugo",  
            1232, 
            1862, 
            "/home/diederik/full-stack/javascript/project-library/covers/les-miserables.webp", 
            "Unread",
            createID()
        )
    ]

    for (book of initialBooks) {
        myLibrary.push(book);
        addBookCard(book);
    }
}
initialiseLibrary();