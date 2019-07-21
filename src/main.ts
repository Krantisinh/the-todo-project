// import { v4 as uuid } from 'uuid';
// const uuid = require('uuid');

const SL_APP = '#todo-app';
const SL_TASK_TEXT = '.todo__text';
const SL_TASK_SAVE = '.todo__savebtn';
const SL_TASK = '.todo__task';
const SL_TASK_LABEL = '.todo__task-label';
const SL_TASK_TEMPLATE = '#todoTask';
const SL_TODO_CONT_TEMPLATE = '#todoContainer';
const SL_DEL_TASK_BTN = '.todo__task-delete'

const app: HTMLElement = safeSelector(SL_APP);

const taskTxt = () => <HTMLInputElement>safeSelector(SL_TASK_TEXT);
const saveBtn = () => <HTMLButtonElement>safeSelector(SL_TASK_SAVE);
const taskTemplate = (): HTMLElement => <HTMLElement>templateNode(SL_TASK_TEMPLATE);

function init(): void {

    const todoTemplate = templateNode(SL_TODO_CONT_TEMPLATE);

    app.appendChild(todoTemplate);

    saveBtn().addEventListener('click', onAddBtnClick);
}

function onAddBtnClick(): void {

    const text: HTMLInputElement = taskTxt();

    if (!text.value) {
        return;
    }

    app!.appendChild(getTaskTemplate(text));

    resetValue(text);
}

function getTaskTemplate(text: HTMLInputElement): HTMLElement {

    const template = taskTemplate();
    const task = safeSelector(SL_TASK, template);
    const label = safeSelector(SL_TASK_LABEL, template);

    label.innerHTML = text.value;

    // Generate key using uuid.
    const key: string = Math.random().toString();
    task.setAttribute('key', key);

    const delBt = safeSelector(SL_DEL_TASK_BTN, template);

    delBt.addEventListener('click', deleteTask(key));

    return template;
}

function deleteTask(key: string): EventListenerOrEventListenerObject {
    return () => {
        const tasks = app!.querySelectorAll(SL_TASK);

        tasks.forEach((x: Element) => {
            if (x.getAttribute('key') === key) {
                x.parentElement!.removeChild(x);
            }
        });
    };
}

function templateNode(selector: string): Node {

    const template = <HTMLTemplateElement>safeSelector(selector);

    return template.content.cloneNode(true);
}

function resetValue(text: HTMLInputElement): void {
    text.value = '';
}

function safeSelector(selector: string, template?: HTMLElement): HTMLElement {
    const temp = template || document;

    const el = <HTMLElement>temp.querySelector(selector);

    if (!el) {
        throw error(selector);
    }

    return el;
}

function error(selector: string) {
    throw new Error(`Element with selector ${selector} not present in the DOM.`);
}

init();
