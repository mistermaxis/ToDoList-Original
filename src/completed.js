export default class CompletedTask {
  static updateCompleted(taskList, index) {
    const idx = parseInt(index, 10);
    taskList.forEach((element) => {
      if (element.index === idx) {
        if (element.completed === true) {
          element.completed = false;
        } else if (element.completed === false) {
          element.completed = true;
        }
      }
    });
  }
}