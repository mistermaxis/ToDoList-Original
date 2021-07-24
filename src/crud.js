import Task from "./task";

export default class Crud {
    static add(taskList, inputText, index) {

        const newTask = new Task(inputText, false, index);
        taskList.push(newTask);

    }
    static delete() {

    }
    static update() {

    }
}