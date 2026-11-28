// import hiddenImg from "./images/visibility/hidden grey200.png";
// import visibleImg from "./images/visibility/visible grey70.png";

const hiddenImg = "./images/visibility/hidden grey200.png";
const visibleImg = "./images/visibility/visible grey70.png";

const visibilityIcons = [hiddenImg, visibleImg]; 


import { saveGlobalState } from "./saveGlobalState.js";
import { initialiseGlobalStates } from "./globalStates.js"; 
let globalStates = initialiseGlobalStates();



export function toggleVisibility() {
    const visibilityButton = document.querySelector(".visibility");

    if (globalStates.visible === true) {
        visibilityButton.setAttribute("src", visibilityIcons[0]);
        globalStates.visible = false; 
        saveGlobalState(globalStates);
    }
    else {
        visibilityButton.setAttribute("src", visibilityIcons[1]);
        globalStates.visible = true; 
        saveGlobalState(globalStates);
    }

    // activeTab.renderTasks();
}