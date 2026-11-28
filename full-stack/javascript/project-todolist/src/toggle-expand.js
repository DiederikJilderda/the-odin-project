// import expandImg from "./images/expanded.png";
// import collapseImg from "./images/collapsed.png"; 

const expandImg = "images/expanded.png";
const collapseImg = "images/collapsed.png"; 

const expandIcons = [expandImg, collapseImg]; 


import { saveGlobalState } from "./saveGlobalState.js";
import { initialiseGlobalStates } from "./globalStates.js"; 
let globalStates = initialiseGlobalStates();


export function toggleExpand() {
    const expandButton = document.querySelector(".expand");
    const mainParent = document.querySelector(".main"); 

    if (globalStates.expanded === true) {
        expandButton.setAttribute("src", expandIcons[1]);
        globalStates.expanded = false; 
        saveGlobalState(globalStates);
        // mainParent.style.width = "735px";

    }

    else {
        expandButton.setAttribute("src", expandIcons[0]);
        globalStates.expanded = true; 
        saveGlobalState(globalStates);
        // mainParent.style.width = "276px";
    }
}
