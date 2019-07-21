
const app = document.getElementById('todo-app');

const taskTxt = () => document.querySelector('.todo__text');
const saveBtn = () => document.querySelector('.todo__savebtn');

function onAddBtnClick() {

    if (!taskTxt().value) {
        return;
    }

    createTask();
    resetTaskTxt();
}

function createTask() {

    const taskTemplate = templateNode('#todoTask');
    taskTemplate.querySelector('.todo__task-label').innerHTML = taskTxt().value;

    app.appendChild(taskTemplate);
}

function templateNode(selector) {

    const template = document.querySelector(selector);

    return template.content.cloneNode(true);
}

function resetTaskTxt() {
    taskTxt().value = '';
}

function init() {

    const todoTemplate = templateNode('#todoContainer');

    app.appendChild(todoTemplate);

    saveBtn().addEventListener('click', onAddBtnClick);
}

init();
