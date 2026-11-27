//storage handlers 
function readStorageTabs() {
    let tabList = JSON.parse(localStorage.getItem("dashboardTabList"));
    return tabList === null ? [] : tabList;
}

function updateStorageTabs() {
    localStorage.removeItem("dashboardTabList");
    localStorage.setItem("dashboardTabList", JSON.stringify(dashboardTabList));
}

function readStorageTasks() {
    let list = JSON.parse(localStorage.getItem("taskList"));
    console.log(list);
    return list === null ? [] : list;
}

function updateStorageTasks() {
    localStorage.removeItem("taskList");
    localStorage.setItem("taskList", JSON.stringify(taskList));
}


let dashboardTabList = [];

export { dashboardTabList };