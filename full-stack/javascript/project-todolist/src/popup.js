export function taskFormPopup() {
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
    // modalCard.classList.add("task-card", "modal-card");
    modalCard.classList.add("modal-card");

            // card header 
            const header = document.createElement("div");
            // header.classList.add("task-header", "modal-header"); 
            header.classList.add("modal-header"); 

                const titleInput = document.createElement("input");  
                titleInput.setAttribute("type", "text");
                titleInput.setAttribute("id", "title-input");                              // task title
                titleInput.classList.add("modal-title"); 
                titleInput.placeholder = "task description";
                titleInput.required = true; 

            header.append(titleInput, submitProjectButton);

            // card content  
            const content = document.createElement("div"); 
            content.classList.add("modal-content"); 

                // left column 
                const left = document.createElement("div"); 

                    // project 
                    const projectUnit = document.createElement("div"); 
                    projectUnit.classList.add("modal-unit");

                        const projectHeader = document.createElement("label"); 
                        projectHeader.classList.add("modal-subheader");
                        projectHeader.textContent = "Project"; 
                        projectHeader.setAttribute("for", "project-input");

                        const projectInput = dynamicProjectDropdown(activeTab);                  // task project
                        projectInput.setAttribute("id","project-input"); 

                    projectUnit.append(projectHeader, projectInput);

                    // date 
                    const dueUnit = document.createElement("div"); 
                    dueUnit.classList.add("modal-unit");

                        const dueHeader = document.createElement("label"); 
                        dueHeader.classList.add("modal-subheader");
                        dueHeader.textContent = "Due date"; 
                        dueHeader.required = true; 

                        const dueInput = document.createElement("input"); 
                        dueInput.classList.add("modal-date");
                        dueInput.setAttribute("type", "date"); 
                        dueInput.setAttribute("id", "due-input");     
                        dueInput.required = true;                                           // task due date

                    dueUnit.append(dueHeader, dueInput);

                    // priority 
                    const priorityUnit = document.createElement("div"); 
                    priorityUnit.classList.add("modal-unit");

                        const priorityHeader = document.createElement("label"); 
                        priorityHeader.classList.add("modal-subheader");
                        priorityHeader.textContent = "Priority";                                  // task priority 
                        priorityHeader.setAttribute("for", "priority-input");

                        const prioritySelect = document.createElement("select");
                        prioritySelect.classList.add("modal-priority");
                        prioritySelect.setAttribute("id", "priority-input");

                            const optionPriorityDefault = document.createElement("option");
                            optionPriorityDefault.hidden = true; 
                            optionPriorityDefault.defaultSelected = true; 
                            optionPriorityDefault.disabled = true; 
                            optionPriorityDefault.textContent = "select priority";
                            optionPriorityDefault.value = "low";

                            const optionPriorityLow = document.createElement("option"); 
                            optionPriorityLow.setAttribute("value", "low");
                            optionPriorityLow.textContent = "Low";

                            const optionPriorityMedium = document.createElement("option"); 
                            optionPriorityMedium.setAttribute("value", "medium");
                            optionPriorityMedium.textContent = "Medium";

                            const optionPriorityHigh = document.createElement("option"); 
                            optionPriorityHigh.setAttribute("value", "high");
                            optionPriorityHigh.textContent = "High";

                        prioritySelect.append(optionPriorityDefault, optionPriorityLow, optionPriorityMedium, optionPriorityHigh);

                    priorityUnit.append(priorityHeader, prioritySelect);

                left.append(projectUnit, dueUnit, priorityUnit); 

                // right column 
                const right = document.createElement("div"); 

                    const notesUnit = document.createElement("div"); 
                    notesUnit.classList.add("modal-unit");

                        const notesHeader = document.createElement("label"); 
                        notesHeader.classList.add("modal-subheader");
                        notesHeader.textContent = "Notes"; 
                        notesHeader.setAttribute("for", "notes-input");

                        const notesInput = document.createElement("textarea");
                        notesInput.classList.add("modal-notes");
                        notesInput.placeholder = "notes";
                        notesInput.setAttribute("id", "notes-input");                          // task notes 

                    notesUnit.append(notesHeader, notesInput);
                right.append(notesUnit); 
            content.append(left, right);
        modalCard.append(header, content);
    modalContainer.append(modalCard);

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