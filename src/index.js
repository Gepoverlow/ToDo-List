//FRESH START //FRESH START //FRESH START //FRESH START //FRESH START //FRESH START//FRESH START//FRESH START//FRESH START
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { createProject } from "./project-Creator";
import {
  renderTodos,
  renderProjects,
  renderTodoInfo,
  submitEditTodo,
} from "./dom-Creator.js";
import { createTodo, findIndex } from "./todo-Creator.js";

const firebaseConfig = {
  apiKey: "AIzaSyCQPzK1Z-zjKI7ja6BGPnT-oQbUHMbQMy8",
  authDomain: "gpotodolist.firebaseapp.com",
  projectId: "gpotodolist",
  storageBucket: "gpotodolist.appspot.com",
  messagingSenderId: "75221948225",
  appId: "1:75221948225:web:ae0e7702b6ad51418273c0",
};

initializeApp(firebaseConfig);

//AUTH

const provider = new GoogleAuthProvider();
const auth = getAuth();

function googleLogIn() {
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res.user);
      showProfileInfo(res.user);
    })
    .catch((e) => {
      console.log(e);
    });
}

function logOut() {
  signOut(auth)
    .then(() => {
      console.log("user logged out!");
      hideProfileInfo();
    })
    .catch((e) => {
      console.log(e);
    });
}

function showProfileInfo(user) {
  document.getElementById("profile-info").style.display = "flex";
  document.getElementById("login").style.display = "none";
  document.getElementById("profile-name").textContent = `${user.displayName}`;
  document.getElementById("profile-picture").src = `${user.photoURL}`;
}

function hideProfileInfo() {
  document.getElementById("profile-info").style.display = "none";
  document.getElementById("login").style.display = "block";
}

//

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
let sortBtn = document.getElementById("sort");

let logInBtn = document.getElementById("login");
let logOutBtn = document.getElementById("logout");

//
logInBtn.addEventListener("click", googleLogIn);
logOutBtn.addEventListener("click", logOut);
//

let inboxProject = {
  id: "defaultID",
  name: "Inbox",
  todos: [],
};

let projects = [];

let currentProject = undefined;
let defProject = undefined;
let indexOfClickedTodo = undefined;

// EVENT LISTENERS

document.addEventListener("DOMContentLoaded", () => {
  inboxProject.todos = getStorageData("inboxArray");
  projects = getStorageData("projectsArray");

  defProject = inboxProject.todos;
  currentProject = defProject;

  renderTodos(defProject);
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
    todoFormAdd.classList.add("hidden");
    todoFormEdit.classList.add("hidden");
  }
});

btnSubmitAdd.addEventListener("click", (ev) => {
  if (todoFormAdd.checkValidity()) {
    ev.preventDefault();
    createTodo(currentProject, defProject);
    renderTodos(currentProject);
    todoFormAdd.reset();
    todoFormAdd.classList.add("hidden");
    addToLocalStorage("projectsArray", projects);
    addToLocalStorage("inboxArray", defProject);
  }
});

btnCancelAdd.addEventListener("click", (ev) => {
  ev.preventDefault();
  todoFormAdd.classList.add("hidden");
});

btnSubmitEdit.addEventListener("click", (ev) => {
  if (todoFormEdit.checkValidity()) {
    ev.preventDefault();
    todoFormEdit.classList.add("hidden");
    submitEditTodo(currentProject, indexOfClickedTodo);
    renderTodos(currentProject);
    addToLocalStorage("projectsArray", projects);
    addToLocalStorage("inboxArray", defProject);
  }
});

btnCancelEdit.addEventListener("click", (ev) => {
  ev.preventDefault();
  todoFormEdit.classList.add("hidden");
});

sortBtn.addEventListener("click", () => {
  console.log(defProject);
  sortDates(defProject);
  console.log(defProject);
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

    array[indexOfClickedTodo].isChecked = array[indexOfClickedTodo].isChecked
      ? false
      : true;

    if (currentProject !== defProject) {
      let inboxIndex = findIndex(defProject, e.target.parentNode.id);
      console.log(inboxIndex);
      defProject[inboxIndex].isChecked = array[indexOfClickedTodo].isChecked
        ? true
        : false;
    }
    if (currentProject === defProject) {
      let projectOfRepeatedTodo = projects.filter((project) =>
        project.todos.some(
          (todo) => todo.id === parseInt(e.target.parentNode.id)
        )
      )[0];
      if (projectOfRepeatedTodo !== undefined) {
        let repeatedTodoIndex = findIndex(
          projectOfRepeatedTodo.todos,
          e.target.parentNode.id
        );
        projectOfRepeatedTodo.todos[repeatedTodoIndex].isChecked = defProject[
          indexOfClickedTodo
        ].isChecked
          ? true
          : false;
      }
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
  todoFormAdd.classList.add("hidden");
  todoFormEdit.classList.add("hidden");
  // DELETE
  function deleteProject(array) {
    let deletedProject =
      projects[findIndex(projects, e.target.parentNode.id)].todos;
    inboxProject.todos = inboxProject.todos.filter(
      (i) => !deletedProject.includes(i)
    );
    defProject = inboxProject.todos;
    //
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

function getStorageData(name) {
  return JSON.parse(localStorage.getItem(name) || "[]");
}

function sortDates(defArray) {
  defArray.sort(function compare(a, b) {
    let dateA = new Date(a.dueDate);
    let dateB = new Date(b.dueDate);
    return dateA - dateB;
  });
}
