import CompletedTask from './completed.js';
import DragDropTask from './drag-drop.js';
import Storage from './storage.js';
import DragIcon from './drag-icon.svg';

export default class TaskList {
    static taskList = [];

    static itemID = Number;

    static taskListContainer;

    constructor() {
      TaskList.itemID = 0;

      Storage.loadFromStorage(TaskList.taskList);

      TaskList.taskListContainer = document.createElement('div');
      TaskList.updateList();
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
      const item = event.currentTarget;
      item.classList.add('dragged');
      event.dataTransfer.setData('text/plain', item.id);
      setTimeout(() => {
        item.classList.remove('visible');
        item.classList.add('hidden');
      }, 0);
    }

    static onDragOver(event) {
      event.preventDefault();
    }

    static onDragEnd(event) {
      const item = event.currentTarget;
      item.classList.remove('hidden');
      item.classList.add('dragged');
      item.classList.add('visible');
    }

    static onDrop(event) {
      const sourceIndex = event.dataTransfer.getData('text');
      const targetIndex = event.currentTarget.id;

      DragDropTask.updateArray(TaskList.taskList, sourceIndex, targetIndex);

      TaskList.updateList();

      Storage.saveToStorage(TaskList.taskList);
    }

    static changeToDrag(event) {
      const itemToDrag = event.currentTarget.parentElement;

      itemToDrag.draggable = true;

      itemToDrag.addEventListener('dragstart', TaskList.onDragStart);
      itemToDrag.addEventListener('dragend', TaskList.onDragEnd);
    }

    static changeToNoDrag(event) {
      const itemNoDrag = event.currentTarget.parentElement;

      itemNoDrag.draggable = false;

      itemNoDrag.removeEventListener('dragstart', TaskList.onDragStart);
      itemNoDrag.removeEventListener('dragend', TaskList.onDragEnd);
    }

    /* eslint-disable */
    get taskListComponent() {
      return TaskList.taskListContainer;
    }
    /* eslint-enable */

    static updateList() {
      TaskList.taskList.sort((a, b) => a.index - b.index);

      TaskList.taskListContainer.innerHTML = '';

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

        listItem.addEventListener('drop', TaskList.onDrop);
        listItem.addEventListener('dragover', TaskList.onDragOver);

        listItem.appendChild(itemCompleted);
        listItem.appendChild(itemDescription);
        listItem.appendChild(dragButton);
        TaskList.taskListContainer.appendChild(listItem);
      });
    }
}