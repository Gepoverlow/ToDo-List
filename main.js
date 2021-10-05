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
  emptyNode(todoUL);

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

    btnDeleteTodo.className = "material-icons-outlined";
    btnEditTodo.className = "material-icons-outlined";
    isChecked.className = "material-icons-outlined";

    if (todoArray[i].isChecked === true) {
      isChecked.textContent = "check";
    } else if (todoArray[i].isChecked === false) {
      isChecked.textContent = "pending_actions";
    }

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
  emptyNode(projectUL);

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

function emptyNode(node) {
  while (node.lastElementChild) {
    node.removeChild(node.lastElementChild);
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
  if (todoFormAdd.checkValidity()) {
    ev.preventDefault();
    document.getElementById("todo-form-add").checkValidity();
    (0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.createTodo)(currentProject, defProject);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
    todoFormAdd.reset();
    todoFormAdd.classList.add("hidden");
    addToLocalStorage("projectsArray", _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
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
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.submitEditTodo)(currentProject, indexOfClickedTodo);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
    addToLocalStorage("projectsArray", _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    addToLocalStorage("inboxArray", defProject);
  }
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
    // projects[findIndex(projects, e.target.parentNode.id)].todos = [];
    let deletedProject =
      _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects[(0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects, e.target.parentNode.id)].todos;
    _project_Creator__WEBPACK_IMPORTED_MODULE_0__.inboxProject.todos = _project_Creator__WEBPACK_IMPORTED_MODULE_0__.inboxProject.todos.filter(
      (i) => !deletedProject.includes(i)
    );
    defProject = _project_Creator__WEBPACK_IMPORTED_MODULE_0__.inboxProject.todos;
    //
    array.splice((0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects, e.target.parentNode.id), 1);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
    enableProjectNavigation();
    console.log(defProject);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0EsdUJBQXVCLHNEQUFRO0FBQy9CLE1BQU0sNERBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixzREFBUSxDQUFDLDZEQUFlO0FBQzNDLEVBQUUsNERBQVc7QUFDYjs7QUFFQTtBQUNBLE1BQU0sNkRBQWU7QUFDckIscUJBQXFCLHNEQUFRLENBQUMsNkRBQWU7QUFDN0MsSUFBSSw0REFBVztBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL2RvbS1DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9wcm9qZWN0LUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL3RvZG8tQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHRvZG9VTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby11bFwiKTtcbmxldCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdWxcIik7XG5sZXQgcHJvamVjdExJcyA9IHByb2plY3RVTC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlcIik7XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9zKHRvZG9BcnJheSkge1xuICBlbXB0eU5vZGUodG9kb1VMKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9BcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0b2RvTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IHRpdGxlTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgZHVlRGF0ZUxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGJ0bkVkaXRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbGV0IGJ0bkRlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBsZXQgaXNDaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICB0b2RvVUwuYXBwZW5kQ2hpbGQodG9kb0xJKTtcbiAgICB0b2RvTEkuYXBwZW5kQ2hpbGQodGl0bGVMSSk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKGR1ZURhdGVMSSk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKGJ0bkVkaXRUb2RvKTtcbiAgICB0b2RvTEkuYXBwZW5kQ2hpbGQoYnRuRGVsZXRlVG9kbyk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKGlzQ2hlY2tlZCk7XG5cbiAgICB0b2RvTEkuaWQgPSB0b2RvQXJyYXlbaV0uaWQ7XG4gICAgdGl0bGVMSS50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS50aXRsZTtcbiAgICBkdWVEYXRlTEkudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0uZHVlRGF0ZTtcbiAgICBidG5FZGl0VG9kby50ZXh0Q29udGVudCA9IFwidmlzaWJpbGl0eVwiO1xuICAgIGJ0bkRlbGV0ZVRvZG8udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuXG4gICAgYnRuRGVsZXRlVG9kby5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG4gICAgYnRuRWRpdFRvZG8uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiO1xuICAgIGlzQ2hlY2tlZC5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG5cbiAgICBpZiAodG9kb0FycmF5W2ldLmlzQ2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgaXNDaGVja2VkLnRleHRDb250ZW50ID0gXCJjaGVja1wiO1xuICAgIH0gZWxzZSBpZiAodG9kb0FycmF5W2ldLmlzQ2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGlzQ2hlY2tlZC50ZXh0Q29udGVudCA9IFwicGVuZGluZ19hY3Rpb25zXCI7XG4gICAgfVxuXG4gICAgaWYgKHRvZG9BcnJheVtpXS5wcmlvcml0eSA9PT0gXCIwXCIpIHtcbiAgICAgIHRvZG9MSS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM5OWZmOTlcIjtcbiAgICB9IGVsc2UgaWYgKHRvZG9BcnJheVtpXS5wcmlvcml0eSA9PT0gXCIxXCIpIHtcbiAgICAgIHRvZG9MSS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNhZGFkZWJcIjtcbiAgICB9IGVsc2UgaWYgKHRvZG9BcnJheVtpXS5wcmlvcml0eSA9PT0gXCIyXCIpIHtcbiAgICAgIHRvZG9MSS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZjgwODBcIjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdEFycmF5KSB7XG4gIGVtcHR5Tm9kZShwcm9qZWN0VUwpO1xuXG4gIC8vQ1JFQVRFIFRPRE8gRUxFTUVOVFNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcHJvamVjdExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCBwcm9qZWN0RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICBwcm9qZWN0TEkudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyYXlbaV0ubmFtZTtcbiAgICBwcm9qZWN0RGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcblxuICAgIHByb2plY3REZWxldGVCdG4uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiO1xuICAgIHByb2plY3RMSS5pZCA9IHByb2plY3RBcnJheVtpXS5pZDtcbiAgICBwcm9qZWN0TEkuY2xhc3NMaXN0LmFkZChcImxpXCIpO1xuXG4gICAgcHJvamVjdFVMLmFwcGVuZENoaWxkKHByb2plY3RMSSk7XG4gICAgcHJvamVjdExJLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdG4pO1xuICB9XG5cbiAgLy9HSVZFIFRIRSBMQVNUIElURU0gT0YgVEhFIE5PREVMSVNUIFRIRSBBQ1RJVkUgU1RZTEVcbiAgdXBkYXRlQWN0aXZlUHJvamVjdChwcm9qZWN0TElzLmxlbmd0aCAtIDEpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RvSW5mbyhhcnJheSwgaW5kZXgpIHtcbiAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlLWVkaXRcIik7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvbi1lZGl0XCIpO1xuICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZS1lZGl0XCIpO1xuICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHktZWRpdFwiKTtcbiAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWVkaXRcIik7XG5cbiAgdGl0bGVJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS50aXRsZTtcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5kZXNjcmlwdGlvbjtcbiAgZHVlRGF0ZUlucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLmR1ZURhdGU7XG4gIHByaW9yaXR5SW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0ucHJpb3JpdHk7XG4gIG5vdGVzSW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0ubm90ZXM7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEVkaXRUb2RvKGFycmF5LCBpbmRleCkge1xuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGUtZWRpdFwiKTtcbiAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uLWVkaXRcIik7XG4gIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWVkaXRcIik7XG4gIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcmlvcml0eS1lZGl0XCIpO1xuICBsZXQgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtZWRpdFwiKTtcblxuICBhcnJheVtpbmRleF0udGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICBhcnJheVtpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICBhcnJheVtpbmRleF0uZHVlRGF0ZSA9IGR1ZURhdGVJbnB1dC52YWx1ZTtcbiAgYXJyYXlbaW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcbiAgYXJyYXlbaW5kZXhdLm5vdGVzID0gbm90ZXNJbnB1dC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQWN0aXZlUHJvamVjdChpbmRleCkge1xuICBsZXQgcHJvamVjdExJcyA9IHByb2plY3RVTC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlcIik7XG4gIGxldCBsYXN0UHJvamVjdCA9IHByb2plY3RMSXNbaW5kZXhdO1xuICBpZiAocHJvamVjdExJcy5sZW5ndGggPiAwKSB7XG4gICAgbGFzdFByb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbXB0eU5vZGUobm9kZSkge1xuICB3aGlsZSAobm9kZS5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG59XG5cbmV4cG9ydCB7IHJlbmRlclRvZG9zLCByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9kb0luZm8sIHN1Ym1pdEVkaXRUb2RvIH07XG4iLCJleHBvcnQgbGV0IGluYm94UHJvamVjdCA9IHtcbiAgaWQ6IFwiZGVmYXVsdElEXCIsXG4gIG5hbWU6IFwiSW5ib3hcIixcbiAgdG9kb3M6IGdldFN0b3JhZ2VEYXRhKFwiaW5ib3hBcnJheVwiKSxcbn07XG5cbmV4cG9ydCBsZXQgcHJvamVjdHMgPSBnZXRTdG9yYWdlRGF0YShcInByb2plY3RzQXJyYXlcIik7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRvZG9zID0gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChtYWluQXJyYXkpIHtcbiAgLy9DUkVBVEUgVEhFIFBST0pFQ1RcbiAgbGV0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1pbnB1dFwiKTtcbiAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xuICBtYWluQXJyYXkucHVzaChwcm9qZWN0KTtcbiAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcbn1cbmZ1bmN0aW9uIGdldFN0b3JhZ2VEYXRhKG5hbWUpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkgfHwgXCJbXVwiKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgaW5ib3hQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC1DcmVhdG9yXCI7XG5cbmNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgaXNDaGVja2VkKSB7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSBpc0NoZWNrZWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kbyhjdXJyZW50QXJyLCBkZWZQcm9qZWN0KSB7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1hZGRcIikudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvbi1hZGRcIikudmFsdWU7XG4gIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWFkZFwiKS52YWx1ZTtcbiAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWFkZFwiKS52YWx1ZTtcbiAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWFkZFwiKS52YWx1ZTtcbiAgLy9cbiAgbGV0IHRvZG8gPSBuZXcgVG9kbyhcbiAgICB0aXRsZUlucHV0LFxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgZHVlRGF0ZUlucHV0LFxuICAgIHByaW9yaXR5SW5wdXQsXG4gICAgbm90ZXNJbnB1dCxcbiAgICBmYWxzZVxuICApO1xuXG4gIGN1cnJlbnRBcnIucHVzaCh0b2RvKTtcbiAgaWYgKGN1cnJlbnRBcnIgIT09IGRlZlByb2plY3QpIHtcbiAgICBpbmJveFByb2plY3QudG9kb3MucHVzaCh0b2RvKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCB0YXJnZXQpIHtcbiAgbGV0IHBvcyA9IGFyclxuICAgIC5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLmlkO1xuICAgIH0pXG4gICAgLmluZGV4T2YocGFyc2VJbnQodGFyZ2V0KSk7XG4gIHJldHVybiBwb3M7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8sIGZpbmRJbmRleCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVC8vRlJFU0ggU1RBUlQvL0ZSRVNIIFNUQVJULy9GUkVTSCBTVEFSVFxuaW1wb3J0IHsgcHJvamVjdHMsIGNyZWF0ZVByb2plY3QsIGluYm94UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QtQ3JlYXRvclwiO1xuaW1wb3J0IHtcbiAgcmVuZGVyVG9kb3MsXG4gIHJlbmRlclByb2plY3RzLFxuICByZW5kZXJUb2RvSW5mbyxcbiAgc3VibWl0RWRpdFRvZG8sXG59IGZyb20gXCIuL2RvbS1DcmVhdG9yLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvLCBmaW5kSW5kZXggfSBmcm9tIFwiLi90b2RvLUNyZWF0b3IuanNcIjtcblxubGV0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC11bFwiKTtcbmxldCB0b2RvVUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdWxcIik7XG5sZXQgYnRuQWRkVG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC10b2RvXCIpO1xuXG5sZXQgdG9kb0Zvcm1BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1hZGRcIik7XG5sZXQgYnRuU3VibWl0QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tc3VibWl0LWFkZFwiKTtcbmxldCBidG5DYW5jZWxBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1jYW5jZWwtYWRkXCIpO1xuXG5sZXQgdG9kb0Zvcm1FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tZWRpdFwiKTtcbmxldCBidG5TdWJtaXRFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tc3VibWl0LWVkaXRcIik7XG5sZXQgYnRuQ2FuY2VsRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWNhbmNlbC1lZGl0XCIpO1xuXG5sZXQgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC1wcm9qZWN0XCIpO1xubGV0IGlucHV0QWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1pbnB1dFwiKTtcbmxldCBpUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ib3hcIik7XG5cbmxldCBkZWZQcm9qZWN0ID0gaW5ib3hQcm9qZWN0LnRvZG9zO1xubGV0IGN1cnJlbnRQcm9qZWN0ID0gZGVmUHJvamVjdDtcbmxldCBpbmRleE9mQ2xpY2tlZFRvZG8gPSB1bmRlZmluZWQ7XG5cbi8vIEVWRU5UIExJU1RFTkVSU1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuICBlbmFibGVQcm9qZWN0TmF2aWdhdGlvbigpO1xuICByZW1vdmVBY3RpdmVTdGF0dXNPblByb2plY3RzKCk7XG4gIGlQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59KTtcblxuaVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVuZGVyVG9kb3MoZGVmUHJvamVjdCk7XG4gIGN1cnJlbnRQcm9qZWN0ID0gZGVmUHJvamVjdDtcbiAgcmVtb3ZlQWN0aXZlU3RhdHVzT25Qcm9qZWN0cygpO1xuICBpUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufSk7XG5cbmJ0bkFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG59KTtcblxuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoaW5wdXRBZGRQcm9qZWN0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0cyk7XG4gICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuICAgIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG4gICAgZ2l2ZUFkZGVkUHJvamVjdEFjdGl2ZVN0YXR1cygpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICAgIGlQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbn0pO1xuXG5idG5TdWJtaXRBZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICBpZiAodG9kb0Zvcm1BZGQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1hZGRcIikuY2hlY2tWYWxpZGl0eSgpO1xuICAgIGNyZWF0ZVRvZG8oY3VycmVudFByb2plY3QsIGRlZlByb2plY3QpO1xuICAgIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICB0b2RvRm9ybUFkZC5yZXNldCgpO1xuICAgIHRvZG9Gb3JtQWRkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c0FycmF5XCIsIHByb2plY3RzKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcImluYm94QXJyYXlcIiwgZGVmUHJvamVjdCk7XG4gIH1cbn0pO1xuXG5idG5DYW5jZWxBZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufSk7XG5cbmJ0blN1Ym1pdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICBpZiAodG9kb0Zvcm1FZGl0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgc3VibWl0RWRpdFRvZG8oY3VycmVudFByb2plY3QsIGluZGV4T2ZDbGlja2VkVG9kbyk7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICB9XG59KTtcblxuYnRuQ2FuY2VsRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufSk7XG5cbnRvZG9VTC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgLy8gREVMRVRFXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG8oYXJyYXkpIHtcbiAgICBhcnJheS5zcGxpY2UoZmluZEluZGV4KGN1cnJlbnRQcm9qZWN0LCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKSwgMSk7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ICE9PSBkZWZQcm9qZWN0KSB7XG4gICAgICBkZWZQcm9qZWN0LnNwbGljZShmaW5kSW5kZXgoZGVmUHJvamVjdCwgZS50YXJnZXQucGFyZW50Tm9kZS5pZCksIDEpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFByb2plY3QgPT09IGRlZlByb2plY3QpIHtcbiAgICAgIGxldCBwcm9qZWN0T2ZSZXBlYXRlZFRvZG8gPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+XG4gICAgICAgIHByb2plY3QudG9kb3Muc29tZShcbiAgICAgICAgICAodG9kbykgPT4gdG9kby5pZCA9PT0gcGFyc2VJbnQoZS50YXJnZXQucGFyZW50Tm9kZS5pZClcbiAgICAgICAgKVxuICAgICAgKVswXTtcbiAgICAgIGlmIChwcm9qZWN0T2ZSZXBlYXRlZFRvZG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9qZWN0T2ZSZXBlYXRlZFRvZG8udG9kb3Muc3BsaWNlKFxuICAgICAgICAgIGZpbmRJbmRleChwcm9qZWN0T2ZSZXBlYXRlZFRvZG8udG9kb3MsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpLFxuICAgICAgICAgIDFcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICB9XG5cbiAgLy9FRElUXG4gIGZ1bmN0aW9uIG9wZW5FZGl0Rm9ybSgpIHtcbiAgICBpbmRleE9mQ2xpY2tlZFRvZG8gPSBmaW5kSW5kZXgoY3VycmVudFByb2plY3QsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgIHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIHJlbmRlclRvZG9JbmZvKGN1cnJlbnRQcm9qZWN0LCBpbmRleE9mQ2xpY2tlZFRvZG8pO1xuICB9XG5cbiAgLy9DSEFOR0UgQ0hFQ0tFRCBTVEFUVVNcbiAgZnVuY3Rpb24gY2hhbmdlQ2hlY2tlZFN0YXR1cyhhcnJheSkge1xuICAgIGluZGV4T2ZDbGlja2VkVG9kbyA9IGZpbmRJbmRleChjdXJyZW50UHJvamVjdCwgZS50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgaWYgKGFycmF5W2luZGV4T2ZDbGlja2VkVG9kb10uaXNDaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgYXJyYXlbaW5kZXhPZkNsaWNrZWRUb2RvXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYXJyYXlbaW5kZXhPZkNsaWNrZWRUb2RvXS5pc0NoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIGFycmF5W2luZGV4T2ZDbGlja2VkVG9kb10uaXNDaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy9cblxuICBpZiAoXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiY2hlY2tcIiB8fFxuICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcInBlbmRpbmdfYWN0aW9uc1wiXG4gICkge1xuICAgIGNoYW5nZUNoZWNrZWRTdGF0dXMoY3VycmVudFByb2plY3QpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICAgIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuXG4gIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJkZWxldGVcIikge1xuICAgIGRlbGV0ZVRvZG8oY3VycmVudFByb2plY3QpO1xuICB9XG5cbiAgaWYgKFxuICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcInZpc2liaWxpdHlcIiAmJlxuICAgIHRvZG9Gb3JtQWRkLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKVxuICApIHtcbiAgICBvcGVuRWRpdEZvcm0oKTtcbiAgfVxufSk7XG5cbnByb2plY3RVTC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgLy8gREVMRVRFXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoYXJyYXkpIHtcbiAgICAvLyBwcm9qZWN0c1tmaW5kSW5kZXgocHJvamVjdHMsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpXS50b2RvcyA9IFtdO1xuICAgIGxldCBkZWxldGVkUHJvamVjdCA9XG4gICAgICBwcm9qZWN0c1tmaW5kSW5kZXgocHJvamVjdHMsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpXS50b2RvcztcbiAgICBpbmJveFByb2plY3QudG9kb3MgPSBpbmJveFByb2plY3QudG9kb3MuZmlsdGVyKFxuICAgICAgKGkpID0+ICFkZWxldGVkUHJvamVjdC5pbmNsdWRlcyhpKVxuICAgICk7XG4gICAgZGVmUHJvamVjdCA9IGluYm94UHJvamVjdC50b2RvcztcbiAgICAvL1xuICAgIGFycmF5LnNwbGljZShmaW5kSW5kZXgocHJvamVjdHMsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpLCAxKTtcbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgZW5hYmxlUHJvamVjdE5hdmlnYXRpb24oKTtcbiAgICBjb25zb2xlLmxvZyhkZWZQcm9qZWN0KTtcbiAgfVxuXG4gIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJkZWxldGVcIikge1xuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdHMpO1xuICAgIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBnaXZlTGFzdFByb2plY3RBY3RpdmVTdGF0dXMoKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcInByb2plY3RzQXJyYXlcIiwgcHJvamVjdHMpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwiaW5ib3hBcnJheVwiLCBkZWZQcm9qZWN0KTtcbiAgfVxuXG4gIGlmIChwcm9qZWN0cy5sZW5ndGggPCAxKSB7XG4gICAgaVByb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBjdXJyZW50UHJvamVjdCA9IGRlZlByb2plY3Q7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9IGVsc2UgaWYgKHByb2plY3RzLmxlbmd0aCA+PSAxKSB7XG4gICAgaVByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCkge1xuICAvLyBHZXQgYWxsIGJ1dHRvbnMgd2l0aCBjbGFzcz1cImxpXCIgaW5zaWRlIHRoZSBjb250YWluZXJcbiAgbGV0IHByb2plY3RMSXMgPSBwcm9qZWN0VUwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpXCIpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgYnV0dG9ucyBhbmQgYWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIGN1cnJlbnQvY2xpY2tlZCBidXR0b25cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TElzLmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdExJc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlXCIpO1xuICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tpXS50b2RvcztcbiAgICAgIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gYWN0aXZlIGNsYXNzXG4gICAgICBpZiAoY3VycmVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGN1cnJlbnRbMF0uY2xhc3NOYW1lID0gY3VycmVudFswXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgYWN0aXZlIGNsYXNzIHRvIHRoZSBjdXJyZW50L2NsaWNrZWQgYnV0dG9uXG4gICAgICB0aGlzLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVTdGF0dXNPblByb2plY3RzKCkge1xuICBsZXQgcHJvamVjdExJcyA9IHByb2plY3RVTC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExJcy5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RMSXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnaXZlQWRkZWRQcm9qZWN0QWN0aXZlU3RhdHVzKCkge1xuICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLnRvZG9zO1xuICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGdpdmVMYXN0UHJvamVjdEFjdGl2ZVN0YXR1cygpIHtcbiAgaWYgKHByb2plY3RzLmxlbmd0aCA+IDApIHtcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLnRvZG9zO1xuICAgIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUb0xvY2FsU3RvcmFnZShuYW1lLCBhcnIpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoYXJyKSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=