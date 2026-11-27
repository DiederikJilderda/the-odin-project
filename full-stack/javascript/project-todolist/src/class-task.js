export class Task {
    constructor(project, title, due, priority, notes) {
        this.project = project;             // object 
        this.title = title; 
        this.due = due; 

        if (this.due === "") {
            this.due = today();
        }

        this.priority = priority; 
        this.notes = notes; 
        this.completed = false; 

        taskList.push(this);
        activeTab.renderTasks();
    }

    // method: create UI 
    createCardDisplay() {
        // query parent container 
        const tasksParent = document.querySelector(".tasks"); 

            // new card 
            const card = document.createElement("div"); 
            card.classList.add("task-card");
            this.completed ? card.style.borderColor = "#c8c8c8" : card.style.borderColor = this.project.color;

                // card header 
                const header = document.createElement("div");
                header.classList.add("task-header"); 
                this.completed ? header.style.backgroundColor = "#c8c8c8" : header.style.backgroundColor = this.project.color;

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
                                projectHeader.textContent = "Project"; 

                                const projectInput = dynamicProjectDropdown(this.project);                     // task project
                                projectInput.addEventListener("change", () =>   {   const index = dashboardTabList.findIndex( (tab) => tab.projectName === projectInput.value); 
                                                                                    this.project = dashboardTabList[index];
                                                                                    activeTab.updateDashboardNumbers();
                                                                                    activeTab.renderTasks();
                                                                                });
                            projectUnit.append(projectHeader, projectInput);

                            // date 
                            const dueUnit = document.createElement("div"); 
                            dueUnit.classList.add("task-unit");

                                const dueHeader = document.createElement("div"); 
                                dueHeader.classList.add("task-subheader");
                                dueHeader.textContent = "Due date"; 

                                const dueInput = document.createElement("input"); 
                                dueInput.classList.add("task-date");
                                dueInput.setAttribute("type", "date"); 
                                dueInput.setAttribute("value", this.due);                             // task due date
                                dueInput.addEventListener("change", () => {this.due = dueInput.value;
                                                                            activeTab.updateDashboardNumbers();
                                                                            activeTab.renderTasks();
                                                                        });
                                                                        
                            dueUnit.append(dueHeader, dueInput);

                            // priority 
                            const priorityUnit = document.createElement("div"); 
                            priorityUnit.classList.add("task-unit");

                                const priorityHeader = document.createElement("div"); 
                                priorityHeader.classList.add("task-subheader");
                                priorityHeader.textContent = "Priority";                                  // task priority 

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
                                prioritySelect.addEventListener("change", () => {this.priority = prioritySelect.value; 
                                                                                activeTab.updateDashboardNumbers();
                                                                                activeTab.renderTasks();
                                                                            });

                            priorityUnit.append(priorityHeader, prioritySelect);

                        left.append(projectUnit, dueUnit, priorityUnit); 

                        // right column 
                        const right = document.createElement("div"); 

                            const notesUnit = document.createElement("div"); 
                            notesUnit.classList.add("task-unit");

                                const notesHeader = document.createElement("div"); 
                                notesHeader.classList.add("task-subheader");
                                notesHeader.textContent = "Notes"; 

                                const notesInput = document.createElement("textarea");
                                notesInput.classList.add("task-notes");
                                notesInput.value = this.notes;                          // task notes 
                                 
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
        activeTab.renderTasks();
    }
}