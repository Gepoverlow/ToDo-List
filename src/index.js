//FRESH START //FRESH START //FRESH START //FRESH START //FRESH START //FRESH START//FRESH START//FRESH START//FRESH START
import { projects } from "./todo-Creator.js";
// import { defaultProject, testProject } from "./todo-Creator.js";
import { renderTodos } from "./dom-Creator.js";
import { createTodo, deleteTodo } from "./todo-Creator.js";

let projectUL = document.getElementById("project-ul");
let todoUL = document.getElementById("todo-ul");
let btnAddToDo = document.getElementById("btn-add-todo");

let todoFormAdd = document.getElementById("todo-form-add");
let btnSubmitAdd = document.getElementById("btn-submit-add");
let btnCancelAdd = document.getElementById("btn-cancel-add");

let todoFormEdit = document.getElementById("todo-form-edit");
let btnSubmitEdit = document.getElementById("btn-submit-edit");
let btnCancelEdit = document.getElementById("btn-cancel-edit");

let currentProject = projects[0];

// EVENT LISTENERS

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(currentProject);
});

btnAddToDo.addEventListener("click", () => {
  todoFormAdd.classList.remove("hidden");
});

btnSubmitAdd.addEventListener("click", (ev) => {
  ev.preventDefault();
  createTodo(currentProject);
  renderTodos(currentProject);
  todoFormAdd.reset();
  todoFormAdd.classList.add("hidden");
});

btnCancelAdd.addEventListener("click", (ev) => {
  ev.preventDefault();
  todoFormAdd.classList.add("hidden");
});

btnSubmitEdit.addEventListener("click", (ev) => {
  ev.preventDefault();
  todoFormEdit.classList.add("hidden");
});

btnCancelEdit.addEventListener("click", (ev) => {
  ev.preventDefault();
  todoFormEdit.classList.add("hidden");
});

todoUL.addEventListener("click", function (e) {
  function findIndex(arr) {
    let pos = arr
      .map(function (e) {
        return e.id;
      })
      .indexOf(parseInt(e.target.parentNode.id));
    return pos;
  }

  // DELETE
  function deleteTodo(array) {
    array.splice(findIndex(currentProject), 1);
    renderTodos(currentProject);
  }

  if (e.target.textContent === "DELETE") {
    deleteTodo(currentProject);
  }
  //EDIT
  function openEditForm() {
    todoFormEdit.classList.remove("hidden");
  }

  if (e.target.textContent === "EDIT") {
    openEditForm();
  }
});

// Get all buttons with class="btn" inside the container
let projectLIs = projectUL.getElementsByClassName("li");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < projectLIs.length; i++) {
  projectLIs[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    currentProject = projects[i];
    renderTodos(currentProject);
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

//

//

//

//

//

//

//

//

//

//

//FRESH START //FRESH START //FRESH START //FRESH START //FRESH START //FRESH START//FRESH START//FRESH START//FRESH START

// import {
//   submitAddTodo,
//   cancelAddTodo,
//   submitEditTodo,
//   cancelEditTodo,
// } from "./todoCreator";

// import { submitAddProject } from "./projectCreator";

// ("use strict");

// let form = document.getElementById("todo-form-add");

// let btnAddToDo = document.getElementById("btn-add-todo");
// let btnAddProject = document.getElementById("btn-add-project");

// let btnSubmitAdd = document.getElementById("button-submit-add");
// let btnCancelAdd = document.getElementById("button-cancel-add");

// let btnSubmitEdit = document.getElementById("button-submit-edit");
// let btnCancelEdit = document.getElementById("button-cancel-edit");

// btnAddToDo.addEventListener("click", () => {
//   form.classList.remove("hidden");
// });
// btnAddProject.addEventListener("click", submitAddProject);

// document.addEventListener("DOMContentLoaded", () => {
//   //
// });
// btnSubmitAdd.addEventListener("click", submitAddTodo);
// btnCancelAdd.addEventListener("click", cancelAddTodo);
// //
// btnSubmitEdit.addEventListener("click", submitEditTodo);
// btnCancelEdit.addEventListener("click", cancelEditTodo);
// //
