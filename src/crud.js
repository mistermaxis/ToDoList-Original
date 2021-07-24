import Task from './task.js';

export default class Crud {
  static add(taskList, inputText, index) {
    const newTask = new Task(inputText, false, index);
    taskList.push(newTask);
  }

  static delete(taskList, index) {
    const idx = parseInt(index, 10);

    taskList.splice(idx, 1);

    for (let i = 0; i < taskList.length; i+=1) {
      taskList[i].index = i;
      console.log(i);
    }
  }

  static update() {

  }
}