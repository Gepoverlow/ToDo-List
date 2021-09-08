import { ToDo } from "./todoCreator";
import { updateDOM } from "./domCreator";

("use strict");

let form = document.getElementById("todo-form");
let ul = document.getElementById("todo-ul");

document.getElementById("btn-add-todo").addEventListener("click", () => {
  form.classList.remove("hidden");
});

const projectArray = [];

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

  projectArray.forEach(updateDOM);
};

const cancelAddTodo = (ev) => {
  ev.preventDefault();
  form.classList.add("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("button-submit").addEventListener("click", addTodo);
  document
    .getElementById("button-cancel")
    .addEventListener("click", cancelAddTodo);
});

//   {
//     id: Date.now(),
//     title: document.getElementById("input-title").value,
//     description: document.getElementById("input-description").value,
//     dueDate: document.getElementById("input-due-date").value,
//     priority: document.getElementById("input-priority").value,
//     notes: document.getElementById("input-notes").value,
//   };
