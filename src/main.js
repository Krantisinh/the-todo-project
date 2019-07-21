"use strict";
var SL_APP = 'todo-app';
var SL_TASK_TEXT = '.todo__text';
var SL_TASK_SAVE = '.todo__savebtn';
var SL_TASK_LABEL = '.todo__task-label';
var SL_TASK_TEMPLATE = '#todoTask';
var SL_TODO_CONT_TEMPLATE = '#todoContainer';
var app = document.getElementById(SL_APP);
var taskTxt = function () { return document.querySelector(SL_TASK_TEXT); };
var saveBtn = function () { return document.querySelector(SL_TASK_SAVE); };
var taskTemplate = function () { return templateNode(SL_TASK_TEMPLATE); };
function init() {
    if (!app) {
        throw error(SL_APP);
    }
    var todoTemplate = templateNode(SL_TODO_CONT_TEMPLATE);
    app.appendChild(todoTemplate);
    var saveB = saveBtn();
    if (!saveB) {
        throw error(SL_TASK_SAVE);
    }
    saveB.addEventListener('click', onAddBtnClick);
}
function onAddBtnClick() {
    var text = taskTxt();
    if (!text) {
        throw error(SL_TASK_TEXT);
    }
    if (!text.value) {
        return;
    }
    app.appendChild(getTaskTemplate(text));
    resetValue(text);
}
function getTaskTemplate(text) {
    var template = taskTemplate();
    var label = template.querySelector(SL_TASK_LABEL);
    if (!label) {
        throw error(SL_TASK_LABEL);
    }
    label.innerHTML = text.value;
    return template;
}
function templateNode(selector) {
    var template = document.querySelector(selector);
    if (!template) {
        throw error(selector);
    }
    return template.content.cloneNode(true);
}
function resetValue(text) {
    text.value = '';
}
function error(selector) {
    throw new Error("Element with selector " + selector + " not present in the DOM.");
}
init();
//# sourceMappingURL=main.js.map