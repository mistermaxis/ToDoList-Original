import Task from './task'
export default class Storage {
  static saveToStorage(taskList) {
    const stringList = JSON.stringify(taskList);
    window.sessionStorage.setItem('tasklist', stringList);
  }

  static loadFromStorage(taskList) {
    const data = window.sessionStorage.getItem('tasklist');

    console.log(data);
    
    if (data !== null) {
      const list = JSON.parse(data);
      list.forEach(
        (li) => { taskList.push(li); },
      );
    }
    else {
      taskList.push(new Task('task_1', false, 0));
      taskList.push(new Task('task_2', false, 1));
      taskList.push(new Task('task_3', false, 2));
      taskList.push(new Task('task_4', false, 3));
      taskList.push(new Task('task_5', false, 4));
    }
  }
}