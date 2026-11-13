class DashboardTab {
    constructor(projectName) {
        this.projectName = projectName; 

        this.parent = ".dashboard-highlights";
        
        this.tasksList = [];
        this.totalTasks = 0; 
        this.totalUrgent = 0; 

        dashboardTabList.push(this);
        this.newProjectDisplay();
    }

    // create project UI display  
    newProjectDisplay() {
        // query parent element 
        const dashboard = document.querySelector(this.parent);                              // set parent container 

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

        const newTasks = document.createElement("div"); 
        newTasks.classList.add("number-tasks"); 
        newTasks.textContent = this.totalTasks;  

        const newUrgent = document.createElement("div"); 
        newUrgent.classList.add("number-urgent"); 
        newUrgent.textContent = this.totalUrgent; 

        newRow.append(newTasks, newUrgent); 

        // append delete button 
        const projectDeleteButton = document.createElement("button"); 
        projectDeleteButton.classList.add("button-delete-project"); 
        projectDeleteButton.setAttribute("type", "button"); 
        newDashboardTab.append(projectDeleteButton); 

        const deleteImg = document.createElement("img");
        deleteImg.src = "images/delete.png"; 
        projectDeleteButton.append(deleteImg); 

        // attach event listeners
        newDashboardTab.addEventListener("click", (event) => this.clickTab(event)); 
        projectDeleteButton.addEventListener("click", (event) => this.deleteDashboardTab(event));
    }

    deleteDashboardTab(event) {
        // delete DOM element 
        event.target.closest(".dashboard-tab").remove();

        // delete class instance 
        const index = dashboardTabList.indexOf(this); 
        dashboardTabList.splice(index, 1);

        // block clickTab function execution 
        event.stopPropagation();

        // set focus to today tab 
    }

    clickTab(event) {
        activeTab = this; 
        this.setFocus(event); 
    }

    setFocus(event) {
        const dashboardTabs = document.querySelectorAll(".dashboard-tab");
        dashboardTabs.forEach( (tab) => tab.classList.remove("dashboard-tab-active") ); 
        event.target.closest(".dashboard-tab").classList.add("dashboard-tab-active");
    }

}

class HighlightTab extends DashboardTab {
    // constructor() {
    //     super.parent = ".dashboard-highlights";
    // }
}

class ProjectTab extends DashboardTab {
    // constructor() {
    //     super.parent = ".dashboard-projects";
    // }
}

class Task {
    constructor(project, name, due, priority, notes) {
        this.project = project.projectName; 
        this.name = name; 
        this.due = due; 
        this.priority = priority; 
        this.notes = notes; 
        this.status = false; 

        project.tasksList.push(this);
        this.createCardDisplay();
    }

    // method: create UI 
    createCardDisplay() {
        // query parent container 
        const tasksParent = document.querySelector(".tasks"); 

            // new card 
            const card = document.createElement("div"); 
            card.classList.add("task-card");

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
                header.classList.add("task-header"); 

                    const checkbox = document.createElement("input");
                    checkbox.setAttribute("type", "checkbox");
                    checkbox.addEventListener("click", () => this.checkboxToggle(checkbox, card));

                    const name = document.createElement("div");
                    name.classList.add("task-title"); 
                    name.textContent = this.name;                                                      // task name 

                    const deleteButton = document.createElement("button"); 
                    deleteButton.setAttribute("type", "button");
                    deleteButton.classList.add("button-delete-task"); 
                        const deleteImg = document.createElement("img"); 
                        deleteImg.src = "images/delete.png"; 
                        deleteButton.append(deleteImg);

                header.append(checkbox, name, deleteButton);

                // card content  
                const content = document.createElement("div"); 
                content.classList.add("task-content"); 

                    // left column 
                    const left = document.createElement("div"); 

                        // project 
                        const projectUnit = document.createElement("div"); 
                        projectUnit.classList.add("task-unit");

                            const projectHeader = document.createElement("div"); 
                            projectHeader.classList.add("task-subheader");
                            projectHeader.textContent = "Project: "; 

                            const projectInput = document.createElement("input"); 
                            projectInput.setAttribute("id", "task-project")
                            projectInput.setAttribute("type", "text"); 
                            projectInput.setAttribute("value", this.project);                       // task project
                            projectInput.setAttribute("readonly", true);

                        projectUnit.append(projectHeader, projectInput);

                        // date 
                        const dateUnit = document.createElement("div"); 
                        dateUnit.classList.add("task-unit");

                            const dateHeader = document.createElement("div"); 
                            dateHeader.classList.add("task-subheader");
                            dateHeader.textContent = "Due date: "; 

                            const dateInput = document.createElement("input"); 
                            dateInput.setAttribute("id", "task-date")
                            dateInput.setAttribute("type", "date"); 
                            dateInput.setAttribute("value", this.date);                             // task date

                        dateUnit.append(dateHeader, dateInput);

                        // priority 
                        const priorityUnit = document.createElement("div"); 
                        priorityUnit.classList.add("task-unit");

                            const priorityHeader = document.createElement("div"); 
                            priorityHeader.classList.add("task-subheader");
                            priorityHeader.textContent = "Priority: ";                                  // task priority 

                            const prioritySelect = document.createElement("select"); 
                            prioritySelect.setAttribute("id", "task-priority"); 

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
                        notesUnit.classList.add("task-unit");

                            const notesHeader = document.createElement("div"); 
                            notesHeader.classList.add("task-subheader");
                            notesHeader.textContent = "Notes: "; 

                            const notesInput = document.createElement("input"); 
                            notesInput.setAttribute("id", "task-notes")
                            notesInput.setAttribute("type", "textarea"); 
                            notesInput.setAttribute("value", this.notes);                          // task notes 

                        notesUnit.append(notesHeader, notesInput);

                    right.append(notesUnit); 

                content.append(left, right);

            card.append(header, content);

        tasksParent.append(card);

        // event listeners 
        deleteButton.addEventListener("click", (event) => this.deleteTask(event));
        prioritySelect.addEventListener("change", () => this.urgentToggle(prioritySelect.value, card));
    }

    // method: delete button 
    deleteTask(event) {
        // delete DOM element 
        event.target.closest(".task-card").remove();
    }

    // method: checkbox toggle 
    checkboxToggle(checkboxElement, card) {
        if (checkboxElement.checked) {
            this.status = true;
            card.classList.add("completed"); 

        }
        else {
            this.status = false;
            card.classList.remove("completed"); 
        }
    }

    //method: urgent toggle 
    urgentToggle(newValue, card) {
        if (newValue === "high") {
            card.classList.add("urgent");
        }
        else {
            card.classList.remove("urgent");
        }
    }
}



//// Global event functions 

// sets focus to new project input if empty, otherwise create new project instance 
let dashboardTabList = [];
function newProjectHandler(name, parent) {
    if (name === "") {
        newProjectInput.focus();
    }
    else {
        new ProjectTab(name, parent);
        newProjectInput.value = "";
    }
}


// behaviour for new task creation 
function newTaskHandler(activeTab) {
    new Task(activeTab, "do laundry", "11/12/26", "medium", "do it");
}





//// Global event listeners 

// create new project
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


// create new task 
const newTaskButton = document.querySelector(".button-new-task"); 
newTaskButton.addEventListener("click", () => newTaskHandler(activeTab));





// initialise starting projects and tasks 
let activeTab;

(function() {
    // Highlights 
    new HighlightTab("Today");
    new HighlightTab("Priority");
    // newProjectHandler("Today", "highlight");
    // newProjectHandler("High Priority", "highlight");

    // Projects 
    newProjectHandler("Home");
    newProjectHandler("Work");
    newProjectHandler("Sport");
})();

activeTab = dashboardTabList[0];