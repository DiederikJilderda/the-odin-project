export function newProjectHandler(type, name) {
    if (type === "Project") {
        if (dashboardTabList.some( (tab) => tab.projectName === newProjectInput.value)) {
            alert("Please use a unique project name");
            newProjectInput.value = "";
        }

        else {
            new ProjectTab(name, projectColors[colorIndex]);
            colorIndex++;
            if (colorIndex > 5) {
                colorIndex = 0;
            }
            newProjectInput.value = "";
        }
    }
    else if (type === "Highlight") {
        new HighlightTab(name)
    }
}