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
    todoFormAdd.classList.add("hidden");
    todoFormEdit.classList.add("hidden");
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
  todoFormAdd.classList.add("hidden");
  todoFormEdit.classList.add("hidden");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyw2REFBZTtBQUM1QjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQVE7QUFDL0IsTUFBTSw0REFBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHNEQUFRLENBQUMsNkRBQWU7QUFDM0MsRUFBRSw0REFBVztBQUNiOztBQUVBO0FBQ0EsTUFBTSw2REFBZTtBQUNyQixxQkFBcUIsc0RBQVEsQ0FBQyw2REFBZTtBQUM3QyxJQUFJLDREQUFXO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvZG9tLUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL3Byb2plY3QtQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvdG9kby1DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdG9kb1VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXVsXCIpO1xubGV0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC11bFwiKTtcbmxldCBwcm9qZWN0TElzID0gcHJvamVjdFVMLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaVwiKTtcblxuZnVuY3Rpb24gcmVuZGVyVG9kb3ModG9kb0FycmF5KSB7XG4gIGVtcHR5Tm9kZSh0b2RvVUwpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvZG9MSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgdGl0bGVMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBkdWVEYXRlTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgYnRuRWRpdFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBsZXQgYnRuRGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxldCBpc0NoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIHRvZG9VTC5hcHBlbmRDaGlsZCh0b2RvTEkpO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZCh0aXRsZUxJKTtcbiAgICB0b2RvTEkuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxJKTtcbiAgICB0b2RvTEkuYXBwZW5kQ2hpbGQoYnRuRWRpdFRvZG8pO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZChidG5EZWxldGVUb2RvKTtcbiAgICB0b2RvTEkuYXBwZW5kQ2hpbGQoaXNDaGVja2VkKTtcblxuICAgIHRvZG9MSS5pZCA9IHRvZG9BcnJheVtpXS5pZDtcbiAgICB0aXRsZUxJLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2ldLnRpdGxlO1xuICAgIGR1ZURhdGVMSS50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS5kdWVEYXRlO1xuICAgIGJ0bkVkaXRUb2RvLnRleHRDb250ZW50ID0gXCJ2aXNpYmlsaXR5XCI7XG4gICAgYnRuRGVsZXRlVG9kby50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG5cbiAgICBidG5EZWxldGVUb2RvLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIjtcbiAgICBidG5FZGl0VG9kby5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG4gICAgaXNDaGVja2VkLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIjtcblxuICAgIGlmICh0b2RvQXJyYXlbaV0uaXNDaGVja2VkID09PSB0cnVlKSB7XG4gICAgICBpc0NoZWNrZWQudGV4dENvbnRlbnQgPSBcImNoZWNrXCI7XG4gICAgfSBlbHNlIGlmICh0b2RvQXJyYXlbaV0uaXNDaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgaXNDaGVja2VkLnRleHRDb250ZW50ID0gXCJwZW5kaW5nX2FjdGlvbnNcIjtcbiAgICB9XG5cbiAgICBpZiAodG9kb0FycmF5W2ldLnByaW9yaXR5ID09PSBcIjBcIikge1xuICAgICAgdG9kb0xJLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzk5ZmY5OVwiO1xuICAgIH0gZWxzZSBpZiAodG9kb0FycmF5W2ldLnByaW9yaXR5ID09PSBcIjFcIikge1xuICAgICAgdG9kb0xJLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2FkYWRlYlwiO1xuICAgIH0gZWxzZSBpZiAodG9kb0FycmF5W2ldLnByaW9yaXR5ID09PSBcIjJcIikge1xuICAgICAgdG9kb0xJLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmODA4MFwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0QXJyYXkpIHtcbiAgZW1wdHlOb2RlKHByb2plY3RVTCk7XG5cbiAgLy9DUkVBVEUgVE9ETyBFTEVNRU5UU1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0TEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IHByb2plY3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIHByb2plY3RMSS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJheVtpXS5uYW1lO1xuICAgIHByb2plY3REZWxldGVCdG4udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuXG4gICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG4gICAgcHJvamVjdExJLmlkID0gcHJvamVjdEFycmF5W2ldLmlkO1xuICAgIHByb2plY3RMSS5jbGFzc0xpc3QuYWRkKFwibGlcIik7XG5cbiAgICBwcm9qZWN0VUwuYXBwZW5kQ2hpbGQocHJvamVjdExJKTtcbiAgICBwcm9qZWN0TEkuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG4gIH1cblxuICAvL0dJVkUgVEhFIExBU1QgSVRFTSBPRiBUSEUgTk9ERUxJU1QgVEhFIEFDVElWRSBTVFlMRVxuICB1cGRhdGVBY3RpdmVQcm9qZWN0KHByb2plY3RMSXMubGVuZ3RoIC0gMSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9JbmZvKGFycmF5LCBpbmRleCkge1xuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGUtZWRpdFwiKTtcbiAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uLWVkaXRcIik7XG4gIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWVkaXRcIik7XG4gIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcmlvcml0eS1lZGl0XCIpO1xuICBsZXQgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtZWRpdFwiKTtcblxuICB0aXRsZUlucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLnRpdGxlO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLmRlc2NyaXB0aW9uO1xuICBkdWVEYXRlSW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0uZHVlRGF0ZTtcbiAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5wcmlvcml0eTtcbiAgbm90ZXNJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5ub3Rlcztcbn1cblxuZnVuY3Rpb24gc3VibWl0RWRpdFRvZG8oYXJyYXksIGluZGV4KSB7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tZWRpdFwiKTtcbiAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZHVlLWRhdGUtZWRpdFwiKTtcbiAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWVkaXRcIik7XG4gIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1lZGl0XCIpO1xuXG4gIGFycmF5W2luZGV4XS50aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5kdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICBhcnJheVtpbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICBhcnJheVtpbmRleF0ubm90ZXMgPSBub3Rlc0lucHV0LnZhbHVlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBY3RpdmVQcm9qZWN0KGluZGV4KSB7XG4gIGxldCBwcm9qZWN0TElzID0gcHJvamVjdFVMLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaVwiKTtcbiAgbGV0IGxhc3RQcm9qZWN0ID0gcHJvamVjdExJc1tpbmRleF07XG4gIGlmIChwcm9qZWN0TElzLmxlbmd0aCA+IDApIHtcbiAgICBsYXN0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVtcHR5Tm9kZShub2RlKSB7XG4gIHdoaWxlIChub2RlLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyVG9kb3MsIHJlbmRlclByb2plY3RzLCByZW5kZXJUb2RvSW5mbywgc3VibWl0RWRpdFRvZG8gfTtcbiIsImV4cG9ydCBsZXQgaW5ib3hQcm9qZWN0ID0ge1xuICBpZDogXCJkZWZhdWx0SURcIixcbiAgbmFtZTogXCJJbmJveFwiLFxuICB0b2RvczogZ2V0U3RvcmFnZURhdGEoXCJpbmJveEFycmF5XCIpLFxufTtcblxuZXhwb3J0IGxldCBwcm9qZWN0cyA9IGdldFN0b3JhZ2VEYXRhKFwicHJvamVjdHNBcnJheVwiKTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLmlkID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG1haW5BcnJheSkge1xuICAvL0NSRUFURSBUSEUgUFJPSkVDVFxuICBsZXQgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0XCIpO1xuICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSk7XG4gIG1haW5BcnJheS5wdXNoKHByb2plY3QpO1xuICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xufVxuZnVuY3Rpb24gZ2V0U3RvcmFnZURhdGEobmFtZSkge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSB8fCBcIltdXCIpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH07XG4iLCJpbXBvcnQgeyBpbmJveFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LUNyZWF0b3JcIjtcblxuY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBpc0NoZWNrZWQpIHtcbiAgICB0aGlzLmlkID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IGlzQ2hlY2tlZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKGN1cnJlbnRBcnIsIGRlZlByb2plY3QpIHtcbiAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlLWFkZFwiKS52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uLWFkZFwiKS52YWx1ZTtcbiAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZHVlLWRhdGUtYWRkXCIpLnZhbHVlO1xuICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHktYWRkXCIpLnZhbHVlO1xuICBsZXQgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtYWRkXCIpLnZhbHVlO1xuICAvL1xuICBsZXQgdG9kbyA9IG5ldyBUb2RvKFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBkdWVEYXRlSW5wdXQsXG4gICAgcHJpb3JpdHlJbnB1dCxcbiAgICBub3Rlc0lucHV0LFxuICAgIGZhbHNlXG4gICk7XG5cbiAgY3VycmVudEFyci5wdXNoKHRvZG8pO1xuICBpZiAoY3VycmVudEFyciAhPT0gZGVmUHJvamVjdCkge1xuICAgIGluYm94UHJvamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnIsIHRhcmdldCkge1xuICBsZXQgcG9zID0gYXJyXG4gICAgLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUuaWQ7XG4gICAgfSlcbiAgICAuaW5kZXhPZihwYXJzZUludCh0YXJnZXQpKTtcbiAgcmV0dXJuIHBvcztcbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kbywgZmluZEluZGV4IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJULy9GUkVTSCBTVEFSVC8vRlJFU0ggU1RBUlQvL0ZSRVNIIFNUQVJUXG5pbXBvcnQgeyBwcm9qZWN0cywgY3JlYXRlUHJvamVjdCwgaW5ib3hQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC1DcmVhdG9yXCI7XG5pbXBvcnQge1xuICByZW5kZXJUb2RvcyxcbiAgcmVuZGVyUHJvamVjdHMsXG4gIHJlbmRlclRvZG9JbmZvLFxuICBzdWJtaXRFZGl0VG9kbyxcbn0gZnJvbSBcIi4vZG9tLUNyZWF0b3IuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8sIGZpbmRJbmRleCB9IGZyb20gXCIuL3RvZG8tQ3JlYXRvci5qc1wiO1xuXG5sZXQgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXVsXCIpO1xubGV0IHRvZG9VTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby11bFwiKTtcbmxldCBidG5BZGRUb0RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tYWRkLXRvZG9cIik7XG5cbmxldCB0b2RvRm9ybUFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWFkZFwiKTtcbmxldCBidG5TdWJtaXRBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1zdWJtaXQtYWRkXCIpO1xubGV0IGJ0bkNhbmNlbEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWNhbmNlbC1hZGRcIik7XG5cbmxldCB0b2RvRm9ybUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1lZGl0XCIpO1xubGV0IGJ0blN1Ym1pdEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1zdWJtaXQtZWRpdFwiKTtcbmxldCBidG5DYW5jZWxFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY2FuY2VsLWVkaXRcIik7XG5cbmxldCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tYWRkLXByb2plY3RcIik7XG5sZXQgaW5wdXRBZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0XCIpO1xubGV0IGlQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmJveFwiKTtcblxubGV0IGRlZlByb2plY3QgPSBpbmJveFByb2plY3QudG9kb3M7XG5sZXQgY3VycmVudFByb2plY3QgPSBkZWZQcm9qZWN0O1xubGV0IGluZGV4T2ZDbGlja2VkVG9kbyA9IHVuZGVmaW5lZDtcblxuLy8gRVZFTlQgTElTVEVORVJTXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG4gIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG4gIHJlbW92ZUFjdGl2ZVN0YXR1c09uUHJvamVjdHMoKTtcbiAgaVByb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn0pO1xuXG5pUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICByZW5kZXJUb2RvcyhkZWZQcm9qZWN0KTtcbiAgY3VycmVudFByb2plY3QgPSBkZWZQcm9qZWN0O1xuICByZW1vdmVBY3RpdmVTdGF0dXNPblByb2plY3RzKCk7XG4gIGlQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59KTtcblxuYnRuQWRkVG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAodG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgIHRvZG9Gb3JtQWRkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cbn0pO1xuXG5idG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChpbnB1dEFkZFByb2plY3QudmFsdWUgIT09IFwiXCIpIHtcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RzKTtcbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgZW5hYmxlUHJvamVjdE5hdmlnYXRpb24oKTtcbiAgICBnaXZlQWRkZWRQcm9qZWN0QWN0aXZlU3RhdHVzKCk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c0FycmF5XCIsIHByb2plY3RzKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcImluYm94QXJyYXlcIiwgZGVmUHJvamVjdCk7XG4gICAgaVByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG59KTtcblxuYnRuU3VibWl0QWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgaWYgKHRvZG9Gb3JtQWRkLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tYWRkXCIpLmNoZWNrVmFsaWRpdHkoKTtcbiAgICBjcmVhdGVUb2RvKGN1cnJlbnRQcm9qZWN0LCBkZWZQcm9qZWN0KTtcbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgdG9kb0Zvcm1BZGQucmVzZXQoKTtcbiAgICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICB9XG59KTtcblxuYnRuQ2FuY2VsQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn0pO1xuXG5idG5TdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgaWYgKHRvZG9Gb3JtRWRpdC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHN1Ym1pdEVkaXRUb2RvKGN1cnJlbnRQcm9qZWN0LCBpbmRleE9mQ2xpY2tlZFRvZG8pO1xuICAgIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcInByb2plY3RzQXJyYXlcIiwgcHJvamVjdHMpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwiaW5ib3hBcnJheVwiLCBkZWZQcm9qZWN0KTtcbiAgfVxufSk7XG5cbmJ0bkNhbmNlbEVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICB0b2RvRm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn0pO1xuXG50b2RvVUwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIC8vIERFTEVURVxuICBmdW5jdGlvbiBkZWxldGVUb2RvKGFycmF5KSB7XG4gICAgYXJyYXkuc3BsaWNlKGZpbmRJbmRleChjdXJyZW50UHJvamVjdCwgZS50YXJnZXQucGFyZW50Tm9kZS5pZCksIDEpO1xuICAgIGlmIChjdXJyZW50UHJvamVjdCAhPT0gZGVmUHJvamVjdCkge1xuICAgICAgZGVmUHJvamVjdC5zcGxpY2UoZmluZEluZGV4KGRlZlByb2plY3QsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpLCAxKTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSBkZWZQcm9qZWN0KSB7XG4gICAgICBsZXQgcHJvamVjdE9mUmVwZWF0ZWRUb2RvID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PlxuICAgICAgICBwcm9qZWN0LnRvZG9zLnNvbWUoXG4gICAgICAgICAgKHRvZG8pID0+IHRvZG8uaWQgPT09IHBhcnNlSW50KGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpXG4gICAgICAgIClcbiAgICAgIClbMF07XG4gICAgICBpZiAocHJvamVjdE9mUmVwZWF0ZWRUb2RvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvamVjdE9mUmVwZWF0ZWRUb2RvLnRvZG9zLnNwbGljZShcbiAgICAgICAgICBmaW5kSW5kZXgocHJvamVjdE9mUmVwZWF0ZWRUb2RvLnRvZG9zLCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKSxcbiAgICAgICAgICAxXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcInByb2plY3RzQXJyYXlcIiwgcHJvamVjdHMpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwiaW5ib3hBcnJheVwiLCBkZWZQcm9qZWN0KTtcbiAgfVxuXG4gIC8vRURJVFxuICBmdW5jdGlvbiBvcGVuRWRpdEZvcm0oKSB7XG4gICAgaW5kZXhPZkNsaWNrZWRUb2RvID0gZmluZEluZGV4KGN1cnJlbnRQcm9qZWN0LCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICB0b2RvRm9ybUVkaXQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICByZW5kZXJUb2RvSW5mbyhjdXJyZW50UHJvamVjdCwgaW5kZXhPZkNsaWNrZWRUb2RvKTtcbiAgfVxuXG4gIC8vQ0hBTkdFIENIRUNLRUQgU1RBVFVTXG4gIGZ1bmN0aW9uIGNoYW5nZUNoZWNrZWRTdGF0dXMoYXJyYXkpIHtcbiAgICBpbmRleE9mQ2xpY2tlZFRvZG8gPSBmaW5kSW5kZXgoY3VycmVudFByb2plY3QsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgIGlmIChhcnJheVtpbmRleE9mQ2xpY2tlZFRvZG9dLmlzQ2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGFycmF5W2luZGV4T2ZDbGlja2VkVG9kb10uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGFycmF5W2luZGV4T2ZDbGlja2VkVG9kb10uaXNDaGVja2VkID09PSB0cnVlKSB7XG4gICAgICBhcnJheVtpbmRleE9mQ2xpY2tlZFRvZG9dLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vXG5cbiAgaWYgKFxuICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcImNoZWNrXCIgfHxcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJwZW5kaW5nX2FjdGlvbnNcIlxuICApIHtcbiAgICBjaGFuZ2VDaGVja2VkU3RhdHVzKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcInByb2plY3RzQXJyYXlcIiwgcHJvamVjdHMpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwiaW5ib3hBcnJheVwiLCBkZWZQcm9qZWN0KTtcbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiZGVsZXRlXCIpIHtcbiAgICBkZWxldGVUb2RvKGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuXG4gIGlmIChcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJ2aXNpYmlsaXR5XCIgJiZcbiAgICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIilcbiAgKSB7XG4gICAgb3BlbkVkaXRGb3JtKCk7XG4gIH1cbn0pO1xuXG5wcm9qZWN0VUwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIHRvZG9Gb3JtQWRkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAvLyBERUxFVEVcbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChhcnJheSkge1xuICAgIC8vIHByb2plY3RzW2ZpbmRJbmRleChwcm9qZWN0cywgZS50YXJnZXQucGFyZW50Tm9kZS5pZCldLnRvZG9zID0gW107XG4gICAgbGV0IGRlbGV0ZWRQcm9qZWN0ID1cbiAgICAgIHByb2plY3RzW2ZpbmRJbmRleChwcm9qZWN0cywgZS50YXJnZXQucGFyZW50Tm9kZS5pZCldLnRvZG9zO1xuICAgIGluYm94UHJvamVjdC50b2RvcyA9IGluYm94UHJvamVjdC50b2Rvcy5maWx0ZXIoXG4gICAgICAoaSkgPT4gIWRlbGV0ZWRQcm9qZWN0LmluY2x1ZGVzKGkpXG4gICAgKTtcbiAgICBkZWZQcm9qZWN0ID0gaW5ib3hQcm9qZWN0LnRvZG9zO1xuICAgIC8vXG4gICAgYXJyYXkuc3BsaWNlKGZpbmRJbmRleChwcm9qZWN0cywgZS50YXJnZXQucGFyZW50Tm9kZS5pZCksIDEpO1xuICAgIHJlbmRlclByb2plY3RzKHByb2plY3RzKTtcbiAgICBlbmFibGVQcm9qZWN0TmF2aWdhdGlvbigpO1xuICAgIGNvbnNvbGUubG9nKGRlZlByb2plY3QpO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcImRlbGV0ZVwiKSB7XG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0cyk7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgIGdpdmVMYXN0UHJvamVjdEFjdGl2ZVN0YXR1cygpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICB9XG5cbiAgaWYgKHByb2plY3RzLmxlbmd0aCA8IDEpIHtcbiAgICBpUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gZGVmUHJvamVjdDtcbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIH0gZWxzZSBpZiAocHJvamVjdHMubGVuZ3RoID49IDEpIHtcbiAgICBpUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZW5hYmxlUHJvamVjdE5hdmlnYXRpb24oKSB7XG4gIC8vIEdldCBhbGwgYnV0dG9ucyB3aXRoIGNsYXNzPVwibGlcIiBpbnNpZGUgdGhlIGNvbnRhaW5lclxuICBsZXQgcHJvamVjdExJcyA9IHByb2plY3RVTC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlcIik7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBidXR0b25zIGFuZCBhZGQgdGhlIGFjdGl2ZSBjbGFzcyB0byB0aGUgY3VycmVudC9jbGlja2VkIGJ1dHRvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMSXMubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0TElzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmVcIik7XG4gICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2ldLnRvZG9zO1xuICAgICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgICAgLy8gSWYgdGhlcmUncyBubyBhY3RpdmUgY2xhc3NcbiAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIGN1cnJlbnQvY2xpY2tlZCBidXR0b25cbiAgICAgIHRoaXMuY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZVN0YXR1c09uUHJvamVjdHMoKSB7XG4gIGxldCBwcm9qZWN0TElzID0gcHJvamVjdFVMLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaVwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TElzLmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdExJc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdpdmVBZGRlZFByb2plY3RBY3RpdmVTdGF0dXMoKSB7XG4gIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0udG9kb3M7XG4gIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZ2l2ZUxhc3RQcm9qZWN0QWN0aXZlU3RhdHVzKCkge1xuICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0udG9kb3M7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRvTG9jYWxTdG9yYWdlKG5hbWUsIGFycikge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==