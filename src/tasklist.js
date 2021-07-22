import Task from './task.js';
import CompletedTask from './completed.js';

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

        if (checkbox.checked == true) {
            checkbox.nextSibling.classList.add('complete');
        } else if (checkbox.checked == false) {
            checkbox.nextSibling.classList.remove('complete');
        }
        CompletedTask.updateCompleted(TaskList.taskList, listContainer.id);
    }

    taskListComponent() {
        TaskList.taskList.sort((a, b) => a.index - b.index);

        const taskListContainer = document.createElement('div');

        TaskList.taskList.forEach((task) => {
            const listItem = document.createElement('div');
            listItem.classList.add('list-item');
            listItem.id = task.index;

            const itemCompleted = document.createElement('input');
            itemCompleted.type = 'checkbox';
            itemCompleted.checked = task.completed;
            itemCompleted.classList.add('item-completed');
            itemCompleted.addEventListener('change', TaskList.updateTaskComplete);

            const itemDescription = document.createElement('span');
            itemDescription.innerText = task.description;
            itemDescription.classList.add('item-description');

            listItem.appendChild(itemCompleted);
            listItem.appendChild(itemDescription);
            taskListContainer.appendChild(listItem);
        });
        return taskListContainer;
    }
}