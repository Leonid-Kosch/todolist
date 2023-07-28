import { mainRender } from ".";

let store = {};
if (localStorage.getItem('store')) {
 store = JSON.parse(localStorage.getItem('store'));
}

export function addTask(name, status='work', id=0) {
    let newTask = {name:name, status:status, id:id};
    store.taskList.unshift(newTask);
    idSort();
    localStorage.setItem('store', JSON.stringify(store));
};

function idSort () {
    for(let i = 0; i < store.taskList.length; i++) {
        store.taskList[i].id = i;
    }
    mainRender();
};

export function removeTask (id) {
    store.taskList.splice(id, 1);
    idSort();
    localStorage.setItem('store', JSON.stringify(store));
};

export function completeTask (id) {
    store.taskList[id].status = (store.taskList[id].status == 'work') ? 'completed' : 'work';
    localStorage.setItem('store', JSON.stringify(store));
    mainRender();
}

export default store;