import { addTodo, cancelAddTodo } from "./todoCreator";

("use strict");

let form = document.getElementById("todo-form-add");
let btnAddToDo = document.getElementById("btn-add-todo");
let btnSubmit = document.getElementById("button-submit-add");
let btnCancel = document.getElementById("button-cancel-add");

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

// let array = [
//   {
//     id: 111,
//   },
//   {
//     id: 222,
//   },
//   {
//     id: 333,
//   },
// ];
// function findIndex() {
//   let pos = array
//     .map(function (e) {
//       return e.id;
//     })
//     .indexOf(333);
//   return pos;
// }
// console.log(findIndex());
