class Task {
  description = String;

  completed = Boolean;

  index = Number;

  constructor(desc, comp, idx) {
    this.description = desc;
    this.completed = comp;
    this.index = idx;
  }
}

module.exports(Task);