// localStorage.removeItem("globalStates");
import { saveGlobalState } from "./saveGlobalState.js";

// class for global states 
class GlobalStates {
    constructor() {
        this.visible = false;
        this.expanded = false;
        this.colorIndex = 0;
        this.activeTab; 

        this.projectColors = [ 
                            "#de9592", 
                            "#dec392",
                            "#96c787",
                            "#87b9c7",
                            "#af9fcc",
                            "#c99fcc"
                        ];
    }
}

// read locally stored global states or set new default states 
export function initialiseGlobalStates() {
    let globalStates = JSON.parse(localStorage.getItem("globalStates")); 

    if (globalStates === null) {
        console.log("default global state");

        const defaultState = new GlobalStates();
        saveGlobalState(defaultState);

        return defaultState; 
    }
    else {
        // console.log(globalStates);
        return globalStates; 
    }
}
