import CompletedTask from './completed.js';
import DragDropTask from './drag-drop.js';
import Storage from './storage.js';
import Crud from './crud.js';
import EnterIcon from './enter-icon.png';
import TrashIcon from './trash-icon.png';
import DragIcon from './drag-icon.svg';

export default class TaskList {
    static taskList = [];

    static itemID = Number;

    static taskListContainer;

    static listInput;

    constructor() {
      TaskList.itemID = 0;

      // Storage.loadFromStorage(TaskList.taskList);

      document.getElementById('enter-icon').src = EnterIcon;

      TaskList.listInput = document.getElementById('add-todo');
      TaskList.listInput.addEventListener('keyup', TaskList.addItemToList);

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

      Storage.saveToStorage(TaskList.taskList);
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

    static addItemToList(event) {
      if (event.key === 'Enter') {
        const inputText = event.currentTarget;
        const textValue = inputText.value;

        Crud.add(TaskList.taskList, textValue, TaskList.itemID);
        TaskList.itemID += 1;

        inputText.value = '';

        Storage.saveToStorage(TaskList.taskList);

        TaskList.updateList();
      }
    }

    static editItem(event) {
      const listItemChildren = event.currentTarget.parentElement.children;

      for (let i = 1; i < listItemChildren.length; i += 1) {
        if (i < 3) {
          listItemChildren[i].classList.remove('enabled');
          listItemChildren[i].classList.add('disabled');
        } else {
          listItemChildren[i].classList.remove('disabled');
          listItemChildren[i].classList.add('enabled');
        }
      }
      listItemChildren[3].focus();
    }

    static cancelEdit(event) {
      const listItemChildren = event.currentTarget.parentElement.children;

      setTimeout(() => {
        for (let i = 1; i < listItemChildren.length; i += 1) {
          if (i < 3) {
            listItemChildren[i].classList.remove('disabled');
            listItemChildren[i].classList.add('enabled');
          } else {
            listItemChildren[i].classList.remove('enabled');
            listItemChildren[i].classList.add('disabled');
          }
        }
      }, 100);
      listItemChildren[3].value = '';
    }

    static UpdateItem(event) {
      if (event.key === 'Enter') {
        const inputEdit = event.currentTarget;
        const itemLabel = inputEdit.parentElement.children[1];
        itemLabel.innerText = inputEdit.value;
        TaskList.cancelEdit(event);

        Crud.update(TaskList.taskList, inputEdit.parentElement.id, itemLabel.innerText);

        Storage.saveToStorage(TaskList.taskList);
      }
    }

    static removeItem(event) {
      const taskItem = event.currentTarget.parentElement;

      Crud.delete(TaskList.taskList, taskItem.id);

      Storage.saveToStorage(TaskList.taskList);

      TaskList.updateList();
      TaskList.itemID -= 1;
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
        // List Item Container
        const listItem = document.createElement('div');
        listItem.classList.add('list-item');
        listItem.classList.add('flex-list-item');
        listItem.id = task.index;

        // Item Completed Checkbox
        const itemCompleted = document.createElement('input');
        itemCompleted.type = 'checkbox';
        itemCompleted.checked = task.completed;
        itemCompleted.classList.add('item-completed');
        itemCompleted.addEventListener('change', TaskList.updateTaskComplete);

        // Item Description
        const itemDescription = document.createElement('label');
        itemDescription.innerText = task.description;
        itemDescription.classList.add('item-description');
        itemDescription.addEventListener('click', TaskList.editItem);

        // Drag Button
        const dragButton = document.createElement('button');
        dragButton.type = 'button';

        const itemIcon = document.createElement('img');
        itemIcon.classList.add('drag-icon');
        itemIcon.src = DragIcon;

        dragButton.appendChild(itemIcon);
        dragButton.classList.add('drag-button');
        dragButton.classList.add('flex-list-item');

        dragButton.addEventListener('mouseover', TaskList.changeToDrag);
        dragButton.addEventListener('mouseleave', TaskList.changeToNoDrag);

        // Edit Input Field
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.classList.add('edit-input');
        editInput.classList.add('disabled');

        editInput.addEventListener('focusout', TaskList.cancelEdit);
        editInput.addEventListener('keyup', TaskList.UpdateItem);

        // Delete Button
        const trashIcon = document.createElement('img');
        trashIcon.src = TrashIcon;
        trashIcon.classList.add('trash-icon');

        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');
        trashButton.appendChild(trashIcon);
        trashButton.classList.add('disabled');
        trashButton.type = 'button';

        trashButton.addEventListener('click', TaskList.removeItem);

        // Adding Everything Together
        listItem.addEventListener('drop', TaskList.onDrop);
        listItem.addEventListener('dragover', TaskList.onDragOver);

        listItem.appendChild(itemCompleted);
        listItem.appendChild(itemDescription);
        listItem.appendChild(dragButton);
        listItem.appendChild(editInput);
        listItem.appendChild(trashButton);
        TaskList.taskListContainer.appendChild(listItem);
      });
    }
}