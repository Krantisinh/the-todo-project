
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

    const template = document.querySelector('#todoTask');
    const clonedNode = template.content.cloneNode(true);
    clonedNode.querySelector('.todo__task-label').innerHTML = taskTxt().value;

    app.appendChild(clonedNode);
}

function resetTaskTxt() {
    taskTxt().value = '';
}

function init() {

    const template = document.querySelector('#todoContainer');
    const node = template.content.cloneNode(true);

    app.appendChild(node);

    saveBtn().addEventListener('click', onAddBtnClick);
}

init();
