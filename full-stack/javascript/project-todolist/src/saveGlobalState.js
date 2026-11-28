export function saveGlobalState(state) {    
    localStorage.setItem("globalStates", JSON.stringify(state));
}
