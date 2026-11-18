// import logoImg from "./images/logo.png";
// import highlightsImg from "./images/today.png";
// import projectsImg from "./images/projects.png";
// import "./styles.css";


class DashboardTab {
    constructor() {
        this.totalElement = null; 
        this.urgentElement = null; 
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


        // append numbers 

        const newRow = document.createElement("div"); 
        newRow.classList.add("row"); 
        newDashboardTab.appendChild(newRow); 

        const newTasks = document.createElement("div"); 
        this.totalElement = newTasks; 
        newTasks.classList.add("number-tasks"); 

        const newUrgent = document.createElement("div"); 
        this.urgentElement = newUrgent; 

        newUrgent.classList.add("number-urgent"); 

        this.updateDashboardNumbers();                                                // update dashboard numbers

        newRow.append(newTasks, newUrgent); 

        // append project name 
        const newProjectName = document.createElement("div");
        newProjectName.classList.add("dashboard-projectname"); 
        newProjectName.textContent = this.projectName; 
        newDashboardTab.append(newProjectName);



        // append delete button 
        if (this instanceof ProjectTab) {
            const projectDeleteButton = document.createElement("button"); 
            projectDeleteButton.classList.add("button-delete-project"); 
            projectDeleteButton.setAttribute("type", "button"); 
            projectDeleteButton.textContent = "\u00d7"; 
            newDashboardTab.append(projectDeleteButton); 

            projectDeleteButton.addEventListener("click", (event) => this.deleteDashboardTab(event));
        }

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

        // delete underlying tasks 
        this.deleteTasks(); 

        // set focus to today tab if on project tab 
        dashboardTabList[0].clickTab();
    }

    clickTab() {
        activeTab = this; 
        this.setFocus(); 
        this.clearTasks();
        this.updateMainTitle();

        const filteredTasks = this.filterTasks();
        let taskList = [];

        if (visible === true) {
            taskList = filteredTasks;
        }

        else {
            taskList = filteredTasks.filter( (task) => task.completed === false);
        }

        this.createTaskDisplays(taskList);
        this.updateDashboardNumbers();
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

    createTaskDisplays(filteredTaskList) {
        for (const task of filteredTaskList) {
            task.createCardDisplay();
        } 
    }

    updateDashboardNumbers() {
        for (const tab of dashboardTabList) {
            let totalTasks = 0; 
            let totalUrgent = 0; 

            for (const task of tab.filterTasks()) {
                totalTasks++; 
                if (task.priority === "high") {
                    totalUrgent++; 
                }
            }

            tab.totalElement.textContent = totalTasks; 
            tab.urgentElement.textContent = totalUrgent; 
        }
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
        let filteredTasks = [];

        // All 
        if (this.projectName === "All") {
            filteredTasks = taskList;
        }
        
        // Today
        else if (this.projectName === "Today") {
            const getDate = new Date();
            const today = getDate.getFullYear() + "-" + (getDate.getMonth()+1) + "-" + getDate.getDate();
            for (const task of taskList) {
                if (task.due === today) {
                    filteredTasks.push(task);
                }
            }
        }

        // Priority 
        else if (this.projectName === "Priority") {
            for (const task of taskList) {
                if (task.priority === "high") {
                    filteredTasks.push(task);
                }
            }
        }

        return filteredTasks; 
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
        let filteredTasks = []; 

        for (const task of taskList) {
            if (task.project === this) {
                filteredTasks.push(task);
            }
        }

        return filteredTasks
    }

    deleteTasks() {
        for (const task of this.filterTasks()) {
            taskList.splice(taskList.indexOf(task), 1); 
        }
    }

}

class Task {
    constructor(project, name, due, priority, notes) {
        this.project = project;             // object 
        this.name = name; 
        this.due = due; 
        this.priority = priority; 
        this.notes = notes; 
        this.completed = false; 

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

                // card header 
                const header = document.createElement("div");
                header.classList.add("task-header"); 

                    const checkbox = document.createElement("input");
                    checkbox.setAttribute("type", "checkbox");
                    if (this.completed === true) {
                        checkbox.setAttribute("checked", true); 
                        card.classList.add("completed");
                    }

                    checkbox.addEventListener("click", (event) => this.checkboxToggle(event, card));

                    const nameInput = document.createElement("input");
                    nameInput.setAttribute("type", "text");
                    nameInput.classList.add("task-title"); 
                    nameInput.value = this.name;                                                      // task name 

                    const deleteButton = document.createElement("button"); 
                    deleteButton.setAttribute("type", "button");
                    deleteButton.classList.add("button-delete-task"); 
                    deleteButton.textContent = "\u00d7";

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

                            const projectInput = dynamicProjectDropdown();                     // task project
                            // projectInput.value = this.project; 

                        projectUnit.append(projectHeader, projectInput);

                        // date 
                        const dueUnit = document.createElement("div"); 
                        dueUnit.classList.add("task-unit");

                            const dueHeader = document.createElement("div"); 
                            dueHeader.classList.add("task-subheader");
                            dueHeader.textContent = "Due date: "; 

                            const dueInput = document.createElement("input"); 
                            dueInput.classList.add("task-date");
                            dueInput.setAttribute("type", "date"); 
                            dueInput.setAttribute("value", this.due);                             // task due date

                        dueUnit.append(dueHeader, dueInput);

                        // priority 
                        const priorityUnit = document.createElement("div"); 
                        priorityUnit.classList.add("task-unit");

                            const priorityHeader = document.createElement("div"); 
                            priorityHeader.classList.add("task-subheader");
                            priorityHeader.textContent = "Priority: ";                                  // task priority 

                            const prioritySelect = document.createElement("select");
                            prioritySelect.classList.add("task-priority");

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

                    left.append(projectUnit, dueUnit, priorityUnit); 

                    // right column 
                    const right = document.createElement("div"); 

                        const notesUnit = document.createElement("div"); 
                        notesUnit.classList.add("task-unit");

                            const notesHeader = document.createElement("div"); 
                            notesHeader.classList.add("task-subheader");
                            notesHeader.textContent = "Notes: "; 

                            const notesInput = document.createElement("input");
                            notesInput.classList.add("task-notes");
                            notesInput.setAttribute("type", "textarea"); 
                            notesInput.setAttribute("value", this.notes);                          // task notes 

                        notesUnit.append(notesHeader, notesInput);

                    right.append(notesUnit); 

                content.append(left, right);

            card.append(header, content);

        tasksParent.append(card);

        // event listeners 
        deleteButton.addEventListener("click", (event) => { this.deleteTask(event);
                                                            activeTab.updateDashboardNumbers();
                                                        });

        prioritySelect.addEventListener("change", () => {   this.urgentToggle(prioritySelect.value, card)
                                                            activeTab.updateDashboardNumbers();
                                                        });

        nameInput.addEventListener("change", () =>      {   this.name = nameInput.value; 
                                                            activeTab.updateDashboardNumbers();
                                                        });
        nameInput.addEventListener("keydown",(event) => { if (event.key === "Enter" || event.key === "Escape") {
                                                            nameInput.blur();}
                                                        });

        projectInput.addEventListener("change", () =>   {   const index = dashboardTabList.findIndex( (tab) => tab.projectName === projectInput.value); 
                                                            this.project = dashboardTabList[index];
                                                            activeTab.updateDashboardNumbers();
                                                        });

        dueInput.addEventListener("change", () =>       {   this.due = dueInput.value;
                                                            activeTab.updateDashboardNumbers();
                                                        });

        prioritySelect.addEventListener("change", () => {   this.priority = prioritySelect.value; 
                                                            this.urgentToggle(prioritySelect.value, card); 
                                                            activeTab.updateDashboardNumbers();
                                                        });

        notesInput.addEventListener("change", () =>     {   this.notes = notesInput.value;
                                                            activeTab.updateDashboardNumbers();
                                                        });
        notesInput.addEventListener("keydown",(event) => { if (event.key === "Enter" || event.key === "Escape") {
                                                            notesInput.blur();}
                                                        });

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
    checkboxToggle(event, card) {
        if (this.completed === true) {
            event.target.checked = false; 
            card.classList.remove("completed"); 
            this.completed = false; 
        }

        else {
            event.target.checked = true; 
            card.classList.add("completed"); 
            this.completed = true; 
        }
        
        activeTab.updateDashboardNumbers();
        activeTab.clickTab();
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



//// Global functions 
function dynamicProjectDropdown() {
    const projectInput = document.createElement("select");
    projectInput.classList.add("task-project");

    for (const tab of dashboardTabList) {
        if (tab instanceof ProjectTab) {
            const projectOption = document.createElement("option");
            projectOption.setAttribute("value", tab.projectName);
            projectOption.textContent = tab.projectName;

            if (tab.projectName === activeTab.projectName) {
                projectOption.selected = true; 
            }

            projectInput.append(projectOption);
        }
    }
    return projectInput;
}


function taskFormPopup() {
    const body = document.querySelector("body");

    // create modal background  
    const modalBackground = document.createElement("div"); 
    modalBackground.classList.add("modal-background");
    body.append(modalBackground);

    modalBackground.addEventListener("click", (event) => {if (event.target === modalBackground) {event.target.remove()}});
    

    // create modal content card 
    const modalCard = document.createElement("form");
    modalCard.classList.add("modal-card");
    modalBackground.append(modalCard);
}


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
function newTaskHandler() {
    let taskProject = dashboardTabList[3];
    if (activeTab instanceof ProjectTab) {
        taskProject = activeTab;
    }

    new Task(taskProject, "do laundry", "2026-11-18", "medium", " just do it");
    taskProject.updateDashboardNumbers();
}


// toggle visibility 
function toggleVisibility() {
    const visibilityIcons = ["images/visibility/hidden grey200.png", "images/visibility/visible grey70.png"]; 
    
    if (visible === true) {
        visibilityButton.setAttribute("src", visibilityIcons[0]);
        visible = false; 
    }
    else {
        visibilityButton.setAttribute("src", visibilityIcons[1]);
        visible = true; 
    }

    activeTab.clickTab();
}

//// Global event listeners 

// create new project
const newProjectInput = document.querySelector("#input-new-project"); 
const newProjectButton = document.querySelector(".button-new-project");

newProjectButton.addEventListener("click", () => newProjectHandler(newProjectInput.value));
document.addEventListener("keydown", (event) => {
    // enter: create new project 
    if (event.key === "Enter" && document.activeElement === newProjectInput) {
        newProjectHandler(newProjectInput.value);
    }
    // escape: unfocus and clear project input field 
    if (event.key === "Escape" && document.activeElement === newProjectInput) {
        newProjectInput.blur();
        newProjectInput.value = "";
    }
});


// create new task 
const newTaskButton = document.querySelector(".button-new-task"); 
// newTaskButton.addEventListener("click", () => newTaskHandler()); 
newTaskButton.addEventListener("click", () => taskFormPopup());


// set visibility 
let visible = true; 
const visibilityButton = document.querySelector(".visibility");
visibilityButton.addEventListener("click", () => toggleVisibility());



// initialise starting projects and tasks 
let activeTab;

(function() {
    // Highlights 
    new HighlightTab("All");
    new HighlightTab("Today");
    new HighlightTab("Priority");

    // Projects 
    const homeTab = new ProjectTab("Home");
    const workTab = new ProjectTab("Work");
    const sportTab = new ProjectTab("Sport");

    // Tasks 
    new Task(homeTab, "Task 01", "2026-11-19", "low", "some notes");
    new Task(workTab, "Task 02", "2026-11-18", "high", "some notes");
    new Task(sportTab, "Task 03", "2026-11-18", "medium", "some notes");
    new Task(homeTab, "Task 04", "2026-12-18", "low", "some notes");
    new Task(homeTab, "Task 05", "2026-11-20", "high", "some notes");
})();

dashboardTabList[0].clickTab();