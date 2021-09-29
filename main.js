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
  todos: [],
};

let projects = [];

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
  // console.log(defProject);
  // console.log(currentProject);
  // console.log(projects);
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
  console.log(defProject);
  console.log(currentProject);
  console.log(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
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

function getStorageData() {
  return JSON.parse(localStorage.getItem("projectsArray") || "[]");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9wcm9qZWN0LUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL3RvZG8tQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHRvZG9VTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby11bFwiKTtcbmxldCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdWxcIik7XG5sZXQgcHJvamVjdExJcyA9IHByb2plY3RVTC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlcIik7XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9zKHRvZG9BcnJheSkge1xuICAvLyAhIVxuICB0b2RvVUwuaW5uZXJIVE1MID0gXCJcIjtcbiAgLy8gISFcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdG9kb0xJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCB0aXRsZUxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGR1ZURhdGVMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBidG5FZGl0VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IGJ0bkRlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgdG9kb1VMLmFwcGVuZENoaWxkKHRvZG9MSSk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKHRpdGxlTEkpO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZChkdWVEYXRlTEkpO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZChidG5FZGl0VG9kbyk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKGJ0bkRlbGV0ZVRvZG8pO1xuXG4gICAgdG9kb0xJLmlkID0gdG9kb0FycmF5W2ldLmlkO1xuICAgIHRpdGxlTEkudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0udGl0bGU7XG4gICAgZHVlRGF0ZUxJLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2ldLmR1ZURhdGU7XG4gICAgYnRuRWRpdFRvZG8udGV4dENvbnRlbnQgPSBcIkVESVRcIjtcbiAgICBidG5EZWxldGVUb2RvLnRleHRDb250ZW50ID0gXCJERUxFVEVcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0QXJyYXkpIHtcbiAgLy8gISFcbiAgcHJvamVjdFVMLmlubmVySFRNTCA9IFwiXCI7XG4gIC8vICEhXG5cbiAgLy9DUkVBVEUgVE9ETyBFTEVNRU5UU1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0TEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IHByb2plY3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgcHJvamVjdExJLnRleHRDb250ZW50ID0gcHJvamVjdEFycmF5W2ldLm5hbWU7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgcHJvamVjdExJLmlkID0gcHJvamVjdEFycmF5W2ldLmlkO1xuICAgIHByb2plY3RMSS5jbGFzc0xpc3QuYWRkKFwibGlcIik7XG5cbiAgICBwcm9qZWN0VUwuYXBwZW5kQ2hpbGQocHJvamVjdExJKTtcbiAgICBwcm9qZWN0TEkuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG4gIH1cblxuICAvL0dJVkUgVEhFIExBU1QgSVRFTSBPRiBUSEUgTk9ERUxJU1QgVEhFIEFDVElWRSBTVFlMRVxuICB1cGRhdGVBY3RpdmVQcm9qZWN0KHByb2plY3RMSXMubGVuZ3RoIC0gMSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9JbmZvKGFycmF5LCBpbmRleCkge1xuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGUtZWRpdFwiKTtcbiAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uLWVkaXRcIik7XG4gIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWVkaXRcIik7XG4gIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcmlvcml0eS1lZGl0XCIpO1xuICBsZXQgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtZWRpdFwiKTtcblxuICB0aXRsZUlucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLnRpdGxlO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLmRlc2NyaXB0aW9uO1xuICBkdWVEYXRlSW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0uZHVlRGF0ZTtcbiAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5wcmlvcml0eTtcbiAgbm90ZXNJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5ub3Rlcztcbn1cblxuZnVuY3Rpb24gc3VibWl0RWRpdFRvZG8oYXJyYXksIGluZGV4KSB7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tZWRpdFwiKTtcbiAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZHVlLWRhdGUtZWRpdFwiKTtcbiAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWVkaXRcIik7XG4gIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1lZGl0XCIpO1xuXG4gIGFycmF5W2luZGV4XS50aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5kdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICBhcnJheVtpbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICBhcnJheVtpbmRleF0ubm90ZXMgPSBub3Rlc0lucHV0LnZhbHVlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBY3RpdmVQcm9qZWN0KGluZGV4KSB7XG4gIGxldCBwcm9qZWN0TElzID0gcHJvamVjdFVMLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaVwiKTtcbiAgbGV0IGxhc3RQcm9qZWN0ID0gcHJvamVjdExJc1tpbmRleF07XG4gIGlmIChwcm9qZWN0TElzLmxlbmd0aCA+IDApIHtcbiAgICBsYXN0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG59XG5cbmV4cG9ydCB7IHJlbmRlclRvZG9zLCByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9kb0luZm8sIHN1Ym1pdEVkaXRUb2RvIH07XG4iLCJleHBvcnQgbGV0IGluYm94UHJvamVjdCA9IHtcbiAgaWQ6IFwiZGVmYXVsdElEXCIsXG4gIG5hbWU6IFwiSW5ib3hcIixcbiAgdG9kb3M6IFtdLFxufTtcblxuZXhwb3J0IGxldCBwcm9qZWN0cyA9IFtdO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobWFpbkFycmF5KSB7XG4gIC8vQ1JFQVRFIFRIRSBQUk9KRUNUXG4gIGxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW5wdXRcIik7XG4gIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcbiAgbWFpbkFycmF5LnB1c2gocHJvamVjdCk7XG4gIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfTtcbiIsImltcG9ydCB7IGluYm94UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QtQ3JlYXRvclwiO1xuXG5jbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICB0aGlzLmlkID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKGN1cnJlbnRBcnIsIGRlZlByb2plY3QpIHtcbiAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlLWFkZFwiKS52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uLWFkZFwiKS52YWx1ZTtcbiAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZHVlLWRhdGUtYWRkXCIpLnZhbHVlO1xuICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHktYWRkXCIpLnZhbHVlO1xuICBsZXQgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtYWRkXCIpLnZhbHVlO1xuICAvL1xuICBsZXQgdG9kbyA9IG5ldyBUb2RvKFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBkdWVEYXRlSW5wdXQsXG4gICAgcHJpb3JpdHlJbnB1dCxcbiAgICBub3Rlc0lucHV0XG4gICk7XG5cbiAgY3VycmVudEFyci5wdXNoKHRvZG8pO1xuICBpZiAoY3VycmVudEFyciAhPT0gZGVmUHJvamVjdCkge1xuICAgIGluYm94UHJvamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnIsIHRhcmdldCkge1xuICBsZXQgcG9zID0gYXJyXG4gICAgLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuaWQ7XG4gICAgfSlcbiAgICAuaW5kZXhPZihwYXJzZUludCh0YXJnZXQpKTtcbiAgcmV0dXJuIHBvcztcbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kbywgZmluZEluZGV4IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJULy9GUkVTSCBTVEFSVC8vRlJFU0ggU1RBUlQvL0ZSRVNIIFNUQVJUXG5pbXBvcnQgeyBwcm9qZWN0cywgY3JlYXRlUHJvamVjdCwgaW5ib3hQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC1DcmVhdG9yXCI7XG4vLyBpbXBvcnQgeyBpbmJveFByb2plY3QsIHRlc3RQcm9qZWN0IH0gZnJvbSBcIi4vdG9kby1DcmVhdG9yLmpzXCI7XG5pbXBvcnQge1xuICByZW5kZXJUb2RvcyxcbiAgcmVuZGVyUHJvamVjdHMsXG4gIHJlbmRlclRvZG9JbmZvLFxuICBzdWJtaXRFZGl0VG9kbyxcbn0gZnJvbSBcIi4vZG9tLUNyZWF0b3IuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8sIGZpbmRJbmRleCB9IGZyb20gXCIuL3RvZG8tQ3JlYXRvci5qc1wiO1xuXG5sZXQgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXVsXCIpO1xubGV0IHRvZG9VTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby11bFwiKTtcbmxldCBidG5BZGRUb0RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tYWRkLXRvZG9cIik7XG5cbmxldCB0b2RvRm9ybUFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWFkZFwiKTtcbmxldCBidG5TdWJtaXRBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1zdWJtaXQtYWRkXCIpO1xubGV0IGJ0bkNhbmNlbEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWNhbmNlbC1hZGRcIik7XG5cbmxldCB0b2RvRm9ybUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1lZGl0XCIpO1xubGV0IGJ0blN1Ym1pdEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1zdWJtaXQtZWRpdFwiKTtcbmxldCBidG5DYW5jZWxFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY2FuY2VsLWVkaXRcIik7XG5cbmxldCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tYWRkLXByb2plY3RcIik7XG5sZXQgaW5wdXRBZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0XCIpO1xubGV0IGlQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKTtcblxubGV0IGRlZlByb2plY3QgPSBpbmJveFByb2plY3QudG9kb3M7XG5sZXQgY3VycmVudFByb2plY3QgPSBkZWZQcm9qZWN0O1xubGV0IGluZGV4T2ZDbGlja2VkVG9kbyA9IHVuZGVmaW5lZDtcblxuLy8gRVZFTlQgTElTVEVORVJTXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG4gIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG4gIC8vIGNvbnNvbGUubG9nKGRlZlByb2plY3QpO1xuICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gIC8vIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbn0pO1xuXG5pUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICByZW5kZXJUb2RvcyhkZWZQcm9qZWN0KTtcbiAgY3VycmVudFByb2plY3QgPSBkZWZQcm9qZWN0O1xufSk7XG5cbmJ0bkFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG59KTtcblxuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoaW5wdXRBZGRQcm9qZWN0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0cyk7XG4gICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuICAgIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG4gICAgZ2l2ZUFkZGVkUHJvamVjdEFjdGl2ZVN0YXR1cygpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICB9XG59KTtcblxuYnRuU3VibWl0QWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgY3JlYXRlVG9kbyhjdXJyZW50UHJvamVjdCwgZGVmUHJvamVjdCk7XG4gIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgdG9kb0Zvcm1BZGQucmVzZXQoKTtcbiAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c0FycmF5XCIsIHByb2plY3RzKTtcbiAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICBjb25zb2xlLmxvZyhkZWZQcm9qZWN0KTtcbiAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gIC8vICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzQXJyYXlcIikgfHwgXCJbXVwiKSk7XG59KTtcblxuYnRuQ2FuY2VsQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn0pO1xuXG5idG5TdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIHN1Ym1pdEVkaXRUb2RvKGN1cnJlbnRQcm9qZWN0LCBpbmRleE9mQ2xpY2tlZFRvZG8pO1xuICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gIGFkZFRvTG9jYWxTdG9yYWdlKFwiaW5ib3hBcnJheVwiLCBkZWZQcm9qZWN0KTtcbn0pO1xuXG5idG5DYW5jZWxFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59KTtcblxudG9kb1VMLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAvLyBERUxFVEVcbiAgZnVuY3Rpb24gZGVsZXRlVG9kbyhhcnJheSkge1xuICAgIGFycmF5LnNwbGljZShmaW5kSW5kZXgoY3VycmVudFByb2plY3QsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpLCAxKTtcbiAgICBpZiAoY3VycmVudFByb2plY3QgIT09IGRlZlByb2plY3QpIHtcbiAgICAgIGRlZlByb2plY3Quc3BsaWNlKGZpbmRJbmRleChkZWZQcm9qZWN0LCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKSwgMSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gZGVmUHJvamVjdCkge1xuICAgICAgbGV0IHByb2plY3RPZlJlcGVhdGVkVG9kbyA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT5cbiAgICAgICAgcHJvamVjdC50b2Rvcy5zb21lKFxuICAgICAgICAgICh0b2RvKSA9PiB0b2RvLmlkID09PSBwYXJzZUludChlLnRhcmdldC5wYXJlbnROb2RlLmlkKVxuICAgICAgICApXG4gICAgICApWzBdO1xuICAgICAgaWYgKHByb2plY3RPZlJlcGVhdGVkVG9kbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb2plY3RPZlJlcGVhdGVkVG9kby50b2Rvcy5zcGxpY2UoXG4gICAgICAgICAgZmluZEluZGV4KHByb2plY3RPZlJlcGVhdGVkVG9kby50b2RvcywgZS50YXJnZXQucGFyZW50Tm9kZS5pZCksXG4gICAgICAgICAgMVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c0FycmF5XCIsIHByb2plY3RzKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcImluYm94QXJyYXlcIiwgZGVmUHJvamVjdCk7XG4gIH1cblxuICAvL0VESVRcbiAgZnVuY3Rpb24gb3BlbkVkaXRGb3JtKCkge1xuICAgIGluZGV4T2ZDbGlja2VkVG9kbyA9IGZpbmRJbmRleChjdXJyZW50UHJvamVjdCwgZS50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgdG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgcmVuZGVyVG9kb0luZm8oY3VycmVudFByb2plY3QsIGluZGV4T2ZDbGlja2VkVG9kbyk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiREVMRVRFXCIpIHtcbiAgICBkZWxldGVUb2RvKGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuXG4gIGlmIChcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJFRElUXCIgJiZcbiAgICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIilcbiAgKSB7XG4gICAgb3BlbkVkaXRGb3JtKCk7XG4gIH1cbn0pO1xuXG5wcm9qZWN0VUwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIC8vIERFTEVURVxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGFycmF5KSB7XG4gICAgcHJvamVjdHNbZmluZEluZGV4KHByb2plY3RzLCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKV0udG9kb3MgPSBbXTtcbiAgICBhcnJheS5zcGxpY2UoZmluZEluZGV4KHByb2plY3RzLCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKSwgMSk7XG4gICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuICAgIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiWFwiKSB7XG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0cyk7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgIC8vIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbMF0udG9kb3M7XG4gICAgZ2l2ZUxhc3RQcm9qZWN0QWN0aXZlU3RhdHVzKCk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c0FycmF5XCIsIHByb2plY3RzKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcImluYm94QXJyYXlcIiwgZGVmUHJvamVjdCk7XG4gIH1cblxuICBpZiAocHJvamVjdHMubGVuZ3RoIDwgMSkge1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gZGVmUHJvamVjdDtcbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBlbmFibGVQcm9qZWN0TmF2aWdhdGlvbigpIHtcbiAgLy8gR2V0IGFsbCBidXR0b25zIHdpdGggY2xhc3M9XCJsaVwiIGluc2lkZSB0aGUgY29udGFpbmVyXG4gIGxldCBwcm9qZWN0TElzID0gcHJvamVjdFVMLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaVwiKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGJ1dHRvbnMgYW5kIGFkZCB0aGUgYWN0aXZlIGNsYXNzIHRvIHRoZSBjdXJyZW50L2NsaWNrZWQgYnV0dG9uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExJcy5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RMSXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZVwiKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbaV0udG9kb3M7XG4gICAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgICAvLyBJZiB0aGVyZSdzIG5vIGFjdGl2ZSBjbGFzc1xuICAgICAgaWYgKGN1cnJlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICBjdXJyZW50WzBdLmNsYXNzTmFtZSA9IGN1cnJlbnRbMF0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGhlIGFjdGl2ZSBjbGFzcyB0byB0aGUgY3VycmVudC9jbGlja2VkIGJ1dHRvblxuICAgICAgdGhpcy5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2l2ZUFkZGVkUHJvamVjdEFjdGl2ZVN0YXR1cygpIHtcbiAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS50b2RvcztcbiAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xufVxuXG5mdW5jdGlvbiBnaXZlTGFzdFByb2plY3RBY3RpdmVTdGF0dXMoKSB7XG4gIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS50b2RvcztcbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkVG9Mb2NhbFN0b3JhZ2UobmFtZSwgYXJyKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KGFycikpO1xufVxuXG5mdW5jdGlvbiBnZXRTdG9yYWdlRGF0YSgpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0FycmF5XCIpIHx8IFwiW11cIik7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=