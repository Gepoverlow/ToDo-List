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
/* harmony export */   "inboxProject": () => (/* binding */ inboxProject),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
let inboxProject = {
  id: "defaultID",
  name: "Inbox",
  todos: getStorageData("inboxArray"),
};

let projects = getStorageData("projectsArray");

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
function getStorageData(name) {
  return JSON.parse(localStorage.getItem(name) || "[]");
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

function createTodo(currentArr, defProject) {
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
  if (currentArr !== defProject) {
    _project_Creator__WEBPACK_IMPORTED_MODULE_0__.inboxProject.todos.push(todo);
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

// import { inboxProject, testProject } from "./todo-Creator.js";



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

let defProject = _project_Creator__WEBPACK_IMPORTED_MODULE_0__.inboxProject.todos;
let currentProject = defProject;
let indexOfClickedTodo = undefined;

// EVENT LISTENERS

document.addEventListener("DOMContentLoaded", () => {
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
  enableProjectNavigation();
});

iProject.addEventListener("click", function () {
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(defProject);
  currentProject = defProject;
});

btnAddToDo.addEventListener("click", () => {
  if (todoFormEdit.classList.contains("hidden")) {
    todoFormAdd.classList.remove("hidden");
  }
});

btnAddProject.addEventListener("click", () => {
  if (inputAddProject.value !== "") {
    (0,_project_Creator__WEBPACK_IMPORTED_MODULE_0__.createProject)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    enableProjectNavigation();
    giveAddedProjectActiveStatus();
    addToLocalStorage("projectsArray", _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    addToLocalStorage("inboxArray", defProject);
  }
});

btnSubmitAdd.addEventListener("click", (ev) => {
  ev.preventDefault();
  (0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.createTodo)(currentProject, defProject);
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
  todoFormAdd.reset();
  todoFormAdd.classList.add("hidden");
  addToLocalStorage("projectsArray", _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
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
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.submitEditTodo)(currentProject, indexOfClickedTodo);
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
  addToLocalStorage("projectsArray", _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
  addToLocalStorage("inboxArray", defProject);
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
    addToLocalStorage("projectsArray", _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    addToLocalStorage("inboxArray", defProject);
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

  if (e.target.textContent === "X") {
    deleteProject(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
    // currentProject = projects[0].todos;
    giveLastProjectActiveStatus();
    addToLocalStorage("projectsArray", _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    addToLocalStorage("inboxArray", defProject);
  }

  if (_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects.length < 1) {
    currentProject = defProject;
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
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
  if (_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects.length > 0) {
    currentProject = _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects[_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects.length - 1].todos;
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
  }
}

function addToLocalStorage(name, arr) {
  localStorage.setItem(name, JSON.stringify(arr));
}

// function getStorageData(name) {
//   return JSON.parse(localStorage.getItem(name) || "[]");
// }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akM7QUFDQTtBQUNBLGtDQUFrQyw2REFBZTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDJEQUFTO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBVztBQUNmLHVDQUF1QyxzREFBUTtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsMkRBQVM7QUFDbEM7QUFDQSxJQUFJLCtEQUFjO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVEsQ0FBQywyREFBUyxDQUFDLHNEQUFRO0FBQy9CLGlCQUFpQiwyREFBUyxDQUFDLHNEQUFRO0FBQ25DLElBQUksK0RBQWMsQ0FBQyxzREFBUTtBQUMzQjtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHNEQUFRO0FBQzFCLElBQUksNERBQVc7QUFDZjtBQUNBO0FBQ0EsdUNBQXVDLHNEQUFRO0FBQy9DO0FBQ0E7O0FBRUEsTUFBTSw2REFBZTtBQUNyQjtBQUNBLElBQUksNERBQVc7QUFDZjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0EsdUJBQXVCLHNEQUFRO0FBQy9CLE1BQU0sNERBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHNEQUFRLENBQUMsNkRBQWU7QUFDM0MsRUFBRSw0REFBVztBQUNiOztBQUVBO0FBQ0EsTUFBTSw2REFBZTtBQUNyQixxQkFBcUIsc0RBQVEsQ0FBQyw2REFBZTtBQUM3QyxJQUFJLDREQUFXO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL2RvbS1DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9wcm9qZWN0LUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL3RvZG8tQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHRvZG9VTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby11bFwiKTtcbmxldCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdWxcIik7XG5sZXQgcHJvamVjdExJcyA9IHByb2plY3RVTC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlcIik7XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9zKHRvZG9BcnJheSkge1xuICAvLyAhIVxuICB0b2RvVUwuaW5uZXJIVE1MID0gXCJcIjtcbiAgLy8gISFcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdG9kb0xJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCB0aXRsZUxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGR1ZURhdGVMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBidG5FZGl0VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IGJ0bkRlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgdG9kb1VMLmFwcGVuZENoaWxkKHRvZG9MSSk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKHRpdGxlTEkpO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZChkdWVEYXRlTEkpO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZChidG5FZGl0VG9kbyk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKGJ0bkRlbGV0ZVRvZG8pO1xuXG4gICAgdG9kb0xJLmlkID0gdG9kb0FycmF5W2ldLmlkO1xuICAgIHRpdGxlTEkudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0udGl0bGU7XG4gICAgZHVlRGF0ZUxJLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2ldLmR1ZURhdGU7XG4gICAgYnRuRWRpdFRvZG8udGV4dENvbnRlbnQgPSBcIkVESVRcIjtcbiAgICBidG5EZWxldGVUb2RvLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0QXJyYXkpIHtcbiAgLy8gISFcbiAgcHJvamVjdFVMLmlubmVySFRNTCA9IFwiXCI7XG4gIC8vICEhXG5cbiAgLy9DUkVBVEUgVE9ETyBFTEVNRU5UU1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0TEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IHByb2plY3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgcHJvamVjdExJLnRleHRDb250ZW50ID0gcHJvamVjdEFycmF5W2ldLm5hbWU7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgcHJvamVjdExJLmlkID0gcHJvamVjdEFycmF5W2ldLmlkO1xuICAgIHByb2plY3RMSS5jbGFzc0xpc3QuYWRkKFwibGlcIik7XG5cbiAgICBwcm9qZWN0VUwuYXBwZW5kQ2hpbGQocHJvamVjdExJKTtcbiAgICBwcm9qZWN0TEkuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG4gIH1cblxuICAvL0dJVkUgVEhFIExBU1QgSVRFTSBPRiBUSEUgTk9ERUxJU1QgVEhFIEFDVElWRSBTVFlMRVxuICB1cGRhdGVBY3RpdmVQcm9qZWN0KHByb2plY3RMSXMubGVuZ3RoIC0gMSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9JbmZvKGFycmF5LCBpbmRleCkge1xuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGUtZWRpdFwiKTtcbiAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uLWVkaXRcIik7XG4gIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWVkaXRcIik7XG4gIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcmlvcml0eS1lZGl0XCIpO1xuICBsZXQgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtZWRpdFwiKTtcblxuICB0aXRsZUlucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLnRpdGxlO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLmRlc2NyaXB0aW9uO1xuICBkdWVEYXRlSW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0uZHVlRGF0ZTtcbiAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5wcmlvcml0eTtcbiAgbm90ZXNJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5ub3Rlcztcbn1cblxuZnVuY3Rpb24gc3VibWl0RWRpdFRvZG8oYXJyYXksIGluZGV4KSB7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tZWRpdFwiKTtcbiAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZHVlLWRhdGUtZWRpdFwiKTtcbiAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWVkaXRcIik7XG4gIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1lZGl0XCIpO1xuXG4gIGFycmF5W2luZGV4XS50aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5kdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICBhcnJheVtpbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICBhcnJheVtpbmRleF0ubm90ZXMgPSBub3Rlc0lucHV0LnZhbHVlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBY3RpdmVQcm9qZWN0KGluZGV4KSB7XG4gIGxldCBwcm9qZWN0TElzID0gcHJvamVjdFVMLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaVwiKTtcbiAgbGV0IGxhc3RQcm9qZWN0ID0gcHJvamVjdExJc1tpbmRleF07XG4gIGlmIChwcm9qZWN0TElzLmxlbmd0aCA+IDApIHtcbiAgICBsYXN0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG59XG5cbmV4cG9ydCB7IHJlbmRlclRvZG9zLCByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9kb0luZm8sIHN1Ym1pdEVkaXRUb2RvIH07XG4iLCJleHBvcnQgbGV0IGluYm94UHJvamVjdCA9IHtcbiAgaWQ6IFwiZGVmYXVsdElEXCIsXG4gIG5hbWU6IFwiSW5ib3hcIixcbiAgdG9kb3M6IGdldFN0b3JhZ2VEYXRhKFwiaW5ib3hBcnJheVwiKSxcbn07XG5cbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBnZXRTdG9yYWdlRGF0YShcInByb2plY3RzQXJyYXlcIik7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvZG9zID0gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChtYWluQXJyYXkpIHtcbiAgLy9DUkVBVEUgVEhFIFBST0pFQ1RcbiAgbGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1pbnB1dFwiKTtcbiAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuICBtYWluQXJyYXkucHVzaChwcm9qZWN0KTtcbiAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbn1cbmZ1bmN0aW9uIGdldFN0b3JhZ2VEYXRhKG5hbWUpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkgfHwgXCJbXVwiKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgaW5ib3hQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC1DcmVhdG9yXCI7XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8oY3VycmVudEFyciwgZGVmUHJvamVjdCkge1xuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGUtYWRkXCIpLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tYWRkXCIpLnZhbHVlO1xuICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZS1hZGRcIikudmFsdWU7XG4gIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcmlvcml0eS1hZGRcIikudmFsdWU7XG4gIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1hZGRcIikudmFsdWU7XG4gIC8vXG4gIGxldCB0b2RvID0gbmV3IFRvZG8oXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIGR1ZURhdGVJbnB1dCxcbiAgICBwcmlvcml0eUlucHV0LFxuICAgIG5vdGVzSW5wdXRcbiAgKTtcblxuICBjdXJyZW50QXJyLnB1c2godG9kbyk7XG4gIGlmIChjdXJyZW50QXJyICE9PSBkZWZQcm9qZWN0KSB7XG4gICAgaW5ib3hQcm9qZWN0LnRvZG9zLnB1c2godG9kbyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFyciwgdGFyZ2V0KSB7XG4gIGxldCBwb3MgPSBhcnJcbiAgICAubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5pZDtcbiAgICB9KVxuICAgIC5pbmRleE9mKHBhcnNlSW50KHRhcmdldCkpO1xuICByZXR1cm4gcG9zO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvLCBmaW5kSW5kZXggfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQvL0ZSRVNIIFNUQVJULy9GUkVTSCBTVEFSVC8vRlJFU0ggU1RBUlRcbmltcG9ydCB7IHByb2plY3RzLCBjcmVhdGVQcm9qZWN0LCBpbmJveFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LUNyZWF0b3JcIjtcbi8vIGltcG9ydCB7IGluYm94UHJvamVjdCwgdGVzdFByb2plY3QgfSBmcm9tIFwiLi90b2RvLUNyZWF0b3IuanNcIjtcbmltcG9ydCB7XG4gIHJlbmRlclRvZG9zLFxuICByZW5kZXJQcm9qZWN0cyxcbiAgcmVuZGVyVG9kb0luZm8sXG4gIHN1Ym1pdEVkaXRUb2RvLFxufSBmcm9tIFwiLi9kb20tQ3JlYXRvci5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9kbywgZmluZEluZGV4IH0gZnJvbSBcIi4vdG9kby1DcmVhdG9yLmpzXCI7XG5cbmxldCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdWxcIik7XG5sZXQgdG9kb1VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXVsXCIpO1xubGV0IGJ0bkFkZFRvRG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1hZGQtdG9kb1wiKTtcblxubGV0IHRvZG9Gb3JtQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tYWRkXCIpO1xubGV0IGJ0blN1Ym1pdEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXN1Ym1pdC1hZGRcIik7XG5sZXQgYnRuQ2FuY2VsQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY2FuY2VsLWFkZFwiKTtcblxubGV0IHRvZG9Gb3JtRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWVkaXRcIik7XG5sZXQgYnRuU3VibWl0RWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXN1Ym1pdC1lZGl0XCIpO1xubGV0IGJ0bkNhbmNlbEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1jYW5jZWwtZWRpdFwiKTtcblxubGV0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1hZGQtcHJvamVjdFwiKTtcbmxldCBpbnB1dEFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW5wdXRcIik7XG5sZXQgaVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluYm94XCIpO1xuXG5sZXQgZGVmUHJvamVjdCA9IGluYm94UHJvamVjdC50b2RvcztcbmxldCBjdXJyZW50UHJvamVjdCA9IGRlZlByb2plY3Q7XG5sZXQgaW5kZXhPZkNsaWNrZWRUb2RvID0gdW5kZWZpbmVkO1xuXG4vLyBFVkVOVCBMSVNURU5FUlNcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIHJlbmRlclByb2plY3RzKHByb2plY3RzKTtcbiAgZW5hYmxlUHJvamVjdE5hdmlnYXRpb24oKTtcbn0pO1xuXG5pUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICByZW5kZXJUb2RvcyhkZWZQcm9qZWN0KTtcbiAgY3VycmVudFByb2plY3QgPSBkZWZQcm9qZWN0O1xufSk7XG5cbmJ0bkFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG59KTtcblxuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoaW5wdXRBZGRQcm9qZWN0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0cyk7XG4gICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuICAgIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG4gICAgZ2l2ZUFkZGVkUHJvamVjdEFjdGl2ZVN0YXR1cygpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICB9XG59KTtcblxuYnRuU3VibWl0QWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgY3JlYXRlVG9kbyhjdXJyZW50UHJvamVjdCwgZGVmUHJvamVjdCk7XG4gIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgdG9kb0Zvcm1BZGQucmVzZXQoKTtcbiAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c0FycmF5XCIsIHByb2plY3RzKTtcbiAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICAvLyAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0FycmF5XCIpIHx8IFwiW11cIikpO1xufSk7XG5cbmJ0bkNhbmNlbEFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZG9Gb3JtQWRkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59KTtcblxuYnRuU3VibWl0RWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBzdWJtaXRFZGl0VG9kbyhjdXJyZW50UHJvamVjdCwgaW5kZXhPZkNsaWNrZWRUb2RvKTtcbiAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICBhZGRUb0xvY2FsU3RvcmFnZShcInByb2plY3RzQXJyYXlcIiwgcHJvamVjdHMpO1xuICBhZGRUb0xvY2FsU3RvcmFnZShcImluYm94QXJyYXlcIiwgZGVmUHJvamVjdCk7XG59KTtcblxuYnRuQ2FuY2VsRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufSk7XG5cbnRvZG9VTC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgLy8gREVMRVRFXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG8oYXJyYXkpIHtcbiAgICBhcnJheS5zcGxpY2UoZmluZEluZGV4KGN1cnJlbnRQcm9qZWN0LCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKSwgMSk7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ICE9PSBkZWZQcm9qZWN0KSB7XG4gICAgICBkZWZQcm9qZWN0LnNwbGljZShmaW5kSW5kZXgoZGVmUHJvamVjdCwgZS50YXJnZXQucGFyZW50Tm9kZS5pZCksIDEpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFByb2plY3QgPT09IGRlZlByb2plY3QpIHtcbiAgICAgIGxldCBwcm9qZWN0T2ZSZXBlYXRlZFRvZG8gPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+XG4gICAgICAgIHByb2plY3QudG9kb3Muc29tZShcbiAgICAgICAgICAodG9kbykgPT4gdG9kby5pZCA9PT0gcGFyc2VJbnQoZS50YXJnZXQucGFyZW50Tm9kZS5pZClcbiAgICAgICAgKVxuICAgICAgKVswXTtcbiAgICAgIGlmIChwcm9qZWN0T2ZSZXBlYXRlZFRvZG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9qZWN0T2ZSZXBlYXRlZFRvZG8udG9kb3Muc3BsaWNlKFxuICAgICAgICAgIGZpbmRJbmRleChwcm9qZWN0T2ZSZXBlYXRlZFRvZG8udG9kb3MsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpLFxuICAgICAgICAgIDFcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICB9XG5cbiAgLy9FRElUXG4gIGZ1bmN0aW9uIG9wZW5FZGl0Rm9ybSgpIHtcbiAgICBpbmRleE9mQ2xpY2tlZFRvZG8gPSBmaW5kSW5kZXgoY3VycmVudFByb2plY3QsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgIHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIHJlbmRlclRvZG9JbmZvKGN1cnJlbnRQcm9qZWN0LCBpbmRleE9mQ2xpY2tlZFRvZG8pO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkRFTEVURVwiKSB7XG4gICAgZGVsZXRlVG9kbyhjdXJyZW50UHJvamVjdCk7XG4gIH1cblxuICBpZiAoXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiRURJVFwiICYmXG4gICAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpXG4gICkge1xuICAgIG9wZW5FZGl0Rm9ybSgpO1xuICB9XG59KTtcblxucHJvamVjdFVMLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAvLyBERUxFVEVcbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChhcnJheSkge1xuICAgIHByb2plY3RzW2ZpbmRJbmRleChwcm9qZWN0cywgZS50YXJnZXQucGFyZW50Tm9kZS5pZCldLnRvZG9zID0gW107XG4gICAgYXJyYXkuc3BsaWNlKGZpbmRJbmRleChwcm9qZWN0cywgZS50YXJnZXQucGFyZW50Tm9kZS5pZCksIDEpO1xuICAgIHJlbmRlclByb2plY3RzKHByb2plY3RzKTtcbiAgICBlbmFibGVQcm9qZWN0TmF2aWdhdGlvbigpO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcIlhcIikge1xuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdHMpO1xuICAgIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAvLyBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzWzBdLnRvZG9zO1xuICAgIGdpdmVMYXN0UHJvamVjdEFjdGl2ZVN0YXR1cygpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICB9XG5cbiAgaWYgKHByb2plY3RzLmxlbmd0aCA8IDEpIHtcbiAgICBjdXJyZW50UHJvamVjdCA9IGRlZlByb2plY3Q7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZW5hYmxlUHJvamVjdE5hdmlnYXRpb24oKSB7XG4gIC8vIEdldCBhbGwgYnV0dG9ucyB3aXRoIGNsYXNzPVwibGlcIiBpbnNpZGUgdGhlIGNvbnRhaW5lclxuICBsZXQgcHJvamVjdExJcyA9IHByb2plY3RVTC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlcIik7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBidXR0b25zIGFuZCBhZGQgdGhlIGFjdGl2ZSBjbGFzcyB0byB0aGUgY3VycmVudC9jbGlja2VkIGJ1dHRvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMSXMubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0TElzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmVcIik7XG4gICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2ldLnRvZG9zO1xuICAgICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgICAgLy8gSWYgdGhlcmUncyBubyBhY3RpdmUgY2xhc3NcbiAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIGN1cnJlbnQvY2xpY2tlZCBidXR0b25cbiAgICAgIHRoaXMuY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdpdmVBZGRlZFByb2plY3RBY3RpdmVTdGF0dXMoKSB7XG4gIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0udG9kb3M7XG4gIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZ2l2ZUxhc3RQcm9qZWN0QWN0aXZlU3RhdHVzKCkge1xuICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0udG9kb3M7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRvTG9jYWxTdG9yYWdlKG5hbWUsIGFycikge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbn1cblxuLy8gZnVuY3Rpb24gZ2V0U3RvcmFnZURhdGEobmFtZSkge1xuLy8gICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSB8fCBcIltdXCIpO1xuLy8gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9