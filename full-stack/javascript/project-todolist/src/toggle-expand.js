export function toggleExpand() {
    const expandIcons = ["images/expanded.png", "images/collapsed.png"]; 
    const tasksParent = document.querySelector(".tasks");
    const mainParent = document.querySelector(".main"); 


    if (expanded === true) {
        expandButton.setAttribute("src", expandIcons[0]);
        expanded = false; 
        mainParent.style.width = "735px";

    }
    else {
        expandButton.setAttribute("src", expandIcons[1]);
        expanded = true; 
        mainParent.style.width = "276px";
    }

    activeTab.renderTasks();
}