export function toggleVisibility() {
    const visibilityIcons = ["images/visibility/hidden grey200.png", "images/visibility/visible grey70.png"]; 
    
    if (visible === true) {
        visibilityButton.setAttribute("src", visibilityIcons[0]);
        visible = false; 
    }
    else {
        visibilityButton.setAttribute("src", visibilityIcons[1]);
        visible = true; 
    }

    activeTab.renderTasks();
}