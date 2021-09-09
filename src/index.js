import { addTodo, cancelAddTodo } from "./todoCreator";

("use strict");

let form = document.getElementById("todo-form");

document.getElementById("btn-add-todo").addEventListener("click", () => {
  form.classList.remove("hidden");
});

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
