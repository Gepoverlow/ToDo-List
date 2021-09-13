import { manipulateDOM } from "./domCreator";
import { render } from "./domCreator";

("use strict");

let ul = document.getElementById("todo-ul");
let formAdd = document.getElementById("todo-form-add");
let formEdit = document.getElementById("todo-form-edit");
let formView = document.getElementById("todo-form-view");

export let projectArray = [];

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
    document.getElementById("input-title-add").value,
    document.getElementById("input-description-add").value,
    document.getElementById("input-due-date-add").value,
    document.getElementById("input-priority-add").value,
    document.getElementById("input-notes-add").value
  );

  projectArray.push(toDo);
  //
  document.forms[0].reset();

  formAdd.classList.add("hidden");

  console.log(projectArray);
  console.log(projectArray.length);

  ul.innerHTML = "";

  projectArray.forEach(render);
};

const cancelAddTodo = (ev) => {
  ev.preventDefault();
  formAdd.classList.add("hidden");
};

const editTodo = (ev) => {
  ev.preventDefault();
  formEdit.classList.add("hidden");
};

const cancelEditTodo = (ev) => {
  ev.preventDefault();
  formEdit.classList.add("hidden");
};

const cancelViewTodo = (ev) => {
  ev.preventDefault();
  formView.classList.add("hidden");
};

export { addTodo, cancelAddTodo, editTodo, cancelEditTodo, cancelViewTodo };
