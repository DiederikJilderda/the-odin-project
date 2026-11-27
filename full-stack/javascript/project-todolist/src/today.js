export function today() {
    const getDate = new Date();
    const today = getDate.getFullYear() + "-" + (getDate.getMonth()+1) + "-" + getDate.getDate();
    
    return today; 
}