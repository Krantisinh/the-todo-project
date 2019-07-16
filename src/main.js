'use strict';

const app = document.getElementById('todo-app');
let taskTxt = null;
let addTaskBtn = null;

function el(name) {
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
    let taskContainer = el('div');
    taskContainer.classList.add('todo__task');

    let taskCheck = el('input');
    taskCheck.type = 'checkbox';
    taskCheck.classList.add('todo__task-check');

    let taskLabel = el('label');
    taskLabel.classList.add('todo__task-label');

    taskLabel.innerHTML = taskTxt.value;

    taskContainer.appendChild(taskCheck);
    taskContainer.appendChild(taskLabel);

    app.appendChild(taskContainer);
}

function resetTaskTxt() {
    taskTxt.value = '';
}

function init() {
    let todoInputContainer = el('div');
    todoInputContainer.classList.add('todo__input');

    taskTxt = el('input');
    taskTxt.classList.add('todo__text');
    todoInputContainer.appendChild(taskTxt);

    addTaskBtn = el('button');
    addTaskBtn.innerText = 'Add';
    addTaskBtn.classList.add('todo__savebtn');
    todoInputContainer.appendChild(addTaskBtn);

    app.appendChild(todoInputContainer);

    addTaskBtn.addEventListener('click', onAddBtnClick);
}

init();
