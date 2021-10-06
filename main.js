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
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
// export let inboxProject = {
//   id: "defaultID",
//   name: "Inbox",
//   todos: getStorageData("inboxArray"),
// };

// export let projects = getStorageData("projectsArray");

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
// function getStorageData(name) {
//   return JSON.parse(localStorage.getItem(name) || "[]");
// }




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
    defProject.push(todo);
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

  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(defProject);
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(projects);
  enableProjectNavigation();
  removeActiveStatusOnProjects();
  iProject.classList.add("active");
});

iProject.addEventListener("click", function () {
  console.log(defProject);
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
    (0,_project_Creator__WEBPACK_IMPORTED_MODULE_0__.createProject)(projects);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(projects);
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
    // document.getElementById("todo-form-add").checkValidity();
    (0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.createTodo)(currentProject, defProject);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
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
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.submitEditTodo)(currentProject, indexOfClickedTodo);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
    addToLocalStorage("projectsArray", projects);
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
      let projectOfRepeatedTodo = projects.filter((project) =>
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
    addToLocalStorage("projectsArray", projects);
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
    //
    array[indexOfClickedTodo].isChecked = array[indexOfClickedTodo].isChecked
      ? false
      : true;
    //

    if (currentProject !== defProject) {
      let inboxIndex = (0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(defProject, e.target.parentNode.id);
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
        let repeatedTodoIndex = (0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(
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
      projects[(0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(projects, e.target.parentNode.id)].todos;
    inboxProject.todos = inboxProject.todos.filter(
      (i) => !deletedProject.includes(i)
    );
    defProject = inboxProject.todos;
    //
    array.splice((0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.findIndex)(projects, e.target.parentNode.id), 1);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(projects);
    enableProjectNavigation();
    console.log(defProject);
  }

  if (e.target.textContent === "delete") {
    deleteProject(projects);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
    giveLastProjectActiveStatus();
    addToLocalStorage("projectsArray", projects);
    addToLocalStorage("inboxArray", defProject);
  }

  if (projects.length < 1) {
    iProject.classList.add("active");
    currentProject = defProject;
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
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
  currentProject = projects[projects.length - 1].todos;
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
}

function giveLastProjectActiveStatus() {
  if (projects.length > 0) {
    currentProject = projects[projects.length - 1].todos;
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
  }
}

function addToLocalStorage(name, arr) {
  localStorage.setItem(name, JSON.stringify(arr));
}

function getStorageData(name) {
  return JSON.parse(localStorage.getItem(name) || "[]");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLE1BQU0sNERBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw0REFBVztBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQVc7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvZG9tLUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL3Byb2plY3QtQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvdG9kby1DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdG9kb1VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXVsXCIpO1xubGV0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC11bFwiKTtcbmxldCBwcm9qZWN0TElzID0gcHJvamVjdFVMLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaVwiKTtcblxuZnVuY3Rpb24gcmVuZGVyVG9kb3ModG9kb0FycmF5KSB7XG4gIGVtcHR5Tm9kZSh0b2RvVUwpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvZG9MSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgdGl0bGVMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBkdWVEYXRlTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgYnRuRWRpdFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBsZXQgYnRuRGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxldCBpc0NoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIHRvZG9VTC5hcHBlbmRDaGlsZCh0b2RvTEkpO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZCh0aXRsZUxJKTtcbiAgICB0b2RvTEkuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxJKTtcbiAgICB0b2RvTEkuYXBwZW5kQ2hpbGQoYnRuRWRpdFRvZG8pO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZChidG5EZWxldGVUb2RvKTtcbiAgICB0b2RvTEkuYXBwZW5kQ2hpbGQoaXNDaGVja2VkKTtcblxuICAgIHRvZG9MSS5pZCA9IHRvZG9BcnJheVtpXS5pZDtcbiAgICB0aXRsZUxJLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2ldLnRpdGxlO1xuICAgIGR1ZURhdGVMSS50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS5kdWVEYXRlO1xuICAgIGJ0bkVkaXRUb2RvLnRleHRDb250ZW50ID0gXCJ2aXNpYmlsaXR5XCI7XG4gICAgYnRuRGVsZXRlVG9kby50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG5cbiAgICBidG5EZWxldGVUb2RvLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIjtcbiAgICBidG5FZGl0VG9kby5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG4gICAgaXNDaGVja2VkLmNsYXNzTmFtZSA9IFwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIjtcblxuICAgIGlmICh0b2RvQXJyYXlbaV0uaXNDaGVja2VkID09PSB0cnVlKSB7XG4gICAgICBpc0NoZWNrZWQudGV4dENvbnRlbnQgPSBcImNoZWNrXCI7XG4gICAgfSBlbHNlIGlmICh0b2RvQXJyYXlbaV0uaXNDaGVja2VkID09PSBmYWxzZSkge1xuICAgICAgaXNDaGVja2VkLnRleHRDb250ZW50ID0gXCJwZW5kaW5nX2FjdGlvbnNcIjtcbiAgICB9XG5cbiAgICBpZiAodG9kb0FycmF5W2ldLnByaW9yaXR5ID09PSBcIjBcIikge1xuICAgICAgdG9kb0xJLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzk5ZmY5OVwiO1xuICAgIH0gZWxzZSBpZiAodG9kb0FycmF5W2ldLnByaW9yaXR5ID09PSBcIjFcIikge1xuICAgICAgdG9kb0xJLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2FkYWRlYlwiO1xuICAgIH0gZWxzZSBpZiAodG9kb0FycmF5W2ldLnByaW9yaXR5ID09PSBcIjJcIikge1xuICAgICAgdG9kb0xJLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmODA4MFwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0QXJyYXkpIHtcbiAgZW1wdHlOb2RlKHByb2plY3RVTCk7XG5cbiAgLy9DUkVBVEUgVE9ETyBFTEVNRU5UU1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0TEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IHByb2plY3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIHByb2plY3RMSS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJheVtpXS5uYW1lO1xuICAgIHByb2plY3REZWxldGVCdG4udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuXG4gICAgcHJvamVjdERlbGV0ZUJ0bi5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG4gICAgcHJvamVjdExJLmlkID0gcHJvamVjdEFycmF5W2ldLmlkO1xuICAgIHByb2plY3RMSS5jbGFzc0xpc3QuYWRkKFwibGlcIik7XG5cbiAgICBwcm9qZWN0VUwuYXBwZW5kQ2hpbGQocHJvamVjdExJKTtcbiAgICBwcm9qZWN0TEkuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG4gIH1cblxuICAvL0dJVkUgVEhFIExBU1QgSVRFTSBPRiBUSEUgTk9ERUxJU1QgVEhFIEFDVElWRSBTVFlMRVxuICB1cGRhdGVBY3RpdmVQcm9qZWN0KHByb2plY3RMSXMubGVuZ3RoIC0gMSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZG9JbmZvKGFycmF5LCBpbmRleCkge1xuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGUtZWRpdFwiKTtcbiAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uLWVkaXRcIik7XG4gIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWVkaXRcIik7XG4gIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcmlvcml0eS1lZGl0XCIpO1xuICBsZXQgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtZWRpdFwiKTtcblxuICB0aXRsZUlucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLnRpdGxlO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLmRlc2NyaXB0aW9uO1xuICBkdWVEYXRlSW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0uZHVlRGF0ZTtcbiAgcHJpb3JpdHlJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5wcmlvcml0eTtcbiAgbm90ZXNJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5ub3Rlcztcbn1cblxuZnVuY3Rpb24gc3VibWl0RWRpdFRvZG8oYXJyYXksIGluZGV4KSB7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tZWRpdFwiKTtcbiAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZHVlLWRhdGUtZWRpdFwiKTtcbiAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWVkaXRcIik7XG4gIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1lZGl0XCIpO1xuXG4gIGFycmF5W2luZGV4XS50aXRsZSA9IHRpdGxlSW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uSW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5kdWVEYXRlID0gZHVlRGF0ZUlucHV0LnZhbHVlO1xuICBhcnJheVtpbmRleF0ucHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuICBhcnJheVtpbmRleF0ubm90ZXMgPSBub3Rlc0lucHV0LnZhbHVlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVBY3RpdmVQcm9qZWN0KGluZGV4KSB7XG4gIGxldCBwcm9qZWN0TElzID0gcHJvamVjdFVMLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaVwiKTtcbiAgbGV0IGxhc3RQcm9qZWN0ID0gcHJvamVjdExJc1tpbmRleF07XG4gIGlmIChwcm9qZWN0TElzLmxlbmd0aCA+IDApIHtcbiAgICBsYXN0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVtcHR5Tm9kZShub2RlKSB7XG4gIHdoaWxlIChub2RlLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBub2RlLnJlbW92ZUNoaWxkKG5vZGUubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyVG9kb3MsIHJlbmRlclByb2plY3RzLCByZW5kZXJUb2RvSW5mbywgc3VibWl0RWRpdFRvZG8gfTtcbiIsIi8vIGV4cG9ydCBsZXQgaW5ib3hQcm9qZWN0ID0ge1xuLy8gICBpZDogXCJkZWZhdWx0SURcIixcbi8vICAgbmFtZTogXCJJbmJveFwiLFxuLy8gICB0b2RvczogZ2V0U3RvcmFnZURhdGEoXCJpbmJveEFycmF5XCIpLFxuLy8gfTtcblxuLy8gZXhwb3J0IGxldCBwcm9qZWN0cyA9IGdldFN0b3JhZ2VEYXRhKFwicHJvamVjdHNBcnJheVwiKTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLmlkID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG1haW5BcnJheSkge1xuICAvL0NSRUFURSBUSEUgUFJPSkVDVFxuICBsZXQgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0XCIpO1xuICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSk7XG4gIG1haW5BcnJheS5wdXNoKHByb2plY3QpO1xuICBwcm9qZWN0SW5wdXQudmFsdWUgPSBcIlwiO1xufVxuLy8gZnVuY3Rpb24gZ2V0U3RvcmFnZURhdGEobmFtZSkge1xuLy8gICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSB8fCBcIltdXCIpO1xuLy8gfVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH07XG4iLCJjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGlzQ2hlY2tlZCkge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgIHRoaXMuaXNDaGVja2VkID0gaXNDaGVja2VkO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8oY3VycmVudEFyciwgZGVmUHJvamVjdCkge1xuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGUtYWRkXCIpLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tYWRkXCIpLnZhbHVlO1xuICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZS1hZGRcIikudmFsdWU7XG4gIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcmlvcml0eS1hZGRcIikudmFsdWU7XG4gIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1hZGRcIikudmFsdWU7XG4gIC8vXG4gIGxldCB0b2RvID0gbmV3IFRvZG8oXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIGR1ZURhdGVJbnB1dCxcbiAgICBwcmlvcml0eUlucHV0LFxuICAgIG5vdGVzSW5wdXQsXG4gICAgZmFsc2VcbiAgKTtcbiAgY3VycmVudEFyci5wdXNoKHRvZG8pO1xuICBpZiAoY3VycmVudEFyciAhPT0gZGVmUHJvamVjdCkge1xuICAgIGRlZlByb2plY3QucHVzaCh0b2RvKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCB0YXJnZXQpIHtcbiAgbGV0IHBvcyA9IGFyclxuICAgIC5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLmlkO1xuICAgIH0pXG4gICAgLmluZGV4T2YocGFyc2VJbnQodGFyZ2V0KSk7XG4gIHJldHVybiBwb3M7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8sIGZpbmRJbmRleCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVC8vRlJFU0ggU1RBUlQvL0ZSRVNIIFNUQVJULy9GUkVTSCBTVEFSVFxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QtQ3JlYXRvclwiO1xuaW1wb3J0IHtcbiAgcmVuZGVyVG9kb3MsXG4gIHJlbmRlclByb2plY3RzLFxuICByZW5kZXJUb2RvSW5mbyxcbiAgc3VibWl0RWRpdFRvZG8sXG59IGZyb20gXCIuL2RvbS1DcmVhdG9yLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvLCBmaW5kSW5kZXggfSBmcm9tIFwiLi90b2RvLUNyZWF0b3IuanNcIjtcblxubGV0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC11bFwiKTtcbmxldCB0b2RvVUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdWxcIik7XG5sZXQgYnRuQWRkVG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC10b2RvXCIpO1xuXG5sZXQgdG9kb0Zvcm1BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1hZGRcIik7XG5sZXQgYnRuU3VibWl0QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tc3VibWl0LWFkZFwiKTtcbmxldCBidG5DYW5jZWxBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1jYW5jZWwtYWRkXCIpO1xuXG5sZXQgdG9kb0Zvcm1FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tZWRpdFwiKTtcbmxldCBidG5TdWJtaXRFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tc3VibWl0LWVkaXRcIik7XG5sZXQgYnRuQ2FuY2VsRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWNhbmNlbC1lZGl0XCIpO1xuXG5sZXQgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC1wcm9qZWN0XCIpO1xubGV0IGlucHV0QWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1pbnB1dFwiKTtcbmxldCBpUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ib3hcIik7XG5cbmxldCBpbmJveFByb2plY3QgPSB7XG4gIGlkOiBcImRlZmF1bHRJRFwiLFxuICBuYW1lOiBcIkluYm94XCIsXG4gIHRvZG9zOiBbXSxcbn07XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5sZXQgY3VycmVudFByb2plY3QgPSB1bmRlZmluZWQ7XG5sZXQgZGVmUHJvamVjdCA9IHVuZGVmaW5lZDtcbmxldCBpbmRleE9mQ2xpY2tlZFRvZG8gPSB1bmRlZmluZWQ7XG5cbi8vIEVWRU5UIExJU1RFTkVSU1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGluYm94UHJvamVjdC50b2RvcyA9IGdldFN0b3JhZ2VEYXRhKFwiaW5ib3hBcnJheVwiKTtcbiAgcHJvamVjdHMgPSBnZXRTdG9yYWdlRGF0YShcInByb2plY3RzQXJyYXlcIik7XG5cbiAgZGVmUHJvamVjdCA9IGluYm94UHJvamVjdC50b2RvcztcbiAgY3VycmVudFByb2plY3QgPSBkZWZQcm9qZWN0O1xuXG4gIHJlbmRlclRvZG9zKGRlZlByb2plY3QpO1xuICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG4gIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG4gIHJlbW92ZUFjdGl2ZVN0YXR1c09uUHJvamVjdHMoKTtcbiAgaVByb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn0pO1xuXG5pUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyhkZWZQcm9qZWN0KTtcbiAgcmVuZGVyVG9kb3MoZGVmUHJvamVjdCk7XG4gIGN1cnJlbnRQcm9qZWN0ID0gZGVmUHJvamVjdDtcbiAgcmVtb3ZlQWN0aXZlU3RhdHVzT25Qcm9qZWN0cygpO1xuICBpUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufSk7XG5cbmJ0bkFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG59KTtcblxuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAoaW5wdXRBZGRQcm9qZWN0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0cyk7XG4gICAgcmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuICAgIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG4gICAgZ2l2ZUFkZGVkUHJvamVjdEFjdGl2ZVN0YXR1cygpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICAgIGlQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB0b2RvRm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxufSk7XG5cbmJ0blN1Ym1pdEFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGlmICh0b2RvRm9ybUFkZC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWFkZFwiKS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgY3JlYXRlVG9kbyhjdXJyZW50UHJvamVjdCwgZGVmUHJvamVjdCk7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgIHRvZG9Gb3JtQWRkLnJlc2V0KCk7XG4gICAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcInByb2plY3RzQXJyYXlcIiwgcHJvamVjdHMpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwiaW5ib3hBcnJheVwiLCBkZWZQcm9qZWN0KTtcbiAgfVxufSk7XG5cbmJ0bkNhbmNlbEFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZG9Gb3JtQWRkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59KTtcblxuYnRuU3VibWl0RWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGlmICh0b2RvRm9ybUVkaXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2RvRm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBzdWJtaXRFZGl0VG9kbyhjdXJyZW50UHJvamVjdCwgaW5kZXhPZkNsaWNrZWRUb2RvKTtcbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c0FycmF5XCIsIHByb2plY3RzKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcImluYm94QXJyYXlcIiwgZGVmUHJvamVjdCk7XG4gIH1cbn0pO1xuXG5idG5DYW5jZWxFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59KTtcblxudG9kb1VMLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAvLyBERUxFVEVcbiAgZnVuY3Rpb24gZGVsZXRlVG9kbyhhcnJheSkge1xuICAgIGFycmF5LnNwbGljZShmaW5kSW5kZXgoY3VycmVudFByb2plY3QsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpLCAxKTtcbiAgICBpZiAoY3VycmVudFByb2plY3QgIT09IGRlZlByb2plY3QpIHtcbiAgICAgIGRlZlByb2plY3Quc3BsaWNlKGZpbmRJbmRleChkZWZQcm9qZWN0LCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKSwgMSk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gZGVmUHJvamVjdCkge1xuICAgICAgbGV0IHByb2plY3RPZlJlcGVhdGVkVG9kbyA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT5cbiAgICAgICAgcHJvamVjdC50b2Rvcy5zb21lKFxuICAgICAgICAgICh0b2RvKSA9PiB0b2RvLmlkID09PSBwYXJzZUludChlLnRhcmdldC5wYXJlbnROb2RlLmlkKVxuICAgICAgICApXG4gICAgICApWzBdO1xuICAgICAgaWYgKHByb2plY3RPZlJlcGVhdGVkVG9kbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb2plY3RPZlJlcGVhdGVkVG9kby50b2Rvcy5zcGxpY2UoXG4gICAgICAgICAgZmluZEluZGV4KHByb2plY3RPZlJlcGVhdGVkVG9kby50b2RvcywgZS50YXJnZXQucGFyZW50Tm9kZS5pZCksXG4gICAgICAgICAgMVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c0FycmF5XCIsIHByb2plY3RzKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcImluYm94QXJyYXlcIiwgZGVmUHJvamVjdCk7XG4gIH1cblxuICAvL0VESVRcbiAgZnVuY3Rpb24gb3BlbkVkaXRGb3JtKCkge1xuICAgIGluZGV4T2ZDbGlja2VkVG9kbyA9IGZpbmRJbmRleChjdXJyZW50UHJvamVjdCwgZS50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgdG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgcmVuZGVyVG9kb0luZm8oY3VycmVudFByb2plY3QsIGluZGV4T2ZDbGlja2VkVG9kbyk7XG4gIH1cblxuICAvL0NIQU5HRSBDSEVDS0VEIFNUQVRVU1xuICBmdW5jdGlvbiBjaGFuZ2VDaGVja2VkU3RhdHVzKGFycmF5KSB7XG4gICAgaW5kZXhPZkNsaWNrZWRUb2RvID0gZmluZEluZGV4KGN1cnJlbnRQcm9qZWN0LCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICAvL1xuICAgIGFycmF5W2luZGV4T2ZDbGlja2VkVG9kb10uaXNDaGVja2VkID0gYXJyYXlbaW5kZXhPZkNsaWNrZWRUb2RvXS5pc0NoZWNrZWRcbiAgICAgID8gZmFsc2VcbiAgICAgIDogdHJ1ZTtcbiAgICAvL1xuXG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ICE9PSBkZWZQcm9qZWN0KSB7XG4gICAgICBsZXQgaW5ib3hJbmRleCA9IGZpbmRJbmRleChkZWZQcm9qZWN0LCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICAgIGNvbnNvbGUubG9nKGluYm94SW5kZXgpO1xuICAgICAgZGVmUHJvamVjdFtpbmJveEluZGV4XS5pc0NoZWNrZWQgPSBhcnJheVtpbmRleE9mQ2xpY2tlZFRvZG9dLmlzQ2hlY2tlZFxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ID09PSBkZWZQcm9qZWN0KSB7XG4gICAgICBsZXQgcHJvamVjdE9mUmVwZWF0ZWRUb2RvID0gcHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PlxuICAgICAgICBwcm9qZWN0LnRvZG9zLnNvbWUoXG4gICAgICAgICAgKHRvZG8pID0+IHRvZG8uaWQgPT09IHBhcnNlSW50KGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpXG4gICAgICAgIClcbiAgICAgIClbMF07XG4gICAgICBpZiAocHJvamVjdE9mUmVwZWF0ZWRUb2RvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGV0IHJlcGVhdGVkVG9kb0luZGV4ID0gZmluZEluZGV4KFxuICAgICAgICAgIHByb2plY3RPZlJlcGVhdGVkVG9kby50b2RvcyxcbiAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmlkXG4gICAgICAgICk7XG4gICAgICAgIHByb2plY3RPZlJlcGVhdGVkVG9kby50b2Rvc1tyZXBlYXRlZFRvZG9JbmRleF0uaXNDaGVja2VkID0gZGVmUHJvamVjdFtcbiAgICAgICAgICBpbmRleE9mQ2xpY2tlZFRvZG9cbiAgICAgICAgXS5pc0NoZWNrZWRcbiAgICAgICAgICA/IHRydWVcbiAgICAgICAgICA6IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vXG5cbiAgaWYgKFxuICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcImNoZWNrXCIgfHxcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJwZW5kaW5nX2FjdGlvbnNcIlxuICApIHtcbiAgICBjaGFuZ2VDaGVja2VkU3RhdHVzKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcInByb2plY3RzQXJyYXlcIiwgcHJvamVjdHMpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwiaW5ib3hBcnJheVwiLCBkZWZQcm9qZWN0KTtcbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiZGVsZXRlXCIpIHtcbiAgICBkZWxldGVUb2RvKGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuXG4gIGlmIChcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJ2aXNpYmlsaXR5XCIgJiZcbiAgICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIilcbiAgKSB7XG4gICAgb3BlbkVkaXRGb3JtKCk7XG4gIH1cbn0pO1xuXG5wcm9qZWN0VUwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIHRvZG9Gb3JtQWRkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAvLyBERUxFVEVcbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChhcnJheSkge1xuICAgIC8vIHByb2plY3RzW2ZpbmRJbmRleChwcm9qZWN0cywgZS50YXJnZXQucGFyZW50Tm9kZS5pZCldLnRvZG9zID0gW107XG4gICAgbGV0IGRlbGV0ZWRQcm9qZWN0ID1cbiAgICAgIHByb2plY3RzW2ZpbmRJbmRleChwcm9qZWN0cywgZS50YXJnZXQucGFyZW50Tm9kZS5pZCldLnRvZG9zO1xuICAgIGluYm94UHJvamVjdC50b2RvcyA9IGluYm94UHJvamVjdC50b2Rvcy5maWx0ZXIoXG4gICAgICAoaSkgPT4gIWRlbGV0ZWRQcm9qZWN0LmluY2x1ZGVzKGkpXG4gICAgKTtcbiAgICBkZWZQcm9qZWN0ID0gaW5ib3hQcm9qZWN0LnRvZG9zO1xuICAgIC8vXG4gICAgYXJyYXkuc3BsaWNlKGZpbmRJbmRleChwcm9qZWN0cywgZS50YXJnZXQucGFyZW50Tm9kZS5pZCksIDEpO1xuICAgIHJlbmRlclByb2plY3RzKHByb2plY3RzKTtcbiAgICBlbmFibGVQcm9qZWN0TmF2aWdhdGlvbigpO1xuICAgIGNvbnNvbGUubG9nKGRlZlByb2plY3QpO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcImRlbGV0ZVwiKSB7XG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0cyk7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgIGdpdmVMYXN0UHJvamVjdEFjdGl2ZVN0YXR1cygpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICB9XG5cbiAgaWYgKHByb2plY3RzLmxlbmd0aCA8IDEpIHtcbiAgICBpUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gZGVmUHJvamVjdDtcbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIH0gZWxzZSBpZiAocHJvamVjdHMubGVuZ3RoID49IDEpIHtcbiAgICBpUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZW5hYmxlUHJvamVjdE5hdmlnYXRpb24oKSB7XG4gIC8vIEdldCBhbGwgYnV0dG9ucyB3aXRoIGNsYXNzPVwibGlcIiBpbnNpZGUgdGhlIGNvbnRhaW5lclxuICBsZXQgcHJvamVjdExJcyA9IHByb2plY3RVTC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlcIik7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBidXR0b25zIGFuZCBhZGQgdGhlIGFjdGl2ZSBjbGFzcyB0byB0aGUgY3VycmVudC9jbGlja2VkIGJ1dHRvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMSXMubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0TElzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmVcIik7XG4gICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2ldLnRvZG9zO1xuICAgICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgICAgLy8gSWYgdGhlcmUncyBubyBhY3RpdmUgY2xhc3NcbiAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIGN1cnJlbnQvY2xpY2tlZCBidXR0b25cbiAgICAgIHRoaXMuY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFjdGl2ZVN0YXR1c09uUHJvamVjdHMoKSB7XG4gIGxldCBwcm9qZWN0TElzID0gcHJvamVjdFVMLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaVwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TElzLmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdExJc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdpdmVBZGRlZFByb2plY3RBY3RpdmVTdGF0dXMoKSB7XG4gIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0udG9kb3M7XG4gIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZ2l2ZUxhc3RQcm9qZWN0QWN0aXZlU3RhdHVzKCkge1xuICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0udG9kb3M7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFRvTG9jYWxTdG9yYWdlKG5hbWUsIGFycikge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShhcnIpKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RvcmFnZURhdGEobmFtZSkge1xuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSB8fCBcIltdXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9