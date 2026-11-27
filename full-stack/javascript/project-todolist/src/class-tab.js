export class DashboardTab {
    constructor() {
        this.totalElement = null; 
        this.dashboardElement = null; 

        // updateStorageTabs();
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

        this.updateDashboardNumbers();                                                // update dashboard numbers

        newRow.append(newTasks); 


        // append project name 
        const newProjectName = document.createElement("div");
        newProjectName.classList.add("dashboard-projectname"); 
        newProjectName.textContent = this.projectName; 
        newDashboardTab.append(newProjectName);

        
        // append color picker 
        if (this instanceof ProjectTab) {
            const inputColor = document.createElement("input"); 
            inputColor.classList.add("input-project-color");
            inputColor.setAttribute("type", "color");
            inputColor.value = this.color;
            newDashboardTab.append(inputColor); 

            inputColor.addEventListener("click", (event) => {event.stopPropagation()});
            inputColor.addEventListener("change", () => {this.color = inputColor.value; 
                                                         activeTab.renderTasks();
                                                        });
        }


        // append delete button 
        if (this instanceof ProjectTab) {
            const projectDeleteButton = document.createElement("button"); 
            projectDeleteButton.classList.add("button-delete-project"); 
            projectDeleteButton.setAttribute("type", "button"); 
            projectDeleteButton.textContent = "\u00d7"; 

            newDashboardTab.append(projectDeleteButton); 

            projectDeleteButton.addEventListener("click", (event) => {  this.deleteDashboardTab(event)
                                                                        }
                                                                     );
        }

        // attach event listeners
        newDashboardTab.addEventListener("click", (event) => this.setFocus(event)); 
    }

    deleteDashboardTab(event) {
        if (window.confirm("Are you sure you want to delete this project?")) {
            // delete DOM element 
            this.dashboardElement.remove();

            // delete class instance 
            const index = dashboardTabList.indexOf(this); 
            dashboardTabList.splice(index, 1);

            // delete underlying tasks 
            this.deleteTasks(); 

            // set focus to today tab if on project tab 
            if (this === activeTab) {
                dashboardTabList[0].setFocus();
            }
            // otherwise update display 
            else {
                activeTab.renderTasks();
            }
        }
        
        // block tab click function execution 
        event.stopPropagation();
    }

    renderTasks() {
        this.clearTasks();
        this.updateMainTitle();

        const filteredTasks = this.filterTasks();
        let allTasks = [];

        if (visible === true) {
            allTasks = filteredTasks;
        }

        else {
            allTasks = filteredTasks.filter( (task) => task.completed === false);
        }

        this.createTaskDisplays(taskList);
        this.updateDashboardNumbers();
    }

    setFocus() {
        const dashboardTabs = document.querySelectorAll(".dashboard-tab");
        dashboardTabs.forEach( (tab) => tab.classList.remove("dashboard-tab-active") ); 
        this.dashboardElement.classList.add('dashboard-tab-active');

        activeTab = this; 
        this.renderTasks(); 
    }

    clearTasks() {
        const allTasks = document.querySelectorAll(".task-card");
        allTasks.forEach( (task) => task.remove());
    }

    updateMainTitle() {
        const mainTitle = document.querySelector(".main-title");
        mainTitle.textContent = this.projectName; 

        if (this instanceof ProjectTab) {
            mainTitle.style.color = this.color;
            mainTitle.style.borderColor = this.color;

        }
        else {
            mainTitle.style.color = "#7f92b3";
            mainTitle.style.borderColor = "#7f92b3";
        }

    }

    createTaskDisplays(filteredTaskList) {
        for (const task of filteredTaskList) {
            task.createCardDisplay();
        } 
    }

    updateDashboardNumbers() {
        // console.log(dashboardTabList);
        for (const tab of dashboardTabList) {
            let totalTasks = 0; 

            for (const task of tab.filterTasks()) {
                if (task.completed === false){
                    totalTasks++; 
                }
            }

            tab.totalElement.textContent = totalTasks; 
        }
    }
}

export class HighlightTab extends DashboardTab {
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
        else if (this.projectName === "Due today") {
            for (const task of taskList) {
                if (task.due === today()) {
                    filteredTasks.push(task);
                }
            }
        }

        // Priority 
        else if (this.projectName === "High priority") {
            for (const task of taskList) {
                if (task.priority === "high") {
                    filteredTasks.push(task);
                }
            }
        }

        return filteredTasks; 
    }
}

export class ProjectTab extends DashboardTab {
    constructor(projectName, color) {
        super();
        
        this.color = color;
        this.projectName = projectName;
        dashboardTabList.push(this);
        this.newProjectDisplay(".dashboard-projects");

        this.setFocus();
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