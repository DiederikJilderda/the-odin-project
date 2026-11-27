export function newTaskHandler() {
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