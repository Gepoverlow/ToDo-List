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
    dueDateLI.textContent = checkDueDate(todoArray[i].dueDate);
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
  // dueDateInput.value = array[index].dueDate;
  priorityInput.value = array[index].priority;
  notesInput.value = array[index].notes;
  // dueDateInput.value = transformDateFormat(array[index].dueDate);

  if (typeof array[index].dueDate === "string") {
    dueDateInput.value = transformFromString(array[index].dueDate);
  } else if (typeof array[index].dueDate === "object") {
    dueDateInput.value = transformFromObj(array[index].dueDate);
  }
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

function checkDueDate(value) {
  let dateToday = new Date();
  let dateInputted = new Date(value);

  let diffTime = Math.abs(dateInputted - dateToday);
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (dateToday > dateInputted && diffDays === 1) {
    return `due today!`;
  } else if (dateToday < dateInputted) {
    return `due in ${diffDays.toString()} days`;
  } else if (dateToday > dateInputted) {
    return `${diffDays.toString() - 1} days overdue`;
  }
}

function transformFromObj(obj) {
  let dd = String(obj.getDate()).padStart(2, "0");
  let mm = String(obj.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = obj.getFullYear();

  let transformedDate = `${yyyy}-${mm}-${dd}`;
  console.log(transformedDate);
  return transformedDate;
}

function transformFromString(str) {
  let transformedDate = str.slice(0, 10);
  return transformedDate;
}

// function transformDateFormat(date) {
//   var dd = String(date.getDate()).padStart(2, "0");
//   var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
//   var yyyy = today.getFullYear();

//   transformedDate = `${mm}-${dd}-${yyyy}`;
//   return transformedDate;
// }




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
  let dueDateInput = new Date(
    document.getElementById("input-due-date-add").value
  );
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
let sortBtn = document.getElementById("sort");

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

sortBtn.addEventListener("click", () => {
  console.log(defProject);
  sortDates(defProject);
  console.log(defProject);
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

function sortDates(defArray) {
  defArray.sort(function compare(a, b) {
    let dateA = new Date(a.dueDate);
    let dateB = new Date(b.dueDate);
    return dateA - dateB;
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFJLDREQUFXO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDJEQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkRBQVM7QUFDMUIsSUFBSSwrREFBYztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDREQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBVztBQUNmLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSw0REFBVztBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQVc7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9kb20tQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvcHJvamVjdC1DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy90b2RvLUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCB0b2RvVUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdWxcIik7XG5sZXQgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXVsXCIpO1xubGV0IHByb2plY3RMSXMgPSBwcm9qZWN0VUwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpXCIpO1xuXG5mdW5jdGlvbiByZW5kZXJUb2Rvcyh0b2RvQXJyYXkpIHtcbiAgZW1wdHlOb2RlKHRvZG9VTCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdG9kb0xJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCB0aXRsZUxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGR1ZURhdGVMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBidG5FZGl0VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxldCBidG5EZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbGV0IGlzQ2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgdG9kb1VMLmFwcGVuZENoaWxkKHRvZG9MSSk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKHRpdGxlTEkpO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZChkdWVEYXRlTEkpO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZChidG5FZGl0VG9kbyk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKGJ0bkRlbGV0ZVRvZG8pO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZChpc0NoZWNrZWQpO1xuXG4gICAgdG9kb0xJLmlkID0gdG9kb0FycmF5W2ldLmlkO1xuICAgIHRpdGxlTEkudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0udGl0bGU7XG4gICAgZHVlRGF0ZUxJLnRleHRDb250ZW50ID0gY2hlY2tEdWVEYXRlKHRvZG9BcnJheVtpXS5kdWVEYXRlKTtcbiAgICBidG5FZGl0VG9kby50ZXh0Q29udGVudCA9IFwidmlzaWJpbGl0eVwiO1xuICAgIGJ0bkRlbGV0ZVRvZG8udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuXG4gICAgYnRuRGVsZXRlVG9kby5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG4gICAgYnRuRWRpdFRvZG8uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiO1xuICAgIGlzQ2hlY2tlZC5jbGFzc05hbWUgPSBcIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI7XG5cbiAgICBpZiAodG9kb0FycmF5W2ldLmlzQ2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgaXNDaGVja2VkLnRleHRDb250ZW50ID0gXCJjaGVja1wiO1xuICAgIH0gZWxzZSBpZiAodG9kb0FycmF5W2ldLmlzQ2hlY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGlzQ2hlY2tlZC50ZXh0Q29udGVudCA9IFwicGVuZGluZ19hY3Rpb25zXCI7XG4gICAgfVxuXG4gICAgaWYgKHRvZG9BcnJheVtpXS5wcmlvcml0eSA9PT0gXCIwXCIpIHtcbiAgICAgIHRvZG9MSS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM5OWZmOTlcIjtcbiAgICB9IGVsc2UgaWYgKHRvZG9BcnJheVtpXS5wcmlvcml0eSA9PT0gXCIxXCIpIHtcbiAgICAgIHRvZG9MSS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNhZGFkZWJcIjtcbiAgICB9IGVsc2UgaWYgKHRvZG9BcnJheVtpXS5wcmlvcml0eSA9PT0gXCIyXCIpIHtcbiAgICAgIHRvZG9MSS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZjgwODBcIjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdEFycmF5KSB7XG4gIGVtcHR5Tm9kZShwcm9qZWN0VUwpO1xuXG4gIC8vQ1JFQVRFIFRPRE8gRUxFTUVOVFNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcHJvamVjdExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCBwcm9qZWN0RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICBwcm9qZWN0TEkudGV4dENvbnRlbnQgPSBwcm9qZWN0QXJyYXlbaV0ubmFtZTtcbiAgICBwcm9qZWN0RGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcblxuICAgIHByb2plY3REZWxldGVCdG4uY2xhc3NOYW1lID0gXCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiO1xuICAgIHByb2plY3RMSS5pZCA9IHByb2plY3RBcnJheVtpXS5pZDtcbiAgICBwcm9qZWN0TEkuY2xhc3NMaXN0LmFkZChcImxpXCIpO1xuXG4gICAgcHJvamVjdFVMLmFwcGVuZENoaWxkKHByb2plY3RMSSk7XG4gICAgcHJvamVjdExJLmFwcGVuZENoaWxkKHByb2plY3REZWxldGVCdG4pO1xuICB9XG5cbiAgLy9HSVZFIFRIRSBMQVNUIElURU0gT0YgVEhFIE5PREVMSVNUIFRIRSBBQ1RJVkUgU1RZTEVcbiAgdXBkYXRlQWN0aXZlUHJvamVjdChwcm9qZWN0TElzLmxlbmd0aCAtIDEpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RvSW5mbyhhcnJheSwgaW5kZXgpIHtcbiAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlLWVkaXRcIik7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvbi1lZGl0XCIpO1xuICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZS1lZGl0XCIpO1xuICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHktZWRpdFwiKTtcbiAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWVkaXRcIik7XG5cbiAgdGl0bGVJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS50aXRsZTtcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5kZXNjcmlwdGlvbjtcbiAgLy8gZHVlRGF0ZUlucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLmR1ZURhdGU7XG4gIHByaW9yaXR5SW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0ucHJpb3JpdHk7XG4gIG5vdGVzSW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0ubm90ZXM7XG4gIC8vIGR1ZURhdGVJbnB1dC52YWx1ZSA9IHRyYW5zZm9ybURhdGVGb3JtYXQoYXJyYXlbaW5kZXhdLmR1ZURhdGUpO1xuXG4gIGlmICh0eXBlb2YgYXJyYXlbaW5kZXhdLmR1ZURhdGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0cmFuc2Zvcm1Gcm9tU3RyaW5nKGFycmF5W2luZGV4XS5kdWVEYXRlKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJyYXlbaW5kZXhdLmR1ZURhdGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSB0cmFuc2Zvcm1Gcm9tT2JqKGFycmF5W2luZGV4XS5kdWVEYXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdWJtaXRFZGl0VG9kbyhhcnJheSwgaW5kZXgpIHtcbiAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlLWVkaXRcIik7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvbi1lZGl0XCIpO1xuICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZS1lZGl0XCIpO1xuICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHktZWRpdFwiKTtcbiAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWVkaXRcIik7XG5cbiAgYXJyYXlbaW5kZXhdLnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgYXJyYXlbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgYXJyYXlbaW5kZXhdLmR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5wcmlvcml0eSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5ub3RlcyA9IG5vdGVzSW5wdXQudmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZVByb2plY3QoaW5kZXgpIHtcbiAgbGV0IHByb2plY3RMSXMgPSBwcm9qZWN0VUwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpXCIpO1xuICBsZXQgbGFzdFByb2plY3QgPSBwcm9qZWN0TElzW2luZGV4XTtcbiAgaWYgKHByb2plY3RMSXMubGVuZ3RoID4gMCkge1xuICAgIGxhc3RQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW1wdHlOb2RlKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0R1ZURhdGUodmFsdWUpIHtcbiAgbGV0IGRhdGVUb2RheSA9IG5ldyBEYXRlKCk7XG4gIGxldCBkYXRlSW5wdXR0ZWQgPSBuZXcgRGF0ZSh2YWx1ZSk7XG5cbiAgbGV0IGRpZmZUaW1lID0gTWF0aC5hYnMoZGF0ZUlucHV0dGVkIC0gZGF0ZVRvZGF5KTtcbiAgbGV0IGRpZmZEYXlzID0gTWF0aC5jZWlsKGRpZmZUaW1lIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcblxuICBpZiAoZGF0ZVRvZGF5ID4gZGF0ZUlucHV0dGVkICYmIGRpZmZEYXlzID09PSAxKSB7XG4gICAgcmV0dXJuIGBkdWUgdG9kYXkhYDtcbiAgfSBlbHNlIGlmIChkYXRlVG9kYXkgPCBkYXRlSW5wdXR0ZWQpIHtcbiAgICByZXR1cm4gYGR1ZSBpbiAke2RpZmZEYXlzLnRvU3RyaW5nKCl9IGRheXNgO1xuICB9IGVsc2UgaWYgKGRhdGVUb2RheSA+IGRhdGVJbnB1dHRlZCkge1xuICAgIHJldHVybiBgJHtkaWZmRGF5cy50b1N0cmluZygpIC0gMX0gZGF5cyBvdmVyZHVlYDtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Gcm9tT2JqKG9iaikge1xuICBsZXQgZGQgPSBTdHJpbmcob2JqLmdldERhdGUoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICBsZXQgbW0gPSBTdHJpbmcob2JqLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vSmFudWFyeSBpcyAwIVxuICBsZXQgeXl5eSA9IG9iai5nZXRGdWxsWWVhcigpO1xuXG4gIGxldCB0cmFuc2Zvcm1lZERhdGUgPSBgJHt5eXl5fS0ke21tfS0ke2RkfWA7XG4gIGNvbnNvbGUubG9nKHRyYW5zZm9ybWVkRGF0ZSk7XG4gIHJldHVybiB0cmFuc2Zvcm1lZERhdGU7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUZyb21TdHJpbmcoc3RyKSB7XG4gIGxldCB0cmFuc2Zvcm1lZERhdGUgPSBzdHIuc2xpY2UoMCwgMTApO1xuICByZXR1cm4gdHJhbnNmb3JtZWREYXRlO1xufVxuXG4vLyBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRlRm9ybWF0KGRhdGUpIHtcbi8vICAgdmFyIGRkID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4vLyAgIHZhciBtbSA9IFN0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCBcIjBcIik7IC8vSmFudWFyeSBpcyAwIVxuLy8gICB2YXIgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbi8vICAgdHJhbnNmb3JtZWREYXRlID0gYCR7bW19LSR7ZGR9LSR7eXl5eX1gO1xuLy8gICByZXR1cm4gdHJhbnNmb3JtZWREYXRlO1xuLy8gfVxuXG5leHBvcnQgeyByZW5kZXJUb2RvcywgcmVuZGVyUHJvamVjdHMsIHJlbmRlclRvZG9JbmZvLCBzdWJtaXRFZGl0VG9kbyB9O1xuIiwiLy8gZXhwb3J0IGxldCBpbmJveFByb2plY3QgPSB7XG4vLyAgIGlkOiBcImRlZmF1bHRJRFwiLFxuLy8gICBuYW1lOiBcIkluYm94XCIsXG4vLyAgIHRvZG9zOiBnZXRTdG9yYWdlRGF0YShcImluYm94QXJyYXlcIiksXG4vLyB9O1xuXG4vLyBleHBvcnQgbGV0IHByb2plY3RzID0gZ2V0U3RvcmFnZURhdGEoXCJwcm9qZWN0c0FycmF5XCIpO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobWFpbkFycmF5KSB7XG4gIC8vQ1JFQVRFIFRIRSBQUk9KRUNUXG4gIGxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW5wdXRcIik7XG4gIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcbiAgbWFpbkFycmF5LnB1c2gocHJvamVjdCk7XG4gIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG59XG4vLyBmdW5jdGlvbiBnZXRTdG9yYWdlRGF0YShuYW1lKSB7XG4vLyAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpIHx8IFwiW11cIik7XG4vLyB9XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfTtcbiIsImNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgaXNDaGVja2VkKSB7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSBpc0NoZWNrZWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVG9kbyhjdXJyZW50QXJyLCBkZWZQcm9qZWN0KSB7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1hZGRcIikudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvbi1hZGRcIikudmFsdWU7XG4gIGxldCBkdWVEYXRlSW5wdXQgPSBuZXcgRGF0ZShcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWFkZFwiKS52YWx1ZVxuICApO1xuICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHktYWRkXCIpLnZhbHVlO1xuICBsZXQgbm90ZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtYWRkXCIpLnZhbHVlO1xuICAvL1xuICBsZXQgdG9kbyA9IG5ldyBUb2RvKFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGVzY3JpcHRpb25JbnB1dCxcbiAgICBkdWVEYXRlSW5wdXQsXG4gICAgcHJpb3JpdHlJbnB1dCxcbiAgICBub3Rlc0lucHV0LFxuICAgIGZhbHNlXG4gICk7XG4gIGN1cnJlbnRBcnIucHVzaCh0b2RvKTtcbiAgaWYgKGN1cnJlbnRBcnIgIT09IGRlZlByb2plY3QpIHtcbiAgICBkZWZQcm9qZWN0LnB1c2godG9kbyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFyciwgdGFyZ2V0KSB7XG4gIGxldCBwb3MgPSBhcnJcbiAgICAubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gZS5pZDtcbiAgICB9KVxuICAgIC5pbmRleE9mKHBhcnNlSW50KHRhcmdldCkpO1xuICByZXR1cm4gcG9zO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvLCBmaW5kSW5kZXggfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQvL0ZSRVNIIFNUQVJULy9GUkVTSCBTVEFSVC8vRlJFU0ggU1RBUlRcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LUNyZWF0b3JcIjtcbmltcG9ydCB7XG4gIHJlbmRlclRvZG9zLFxuICByZW5kZXJQcm9qZWN0cyxcbiAgcmVuZGVyVG9kb0luZm8sXG4gIHN1Ym1pdEVkaXRUb2RvLFxufSBmcm9tIFwiLi9kb20tQ3JlYXRvci5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9kbywgZmluZEluZGV4IH0gZnJvbSBcIi4vdG9kby1DcmVhdG9yLmpzXCI7XG5cbmxldCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdWxcIik7XG5sZXQgdG9kb1VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXVsXCIpO1xubGV0IGJ0bkFkZFRvRG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1hZGQtdG9kb1wiKTtcblxubGV0IHRvZG9Gb3JtQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tYWRkXCIpO1xubGV0IGJ0blN1Ym1pdEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXN1Ym1pdC1hZGRcIik7XG5sZXQgYnRuQ2FuY2VsQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY2FuY2VsLWFkZFwiKTtcblxubGV0IHRvZG9Gb3JtRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWVkaXRcIik7XG5sZXQgYnRuU3VibWl0RWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXN1Ym1pdC1lZGl0XCIpO1xubGV0IGJ0bkNhbmNlbEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1jYW5jZWwtZWRpdFwiKTtcblxubGV0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1hZGQtcHJvamVjdFwiKTtcbmxldCBpbnB1dEFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW5wdXRcIik7XG5sZXQgaVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluYm94XCIpO1xubGV0IHNvcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRcIik7XG5cbmxldCBpbmJveFByb2plY3QgPSB7XG4gIGlkOiBcImRlZmF1bHRJRFwiLFxuICBuYW1lOiBcIkluYm94XCIsXG4gIHRvZG9zOiBbXSxcbn07XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5sZXQgY3VycmVudFByb2plY3QgPSB1bmRlZmluZWQ7XG5sZXQgZGVmUHJvamVjdCA9IHVuZGVmaW5lZDtcbmxldCBpbmRleE9mQ2xpY2tlZFRvZG8gPSB1bmRlZmluZWQ7XG5cbi8vIEVWRU5UIExJU1RFTkVSU1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGluYm94UHJvamVjdC50b2RvcyA9IGdldFN0b3JhZ2VEYXRhKFwiaW5ib3hBcnJheVwiKTtcbiAgcHJvamVjdHMgPSBnZXRTdG9yYWdlRGF0YShcInByb2plY3RzQXJyYXlcIik7XG5cbiAgZGVmUHJvamVjdCA9IGluYm94UHJvamVjdC50b2RvcztcbiAgY3VycmVudFByb2plY3QgPSBkZWZQcm9qZWN0O1xuXG4gIHJlbmRlclRvZG9zKGRlZlByb2plY3QpO1xuICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG4gIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG4gIHJlbW92ZUFjdGl2ZVN0YXR1c09uUHJvamVjdHMoKTtcbiAgaVByb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn0pO1xuXG5pUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICByZW5kZXJUb2RvcyhkZWZQcm9qZWN0KTtcbiAgY3VycmVudFByb2plY3QgPSBkZWZQcm9qZWN0O1xuICByZW1vdmVBY3RpdmVTdGF0dXNPblByb2plY3RzKCk7XG4gIGlQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59KTtcblxuYnRuQWRkVG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAodG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgIHRvZG9Gb3JtQWRkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cbn0pO1xuXG5idG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChpbnB1dEFkZFByb2plY3QudmFsdWUgIT09IFwiXCIpIHtcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RzKTtcbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgZW5hYmxlUHJvamVjdE5hdmlnYXRpb24oKTtcbiAgICBnaXZlQWRkZWRQcm9qZWN0QWN0aXZlU3RhdHVzKCk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c0FycmF5XCIsIHByb2plY3RzKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcImluYm94QXJyYXlcIiwgZGVmUHJvamVjdCk7XG4gICAgaVByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG59KTtcblxuYnRuU3VibWl0QWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgaWYgKHRvZG9Gb3JtQWRkLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tYWRkXCIpLmNoZWNrVmFsaWRpdHkoKTtcbiAgICBjcmVhdGVUb2RvKGN1cnJlbnRQcm9qZWN0LCBkZWZQcm9qZWN0KTtcbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gICAgdG9kb0Zvcm1BZGQucmVzZXQoKTtcbiAgICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICB9XG59KTtcblxuYnRuQ2FuY2VsQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn0pO1xuXG5idG5TdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgaWYgKHRvZG9Gb3JtRWRpdC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHN1Ym1pdEVkaXRUb2RvKGN1cnJlbnRQcm9qZWN0LCBpbmRleE9mQ2xpY2tlZFRvZG8pO1xuICAgIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcInByb2plY3RzQXJyYXlcIiwgcHJvamVjdHMpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwiaW5ib3hBcnJheVwiLCBkZWZQcm9qZWN0KTtcbiAgfVxufSk7XG5cbmJ0bkNhbmNlbEVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICB0b2RvRm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn0pO1xuXG5zb3J0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGRlZlByb2plY3QpO1xuICBzb3J0RGF0ZXMoZGVmUHJvamVjdCk7XG4gIGNvbnNvbGUubG9nKGRlZlByb2plY3QpO1xufSk7XG5cbnRvZG9VTC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgLy8gREVMRVRFXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG8oYXJyYXkpIHtcbiAgICBhcnJheS5zcGxpY2UoZmluZEluZGV4KGN1cnJlbnRQcm9qZWN0LCBlLnRhcmdldC5wYXJlbnROb2RlLmlkKSwgMSk7XG4gICAgaWYgKGN1cnJlbnRQcm9qZWN0ICE9PSBkZWZQcm9qZWN0KSB7XG4gICAgICBkZWZQcm9qZWN0LnNwbGljZShmaW5kSW5kZXgoZGVmUHJvamVjdCwgZS50YXJnZXQucGFyZW50Tm9kZS5pZCksIDEpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFByb2plY3QgPT09IGRlZlByb2plY3QpIHtcbiAgICAgIGxldCBwcm9qZWN0T2ZSZXBlYXRlZFRvZG8gPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+XG4gICAgICAgIHByb2plY3QudG9kb3Muc29tZShcbiAgICAgICAgICAodG9kbykgPT4gdG9kby5pZCA9PT0gcGFyc2VJbnQoZS50YXJnZXQucGFyZW50Tm9kZS5pZClcbiAgICAgICAgKVxuICAgICAgKVswXTtcbiAgICAgIGlmIChwcm9qZWN0T2ZSZXBlYXRlZFRvZG8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9qZWN0T2ZSZXBlYXRlZFRvZG8udG9kb3Muc3BsaWNlKFxuICAgICAgICAgIGZpbmRJbmRleChwcm9qZWN0T2ZSZXBlYXRlZFRvZG8udG9kb3MsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpLFxuICAgICAgICAgIDFcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwicHJvamVjdHNBcnJheVwiLCBwcm9qZWN0cyk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJpbmJveEFycmF5XCIsIGRlZlByb2plY3QpO1xuICB9XG5cbiAgLy9FRElUXG4gIGZ1bmN0aW9uIG9wZW5FZGl0Rm9ybSgpIHtcbiAgICBpbmRleE9mQ2xpY2tlZFRvZG8gPSBmaW5kSW5kZXgoY3VycmVudFByb2plY3QsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgIHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIHJlbmRlclRvZG9JbmZvKGN1cnJlbnRQcm9qZWN0LCBpbmRleE9mQ2xpY2tlZFRvZG8pO1xuICB9XG5cbiAgLy9DSEFOR0UgQ0hFQ0tFRCBTVEFUVVNcbiAgZnVuY3Rpb24gY2hhbmdlQ2hlY2tlZFN0YXR1cyhhcnJheSkge1xuICAgIGluZGV4T2ZDbGlja2VkVG9kbyA9IGZpbmRJbmRleChjdXJyZW50UHJvamVjdCwgZS50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgLy9cbiAgICBhcnJheVtpbmRleE9mQ2xpY2tlZFRvZG9dLmlzQ2hlY2tlZCA9IGFycmF5W2luZGV4T2ZDbGlja2VkVG9kb10uaXNDaGVja2VkXG4gICAgICA/IGZhbHNlXG4gICAgICA6IHRydWU7XG4gICAgLy9cblxuICAgIGlmIChjdXJyZW50UHJvamVjdCAhPT0gZGVmUHJvamVjdCkge1xuICAgICAgbGV0IGluYm94SW5kZXggPSBmaW5kSW5kZXgoZGVmUHJvamVjdCwgZS50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgICBjb25zb2xlLmxvZyhpbmJveEluZGV4KTtcbiAgICAgIGRlZlByb2plY3RbaW5ib3hJbmRleF0uaXNDaGVja2VkID0gYXJyYXlbaW5kZXhPZkNsaWNrZWRUb2RvXS5pc0NoZWNrZWRcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogZmFsc2U7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UHJvamVjdCA9PT0gZGVmUHJvamVjdCkge1xuICAgICAgbGV0IHByb2plY3RPZlJlcGVhdGVkVG9kbyA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT5cbiAgICAgICAgcHJvamVjdC50b2Rvcy5zb21lKFxuICAgICAgICAgICh0b2RvKSA9PiB0b2RvLmlkID09PSBwYXJzZUludChlLnRhcmdldC5wYXJlbnROb2RlLmlkKVxuICAgICAgICApXG4gICAgICApWzBdO1xuICAgICAgaWYgKHByb2plY3RPZlJlcGVhdGVkVG9kbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCByZXBlYXRlZFRvZG9JbmRleCA9IGZpbmRJbmRleChcbiAgICAgICAgICBwcm9qZWN0T2ZSZXBlYXRlZFRvZG8udG9kb3MsXG4gICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5pZFxuICAgICAgICApO1xuICAgICAgICBwcm9qZWN0T2ZSZXBlYXRlZFRvZG8udG9kb3NbcmVwZWF0ZWRUb2RvSW5kZXhdLmlzQ2hlY2tlZCA9IGRlZlByb2plY3RbXG4gICAgICAgICAgaW5kZXhPZkNsaWNrZWRUb2RvXG4gICAgICAgIF0uaXNDaGVja2VkXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvL1xuXG4gIGlmIChcbiAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJjaGVja1wiIHx8XG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwicGVuZGluZ19hY3Rpb25zXCJcbiAgKSB7XG4gICAgY2hhbmdlQ2hlY2tlZFN0YXR1cyhjdXJyZW50UHJvamVjdCk7XG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UoXCJwcm9qZWN0c0FycmF5XCIsIHByb2plY3RzKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcImluYm94QXJyYXlcIiwgZGVmUHJvamVjdCk7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9XG5cbiAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSBcImRlbGV0ZVwiKSB7XG4gICAgZGVsZXRlVG9kbyhjdXJyZW50UHJvamVjdCk7XG4gIH1cblxuICBpZiAoXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwidmlzaWJpbGl0eVwiICYmXG4gICAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpXG4gICkge1xuICAgIG9wZW5FZGl0Rm9ybSgpO1xuICB9XG59KTtcblxucHJvamVjdFVMLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICB0b2RvRm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB0b2RvRm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgLy8gREVMRVRFXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoYXJyYXkpIHtcbiAgICAvLyBwcm9qZWN0c1tmaW5kSW5kZXgocHJvamVjdHMsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpXS50b2RvcyA9IFtdO1xuICAgIGxldCBkZWxldGVkUHJvamVjdCA9XG4gICAgICBwcm9qZWN0c1tmaW5kSW5kZXgocHJvamVjdHMsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpXS50b2RvcztcbiAgICBpbmJveFByb2plY3QudG9kb3MgPSBpbmJveFByb2plY3QudG9kb3MuZmlsdGVyKFxuICAgICAgKGkpID0+ICFkZWxldGVkUHJvamVjdC5pbmNsdWRlcyhpKVxuICAgICk7XG4gICAgZGVmUHJvamVjdCA9IGluYm94UHJvamVjdC50b2RvcztcbiAgICAvL1xuICAgIGFycmF5LnNwbGljZShmaW5kSW5kZXgocHJvamVjdHMsIGUudGFyZ2V0LnBhcmVudE5vZGUuaWQpLCAxKTtcbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgZW5hYmxlUHJvamVjdE5hdmlnYXRpb24oKTtcbiAgfVxuXG4gIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJkZWxldGVcIikge1xuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdHMpO1xuICAgIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICBnaXZlTGFzdFByb2plY3RBY3RpdmVTdGF0dXMoKTtcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShcInByb2plY3RzQXJyYXlcIiwgcHJvamVjdHMpO1xuICAgIGFkZFRvTG9jYWxTdG9yYWdlKFwiaW5ib3hBcnJheVwiLCBkZWZQcm9qZWN0KTtcbiAgfVxuXG4gIGlmIChwcm9qZWN0cy5sZW5ndGggPCAxKSB7XG4gICAgaVByb2plY3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBjdXJyZW50UHJvamVjdCA9IGRlZlByb2plY3Q7XG4gICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICB9IGVsc2UgaWYgKHByb2plY3RzLmxlbmd0aCA+PSAxKSB7XG4gICAgaVByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCkge1xuICAvLyBHZXQgYWxsIGJ1dHRvbnMgd2l0aCBjbGFzcz1cImxpXCIgaW5zaWRlIHRoZSBjb250YWluZXJcbiAgbGV0IHByb2plY3RMSXMgPSBwcm9qZWN0VUwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpXCIpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgYnV0dG9ucyBhbmQgYWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIGN1cnJlbnQvY2xpY2tlZCBidXR0b25cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TElzLmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdExJc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlXCIpO1xuICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tpXS50b2RvcztcbiAgICAgIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gYWN0aXZlIGNsYXNzXG4gICAgICBpZiAoY3VycmVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGN1cnJlbnRbMF0uY2xhc3NOYW1lID0gY3VycmVudFswXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgYWN0aXZlIGNsYXNzIHRvIHRoZSBjdXJyZW50L2NsaWNrZWQgYnV0dG9uXG4gICAgICB0aGlzLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVBY3RpdmVTdGF0dXNPblByb2plY3RzKCkge1xuICBsZXQgcHJvamVjdExJcyA9IHByb2plY3RVTC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExJcy5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RMSXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnaXZlQWRkZWRQcm9qZWN0QWN0aXZlU3RhdHVzKCkge1xuICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLnRvZG9zO1xuICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGdpdmVMYXN0UHJvamVjdEFjdGl2ZVN0YXR1cygpIHtcbiAgaWYgKHByb2plY3RzLmxlbmd0aCA+IDApIHtcbiAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLnRvZG9zO1xuICAgIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRUb0xvY2FsU3RvcmFnZShuYW1lLCBhcnIpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoYXJyKSk7XG59XG5cbmZ1bmN0aW9uIGdldFN0b3JhZ2VEYXRhKG5hbWUpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkgfHwgXCJbXVwiKTtcbn1cblxuZnVuY3Rpb24gc29ydERhdGVzKGRlZkFycmF5KSB7XG4gIGRlZkFycmF5LnNvcnQoZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XG4gICAgbGV0IGRhdGVBID0gbmV3IERhdGUoYS5kdWVEYXRlKTtcbiAgICBsZXQgZGF0ZUIgPSBuZXcgRGF0ZShiLmR1ZURhdGUpO1xuICAgIHJldHVybiBkYXRlQSAtIGRhdGVCO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==