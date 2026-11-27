// import logoImg from "./images/logo.png";
// import todayImg from "./images/today.png";
// import projectsImg from "./images/projects.png";
// import expandImg from "./images/expanded.png";
// import visibleImg from "./images/visibility/hidden grey200.png"; 

// Import images 
const logoImg = "./images/logo.png";
const todayImg = "./images/today.png";
const projectsImg = "./images/projects.png";
const expandImg = "./images/expanded.png";
const visibleImg = "./images/visibility/hidden grey200.png"; 

// Import event functions 
import { dummy } from "./dummy.js"; 
// new project 
// new task 
// toggle visible 
// toggle expand 

export function staticLayout() {
    const body = document.querySelector("body"); 

    // Sidebar 
        const sidebar = document.createElement("div"); 
        sidebar.classList.add("sidebar"); 


        // Logo 
            const logo = document.createElement("img"); 
            logo.src = logoImg;
        
        // Dashboard 
            const dashboard = document.createElement("div"); 
            dashboard.classList.add("dashboard");

            // Highlights 
                const dashboardHighlights = document.createElement("div");
                dashboardHighlights.classList.add("dashboard-highlights");

                    const rowHighlights = document.createElement("div");
                    rowHighlights.classList.add("row");

                        const highlights = document.createElement("img");
                        highlights.src = todayImg;
                        highlights.classList.add("icon");

                        const highlightsHeader = document.createElement("div");
                        highlightsHeader.classList.add("dashboard-header");
                        highlightsHeader.textContent = "Highlights"; 

                    rowHighlights.append(highlights, highlightsHeader);
                
                dashboardHighlights.append(rowHighlights);
            
            //Projects 
                const dashboardProjects = document.createElement("div");
                dashboardProjects.classList.add("dashboard-projects");

                    const rowProjects = document.createElement("div");
                    rowProjects.classList.add("row");

                        const projects = document.createElement("img");
                        projects.src = projectsImg;
                        projects.classList.add("icon");

                        const projectsHeader = document.createElement("div");
                        projectsHeader.classList.add("dashboard-header");
                        projectsHeader.textContent = "Categories"; 

                    rowProjects.append(projects, projectsHeader);

                dashboardProjects.append(rowProjects);

            dashboard.append(dashboardHighlights, dashboardProjects);

        //New project input 
            const newProjectRow = document.createElement("div");
            newProjectRow.classList.add("new-project-row"); 

                const newProjectInput = document.createElement("input"); 
                newProjectInput.type = "text"; 
                newProjectInput.id = "input-new-project"; 
                newProjectInput.setAttribute("placeholder", "New category");
                newProjectInput.addEventListener("keydown", (event) => {
                    if (event.key === "Enter" && newProjectInput.value != "") {
                        dummy("new project through input enter");
                        // newProjectHandler("Project", newProjectInput.value);
                        newProjectInput.value = "";
                    }

                    if (event.key === "Escape") {
                        newProjectInput.blur(); 
                        newProjectInput.value = "";
                    }
                });

                const newProjectButton = document.createElement("button");
                newProjectButton.type = "button";
                newProjectButton.classList.add("button-new-project");
                newProjectButton.textContent = "+";
                newProjectButton.addEventListener("click", () => {
                    if (newProjectInput.value === "") {
                        newProjectInput.focus();
                    }

                    else {
                        dummy("new project through button");
                        // newProjectHandler("Project", newProjectInput.value);
                        newProjectInput.value = "";
                    }
                }); 

            newProjectRow.append(newProjectInput, newProjectButton);

        sidebar.append(logo, dashboard, newProjectRow);

    // Main element 
        const main = document.createElement("div"); 
        main.classList.add('main'); 

            const mainTitle = document.createElement("div");
            mainTitle.classList.add("main-title"); 
            // mainTitle.textContent = "Home";                                               // remove main title  

            const mainLegend = document.createElement("div"); 
            mainLegend.classList.add("main-legend");
            
                // stuff 
                const mainKey = document.createElement("div"); 
                mainKey.classList.add("main-key"); 

                    const expand = document.createElement("img");
                    expand.src = expandImg;
                    expand.title = "Collapse/expand tasks"; 
                    expand.classList.add("expand");
                    expand.addEventListener("click", () => dummy("toggled expansion"));
                    // expand.addEventListener("click", () => toggleExpand());

                    const visible = document.createElement("img");
                    visible.src = visibleImg; 
                    visible.title = "Toggle completed task visibility"; 
                    visible.classList.add("visibility");
                    visible.addEventListener("click", () => dummy("toggled visibility"));
                    // visible.addEventListener("click", () => toggleVisibility());

                mainKey.append(expand, visible);
            
            mainLegend.append(mainKey);


            const mainTasks = document.createElement("div"); 
            mainTasks.classList.add("tasks"); 

            const newTaskRow = document.createElement("div");
            newTaskRow.classList.add("new-task-row");

                const newTaskButton = document.createElement("button");
                newTaskButton.type = "button"; 
                newTaskButton.classList.add("button-new-task");
                newTaskButton.textContent = "+"; 
                newTaskButton.addEventListener("click", () => dummy("clicked new task"));
                // newTaskButton.addEventListener("click", () => taskFormPopup());
            
            newTaskRow.append(newTaskButton);

        main.append(mainTitle, mainLegend, mainTasks, newTaskRow);

    body.append(sidebar, main);
}
