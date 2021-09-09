import { updateDOM } from "./domCreator";

("use strict");

let form = document.getElementById("todo-form");
let ul = document.getElementById("todo-ul");

const projectArray = [];

class ToDo {
  constructor(title, description, dueDate, priority, notes) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

const addTodo = (ev) => {
  ev.preventDefault();
  let toDo = new ToDo(
    document.getElementById("input-title").value,
    document.getElementById("input-description").value,
    document.getElementById("input-due-date").value,
    document.getElementById("input-priority").value,
    document.getElementById("input-notes").value
  );

  projectArray.push(toDo);
  document.forms[0].reset();

  form.classList.add("hidden");

  console.log(projectArray);

  ul.innerHTML = "";

  projectArray.forEach(updateDOM);
};

const cancelAddTodo = (ev) => {
  ev.preventDefault();
  form.classList.add("hidden");
};

export { addTodo, cancelAddTodo };
