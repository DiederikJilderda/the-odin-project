const ul = document.querySelector("ul");
const inputField = document.querySelector("input"); 
const butt = document.querySelector("button");

function onClick() {
    event.preventDefault();

    const textInput = inputField.value;
    if (textInput != "") {
        inputField.value = "";

        const newList = document.createElement("li");

        const newItem = document.createElement("span");
        newItem.textContent = textInput;
        
        const newButton = document.createElement("button");
        newButton.classList.add('deleteButt');
        newButton.onclick = deleteItem;
        newButton.textContent = 'Delete this item';

        newList.appendChild(newItem); 
        newList.appendChild(newButton);
        ul.appendChild(newList);

        inputField.focus();
    }
}

function deleteItem(){
    thisItem = event.target.parentNode; 
    ul.removeChild(thisItem);

}

butt.addEventListener("click", onClick);