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
    let btnEditTodo = document.createElement("span");
    let btnDeleteTodo = document.createElement("span");
    let isChecked = document.createElement("span");

    todoUL.appendChild(todoLI);
    todoLI.appendChild(titleLI);
    todoLI.appendChild(dueDateLI);
    todoLI.appendChild(btnEditTodo);
    todoLI.appendChild(btnDeleteTodo);
    todoLI.appendChild(isChecked);

    todoLI.id = todoArray[i].id;
    titleLI.textContent = todoArray[i].title;
    dueDateLI.textContent = todoArray[i].dueDate;
    btnEditTodo.textContent = "visibility";
    btnDeleteTodo.textContent = "delete";
    // isChecked.textContent = "pending_actions";

    btnDeleteTodo.className = "material-icons-outlined";
    btnEditTodo.className = "material-icons-outlined";
    isChecked.className = "material-icons-outlined";

    if (todoArray[i].isChecked === true) {
      isChecked.textContent = "check";
    } else if (todoArray[i].isChecked === false) {
      isChecked.textContent = "pending_actions";
    }

    // // !! NEEDS WORK
    // isChecked.addEventListener("click", function () {
    //   console.log("hi");
    // });

    // // if (todoArray[i].isChecked === true) {
    // //   titleLI.style.textDecorationLine = "line-through";
    // //   isChecked.checked;
    // // }

    // // !! NEEDS WORK

    if (todoArray[i].priority === "0") {
      todoLI.style.backgroundColor = "#99ff99";
    } else if (todoArray[i].priority === "1") {
      todoLI.style.backgroundColor = "#adadeb";
    } else if (todoArray[i].priority === "2") {
      todoLI.style.backgroundColor = "#ff8080";
    }
  }
}

function renderProjects(projectArray) {
  // !!
  projectUL.innerHTML = "";
  // !!

  //CREATE TODO ELEMENTS
  for (let i = 0; i < projectArray.length; i++) {
    let projectLI = document.createElement("li");
    let projectDeleteBtn = document.createElement("span");

    projectLI.textContent = projectArray[i].name;
    projectDeleteBtn.textContent = "delete";

    projectDeleteBtn.className = "material-icons-outlined";
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
  constructor(title, description, dueDate, priority, notes, isChecked) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.isChecked = isChecked;
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
    notesInput,
    false
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
  removeActiveStatusOnProjects();
  iProject.classList.add("active");
});

iProject.addEventListener("click", function () {
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(defProject);
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
    (0,_project_Creator__WEBPACK_IMPORTED_MODULE_0__.createProject)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    enableProjectNavigation();
    giveAddedProjectActiveStatus();
    addToLocalStorage("projectsArray", _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    addToLocalStorage("inboxArray", defProject);
    iProject.classList.remove("active");
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

  //CHANGE CHECKED STATUS
  function changeCheckedStatus(array) {
    indexOfClickedTodo = (0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(currentProject, e.target.parentNode.id);
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
    addToLocalStorage("projectsArray", _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    addToLocalStorage("inboxArray", defProject);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
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
    _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects[(0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects, e.target.parentNode.id)].todos = [];
    array.splice((0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects, e.target.parentNode.id), 1);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    enableProjectNavigation();
  }

  if (e.target.textContent === "delete") {
    deleteProject(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
    giveLastProjectActiveStatus();
    addToLocalStorage("projectsArray", _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    addToLocalStorage("inboxArray", defProject);
  }

  if (_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects.length < 1) {
    iProject.classList.add("active");
    currentProject = defProject;
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
  } else if (_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects.length >= 1) {
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

function removeActiveStatusOnProjects() {
  let projectLIs = projectUL.getElementsByClassName("li");
  for (let i = 0; i < projectLIs.length; i++) {
    projectLIs[i].classList.remove("active");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXVCO0FBQ3pDO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQVE7QUFDL0IsTUFBTSw0REFBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHNEQUFRLENBQUMsNkRBQWU7QUFDM0MsRUFBRSw0REFBVztBQUNiOztBQUVBO0FBQ0EsTUFBTSw2REFBZTtBQUNyQixxQkFBcUIsc0RBQVEsQ0FBQyw2REFBZTtBQUM3QyxJQUFJLDREQUFXO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL2RvbS1DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9wcm9qZWN0LUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL3RvZG8tQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHRvZG9VTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby11bFwiKTtcbmxldCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdWxcIik7XG5sZXQgcHJvamVjdExJcyA9IHByb2plY3RVTC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlcIik7XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9zKHRvZG9BcnJheSkge1xuICAvLyAhIVxuICB0b2RvVUwuaW5uZXJIVE1MID0gXCJcIjtcbiAgLy8gISFcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdG9kb0xJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCB0aXRsZUxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGR1ZURhdGVMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBidG5FZGl0VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxldCBidG5EZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbGV0IGlzQ2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgdG9kb1VMLmFwcGVuZENoaWxkKHRvZG9MSSk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKHRpdGxlTEkpO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZChkdWVEYXRlTEkpO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZChidG5FZGl0VG9kbyk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKGJ0bkRlbGV0ZVRvZG8pO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZChpc0NoZWNrZWQpO1xuXG4gICAgdG9kb0xJLmlkID0gdG9kb0FycmF5W2ldLmlkO1xuICAgIHRpdGxlTEkudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0udGl0bGU7XG4gICAgZHVlRGF0ZUxJLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2ldLmR1ZURhdGU7XG4gICAgYnRuRWRpdFRvZG8udGV4dENvbnRlbnQgPSBcInZpc2liaWxpdHlcIjtcbiAgICBidG5EZWxldGVUb2RvLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcbiAgICAvLyBpc0NoZWNrZWQudGV4dENvbnRlbnQgPSBcInBlbmRpbmdfYWN0aW9uc1wiO1xuXG4gICAgYnRuRGVsZXRlVG9kby5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG4gICAgYnRuRWRpdFRvZG8uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiO1xuICAgIGlzQ2hlY2tlZC5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG5cbiAgICBpZiAodG9kb0FycmF5W2ldLmlzQ2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgaXNDaGVja2VkLnRleHRDb250ZW50ID0gXCJjaGVja1wiO1xuICAgIH0gZWxzZSBpZiAodG9kb0FycmF5W2ldLmlzQ2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGlzQ2hlY2tlZC50ZXh0Q29udGVudCA9IFwicGVuZGluZ19hY3Rpb25zXCI7XG4gICAgfVxuXG4gICAgLy8gLy8gISEgTkVFRFMgV09SS1xuICAgIC8vIGlzQ2hlY2tlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgY29uc29sZS5sb2coXCJoaVwiKTtcbiAgICAvLyB9KTtcblxuICAgIC8vIC8vIGlmICh0b2RvQXJyYXlbaV0uaXNDaGVja2VkID09PSB0cnVlKSB7XG4gICAgLy8gLy8gICB0aXRsZUxJLnN0eWxlLnRleHREZWNvcmF0aW9uTGluZSA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgLy8gLy8gICBpc0NoZWNrZWQuY2hlY2tlZDtcbiAgICAvLyAvLyB9XG5cbiAgICAvLyAvLyAhISBORUVEUyBXT1JLXG5cbiAgICBpZiAodG9kb0FycmF5W2ldLnByaW9yaXR5ID09PSBcIjBcIikge1xuICAgICAgdG9kb0xJLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzk5ZmY5OVwiO1xuICAgIH0gZWxzZSBpZiAodG9kb0FycmF5W2ldLnByaW9yaXR5ID09PSBcIjFcIikge1xuICAgICAgdG9kb0xJLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2FkYWRlYlwiO1xuICAgIH0gZWxzZSBpZiAodG9kb0FycmF5W2ldLnByaW9yaXR5ID09PSBcIjJcIikge1xuICAgICAgdG9kb0xJLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmODA4MFwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0QXJyYXkpIHtcbiAgLy8gISFcbiAgcHJvamVjdFVMLmlubmVySFRNTCA9IFwiXCI7XG4gIC8vICEhXG5cbiAgLy9DUkVBVEUgVE9ETyBFTEVNRU5UU1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0TEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IHByb2plY3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIHByb2plY3RMSS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJheVtpXS5uYW1lO1xuICAgIHByb2plY3REZWxldGVCdG4udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuXG4gICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG4gICAgcHJvamVjdExJLmlkID0gcHJvamVjdEFycmF5W2ldLmlkO1xuICAgIHByb2plY3RMSS5jbGFzc0xpc3QuYWRkKFwibGlcIik7XG5cbiAgICBwcm9qZWN0VUwuYXBwZW5kQ2hpbGQocHJvamVjdExJKTtcbiAgICBwcm9qZWN0TEkuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG4gIH1cblxuICAvL0dJVkUgVEhFIExBU1QgSVRFTSBPRiBUSEUgTk9ERUxJU1QgVEhFIEFDVElWRSBTVFlMRVxuICB1cGRhdGVBY3RpdmVQcm9qZWN0KHByb2plY3RMSXMubGVuZ3RoIC0gMSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9JbmZvKGFycmF5LCBpbmRleCkge1xuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGUtZWRpdFwiKTtcbiAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uLWVkaXRcIik7XG4gIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWVkaXRcIik7XG4gIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcmlvcml0eS1lZGl0XCIpO1xuICBsZXQgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtZWRpdFwiKTtcblxuICB0aXRsZUlucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLnRpdGxlO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLmRlc2NyaXB0aW9uO1xuICBkdWVEYXRlSW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0uZHVlRGF0ZTtcbiAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5wcmlvcml0eTtcbiAgbm90ZXNJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5ub3Rlcztcbn1cblxuZnVuY3Rpb24gc3VibWl0RWRpdFRvZG8oYXJyYXksIGluZGV4KSB7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tZWRpdFwiKTtcbiAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZHVlLWRhdGUtZWRpdFwiKTtcbiAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWVkaXRcIik7XG4gIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1lZGl0XCIpO1xuXG4gIGFycmF5W2luZGV4XS50aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5kdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICBhcnJheVtpbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICBhcnJheVtpbmRleF0ubm90ZXMgPSBub3Rlc0lucHV0LnZhbHVlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBY3RpdmVQcm9qZWN0KGluZGV4KSB7XG4gIGxldCBwcm9qZWN0TElzID0gcHJvamVjdFVMLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaVwiKTtcbiAgbGV0IGxhc3RQcm9qZWN0ID0gcHJvamVjdExJc1tpbmRleF07XG4gIGlmIChwcm9qZWN0TElzLmxlbmd0aCA+IDApIHtcbiAgICBsYXN0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG59XG5cbmV4cG9ydCB7IHJlbmRlclRvZG9zLCByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9kb0luZm8sIHN1Ym1pdEVkaXRUb2RvIH07XG4iLCJleHBvcnQgbGV0IGluYm94UHJvamVjdCA9IHtcbiAgaWQ6IFwiZGVmYXVsdElEXCIsXG4gIG5hbWU6IFwiSW5ib3hcIixcbiAgdG9kb3M6IGdldFN0b3JhZ2VEYXRhKFwiaW5ib3hBcnJheVwiKSxcbn07XG5cbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBnZXRTdG9yYWdlRGF0YShcInByb2plY3RzQXJyYXlcIik7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvZG9zID0gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChtYWluQXJyYXkpIHtcbiAgLy9DUkVBVEUgVEhFIFBST0pFQ1RcbiAgbGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1pbnB1dFwiKTtcbiAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuICBtYWluQXJyYXkucHVzaChwcm9qZWN0KTtcbiAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbn1cbmZ1bmN0aW9uIGdldFN0b3JhZ2VEYXRhKG5hbWUpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkgfHwgXCJbXVwiKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgaW5ib3hQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC1DcmVhdG9yXCI7XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgaXNDaGVja2VkKSB7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSBpc0NoZWNrZWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kbyhjdXJyZW50QXJyLCBkZWZQcm9qZWN0KSB7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1hZGRcIikudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvbi1hZGRcIikudmFsdWU7XG4gIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWFkZFwiKS52YWx1ZTtcbiAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWFkZFwiKS52YWx1ZTtcbiAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWFkZFwiKS52YWx1ZTtcbiAgLy9cbiAgbGV0IHRvZG8gPSBuZXcgVG9kbyhcbiAgICB0aXRsZUlucHV0LFxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgZHVlRGF0ZUlucHV0LFxuICAgIHByaW9yaXR5SW5wdXQsXG4gICAgbm90ZXNJbnB1dCxcbiAgICBmYWxzZVxuICApO1xuXG4gIGN1cnJlbnRBcnIucHVzaCh0b2RvKTtcbiAgaWYgKGN1cnJlbnRBcnIgIT09IGRlZlByb2plY3QpIHtcbiAgICBpbmJveFByb2plY3QudG9kb3MucHVzaCh0b2RvKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCB0YXJnZXQpIHtcbiAgbGV0IHBvcyA9IGFyclxuICAgIC5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLmlkO1xuICAgIH0pXG4gICAgLmluZGV4T2YocGFyc2VJbnQodGFyZ2V0KSk7XG4gIHJldHVybiBwb3M7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8sIGZpbmRJbmRleCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVC8vRlJFU0ggU1RBUlQvL0ZSRVNIIFNUQVJULy9GUkVTSCBTVEFSVFxuaW1wb3J0IHsgcHJvamVjdHMsIGNyZWF0ZVByb2plY3QsIGluYm94UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QtQ3JlYXRvclwiO1xuaW1wb3J0IHtcbiAgcmVuZGVyVG9kb3MsXG4gIHJlbmRlclByb2plY3RzLFxuICByZW5kZXJUb2RvSW5mbyxcbiAgc3VibWl0RWRpdFRvZG8sXG59IGZyb20gXCIuL2RvbS1DcmVhdG9yLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvLCBmaW5kSW5kZXggfSBmcm9tIFwiLi90b2RvLUNyZWF0b3IuanNcIjtcblxubGV0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC11bFwiKTtcbmxldCB0b2RvVUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdWxcIik7XG5sZXQgYnRuQWRkVG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC10b2RvXCIpO1xuXG5sZXQgdG9kb0Zvcm1BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1hZGRcIik7XG5sZXQgYnRuU3VibWl0QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tc3VibWl0LWFkZFwiKTtcbmxldCBidG5DYW5jZWxBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1jYW5jZWwtYWRkXCIpO1xuXG5sZXQgdG9kb0Zvcm1FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tZWRpdFwiKTtcbmxldCBidG5TdWJtaXRFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tc3VibWl0LWVkaXRcIik7XG5sZXQgYnRuQ2FuY2VsRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWNhbmNlbC1lZGl0XCIpO1xuXG5sZXQgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC1wcm9qZWN0XCIpO1xubGV0IGlucHV0QWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1pbnB1dFwiKTtcbmxldCBpUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ib3hcIik7XG5cbmxldCBkZWZQcm9qZWN0ID0gaW5ib3hQcm9qZWN0LnRvZG9zO1xubGV0IGN1cnJlbnRQcm9qZWN0ID0gZGVmUHJvamVjdDtcbmxldCBpbmRleE9mQ2xpY2tlZFRvZG8gPSB1bmRlZmluZWQ7XG5cbi8vIEVWRU5UIExJU1RFTkVSU1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuICBlbmFibGVQcm9qZWN0TmF2aWdhdGlvbigpO1xuICByZW1vdmVBY3RpdmVTdGF0dXNPblByb2plY3RzKCk7XG4gIGlQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59KTtcblxuaVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVuZGVyVG9kb3MoZGVmUHJvamVjdCk7XG4gIGN1cnJlbnRQcm9qZWN0ID0gZGVmUHJvamVjdDtcbiAgcmVtb3ZlQWN0aXZlU3RhdHVzT25Qcm9qZWN0cygpO1xuICBpUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufSk7XG5cbmJ0bkFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG59KTtcblxuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoaW5wdXRBZGRQcm9qZWN0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0cyk7XG4gICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuICAgIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG4gICAgZ2l2ZUFkZGVkUHJvamVjdEFjdGl2ZVN0YXR1cygpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICAgIGlQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbn0pO1xuXG5idG5TdWJtaXRBZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBjcmVhdGVUb2RvKGN1cnJlbnRQcm9qZWN0LCBkZWZQcm9qZWN0KTtcbiAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICB0b2RvRm9ybUFkZC5yZXNldCgpO1xuICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBhZGRUb0xvY2FsU3RvcmFnZShcInByb2plY3RzQXJyYXlcIiwgcHJvamVjdHMpO1xuICBhZGRUb0xvY2FsU3RvcmFnZShcImluYm94QXJyYXlcIiwgZGVmUHJvamVjdCk7XG4gIC8vICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzQXJyYXlcIikgfHwgXCJbXVwiKSk7XG59KTtcblxuYnRuQ2FuY2VsQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn0pO1xuXG5idG5TdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIHN1Ym1pdEVkaXRUb2RvKGN1cnJlbnRQcm9qZWN0LCBpbmRleE9mQ2xpY2tlZFRvZG8pO1xuICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gIGFkZFRvTG9jYWxTdG9yYWdlKFwiaW5ib3hBcnJheVwiLCBkZWZQcm9qZWN0KTtcbn0pO1xuXG5idG5DYW5jZWxFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59KTtcblxudG9kb1VMLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAvLyBERUxFVEVcbiAgZnVuY3Rpb24gZGVsZXRlVG9kbyhhcnJheSkge1xuICAgIGFycmF5LnNwbGljZShmaW5kSW5kZXgoY3VycmVudFByb2plY3QsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpLCAxKTtcbiAgICBpZiAoY3VycmVudFByb2plY3QgIT09IGRlZlByb2plY3QpIHtcbiAgICAgIGRlZlByb2plY3Quc3BsaWNlKGZpbmRJbmRleChkZWZQcm9qZWN0LCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKSwgMSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gZGVmUHJvamVjdCkge1xuICAgICAgbGV0IHByb2plY3RPZlJlcGVhdGVkVG9kbyA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT5cbiAgICAgICAgcHJvamVjdC50b2Rvcy5zb21lKFxuICAgICAgICAgICh0b2RvKSA9PiB0b2RvLmlkID09PSBwYXJzZUludChlLnRhcmdldC5wYXJlbnROb2RlLmlkKVxuICAgICAgICApXG4gICAgICApWzBdO1xuICAgICAgaWYgKHByb2plY3RPZlJlcGVhdGVkVG9kbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb2plY3RPZlJlcGVhdGVkVG9kby50b2Rvcy5zcGxpY2UoXG4gICAgICAgICAgZmluZEluZGV4KHByb2plY3RPZlJlcGVhdGVkVG9kby50b2RvcywgZS50YXJnZXQucGFyZW50Tm9kZS5pZCksXG4gICAgICAgICAgMVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c0FycmF5XCIsIHByb2plY3RzKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcImluYm94QXJyYXlcIiwgZGVmUHJvamVjdCk7XG4gIH1cblxuICAvL0VESVRcbiAgZnVuY3Rpb24gb3BlbkVkaXRGb3JtKCkge1xuICAgIGluZGV4T2ZDbGlja2VkVG9kbyA9IGZpbmRJbmRleChjdXJyZW50UHJvamVjdCwgZS50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgdG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgcmVuZGVyVG9kb0luZm8oY3VycmVudFByb2plY3QsIGluZGV4T2ZDbGlja2VkVG9kbyk7XG4gIH1cblxuICAvL0NIQU5HRSBDSEVDS0VEIFNUQVRVU1xuICBmdW5jdGlvbiBjaGFuZ2VDaGVja2VkU3RhdHVzKGFycmF5KSB7XG4gICAgaW5kZXhPZkNsaWNrZWRUb2RvID0gZmluZEluZGV4KGN1cnJlbnRQcm9qZWN0LCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICBpZiAoYXJyYXlbaW5kZXhPZkNsaWNrZWRUb2RvXS5pc0NoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgICBhcnJheVtpbmRleE9mQ2xpY2tlZFRvZG9dLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChhcnJheVtpbmRleE9mQ2xpY2tlZFRvZG9dLmlzQ2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgYXJyYXlbaW5kZXhPZkNsaWNrZWRUb2RvXS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvL1xuXG4gIGlmIChcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJjaGVja1wiIHx8XG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwicGVuZGluZ19hY3Rpb25zXCJcbiAgKSB7XG4gICAgY2hhbmdlQ2hlY2tlZFN0YXR1cyhjdXJyZW50UHJvamVjdCk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c0FycmF5XCIsIHByb2plY3RzKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcImluYm94QXJyYXlcIiwgZGVmUHJvamVjdCk7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcImRlbGV0ZVwiKSB7XG4gICAgZGVsZXRlVG9kbyhjdXJyZW50UHJvamVjdCk7XG4gIH1cblxuICBpZiAoXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwidmlzaWJpbGl0eVwiICYmXG4gICAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpXG4gICkge1xuICAgIG9wZW5FZGl0Rm9ybSgpO1xuICB9XG59KTtcblxucHJvamVjdFVMLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAvLyBERUxFVEVcbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChhcnJheSkge1xuICAgIHByb2plY3RzW2ZpbmRJbmRleChwcm9qZWN0cywgZS50YXJnZXQucGFyZW50Tm9kZS5pZCldLnRvZG9zID0gW107XG4gICAgYXJyYXkuc3BsaWNlKGZpbmRJbmRleChwcm9qZWN0cywgZS50YXJnZXQucGFyZW50Tm9kZS5pZCksIDEpO1xuICAgIHJlbmRlclByb2plY3RzKHByb2plY3RzKTtcbiAgICBlbmFibGVQcm9qZWN0TmF2aWdhdGlvbigpO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcImRlbGV0ZVwiKSB7XG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0cyk7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgIGdpdmVMYXN0UHJvamVjdEFjdGl2ZVN0YXR1cygpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICB9XG5cbiAgaWYgKHByb2plY3RzLmxlbmd0aCA8IDEpIHtcbiAgICBpUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gZGVmUHJvamVjdDtcbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIH0gZWxzZSBpZiAocHJvamVjdHMubGVuZ3RoID49IDEpIHtcbiAgICBpUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZW5hYmxlUHJvamVjdE5hdmlnYXRpb24oKSB7XG4gIC8vIEdldCBhbGwgYnV0dG9ucyB3aXRoIGNsYXNzPVwibGlcIiBpbnNpZGUgdGhlIGNvbnRhaW5lclxuICBsZXQgcHJvamVjdExJcyA9IHByb2plY3RVTC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlcIik7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBidXR0b25zIGFuZCBhZGQgdGhlIGFjdGl2ZSBjbGFzcyB0byB0aGUgY3VycmVudC9jbGlja2VkIGJ1dHRvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMSXMubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0TElzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmVcIik7XG4gICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2ldLnRvZG9zO1xuICAgICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgICAgLy8gSWYgdGhlcmUncyBubyBhY3RpdmUgY2xhc3NcbiAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIGN1cnJlbnQvY2xpY2tlZCBidXR0b25cbiAgICAgIHRoaXMuY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZVN0YXR1c09uUHJvamVjdHMoKSB7XG4gIGxldCBwcm9qZWN0TElzID0gcHJvamVjdFVMLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaVwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TElzLmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdExJc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdpdmVBZGRlZFByb2plY3RBY3RpdmVTdGF0dXMoKSB7XG4gIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0udG9kb3M7XG4gIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZ2l2ZUxhc3RQcm9qZWN0QWN0aXZlU3RhdHVzKCkge1xuICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0udG9kb3M7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRvTG9jYWxTdG9yYWdlKG5hbWUsIGFycikge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbn1cblxuLy8gZnVuY3Rpb24gZ2V0U3RvcmFnZURhdGEobmFtZSkge1xuLy8gICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSB8fCBcIltdXCIpO1xuLy8gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9