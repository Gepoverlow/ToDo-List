//FRESH START //FRESH START //FRESH START //FRESH START //FRESH START //FRESH START//FRESH START//FRESH START//FRESH START
import { projects, createProject, defaultProject } from "./project-Creator";
// import { defaultProject, testProject } from "./todo-Creator.js";
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
// let inbox = document.getElementById("defaultID");

let defProject = projects[0].todos;
let currentProject = defProject;
let indexOfClickedTodo = undefined;

// EVENT LISTENERS

document.addEventListener("DOMContentLoaded", () => {
  renderTodos(currentProject);
  renderProjects(projects);
  enableProjectNavigation();
  console.log(currentProject);
  console.log(projects);
});

btnAddToDo.addEventListener("click", () => {
  if (todoFormEdit.classList.contains("hidden") && projects.length !== 0) {
    todoFormAdd.classList.remove("hidden");
  }

  if (projects.length === 0) {
    alert("please create a project to store your todos in first");
    return;
  }
});

btnAddProject.addEventListener("click", () => {
  if (inputAddProject.value !== "") {
    createProject(projects);
    renderProjects(projects);
    enableProjectNavigation();
    giveAddedProjectActiveStatus();
    addToLocalStorage(projects);
  }
});

btnSubmitAdd.addEventListener("click", (ev) => {
  ev.preventDefault();
  createTodo(currentProject);
  renderTodos(currentProject);
  todoFormAdd.reset();
  todoFormAdd.classList.add("hidden");
  addToLocalStorage(projects);
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
  addToLocalStorage(projects);
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
    addToLocalStorage(projects);
  }

  //EDIT
  function openEditForm() {
    indexOfClickedTodo = findIndex(currentProject, e.target.parentNode.id);
    todoFormEdit.classList.remove("hidden");
    renderTodoInfo(currentProject, indexOfClickedTodo);
  }

  if (e.target.textContent === "DELETE") {
    deleteTodo(currentProject);
  }

  if (
    e.target.textContent === "EDIT" &&
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

  if (e.target.parentNode.id === "defaultID") {
    alert("Default Project can not be deleted");
    return;
  }

  if (e.target.textContent === "X" && e.target.parentNode.id !== "defaultID") {
    deleteProject(projects);
    renderTodos(currentProject);
    // currentProject = projects[0].todos;
    giveLastProjectActiveStatus();
    addToLocalStorage(projects);
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

function giveAddedProjectActiveStatus() {
  currentProject = projects[projects.length - 1].todos;
  renderTodos(currentProject);
}

function giveLastProjectActiveStatus() {
  currentProject = projects[projects.length - 1].todos;
  renderTodos(currentProject);
}

function addToLocalStorage(arr) {
  localStorage.setItem("projectsArray", JSON.stringify(arr));
}

function getStorageData() {
  return JSON.parse(localStorage.getItem("projectsArray") || "[]");
}
