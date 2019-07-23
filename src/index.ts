import './style.css';
const uuid = require('uuid/v4');

const SL_APP: string = '#todo-app';
const SL_TASK_TEXT: string = '.todo__text';
const SL_TASK_SAVE: string = '.todo__savebtn';
const SL_TASK: string = '.todo__task';
const SL_TASK_LABEL: string = '.todo__task-label';
const SL_TASK_TEMPLATE: string = '#todoTask';
const SL_TODO_CONT_TEMPLATE: string = '#todoContainer';
const SL_DEL_TASK_BTN: string = '.todo__task-delete'

const app: HTMLElement = safeSelector(SL_APP);

function init(): void {

    const todoTemplate = templateNode(SL_TODO_CONT_TEMPLATE);

    app.appendChild(todoTemplate);

    const saveBtn = <HTMLButtonElement>safeSelector(SL_TASK_SAVE);

    saveBtn.addEventListener('click', onAddBtnClick);
}

function onAddBtnClick(): void {

    const text: HTMLInputElement = <HTMLInputElement>safeSelector(SL_TASK_TEXT);

    if (!text.value) {
        return;
    }

    app!.appendChild(getTaskTemplate(text));

    resetValue(text);
}

function getTaskTemplate(text: HTMLInputElement): HTMLElement {

    const template = <HTMLElement>templateNode(SL_TASK_TEMPLATE);
    const task = safeSelector(SL_TASK, template);
    const label = safeSelector(SL_TASK_LABEL, template);

    label.innerHTML = text.value;

    const key = uuid();
    task.setAttribute('key', key);

    const delTaskEl = safeSelector(SL_DEL_TASK_BTN, template);

    delTaskEl.addEventListener('click', deleteTask(key));

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
