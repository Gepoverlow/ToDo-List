"use strict";

class ToDo {
  constructor(title, description, dueDate, priority, isChecked) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isChecked = isChecked;
  }
}

export { ToDo };
