import Task from './task.js';
import CompletedTask from './completed.js';
import DragIcon from './drag-icon.svg';

export default class TaskList {
    static taskList = [];

    constructor() {
        TaskList.taskList.push(new Task('Eat', false, 1));
        TaskList.taskList.push(new Task('Drink', false, 2));
        TaskList.taskList.push(new Task('Sleep', false, 5));
        TaskList.taskList.push(new Task('Walk', false, 4));
        TaskList.taskList.push(new Task('Sit', false, 3));
    }

    static updateTaskComplete(event) {
        const checkbox = event.currentTarget;
        const listContainer = checkbox.parentElement;

        if (checkbox.checked === true) {
            checkbox.nextSibling.classList.add('complete');
        } else if (checkbox.checked === false) {
            checkbox.nextSibling.classList.remove('complete');
        }
        CompletedTask.updateCompleted(TaskList.taskList, listContainer.id);
    }

    static onDragStart(event) {
        setTimeout(() => {
            event.target.classList.remove('visible');
            event.target.classList.add('hidden');
        }, 0);
    }

    static onDragEnd(event) {
        console.log(event.target);
        event.target.classList.remove('hidden');
        event.target.classList.add('visible');
    }

    static onDragOver() {

    }

    static onDrop() {

    }

    static changeToDrag(event) {
        console.log('Mouse Over Icon');
        const itemToDrag = event.currentTarget.parentElement;

        itemToDrag.draggable = true;

        console.log(`Draggable = ${itemToDrag.draggable}`);

        itemToDrag.addEventListener('dragstart', TaskList.onDragStart);
        itemToDrag.addEventListener('dragover', TaskList.onDragOver);
        itemToDrag.addEventListener('dragend', TaskList.onDragEnd);
        itemToDrag.addEventListener('drop', TaskList.onDrop);
    }

    static changeToNoDrag(event) {
        console.log('Mouse Over Icon');

        const itemNoDrag = event.currentTarget.parentElement;

        itemNoDrag.draggable = false;

        console.log(`Draggable = ${itemNoDrag.draggable}`);

        itemNoDrag.removeEventListener('dragstart', TaskList.onDragStart);
        itemNoDrag.removeEventListener('dragover', TaskList.onDragOver);
        itemNoDrag.removeEventListener('dragend', TaskList.onDragEnd);
        itemNoDrag.removeEventListener('drop', TaskList.onDrop);
    }

    taskListComponent() {
        TaskList.taskList.sort((a, b) => a.index - b.index);

        const taskListContainer = document.createElement('div');

        TaskList.taskList.forEach((task) => {
            const listItem = document.createElement('div');
            listItem.classList.add('list-item');
            listItem.classList.add('flex-list-item');
            listItem.id = task.index;

            const itemCompleted = document.createElement('input');
            itemCompleted.type = 'checkbox';
            itemCompleted.checked = task.completed;
            itemCompleted.classList.add('item-completed');
            itemCompleted.addEventListener('change', TaskList.updateTaskComplete);

            const itemDescription = document.createElement('label');
            itemDescription.innerText = task.description;
            itemDescription.classList.add('item-description');

            const dragButton = document.createElement('button');

            const itemIcon = document.createElement('img');
            itemIcon.classList.add('drag-icon');
            itemIcon.src = DragIcon;

            dragButton.appendChild(itemIcon);
            dragButton.classList.add('drag-button');
            dragButton.classList.add('flex-list-item');

            dragButton.addEventListener('mouseover', TaskList.changeToDrag);
            dragButton.addEventListener('mouseleave', TaskList.changeToNoDrag);

            listItem.appendChild(itemCompleted);
            listItem.appendChild(itemDescription);
            listItem.appendChild(dragButton);
            taskListContainer.appendChild(listItem);
        });
        return taskListContainer;
    }
}