
type nullable<T> = T | null;

const SL_APP = 'todo-app';
const SL_TASK_TEXT = '.todo__text';
const SL_TASK_SAVE = '.todo__savebtn';
const SL_TASK_LABEL = '.todo__task-label';
const SL_TASK_TEMPLATE = '#todoTask';
const SL_TODO_CONT_TEMPLATE = '#todoContainer';

const app: nullable<HTMLElement> = document.getElementById(SL_APP);

const taskTxt = (): nullable<HTMLInputElement> => document.querySelector(SL_TASK_TEXT);
const saveBtn = (): nullable<HTMLButtonElement> => document.querySelector(SL_TASK_SAVE);
const taskTemplate = (): HTMLElement => <HTMLElement>templateNode(SL_TASK_TEMPLATE);

function init(): void {

    if (!app) {
        throw error(SL_APP);
    }

    const todoTemplate = templateNode(SL_TODO_CONT_TEMPLATE);

    app.appendChild(todoTemplate);

    const saveB = saveBtn();

    if (!saveB) {
        throw error(SL_TASK_SAVE);
    }

    saveB.addEventListener('click', onAddBtnClick);
}

function onAddBtnClick(): void {

    const text: nullable<HTMLInputElement> = taskTxt();

    if (!text) {
        throw error(SL_TASK_TEXT);
    }

    if (!text.value) {
        return;
    }

    app!.appendChild(getTaskTemplate(text));

    resetValue(text);
}

function getTaskTemplate(text: HTMLInputElement): HTMLElement {

    const template = taskTemplate();
    const label = template.querySelector(SL_TASK_LABEL);

    if (!label) {
        throw error(SL_TASK_LABEL);
    }

    label.innerHTML = text.value;

    return template;
}

function templateNode(selector: string): Node {

    const template: nullable<HTMLTemplateElement> = document.querySelector(selector);

    if (!template) {
        throw error(selector);
    }

    return template.content.cloneNode(true);
}

function resetValue(text: HTMLInputElement): void {
    text.value = '';
}

function error(selector: string) {
    throw new Error(`Element with selector ${selector} not present in the DOM.`);
}

init();
