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
        newTasks.setAttribute("title", "Uncompleted tasks");
        this.totalElement = newTasks; 
        newTasks.classList.add("number-tasks"); 

        const newUrgent = document.createElement("div"); 
        newUrgent.setAttribute("title", "High priority tasks");
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
        if (this === activeTab) {
            dashboardTabList[0].clickTab();
        }
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
                if (task.completed === false){
                    totalTasks++; 
                }

                if (task.priority === "high" && task.completed === false) {
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
            for (const task of taskList) {
                if (task.due === today()) {
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
    constructor(project, title, due, priority, notes) {
        this.project = project;             // object 
        this.title = title; 
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

            // add urgent color 
            if (this.priority === "high") {
                card.classList.add("urgent");
            }

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

                    const titleInput = document.createElement("input");
                    titleInput.setAttribute("type", "text");
                    titleInput.classList.add("task-title"); 
                    titleInput.value = this.title;                                                      // task title 
                    titleInput.addEventListener("change", () => {this.title = titleInput.value; 
                                                                activeTab.updateDashboardNumbers();
                                                            });
                    titleInput.addEventListener("keydown",(event) => {if (event.key === "Enter" || event.key === "Escape") {
                                                                        titleInput.blur();}
                                                            });

                    const deleteButton = document.createElement("button"); 
                    deleteButton.setAttribute("type", "button");
                    deleteButton.classList.add("button-delete-task"); 
                    deleteButton.textContent = "\u00d7";

                    deleteButton.addEventListener("click", (event) => { this.deleteTask(event);
                                                    activeTab.updateDashboardNumbers();
                                                });

                header.append(checkbox, titleInput, deleteButton);

                if (expanded === false) {
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

                                const projectInput = dynamicProjectDropdown(this.project);                     // task project
                                projectInput.addEventListener("change", () =>   {   const index = dashboardTabList.findIndex( (tab) => tab.projectName === projectInput.value); 
                                                                                    this.project = dashboardTabList[index];
                                                                                    activeTab.updateDashboardNumbers();
                                                                                });
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
                                dueInput.addEventListener("change", () => {this.due = dueInput.value;
                                                                            activeTab.updateDashboardNumbers();
                                                                        });
                                                                        
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
                                        optionPriorityLow.selected = true;
                                    }

                                    const optionPriorityMedium = document.createElement("option"); 
                                    optionPriorityMedium.setAttribute("value", "medium");
                                    optionPriorityMedium.textContent = "Medium";

                                    if (this.priority === "medium") {
                                        optionPriorityMedium.selected = true;
                                    }

                                    const optionPriorityHigh = document.createElement("option"); 
                                    optionPriorityHigh.setAttribute("value", "high");
                                    optionPriorityHigh.textContent = "High";

                                    if (this.priority === "high") {
                                        optionPriorityHigh.selected = true;
                                    }

                                prioritySelect.append(optionPriorityLow, optionPriorityMedium, optionPriorityHigh);

                                prioritySelect.addEventListener("change", () => {this.urgentToggle(prioritySelect.value, card)
                                                                                activeTab.updateDashboardNumbers();
                                                                            });
                                prioritySelect.addEventListener("change", () => {this.priority = prioritySelect.value; 
                                                                                this.urgentToggle(prioritySelect.value, card); 
                                                                                activeTab.updateDashboardNumbers();
                                                                            });

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

                                notesInput.addEventListener("change", () =>     {this.notes = notesInput.value;
                                                                                    activeTab.updateDashboardNumbers();
                                                                                });
                                notesInput.addEventListener("keydown",(event) => {if (event.key === "Enter" || event.key === "Escape") {
                                                                                    notesInput.blur();}
                                                                                });

                            notesUnit.append(notesHeader, notesInput);

                        right.append(notesUnit); 

                    content.append(left, right);
                    card.append(header, content);
                }
                else {
                    card.append(header);
                    // card.classList.remove("task-card");
                    card.classList.add("task-card-collapsed");
                }

        tasksParent.append(card);

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
function today() {
    const getDate = new Date();
    const today = getDate.getFullYear() + "-" + (getDate.getMonth()+1) + "-" + getDate.getDate();
    
    return today; 
}


function dynamicProjectDropdown(project) {
    const projectInput = document.createElement("select");
    let dropdown = [];
    projectInput.classList.add("task-project");

    for (const tab of dashboardTabList) {
        if (tab instanceof ProjectTab) {
            const projectOption = document.createElement("option");
            projectOption.setAttribute("value", tab.projectName);
            projectOption.textContent = tab.projectName;
            projectInput.append(projectOption);
            dropdown.push(projectOption);

            if (tab.projectName === project.projectName) {
                    projectOption.selected = true;
            }
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
    
    // create modal content card 
    const modalContainer = document.createElement("div"); 
    modalContainer.classList.add("modal-container");
    modalBackground.append(modalContainer);

    const submitProjectButton = document.createElement("button");
    submitProjectButton.type = "button";
    submitProjectButton.textContent = "+";
    submitProjectButton.classList.add("button-submit-task");

    const modalCard = document.createElement("form");
    modalCard.classList.add("task-card", "modal-card");

            // card header 
            const header = document.createElement("div");
            header.classList.add("task-header", "modal-header"); 

                const titleInput = document.createElement("input");  
                titleInput.setAttribute("type", "text");
                titleInput.setAttribute("id", "title-input");                              // task title
                titleInput.classList.add("task-title"); 
                titleInput.placeholder = "task description";
                titleInput.required = true; 

            header.append(submitProjectButton, titleInput);

            // card content  
            const content = document.createElement("div"); 
            content.classList.add("task-content"); 

                // left column 
                const left = document.createElement("div"); 

                    // project 
                    const projectUnit = document.createElement("div"); 
                    projectUnit.classList.add("task-unit");

                        const projectHeader = document.createElement("label"); 
                        projectHeader.classList.add("task-subheader");
                        projectHeader.textContent = "Project: "; 
                        projectHeader.setAttribute("for", "project-input");

                        const projectInput = dynamicProjectDropdown(activeTab);                  // task project
                        projectInput.setAttribute("id","project-input"); 

                    projectUnit.append(projectHeader, projectInput);

                    // date 
                    const dueUnit = document.createElement("div"); 
                    dueUnit.classList.add("task-unit");

                        const dueHeader = document.createElement("label"); 
                        dueHeader.classList.add("task-subheader");
                        dueHeader.textContent = "Due date: "; 
                        dueHeader.required = true; 

                        const dueInput = document.createElement("input"); 
                        dueInput.classList.add("task-date");
                        dueInput.setAttribute("type", "date"); 
                        dueInput.setAttribute("id", "due-input");     
                        dueInput.required = true;                                           // task due date

                    dueUnit.append(dueHeader, dueInput);

                    // priority 
                    const priorityUnit = document.createElement("div"); 
                    priorityUnit.classList.add("task-unit");

                        const priorityHeader = document.createElement("label"); 
                        priorityHeader.classList.add("task-subheader");
                        priorityHeader.textContent = "Priority: ";                                  // task priority 
                        priorityHeader.setAttribute("for", "priority-input");

                        const prioritySelect = document.createElement("select");
                        prioritySelect.classList.add("task-priority");
                        prioritySelect.setAttribute("id", "priority-input");

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

                left.append(projectUnit, dueUnit, priorityUnit); 

                // right column 
                const right = document.createElement("div"); 

                    const notesUnit = document.createElement("div"); 
                    notesUnit.classList.add("task-unit");

                        const notesHeader = document.createElement("label"); 
                        notesHeader.classList.add("task-subheader");
                        notesHeader.textContent = "Notes: "; 
                        notesHeader.setAttribute("for", "notes-input");

                        const notesInput = document.createElement("input");
                        notesInput.classList.add("task-notes");
                        notesInput.setAttribute("type", "textarea"); 
                        notesInput.placeholder = "notes";
                        notesInput.setAttribute("id", "notes-input");                          // task notes 

                    notesUnit.append(notesHeader, notesInput);
                right.append(notesUnit); 
            content.append(left, right);
        modalCard.append(header, content);
    modalContainer.append(submitProjectButton, modalCard);

    // event listeners 
    modalBackground.addEventListener("click", (event) => {if (event.target === modalBackground) {event.target.remove()}});
    submitProjectButton.addEventListener("click", () => newTaskHandler());

    titleInput.addEventListener("keydown",(event) => { if (event.key === "Enter" || event.key === "Escape") {
                                                        titleInput.blur();}
                                                    });

    notesInput.addEventListener("keydown",(event) => { if (event.key === "Enter" || event.key === "Escape") {
                                                        notesInput.blur();}
                                                    });

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
    const taskTitle = document.querySelector("#title-input").value; 
    const projectName = document.querySelector("#project-input").value;
    const taskProject = dashboardTabList[dashboardTabList.findIndex( (tab) => tab.projectName === projectName)];
    const taskDate = document.querySelector("#due-input").value;
    const taskPriority = document.querySelector("#priority-input").value;
    const taskNotes = document.querySelector("#notes-input").value;

    new Task(taskProject, taskTitle, taskDate, taskPriority, taskNotes);
    activeTab.updateDashboardNumbers();
    document.querySelector(".modal-background").remove();
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

// toggle collapse task information 
function toggleExpand() {
    const expandIcons = ["images/expanded.png", "images/collapsed.png"]; 
    const tasksParent = document.querySelector(".tasks");

    if (expanded === true) {
        expandButton.setAttribute("src", expandIcons[0]);
        expanded = false; 
        tasksParent.classList.remove("tasks-collapsed");
    }
    else {
        expandButton.setAttribute("src", expandIcons[1]);
        expanded = true; 
        tasksParent.classList.add("tasks-collapsed");
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
newTaskButton.addEventListener("click", () => taskFormPopup());


// set visibility 
let visible = true; 
const visibilityButton = document.querySelector(".visibility");
visibilityButton.addEventListener("click", () => toggleVisibility());


// set expand/collapse  
let expanded = false; 
const expandButton = document.querySelector(".expand");
expandButton.addEventListener("click", () => toggleExpand());


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
    new Task(sportTab, "Task 04", "2026-12-18", "low", "some notes");
    new Task(homeTab, "Task 05", "2026-11-20", "high", "some notes");
})();

dashboardTabList[0].clickTab();