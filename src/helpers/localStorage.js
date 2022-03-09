export function saveItem(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key){
    localStorage.getItem(key);
}
