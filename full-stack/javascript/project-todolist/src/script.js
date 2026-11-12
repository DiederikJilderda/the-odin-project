class Project {
    constructor(projectName) {
        this.projectName = projectName; 
        
        this.itemsList = [];
        this.totalItems = 0; 
        this.totalUrgent = 0; 

        projectList.push(this);
        this.newProjectDisplay();
        // this.setFocus(); 
    }

    // create project UI display  
    newProjectDisplay() {
        // query parent element 
        const dashboard = document.querySelector(".dashboard-projects"); 

        // new dashboard tab 
        const newDashboardTab = document.createElement("div");
        newDashboardTab.classList.add("dashboard-tab");
        dashboard.append(newDashboardTab); 

        // append project name 
        const newProjectName = document.createElement("div");
        newProjectName.classList.add("dashboard-projectname"); 
        newProjectName.textContent = this.projectName; 
        newDashboardTab.append(newProjectName);

        // append numbers 
        const newRow = document.createElement("div"); 
        newRow.classList.add("row"); 
        newDashboardTab.appendChild(newRow); 

        const newItems = document.createElement("div"); 
        newItems.classList.add("number-items"); 
        newItems.textContent = this.totalItems;  

        const newUrgent = document.createElement("div"); 
        newUrgent.classList.add("number-urgent"); 
        newUrgent.textContent = this.totalUrgent; 

        newRow.append(newItems, newUrgent); 

        // append delete button 
        // const projectDeleteButton = document.createElement("button"); 
        // projectDeleteButton.classList.add("button-delete-project"); 
        // projectDeleteButton.setAttribute("type", "button"); 
        // newDashboardTab.append(projectDeleteButton); 

        // const deleteImg = document.createElement("img");
        // deleteImg.src = "images/delete.png"; 
        // projectDeleteButton.append(deleteImg); 

        // attach event listeners
        newDashboardTab.addEventListener("click", (event) => this.clickTab(event)); 
        // projectDeleteButton.addEventListener("click", (event) => this.deleteDashboardTab(event));
    }

    deleteDashboardTab(event) {
        // delete DOM element 
        event.target.closest(".dashboard-tab").remove();

        // delete class instance 
        const index = projectList.indexOf(this); 
        projectList.splice(index, 1);

        // block clickTab function execution 
        event.stopPropagation();

        // set focus to today tab 
    }

    clickTab(event) {
        activeProject = this; 
        this.setFocus(event); 
    }

    setFocus(event) {
        // function to set focus to this tab and unfocus other tabs 
        const dashboardTabs = document.querySelectorAll(".dashboard-tab");
        dashboardTabs.forEach( (tab) => tab.classList.remove("dashboard-tab-active") ); 
        event.target.closest(".dashboard-tab").classList.add("dashboard-tab-active");
    }

    // clear items 
    // generate items 
}


class Item {
    constructor(project, name, due, priority, notes) {
        this.project = project; 
        this.name = name; 
        this.due = due; 
        this.priority = priority; 
        this.notes = notes; 
        this.status = false; 

        // add to itemsList 
        // create card (this.create()) 
        this.createCardDisplay();

    }

    // method: create UI 
    createCardDisplay() {
        // query parent container 
        const itemsParent = document.querySelector(".items"); 

            // new card 
            const card = document.createElement("div"); 
            card.classList.add("item-card");

                // check task urgency  
                if (this.priority === "high") {
                    card.classList.add("urgent");
                }
                else {
                    card.classList.remove("urgent");
                }

                if (this.status === true) {
                    card.classList.add("completed"); 
                }
                else {
                    card.classList.remove("completed");
                }

                // card header 
                const header = document.createElement("div");
                header.classList.add("item-header"); 

                    const checkbox = document.createElement("input");
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.addEventListener("click", () => this.checkboxToggle(card, checkbox));

                    const name = document.createElement("div");
                    name.classList.add("item-title"); 
                    name.textContent = this.name;                                                      // item name 

                    const deleteButton = document.createElement("button"); 
                    deleteButton.setAttribute("type", "button");
                    deleteButton.classList.add("button-delete-item"); 
                        const deleteImg = document.createElement("img"); 
                        deleteImg.src = "images/delete.png"; 
                        deleteButton.append(deleteImg);

                header.append(checkbox, name, deleteButton);

                // card content  
                const content = document.createElement("div"); 
                content.classList.add("item-content"); 

                    // left column 
                    const left = document.createElement("div"); 

                        // project 
                        const projectUnit = document.createElement("div"); 
                        projectUnit.classList.add("item-unit");

                            const projectHeader = document.createElement("div"); 
                            projectHeader.classList.add("item-subheader");
                            projectHeader.textContent = "Project: "; 

                            const projectInput = document.createElement("input"); 
                            projectInput.setAttribute("id", "item-project")
                            projectInput.setAttribute("type", "text"); 
                            projectInput.setAttribute("value", this.project);                       // item project
                            projectInput.setAttribute("readonly", true);

                        projectUnit.append(projectHeader, projectInput);

                        // date 
                        const dateUnit = document.createElement("div"); 
                        dateUnit.classList.add("item-unit");

                            const dateHeader = document.createElement("div"); 
                            dateHeader.classList.add("item-subheader");
                            dateHeader.textContent = "Due date: "; 

                            const dateInput = document.createElement("input"); 
                            dateInput.setAttribute("id", "item-date")
                            dateInput.setAttribute("type", "date"); 
                            dateInput.setAttribute("value", this.date);                             // item date
                            // dateInput.setAttribute("readonly", true);

                        dateUnit.append(dateHeader, dateInput);

                        // priority 
                        const priorityUnit = document.createElement("div"); 
                        priorityUnit.classList.add("item-unit");

                            const priorityHeader = document.createElement("div"); 
                            priorityHeader.classList.add("item-subheader");
                            priorityHeader.textContent = "Priority: "; 

                            // const priorityInput = document.createElement("input"); 
                            // priorityInput.setAttribute("id", "item-priority")
                            // priorityInput.setAttribute("type", "text"); 
                            // priorityInput.setAttribute("value", this.priority);                       // item priority 
                            // priorityInput.setAttribute("readonly", true);

                            const prioritySelect = document.createElement("select"); 
                            prioritySelect.setAttribute("id", "item-priority"); 

                                const optionPriorityLow = document.createElement("option"); 
                                optionPriorityLow.setAttribute("value", "low");
                                optionPriorityLow.textContent = "Low";

                                const optionPriorityMedium = document.createElement("option"); 
                                optionPriorityMedium.setAttribute("value", "medium");
                                optionPriorityMedium.textContent = "Medium";

                                const optionPriorityHigh = document.createElement("option"); 
                                optionPriorityHigh.setAttribute("value", "high");
                                optionPriorityHigh.textContent = "High";

                            prioritySelect.append(optionPriorityLow, optionPriorityMedium, optionPriorityHigh);

                        priorityUnit.append(priorityHeader, prioritySelect);

                    left.append(projectUnit, dateUnit, priorityUnit); 

                    // right column 
                    const right = document.createElement("div"); 

                        const notesUnit = document.createElement("div"); 
                        notesUnit.classList.add("item-unit");

                            const notesHeader = document.createElement("div"); 
                            notesHeader.classList.add("item-subheader");
                            notesHeader.textContent = "Notes: "; 

                            const notesInput = document.createElement("input"); 
                            notesInput.setAttribute("id", "item-notes")
                            notesInput.setAttribute("type", "textarea"); 
                            notesInput.setAttribute("value", this.notes);                          // item notes 
                            // notesInput.setAttribute("readonly", true);

                        notesUnit.append(notesHeader, notesInput);

                    right.append(notesUnit); 

                content.append(left, right);

            card.append(header, content);

        itemsParent.append(card);

        // event listeners 
        deleteButton.addEventListener("click", (event) => this.deleteItem(event));
    }


    // method: delete button 
    deleteItem(event) {
        // delete DOM element 
        event.target.closest(".item-card").remove();
    }
        

    // method: checkbox toggle 
    checkboxToggle(card, checkboxElement) {
        if (checkboxElement.checked) {
            this.status = true;
            card.classList.add("completed"); 

        }
        else {
            this.status = false;
            card.classList.remove("completed"); 
        }
    }

    // setter: total and urgent 


    

    // method: inputfield edit 


}



//// Global event functions 

// sets focus to new project input if empty, otherwise create new project instance 
let projectList = [];
function newProjectHandler(name) {
    if (name === "") {
        newProjectInput.focus();
    }
    else {
        new Project(name);
        newProjectInput.value = "";
    }
}


// behaviour for new item creation 
function newItemHandler() {
    new Item(activeProject.projectName, "do laundry", "11/12/26", "low", "do it");
}





//// Global event listeners 
let activeProject = "Today";

// create new project event listeners 
const newProjectInput = document.querySelector("#input-new-project"); 
const newProjectButton = document.querySelector(".button-new-project");

newProjectButton.addEventListener("click", () => newProjectHandler(newProjectInput.value));
document.addEventListener("keydown", (e) => {
    // enter: create new project 
    if (e.key === "Enter" && document.activeElement === newProjectInput) {
        newProjectHandler(newProjectInput.value);
    }
    // escape: unfocus and clear project input field 
    if (e.key === "Escape" && document.activeElement === newProjectInput) {
        newProjectInput.blur();
        newProjectInput.value = "";
    }
});


// create new item event listeners 
const newItemButton = document.querySelector(".button-new-item"); 
newItemButton.addEventListener("click", () => newItemHandler());





// initialise starting projects and items     !!! add event handler to today tab 
(function() {
    // Projects 
    newProjectHandler("Home");
    newProjectHandler("Work");
    newProjectHandler("Sport");

})();
