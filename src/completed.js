export default class CompletedTask {
    static updateCompleted(task_list, index) {
        const idx = parseInt(index);
        task_list.forEach(element => {
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