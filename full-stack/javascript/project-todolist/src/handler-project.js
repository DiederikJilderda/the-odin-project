// dashboardtablist 

// import tab list 
// import colors 

export function newProjectHandler(name) {
    // if (dashboardTabList.some( (tab) => tab.projectName === newProjectInput.value)) {
    //     alert("Please use a unique project name");
    //     newProjectInput.value = "";
    // }

    // else {
        new ProjectTab(name, projectColors[colorIndex]);
        colorIndex++;
        if (colorIndex > 5) {
            colorIndex = 0;
        }
        newProjectInput.value = "";
    // }
}