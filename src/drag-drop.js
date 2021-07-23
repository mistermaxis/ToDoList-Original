export default class DragDropTask {
  static updateArray(taskList, srcIdx, trgtIdx) {
    const source = parseInt(srcIdx, 10);
    const target = parseInt(trgtIdx, 10);

    const temp = taskList[target].index;

    if (source < target) {
      for (let i = source + 1; i <= target; i += 1) {
        taskList[i].index -= 1;
      }
      taskList[source].index = temp;
    }
    if (source > target) {
      for (let i = target; i < source; i += 1) {
        taskList[i].index += 1;
      }
      taskList[source].index = temp;
    }
  }
}