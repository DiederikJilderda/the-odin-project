// import logoImg from "./images/logo.png";
// import highlightsImg from "./images/today.png";
// import projectsImg from "./images/projects.png";
// import deletePNG from "./images/delete.png";
// import "./styles.css";

class DashboardTab {
    constructor() {
        // this.totalTasks = 0; 
        // this.totalUrgent = 0; 
        this.filteredTasks = []; 
        this.dashboardElement = null; 
    }

    // create project UI display  
    newProjectDisplay(parentNode) {
        // query parent element 
        const dashboard = document.querySelector(parentNode);                              // set parent container 

        // new dashboard tab 
        const newDashboardTab = document.createElement("div");
        newDashboardTab.classList.add("dashboard-tab");
        dashboard.append(newDashboardTab); 
        this.dashboardElement = newDashboardTab; 

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
        // if (this instanceof ProjectTab) {
        //     const projectDeleteButton = document.createElement("button"); 
        //     projectDeleteButton.classList.add("button-delete-project"); 
        //     projectDeleteButton.setAttribute("type", "button"); 
        //     newDashboardTab.append(projectDeleteButton); 

        //     const deleteImg = document.createElement("img");
        //     deleteImg.src = deletePNG; 
        //     projectDeleteButton.append(deleteImg); 

        //     projectDeleteButton.addEventListener("click", (event) => this.deleteDashboardTab(event));
        // }

        // attach event listeners
        newDashboardTab.addEventListener("click", (event) => this.clickTab(event)); 
    }

    deleteDashboardTab(event) {
        // delete DOM element 
        this.dashboardElement.remove();

        // delete class instance 
        const index = dashboardTabList.indexOf(this); 
        dashboardTabList.splice(index, 1);

        // block clickTab function execution 
        event.stopPropagation();

        // set focus to today tab 
        dashboardTabList[0].clickTab();
    }

    clickTab() {
        activeTab = this; 
        this.setFocus(); 
        this.clearTasks();
        this.updateMainTitle();
        this.filteredTasks = this.filterTasks()
        this.createTaskDisplays(this.filteredTasks);
    }

    setFocus() {
        const dashboardTabs = document.querySelectorAll(".dashboard-tab");
        dashboardTabs.forEach( (tab) => tab.classList.remove("dashboard-tab-active") ); 
        this.dashboardElement.classList.add('dashboard-tab-active');
    }

    clearTasks() {
        const allTasks = document.querySelectorAll(".task-card");
        allTasks.forEach( (task) => task.remove());
    }

    updateMainTitle() {
        const mainTitle = document.querySelector(".main-title");
        mainTitle.textContent = this.projectName; 
    }

    createTaskDisplays(filteredTasks) {
        for (const task of filteredTasks) {
            task.createCardDisplay();
        }
        // clear filteredTasks array 
        this.filteredTasks = []; 
    }

}

class HighlightTab extends DashboardTab {
    constructor(projectName) {
        super();
        
        this.projectName = projectName;
        dashboardTabList.push(this);
        this.newProjectDisplay(".dashboard-highlights");
    }

    filterTasks() {
        if (this.projectName === "All") {
            this.filteredTasks = taskList;
        }

        else if (this.projectName === "Important") {
            for (const task of taskList) {
                if (task.priority === "high") {
                    this.filteredTasks.push(task);
                }
            }
        }
        // filter for date 

        return this.filteredTasks; 
    }
}

class ProjectTab extends DashboardTab {
    constructor(projectName) {
        super();
        
        this.projectName = projectName;
        dashboardTabList.push(this);
        this.newProjectDisplay(".dashboard-projects");

        this.clickTab();
    }

    filterTasks() {
        for (const task of taskList) {
            if (task.project === this) {
                this.filteredTasks.push(task);
            }
        }
        return this.filteredTasks; 
    }
}

class Task {
    constructor(project, name, due, priority, notes) {
        this.project = project; 
        this.name = name; 
        this.due = due; 
        this.priority = priority; 
        this.notes = notes; 
        this.status = false; 

        taskList.push(this);
        this.createCardDisplay();
    }

    // method: create UI 
    createCardDisplay() {
        // query parent container 
        const tasksParent = document.querySelector(".tasks"); 

            // new card 
            const card = document.createElement("div"); 
            card.classList.add("task-card");

                // check task completed 
                // if (this.status === true) {
                //     card.classList.add("completed"); 
                // }
                // else {
                //     card.classList.remove("completed");
                // }

                // card header 
                const header = document.createElement("div");
                header.classList.add("task-header"); 

                    const checkbox = document.createElement("input");
                    checkbox.setAttribute("type", "checkbox");
                    if (this.status === true) {
                        checkbox.setAttribute("checked", true); 
                        card.classList.add("completed");
                    }

                    checkbox.addEventListener("click", () => this.checkboxToggle(checkbox, card));

                    const nameInput = document.createElement("input");
                    nameInput.setAttribute("type", "text");
                    nameInput.classList.add("task-title"); 
                    nameInput.value = this.name;                                                      // task name 

                    const deleteButton = document.createElement("button"); 
                    deleteButton.setAttribute("type", "button");
                    deleteButton.classList.add("button-delete-task"); 
                        const deleteImg = document.createElement("img"); 
                        // deleteImg.src = deletePNG; 
                        deleteImg.src = "./images/delete.png";
                        deleteButton.append(deleteImg);

                header.append(checkbox, nameInput, deleteButton);

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

                            const projectInput = this.projectDropdown();
                            // const projectInput = document.createElement("input"); 
                            // projectInput.setAttribute("id", "task-project")
                            // projectInput.setAttribute("type", "text"); 
                            // projectInput.setAttribute("value", this.project.projectName);                       // task project
                            // projectInput.setAttribute("readonly", true);

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

                                if (this.priority === "low") {
                                    card.classList.remove("urgent");
                                    optionPriorityLow.selected = true;
                                }

                                const optionPriorityMedium = document.createElement("option"); 
                                optionPriorityMedium.setAttribute("value", "medium");
                                optionPriorityMedium.textContent = "Medium";

                                if (this.priority === "medium") {
                                    card.classList.remove("urgent");
                                    optionPriorityMedium.selected = true;
                                }

                                const optionPriorityHigh = document.createElement("option"); 
                                optionPriorityHigh.setAttribute("value", "high");
                                optionPriorityHigh.textContent = "High";

                                if (this.priority === "high") {
                                    
                                    card.classList.add("urgent");
                                    optionPriorityHigh.selected = true;
                                }

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
    
        // input change event listeners
        // name 
        // project -> drop down 
        // date 
        // priority 
        // notes 
        nameInput.addEventListener("change", () => this.name = nameInput.value);
        projectInput.addEventListener("change", () => this.project = projectInput.value);
        notesInput.addEventListener("change", () => this.notes = notesInput.value);
         
    }

    projectDropdown() {
        // iterate over dashboardtablist with instanceof project 
        // const optionPriorityLow = document.createElement("option"); 
            // optionPriorityLow.setAttribute("value", "low");
            // optionPriorityLow.textContent = "Low";

        const projectInput = document.createElement("select"); 
        projectInput.setAttribute("id", "task-project")
        projectInput.setAttribute("type", "text"); 
        projectInput.setAttribute("value", this.project.projectName);

        for (const tab of dashboardTabList) {
            if (tab instanceof ProjectTab) {
                const projectOption = document.createElement("option");
                projectOption.setAttribute("value", tab);
                projectOption.textContent = tab.projectName;

                projectInput.append(projectOption);
            }
        }


        return projectInput;
    }

    // method: delete button 
    deleteTask(event) {
        // delete DOM element 
        event.target.closest(".task-card").remove();

        // delete task object 
        const index = taskList.indexOf(this); 
        taskList.splice(index, 1);
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
let taskList = []; 
function newProjectHandler(name) {
    if (name === "") {
        newProjectInput.focus();
    }
    else {
        new ProjectTab(name);
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
    new HighlightTab("All");
    new HighlightTab("Today");
    new HighlightTab("Important");

    // Projects 
    const homeTab = new ProjectTab("Home");
    const workTab = new ProjectTab("Work");
    const sportTab = new ProjectTab("Sport");

    // Tasks 
    new Task(homeTab, "Task 01", 14-11-2026, "low", "some notes");
    new Task(workTab, "Task 02", 16-11-2026, "high", "some notes");
    new Task(sportTab, "Task 03", 15-11-2026, "medium", "some notes");
    new Task(homeTab, "Task 04", 14-11-2026, "low", "some notes");
    new Task(homeTab, "Task 05", 20-11-2026, "high", "some notes");
})();

dashboardTabList[0].clickTab();
activeTab = dashboardTabList[0];
