"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
const uuid = require('uuid/v4');
const SL_APP = '#todo-app';
const SL_TASK_TEXT = '.todo__text';
const SL_TASK_SAVE = '.todo__savebtn';
const SL_TASK = '.todo__task';
const SL_TASK_LABEL = '.todo__task-label';
const SL_TASK_TEMPLATE = '#todoTask';
const SL_TODO_CONT_TEMPLATE = '#todoContainer';
const SL_DEL_TASK_BTN = '.todo__task-delete';
const app = safeSelector(SL_APP);
function init() {
    const todoTemplate = templateNode(SL_TODO_CONT_TEMPLATE);
    app.appendChild(todoTemplate);
    const saveBtn = safeSelector(SL_TASK_SAVE);
    saveBtn.addEventListener('click', onAddBtnClick);
}
function onAddBtnClick() {
    const text = safeSelector(SL_TASK_TEXT);
    if (!text.value) {
        return;
    }
    app.appendChild(getTaskTemplate(text));
    resetValue(text);
}
function getTaskTemplate(text) {
    const template = templateNode(SL_TASK_TEMPLATE);
    const task = safeSelector(SL_TASK, template);
    const label = safeSelector(SL_TASK_LABEL, template);
    label.innerHTML = text.value;
    const key = uuid();
    task.setAttribute('data-key', key);
    const delTaskEl = safeSelector(SL_DEL_TASK_BTN, template);
    delTaskEl.addEventListener('click', deleteTask(key));
    return template;
}
function deleteTask(key) {
    return () => {
        const tasks = app.querySelectorAll(SL_TASK);
        tasks.forEach((x) => {
            if (x.dataset['key'] === key) {
                x.parentElement.removeChild(x);
            }
        });
    };
}
function templateNode(selector) {
    const template = safeSelector(selector);
    return template.content.cloneNode(true);
}
function resetValue(text) {
    text.value = '';
}
function safeSelector(selector, template) {
    const temp = template || document;
    const el = temp.querySelector(selector);
    if (!el) {
        throw error(selector);
    }
    return el;
}
function error(selector) {
    throw new Error(`Element with selector ${selector} not present in the DOM.`);
}
init();
//# sourceMappingURL=index.js.map