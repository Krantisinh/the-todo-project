'use strict';

const app = document.getElementById('todo-app');
let taskTxt = null;
let addTaskBtn = null;

function createElement(name) {
    return document.createElement(name);
}

function onAddBtnClick() {
    if (!taskTxt.value) {
        return;
    }

    createTask();
    resetTaskTxt();
}

function createTask() {
    const div = createElement('div');
    div.innerHTML = taskTxt.value;
    app.appendChild(div);
}

function resetTaskTxt() {
    taskTxt.value = '';
}

function init() {
    taskTxt = createElement('input');
    app.appendChild(taskTxt);

    addTaskBtn = createElement('button');
    addTaskBtn.innerText = 'Add';
    app.appendChild(addTaskBtn);

    addTaskBtn.addEventListener('click', onAddBtnClick);
}

init();
