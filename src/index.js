import { addTodo, cancelAddTodo } from "./todoCreator";

("use strict");

let form = document.getElementById("todo-form");
let btnAddToDo = document.getElementById("btn-add-todo");
let btnSubmit = document.getElementById("button-submit");
let btnCancel = document.getElementById("button-cancel");

btnAddToDo.addEventListener("click", () => {
  form.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  btnSubmit.addEventListener("click", addTodo);

  btnCancel.addEventListener("click", cancelAddTodo);
});

//   {
//     id: Date.now(),
//     title: document.getElementById("input-title").value,
//     description: document.getElementById("input-description").value,
//     dueDate: document.getElementById("input-due-date").value,
//     priority: document.getElementById("input-priority").value,
//     notes: document.getElementById("input-notes").value,
//   };
