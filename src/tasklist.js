import Task from './task.js';

export default class TaskList {
    taskList = [];

    constructor() {
      this.taskList.push(new Task('Eat', false, 1));
      this.taskList.push(new Task('Drink', false, 2));
      this.taskList.push(new Task('Sleep', true, 5));
      this.taskList.push(new Task('Walk', false, 4));
      this.taskList.push(new Task('Sit', false, 3));
    }

    taskListComponent() {
      this.taskList.sort((a, b) => a.index - b.index);

      const taskListContainer = document.createElement('div');

      this.taskList.forEach((task) => {
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');

        const itemCompleted = document.createElement('input');
        itemCompleted.type = 'checkbox';
        itemCompleted.checked = task.completed;
        itemCompleted.classList.add('item-completed');

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