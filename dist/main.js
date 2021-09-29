/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom-Creator.js":
/*!****************************!*\
  !*** ./src/dom-Creator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTodos": () => (/* binding */ renderTodos),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "renderTodoInfo": () => (/* binding */ renderTodoInfo),
/* harmony export */   "submitEditTodo": () => (/* binding */ submitEditTodo)
/* harmony export */ });
let todoUL = document.getElementById("todo-ul");
let projectUL = document.getElementById("project-ul");
let projectLIs = projectUL.getElementsByClassName("li");

function renderTodos(todoArray) {
  // !!
  todoUL.innerHTML = "";
  // !!
  for (let i = 0; i < todoArray.length; i++) {
    let todoLI = document.createElement("li");
    let titleLI = document.createElement("p");
    let dueDateLI = document.createElement("p");
    let btnEditTodo = document.createElement("button");
    let btnDeleteTodo = document.createElement("button");

    todoUL.appendChild(todoLI);
    todoLI.appendChild(titleLI);
    todoLI.appendChild(dueDateLI);
    todoLI.appendChild(btnEditTodo);
    todoLI.appendChild(btnDeleteTodo);

    todoLI.id = todoArray[i].id;
    titleLI.textContent = todoArray[i].title;
    dueDateLI.textContent = todoArray[i].dueDate;
    btnEditTodo.textContent = "EDIT";
    btnDeleteTodo.textContent = "DELETE";
  }
}

function renderProjects(projectArray) {
  // !!
  projectUL.innerHTML = "";
  // !!

  //CREATE TODO ELEMENTS
  for (let i = 0; i < projectArray.length; i++) {
    let projectLI = document.createElement("li");
    let projectDeleteBtn = document.createElement("button");

    projectLI.textContent = projectArray[i].name;
    projectDeleteBtn.textContent = "X";

    projectLI.id = projectArray[i].id;
    projectLI.classList.add("li");

    projectUL.appendChild(projectLI);
    projectLI.appendChild(projectDeleteBtn);
  }

  //GIVE THE LAST ITEM OF THE NODELIST THE ACTIVE STYLE
  updateActiveProject(projectLIs.length - 1);
}

function renderTodoInfo(array, index) {
  let titleInput = document.getElementById("input-title-edit");
  let descriptionInput = document.getElementById("input-description-edit");
  let dueDateInput = document.getElementById("input-due-date-edit");
  let priorityInput = document.getElementById("input-priority-edit");
  let notesInput = document.getElementById("input-notes-edit");

  titleInput.value = array[index].title;
  descriptionInput.value = array[index].description;
  dueDateInput.value = array[index].dueDate;
  priorityInput.value = array[index].priority;
  notesInput.value = array[index].notes;
}

function submitEditTodo(array, index) {
  let titleInput = document.getElementById("input-title-edit");
  let descriptionInput = document.getElementById("input-description-edit");
  let dueDateInput = document.getElementById("input-due-date-edit");
  let priorityInput = document.getElementById("input-priority-edit");
  let notesInput = document.getElementById("input-notes-edit");

  array[index].title = titleInput.value;
  array[index].description = descriptionInput.value;
  array[index].dueDate = dueDateInput.value;
  array[index].priority = priorityInput.value;
  array[index].notes = notesInput.value;
}

function updateActiveProject(index) {
  let projectLIs = projectUL.getElementsByClassName("li");
  let lastProject = projectLIs[index];
  if (projectLIs.length > 0) {
    lastProject.classList.add("active");
  }
}




/***/ }),

/***/ "./src/project-Creator.js":
/*!********************************!*\
  !*** ./src/project-Creator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultProject": () => (/* binding */ defaultProject),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
let defaultProject = {
  id: "defaultID",
  name: "Inbox",
  todos: [],
};

let projects = [defaultProject];

class Project {
  constructor(name) {
    this.id = Date.now();
    this.name = name;
    this.todos = [];
  }
}

function createProject(mainArray) {
  //CREATE THE PROJECT
  let projectInput = document.getElementById("project-input");
  let project = new Project(projectInput.value);
  mainArray.push(project);
  projectInput.value = "";
}




/***/ }),

/***/ "./src/todo-Creator.js":
/*!*****************************!*\
  !*** ./src/todo-Creator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "findIndex": () => (/* binding */ findIndex)
/* harmony export */ });
/* harmony import */ var _project_Creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-Creator */ "./src/project-Creator.js");


class Todo {
  constructor(title, description, dueDate, priority, notes) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

function createTodo(currentArr) {
  let titleInput = document.getElementById("input-title-add").value;
  let descriptionInput = document.getElementById("input-description-add").value;
  let dueDateInput = document.getElementById("input-due-date-add").value;
  let priorityInput = document.getElementById("input-priority-add").value;
  let notesInput = document.getElementById("input-notes-add").value;
  //
  let todo = new Todo(
    titleInput,
    descriptionInput,
    dueDateInput,
    priorityInput,
    notesInput
  );

  currentArr.push(todo);
  if (currentArr !== _project_Creator__WEBPACK_IMPORTED_MODULE_0__.defaultProject.todos) {
    _project_Creator__WEBPACK_IMPORTED_MODULE_0__.defaultProject.todos.push(todo);
  }
}

function findIndex(arr, target) {
  let pos = arr
    .map(function (e) {
      return e.id;
    })
    .indexOf(parseInt(target));
  return pos;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_Creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-Creator */ "./src/project-Creator.js");
/* harmony import */ var _dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-Creator.js */ "./src/dom-Creator.js");
/* harmony import */ var _todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-Creator.js */ "./src/todo-Creator.js");
//FRESH START //FRESH START //FRESH START //FRESH START //FRESH START //FRESH START//FRESH START//FRESH START//FRESH START

// import { defaultProject, testProject } from "./todo-Creator.js";



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

let defProject = _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects[0].todos;
let currentProject = defProject;
let indexOfClickedTodo = undefined;

// EVENT LISTENERS

document.addEventListener("DOMContentLoaded", () => {
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
  enableProjectNavigation();
  console.log(currentProject);
  console.log(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
});

btnAddToDo.addEventListener("click", () => {
  if (todoFormEdit.classList.contains("hidden") && _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects.length !== 0) {
    todoFormAdd.classList.remove("hidden");
  }

  if (_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects.length === 0) {
    alert("please create a project to store your todos in first");
    return;
  }
});

btnAddProject.addEventListener("click", () => {
  if (inputAddProject.value !== "") {
    (0,_project_Creator__WEBPACK_IMPORTED_MODULE_0__.createProject)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    enableProjectNavigation();
    giveAddedProjectActiveStatus();
    addToLocalStorage(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
  }
});

btnSubmitAdd.addEventListener("click", (ev) => {
  ev.preventDefault();
  (0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.createTodo)(currentProject);
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
  todoFormAdd.reset();
  todoFormAdd.classList.add("hidden");
  addToLocalStorage(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
  //   console.log(JSON.parse(localStorage.getItem("projectsArray") || "[]"));
});

btnCancelAdd.addEventListener("click", (ev) => {
  ev.preventDefault();
  todoFormAdd.classList.add("hidden");
});

btnSubmitEdit.addEventListener("click", (ev) => {
  ev.preventDefault();
  todoFormEdit.classList.add("hidden");
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.submitEditTodo)(currentProject, indexOfClickedTodo);
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
  addToLocalStorage(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
});

btnCancelEdit.addEventListener("click", (ev) => {
  ev.preventDefault();
  todoFormEdit.classList.add("hidden");
});

todoUL.addEventListener("click", function (e) {
  // DELETE
  function deleteTodo(array) {
    array.splice((0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(currentProject, e.target.parentNode.id), 1);
    if (currentProject !== defProject) {
      defProject.splice((0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(defProject, e.target.parentNode.id), 1);
    }
    if (currentProject === defProject) {
      let projectOfRepeatedTodo = _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects.filter((project) =>
        project.todos.some(
          (todo) => todo.id === parseInt(e.target.parentNode.id)
        )
      )[0];
      if (projectOfRepeatedTodo !== undefined) {
        projectOfRepeatedTodo.todos.splice(
          (0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(projectOfRepeatedTodo.todos, e.target.parentNode.id),
          1
        );
      }
    }
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
    addToLocalStorage(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
  }

  //EDIT
  function openEditForm() {
    indexOfClickedTodo = (0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(currentProject, e.target.parentNode.id);
    todoFormEdit.classList.remove("hidden");
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodoInfo)(currentProject, indexOfClickedTodo);
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
    _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects[(0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects, e.target.parentNode.id)].todos = [];
    array.splice((0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects, e.target.parentNode.id), 1);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    enableProjectNavigation();
  }

  if (e.target.parentNode.id === "defaultID") {
    alert("Default Project can not be deleted");
    return;
  }

  if (e.target.textContent === "X" && e.target.parentNode.id !== "defaultID") {
    deleteProject(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
    // currentProject = projects[0].todos;
    giveLastProjectActiveStatus();
    addToLocalStorage(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
  }
});

function enableProjectNavigation() {
  // Get all buttons with class="li" inside the container
  let projectLIs = projectUL.getElementsByClassName("li");

  // Loop through the buttons and add the active class to the current/clicked button
  for (let i = 0; i < projectLIs.length; i++) {
    projectLIs[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      currentProject = _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects[i].todos;
      (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
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
  currentProject = _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects[_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects.length - 1].todos;
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
}

function giveLastProjectActiveStatus() {
  currentProject = _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects[_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects.length - 1].todos;
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
}

function addToLocalStorage(arr) {
  localStorage.setItem("projectsArray", JSON.stringify(arr));
}

function getStorageData() {
  return JSON.parse(localStorage.getItem("projectsArray") || "[]");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSx3QkFBd0IsMkRBQVM7QUFDakM7QUFDQTtBQUNBLGtDQUFrQyw2REFBZTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJEQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBVztBQUNmLHNCQUFzQixzREFBUTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFTO0FBQ2xDO0FBQ0EsSUFBSSwrREFBYztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFRLENBQUMsMkRBQVMsQ0FBQyxzREFBUTtBQUMvQixpQkFBaUIsMkRBQVMsQ0FBQyxzREFBUTtBQUNuQyxJQUFJLCtEQUFjLENBQUMsc0RBQVE7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzREFBUTtBQUMxQixJQUFJLDREQUFXO0FBQ2Y7QUFDQTtBQUNBLHNCQUFzQixzREFBUTtBQUM5QjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0EsdUJBQXVCLHNEQUFRO0FBQy9CLE1BQU0sNERBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHNEQUFRLENBQUMsNkRBQWU7QUFDM0MsRUFBRSw0REFBVztBQUNiOztBQUVBO0FBQ0EsbUJBQW1CLHNEQUFRLENBQUMsNkRBQWU7QUFDM0MsRUFBRSw0REFBVztBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvZG9tLUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL3Byb2plY3QtQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvdG9kby1DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdG9kb1VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXVsXCIpO1xubGV0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC11bFwiKTtcbmxldCBwcm9qZWN0TElzID0gcHJvamVjdFVMLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaVwiKTtcblxuZnVuY3Rpb24gcmVuZGVyVG9kb3ModG9kb0FycmF5KSB7XG4gIC8vICEhXG4gIHRvZG9VTC5pbm5lckhUTUwgPSBcIlwiO1xuICAvLyAhIVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9BcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0b2RvTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IHRpdGxlTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgZHVlRGF0ZUxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGJ0bkVkaXRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgYnRuRGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICB0b2RvVUwuYXBwZW5kQ2hpbGQodG9kb0xJKTtcbiAgICB0b2RvTEkuYXBwZW5kQ2hpbGQodGl0bGVMSSk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKGR1ZURhdGVMSSk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKGJ0bkVkaXRUb2RvKTtcbiAgICB0b2RvTEkuYXBwZW5kQ2hpbGQoYnRuRGVsZXRlVG9kbyk7XG5cbiAgICB0b2RvTEkuaWQgPSB0b2RvQXJyYXlbaV0uaWQ7XG4gICAgdGl0bGVMSS50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS50aXRsZTtcbiAgICBkdWVEYXRlTEkudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0uZHVlRGF0ZTtcbiAgICBidG5FZGl0VG9kby50ZXh0Q29udGVudCA9IFwiRURJVFwiO1xuICAgIGJ0bkRlbGV0ZVRvZG8udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHByb2plY3RBcnJheSkge1xuICAvLyAhIVxuICBwcm9qZWN0VUwuaW5uZXJIVE1MID0gXCJcIjtcbiAgLy8gISFcblxuICAvL0NSRUFURSBUT0RPIEVMRU1FTlRTXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHByb2plY3RMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgcHJvamVjdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBwcm9qZWN0TEkudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyYXlbaV0ubmFtZTtcbiAgICBwcm9qZWN0RGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgICBwcm9qZWN0TEkuaWQgPSBwcm9qZWN0QXJyYXlbaV0uaWQ7XG4gICAgcHJvamVjdExJLmNsYXNzTGlzdC5hZGQoXCJsaVwiKTtcblxuICAgIHByb2plY3RVTC5hcHBlbmRDaGlsZChwcm9qZWN0TEkpO1xuICAgIHByb2plY3RMSS5hcHBlbmRDaGlsZChwcm9qZWN0RGVsZXRlQnRuKTtcbiAgfVxuXG4gIC8vR0lWRSBUSEUgTEFTVCBJVEVNIE9GIFRIRSBOT0RFTElTVCBUSEUgQUNUSVZFIFNUWUxFXG4gIHVwZGF0ZUFjdGl2ZVByb2plY3QocHJvamVjdExJcy5sZW5ndGggLSAxKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kb0luZm8oYXJyYXksIGluZGV4KSB7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tZWRpdFwiKTtcbiAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZHVlLWRhdGUtZWRpdFwiKTtcbiAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWVkaXRcIik7XG4gIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1lZGl0XCIpO1xuXG4gIHRpdGxlSW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0udGl0bGU7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0uZGVzY3JpcHRpb247XG4gIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5kdWVEYXRlO1xuICBwcmlvcml0eUlucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLnByaW9yaXR5O1xuICBub3Rlc0lucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLm5vdGVzO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRFZGl0VG9kbyhhcnJheSwgaW5kZXgpIHtcbiAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlLWVkaXRcIik7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvbi1lZGl0XCIpO1xuICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZS1lZGl0XCIpO1xuICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHktZWRpdFwiKTtcbiAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWVkaXRcIik7XG5cbiAgYXJyYXlbaW5kZXhdLnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgYXJyYXlbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgYXJyYXlbaW5kZXhdLmR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5wcmlvcml0eSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5ub3RlcyA9IG5vdGVzSW5wdXQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZVByb2plY3QoaW5kZXgpIHtcbiAgbGV0IHByb2plY3RMSXMgPSBwcm9qZWN0VUwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpXCIpO1xuICBsZXQgbGFzdFByb2plY3QgPSBwcm9qZWN0TElzW2luZGV4XTtcbiAgaWYgKHByb2plY3RMSXMubGVuZ3RoID4gMCkge1xuICAgIGxhc3RQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyVG9kb3MsIHJlbmRlclByb2plY3RzLCByZW5kZXJUb2RvSW5mbywgc3VibWl0RWRpdFRvZG8gfTtcbiIsImV4cG9ydCBsZXQgZGVmYXVsdFByb2plY3QgPSB7XG4gIGlkOiBcImRlZmF1bHRJRFwiLFxuICBuYW1lOiBcIkluYm94XCIsXG4gIHRvZG9zOiBbXSxcbn07XG5cbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBbZGVmYXVsdFByb2plY3RdO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobWFpbkFycmF5KSB7XG4gIC8vQ1JFQVRFIFRIRSBQUk9KRUNUXG4gIGxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW5wdXRcIik7XG4gIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcbiAgbWFpbkFycmF5LnB1c2gocHJvamVjdCk7XG4gIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfTtcbiIsImltcG9ydCB7IGRlZmF1bHRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC1DcmVhdG9yXCI7XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8oY3VycmVudEFycikge1xuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGUtYWRkXCIpLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tYWRkXCIpLnZhbHVlO1xuICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZS1hZGRcIikudmFsdWU7XG4gIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcmlvcml0eS1hZGRcIikudmFsdWU7XG4gIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1hZGRcIikudmFsdWU7XG4gIC8vXG4gIGxldCB0b2RvID0gbmV3IFRvZG8oXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIGR1ZURhdGVJbnB1dCxcbiAgICBwcmlvcml0eUlucHV0LFxuICAgIG5vdGVzSW5wdXRcbiAgKTtcblxuICBjdXJyZW50QXJyLnB1c2godG9kbyk7XG4gIGlmIChjdXJyZW50QXJyICE9PSBkZWZhdWx0UHJvamVjdC50b2Rvcykge1xuICAgIGRlZmF1bHRQcm9qZWN0LnRvZG9zLnB1c2godG9kbyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFyciwgdGFyZ2V0KSB7XG4gIGxldCBwb3MgPSBhcnJcbiAgICAubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5pZDtcbiAgICB9KVxuICAgIC5pbmRleE9mKHBhcnNlSW50KHRhcmdldCkpO1xuICByZXR1cm4gcG9zO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvLCBmaW5kSW5kZXggfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQvL0ZSRVNIIFNUQVJULy9GUkVTSCBTVEFSVC8vRlJFU0ggU1RBUlRcbmltcG9ydCB7IHByb2plY3RzLCBjcmVhdGVQcm9qZWN0LCBkZWZhdWx0UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QtQ3JlYXRvclwiO1xuLy8gaW1wb3J0IHsgZGVmYXVsdFByb2plY3QsIHRlc3RQcm9qZWN0IH0gZnJvbSBcIi4vdG9kby1DcmVhdG9yLmpzXCI7XG5pbXBvcnQge1xuICByZW5kZXJUb2RvcyxcbiAgcmVuZGVyUHJvamVjdHMsXG4gIHJlbmRlclRvZG9JbmZvLFxuICBzdWJtaXRFZGl0VG9kbyxcbn0gZnJvbSBcIi4vZG9tLUNyZWF0b3IuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8sIGZpbmRJbmRleCB9IGZyb20gXCIuL3RvZG8tQ3JlYXRvci5qc1wiO1xuXG5sZXQgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXVsXCIpO1xubGV0IHRvZG9VTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby11bFwiKTtcbmxldCBidG5BZGRUb0RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tYWRkLXRvZG9cIik7XG5cbmxldCB0b2RvRm9ybUFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWFkZFwiKTtcbmxldCBidG5TdWJtaXRBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1zdWJtaXQtYWRkXCIpO1xubGV0IGJ0bkNhbmNlbEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWNhbmNlbC1hZGRcIik7XG5cbmxldCB0b2RvRm9ybUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1lZGl0XCIpO1xubGV0IGJ0blN1Ym1pdEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1zdWJtaXQtZWRpdFwiKTtcbmxldCBidG5DYW5jZWxFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY2FuY2VsLWVkaXRcIik7XG5cbmxldCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tYWRkLXByb2plY3RcIik7XG5sZXQgaW5wdXRBZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0XCIpO1xuLy8gbGV0IGluYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWZhdWx0SURcIik7XG5cbmxldCBkZWZQcm9qZWN0ID0gcHJvamVjdHNbMF0udG9kb3M7XG5sZXQgY3VycmVudFByb2plY3QgPSBkZWZQcm9qZWN0O1xubGV0IGluZGV4T2ZDbGlja2VkVG9kbyA9IHVuZGVmaW5lZDtcblxuLy8gRVZFTlQgTElTVEVORVJTXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG4gIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xufSk7XG5cbmJ0bkFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikgJiYgcHJvamVjdHMubGVuZ3RoICE9PSAwKSB7XG4gICAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuXG4gIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGVydChcInBsZWFzZSBjcmVhdGUgYSBwcm9qZWN0IHRvIHN0b3JlIHlvdXIgdG9kb3MgaW4gZmlyc3RcIik7XG4gICAgcmV0dXJuO1xuICB9XG59KTtcblxuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoaW5wdXRBZGRQcm9qZWN0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0cyk7XG4gICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuICAgIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG4gICAgZ2l2ZUFkZGVkUHJvamVjdEFjdGl2ZVN0YXR1cygpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgfVxufSk7XG5cbmJ0blN1Ym1pdEFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGNyZWF0ZVRvZG8oY3VycmVudFByb2plY3QpO1xuICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIHRvZG9Gb3JtQWRkLnJlc2V0KCk7XG4gIHRvZG9Gb3JtQWRkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIGFkZFRvTG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgLy8gICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNBcnJheVwiKSB8fCBcIltdXCIpKTtcbn0pO1xuXG5idG5DYW5jZWxBZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufSk7XG5cbmJ0blN1Ym1pdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICB0b2RvRm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgc3VibWl0RWRpdFRvZG8oY3VycmVudFByb2plY3QsIGluZGV4T2ZDbGlja2VkVG9kbyk7XG4gIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgYWRkVG9Mb2NhbFN0b3JhZ2UocHJvamVjdHMpO1xufSk7XG5cbmJ0bkNhbmNlbEVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICB0b2RvRm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn0pO1xuXG50b2RvVUwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIC8vIERFTEVURVxuICBmdW5jdGlvbiBkZWxldGVUb2RvKGFycmF5KSB7XG4gICAgYXJyYXkuc3BsaWNlKGZpbmRJbmRleChjdXJyZW50UHJvamVjdCwgZS50YXJnZXQucGFyZW50Tm9kZS5pZCksIDEpO1xuICAgIGlmIChjdXJyZW50UHJvamVjdCAhPT0gZGVmUHJvamVjdCkge1xuICAgICAgZGVmUHJvamVjdC5zcGxpY2UoZmluZEluZGV4KGRlZlByb2plY3QsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpLCAxKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSBkZWZQcm9qZWN0KSB7XG4gICAgICBsZXQgcHJvamVjdE9mUmVwZWF0ZWRUb2RvID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PlxuICAgICAgICBwcm9qZWN0LnRvZG9zLnNvbWUoXG4gICAgICAgICAgKHRvZG8pID0+IHRvZG8uaWQgPT09IHBhcnNlSW50KGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpXG4gICAgICAgIClcbiAgICAgIClbMF07XG4gICAgICBpZiAocHJvamVjdE9mUmVwZWF0ZWRUb2RvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvamVjdE9mUmVwZWF0ZWRUb2RvLnRvZG9zLnNwbGljZShcbiAgICAgICAgICBmaW5kSW5kZXgocHJvamVjdE9mUmVwZWF0ZWRUb2RvLnRvZG9zLCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKSxcbiAgICAgICAgICAxXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShwcm9qZWN0cyk7XG4gIH1cblxuICAvL0VESVRcbiAgZnVuY3Rpb24gb3BlbkVkaXRGb3JtKCkge1xuICAgIGluZGV4T2ZDbGlja2VkVG9kbyA9IGZpbmRJbmRleChjdXJyZW50UHJvamVjdCwgZS50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgdG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgcmVuZGVyVG9kb0luZm8oY3VycmVudFByb2plY3QsIGluZGV4T2ZDbGlja2VkVG9kbyk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiREVMRVRFXCIpIHtcbiAgICBkZWxldGVUb2RvKGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuXG4gIGlmIChcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJFRElUXCIgJiZcbiAgICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIilcbiAgKSB7XG4gICAgb3BlbkVkaXRGb3JtKCk7XG4gIH1cbn0pO1xuXG5wcm9qZWN0VUwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIC8vIERFTEVURVxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGFycmF5KSB7XG4gICAgcHJvamVjdHNbZmluZEluZGV4KHByb2plY3RzLCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKV0udG9kb3MgPSBbXTtcbiAgICBhcnJheS5zcGxpY2UoZmluZEluZGV4KHByb2plY3RzLCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKSwgMSk7XG4gICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuICAgIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5pZCA9PT0gXCJkZWZhdWx0SURcIikge1xuICAgIGFsZXJ0KFwiRGVmYXVsdCBQcm9qZWN0IGNhbiBub3QgYmUgZGVsZXRlZFwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiWFwiICYmIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQgIT09IFwiZGVmYXVsdElEXCIpIHtcbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3RzKTtcbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgLy8gY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1swXS50b2RvcztcbiAgICBnaXZlTGFzdFByb2plY3RBY3RpdmVTdGF0dXMoKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShwcm9qZWN0cyk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBlbmFibGVQcm9qZWN0TmF2aWdhdGlvbigpIHtcbiAgLy8gR2V0IGFsbCBidXR0b25zIHdpdGggY2xhc3M9XCJsaVwiIGluc2lkZSB0aGUgY29udGFpbmVyXG4gIGxldCBwcm9qZWN0TElzID0gcHJvamVjdFVMLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaVwiKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGJ1dHRvbnMgYW5kIGFkZCB0aGUgYWN0aXZlIGNsYXNzIHRvIHRoZSBjdXJyZW50L2NsaWNrZWQgYnV0dG9uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExJcy5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RMSXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZVwiKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbaV0udG9kb3M7XG4gICAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAvLyBJZiB0aGVyZSdzIG5vIGFjdGl2ZSBjbGFzc1xuICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICBjdXJyZW50WzBdLmNsYXNzTmFtZSA9IGN1cnJlbnRbMF0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGhlIGFjdGl2ZSBjbGFzcyB0byB0aGUgY3VycmVudC9jbGlja2VkIGJ1dHRvblxuICAgICAgdGhpcy5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2l2ZUFkZGVkUHJvamVjdEFjdGl2ZVN0YXR1cygpIHtcbiAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS50b2RvcztcbiAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBnaXZlTGFzdFByb2plY3RBY3RpdmVTdGF0dXMoKSB7XG4gIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0udG9kb3M7XG4gIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gYWRkVG9Mb2NhbFN0b3JhZ2UoYXJyKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNBcnJheVwiLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RvcmFnZURhdGEoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNBcnJheVwiKSB8fCBcIltdXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9