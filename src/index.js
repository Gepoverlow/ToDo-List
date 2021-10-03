//FRESH START //FRESH START //FRESH START //FRESH START //FRESH START //FRESH START//FRESH START//FRESH START//FRESH START
import { projects, createProject, inboxProject } from "./project-Creator";
import {
  renderTodos,
  renderProjects,
  renderTodoInfo,
  submitEditTodo,
} from "./dom-Creator.js";
import { createTodo, findIndex } from "./todo-Creator.js";

let projectUL = document.getElementById("project-ul");
let todoUL = document.getElementById("todo-ul");
let btnAddToDo = document.getElementById("btn-add-todo");

let todoFormAdd = document.getElementById("todo-form-add");
let btnSubmitAdd = document.getElementById("btn-submit-add");
let btnCancelAdd = document.getElementById("btn-cancel-add");

let todoFormEdit = document.getElementById("todo-form-edit");
let btnSubmitEdit = document.getElementById("btn-submit-edit");
let btnCancelEdit = document.getElementById("btn-cancel-edit");

let btnAddProject = document.getElementById("btn-add-project");
let inputAddProject = document.getElementById("project-input");
let iProject = document.getElementById("inbox");

let defProject = inboxProject.todos;
let currentProject = defProject;
let indexOfClickedTodo = undefined;

// EVENT LISTENERS

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(currentProject);
  renderProjects(projects);
  enableProjectNavigation();
  removeActiveStatusOnProjects();
  iProject.classList.add("active");
});

iProject.addEventListener("click", function () {
  renderTodos(defProject);
  currentProject = defProject;
  removeActiveStatusOnProjects();
  iProject.classList.add("active");
});

btnAddToDo.addEventListener("click", () => {
  if (todoFormEdit.classList.contains("hidden")) {
    todoFormAdd.classList.remove("hidden");
  }
});

btnAddProject.addEventListener("click", () => {
  if (inputAddProject.value !== "") {
    createProject(projects);
    renderProjects(projects);
    enableProjectNavigation();
    giveAddedProjectActiveStatus();
    addToLocalStorage("projectsArray", projects);
    addToLocalStorage("inboxArray", defProject);
    iProject.classList.remove("active");
  }
});

btnSubmitAdd.addEventListener("click", (ev) => {
  ev.preventDefault();
  createTodo(currentProject, defProject);
  renderTodos(currentProject);
  todoFormAdd.reset();
  todoFormAdd.classList.add("hidden");
  addToLocalStorage("projectsArray", projects);
  addToLocalStorage("inboxArray", defProject);
  //   console.log(JSON.parse(localStorage.getItem("projectsArray") || "[]"));
});

btnCancelAdd.addEventListener("click", (ev) => {
  ev.preventDefault();
  todoFormAdd.classList.add("hidden");
});

btnSubmitEdit.addEventListener("click", (ev) => {
  ev.preventDefault();
  todoFormEdit.classList.add("hidden");
  submitEditTodo(currentProject, indexOfClickedTodo);
  renderTodos(currentProject);
  addToLocalStorage("projectsArray", projects);
  addToLocalStorage("inboxArray", defProject);
});

btnCancelEdit.addEventListener("click", (ev) => {
  ev.preventDefault();
  todoFormEdit.classList.add("hidden");
});

todoUL.addEventListener("click", function (e) {
  // DELETE
  function deleteTodo(array) {
    array.splice(findIndex(currentProject, e.target.parentNode.id), 1);
    if (currentProject !== defProject) {
      defProject.splice(findIndex(defProject, e.target.parentNode.id), 1);
    }
    if (currentProject === defProject) {
      let projectOfRepeatedTodo = projects.filter((project) =>
        project.todos.some(
          (todo) => todo.id === parseInt(e.target.parentNode.id)
        )
      )[0];
      if (projectOfRepeatedTodo !== undefined) {
        projectOfRepeatedTodo.todos.splice(
          findIndex(projectOfRepeatedTodo.todos, e.target.parentNode.id),
          1
        );
      }
    }
    renderTodos(currentProject);
    addToLocalStorage("projectsArray", projects);
    addToLocalStorage("inboxArray", defProject);
  }

  //EDIT
  function openEditForm() {
    indexOfClickedTodo = findIndex(currentProject, e.target.parentNode.id);
    todoFormEdit.classList.remove("hidden");
    renderTodoInfo(currentProject, indexOfClickedTodo);
  }

  //CHANGE CHECKED STATUS
  function changeCheckedStatus(array) {
    indexOfClickedTodo = findIndex(currentProject, e.target.parentNode.id);
    if (array[indexOfClickedTodo].isChecked === false) {
      array[indexOfClickedTodo].isChecked = true;
    } else if (array[indexOfClickedTodo].isChecked === true) {
      array[indexOfClickedTodo].isChecked = false;
    }
  }

  //

  if (
    e.target.textContent === "check" ||
    e.target.textContent === "pending_actions"
  ) {
    changeCheckedStatus(currentProject);
    addToLocalStorage("projectsArray", projects);
    addToLocalStorage("inboxArray", defProject);
    renderTodos(currentProject);
  }

  if (e.target.textContent === "delete") {
    deleteTodo(currentProject);
  }

  if (
    e.target.textContent === "visibility" &&
    todoFormAdd.classList.contains("hidden")
  ) {
    openEditForm();
  }
});

projectUL.addEventListener("click", function (e) {
  // DELETE
  function deleteProject(array) {
    projects[findIndex(projects, e.target.parentNode.id)].todos = [];
    array.splice(findIndex(projects, e.target.parentNode.id), 1);
    renderProjects(projects);
    enableProjectNavigation();
  }

  if (e.target.textContent === "delete") {
    deleteProject(projects);
    renderTodos(currentProject);
    giveLastProjectActiveStatus();
    addToLocalStorage("projectsArray", projects);
    addToLocalStorage("inboxArray", defProject);
  }

  if (projects.length < 1) {
    iProject.classList.add("active");
    currentProject = defProject;
    renderTodos(currentProject);
  } else if (projects.length >= 1) {
    iProject.classList.remove("active");
  }
});

function enableProjectNavigation() {
  // Get all buttons with class="li" inside the container
  let projectLIs = projectUL.getElementsByClassName("li");

  // Loop through the buttons and add the active class to the current/clicked button
  for (let i = 0; i < projectLIs.length; i++) {
    projectLIs[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      currentProject = projects[i].todos;
      renderTodos(currentProject);
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }
}

function removeActiveStatusOnProjects() {
  let projectLIs = projectUL.getElementsByClassName("li");
  for (let i = 0; i < projectLIs.length; i++) {
    projectLIs[i].classList.remove("active");
  }
}

function giveAddedProjectActiveStatus() {
  currentProject = projects[projects.length - 1].todos;
  renderTodos(currentProject);
}

function giveLastProjectActiveStatus() {
  if (projects.length > 0) {
    currentProject = projects[projects.length - 1].todos;
    renderTodos(currentProject);
  }
}

function addToLocalStorage(name, arr) {
  localStorage.setItem(name, JSON.stringify(arr));
}

// function getStorageData(name) {
//   return JSON.parse(localStorage.getItem(name) || "[]");
// }
