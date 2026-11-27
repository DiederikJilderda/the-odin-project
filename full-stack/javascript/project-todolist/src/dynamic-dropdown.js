export function dynamicProjectDropdown(project) {
    const projectInput = document.createElement("select");
    projectInput.classList.add("task-project");

    for (const tab of dashboardTabList) {
        if (tab instanceof ProjectTab) {
            const projectOption = document.createElement("option");
            projectOption.setAttribute("value", tab.projectName);
            projectOption.textContent = tab.projectName;
            projectInput.append(projectOption);

            if (tab.projectName === project.projectName) {
                    projectOption.selected = true;
            }
        }
    }

    return projectInput;
}