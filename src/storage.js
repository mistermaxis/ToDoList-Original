export default class Storage {
  static saveToStorage(taskList) {
    const stringList = JSON.stringify(taskList);
    window.localStorage.setItem('tasklist', stringList);
  }

  static loadFromStorage(taskList) {
    const data = window.localStorage.getItem('tasklist');

    if (data !== null) {
      const list = JSON.parse(data);
      list.forEach((li) => {
        taskList.push(li);
      });
    }
  }
}
