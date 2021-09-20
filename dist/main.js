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
/* harmony import */ var _todo_Creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-Creator.js */ "./src/todo-Creator.js");


let todoUL = document.getElementById("todo-ul");
let projectUL = document.getElementById("project-ul");

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
  for (let i = 0; i < projectArray.length; i++) {
    let projectLI = document.createElement("li");
    let projectDeleteBtn = document.createElement("button");

    projectLI.textContent = projectArray[i].name;
    projectDeleteBtn.textContent = "X";

    projectLI.classList.add("li");

    projectUL.appendChild(projectLI);
    projectLI.appendChild(projectDeleteBtn);
  }
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




/***/ }),

/***/ "./src/project-Creator.js":
/*!********************************!*\
  !*** ./src/project-Creator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject)
/* harmony export */ });
let defaultProject = {
  name: "Default",
  todos: [],
};

let projects = [defaultProject];
let projectsUL = document.getElementById("project-ul");

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
}

function createProject(mainArray) {
  let projectInput = document.getElementById("project-input");
  //
  let project = new Project(projectInput.value);
  projectInput.value = "";

  mainArray.push(project);
}

function deleteProject(mainArray) {}




/***/ }),

/***/ "./src/todo-Creator.js":
/*!*****************************!*\
  !*** ./src/todo-Creator.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo)
/* harmony export */ });
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

function createTodo(arr) {
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

  arr.push(todo);
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

let currentProject = _project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects[0].todos;
let indexOfClickedTodo;

// EVENT LISTENERS

document.addEventListener("DOMContentLoaded", () => {
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
  enableProjectNavigation();
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
  }
});

btnSubmitAdd.addEventListener("click", (ev) => {
  ev.preventDefault();
  (0,_todo_Creator_js__WEBPACK_IMPORTED_MODULE_2__.createTodo)(currentProject);
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
  todoFormAdd.reset();
  todoFormAdd.classList.add("hidden");
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
});

btnCancelEdit.addEventListener("click", (ev) => {
  ev.preventDefault();
  todoFormEdit.classList.add("hidden");
});

todoUL.addEventListener("click", function (e) {
  function findIndex(arr) {
    let pos = arr
      .map(function (e) {
        return e.id;
      })
      .indexOf(parseInt(e.target.parentNode.id));
    return pos;
  }

  // DELETE
  function deleteTodo(array) {
    array.splice(findIndex(currentProject), 1);
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodos)(currentProject);
  }

  if (e.target.textContent === "DELETE") {
    deleteTodo(currentProject);
  }
  //EDIT
  function openEditForm() {
    indexOfClickedTodo = findIndex(currentProject);
    todoFormEdit.classList.remove("hidden");
    (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderTodoInfo)(currentProject, indexOfClickedTodo);
  }

  if (
    e.target.textContent === "EDIT" &&
    todoFormAdd.classList.contains("hidden")
  ) {
    openEditForm();
  }
});

function enableProjectNavigation() {
  // Get all buttons with class="btn" inside the container
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

s;
//

//

//

//

//

//

//

//

//

//

//FRESH START //FRESH START //FRESH START //FRESH START //FRESH START //FRESH START//FRESH START//FRESH START//FRESH START

// import {
//   submitAddTodo,
//   cancelAddTodo,
//   submitEditTodo,
//   cancelEditTodo,
// } from "./todoCreator";

// import { submitAddProject } from "./projectCreator";

// ("use strict");

// let form = document.getElementById("todo-form-add");

// let btnAddToDo = document.getElementById("btn-add-todo");
// let btnAddProject = document.getElementById("btn-add-project");

// let btnSubmitAdd = document.getElementById("button-submit-add");
// let btnCancelAdd = document.getElementById("button-cancel-add");

// let btnSubmitEdit = document.getElementById("button-submit-edit");
// let btnCancelEdit = document.getElementById("button-cancel-edit");

// btnAddToDo.addEventListener("click", () => {
//   form.classList.remove("hidden");
// });
// btnAddProject.addEventListener("click", submitAddProject);

// document.addEventListener("DOMContentLoaded", () => {
//   //
// });
// btnSubmitAdd.addEventListener("click", submitAddTodo);
// btnCancelAdd.addEventListener("click", cancelAddTodo);
// //
// btnSubmitEdit.addEventListener("click", submitEditTodo);
// btnCancelEdit.addEventListener("click", cancelEditTodo);
// //

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsWUFBWSxtQkFBbUI7O0FBRS9COztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvZG9tLUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL3Byb2plY3QtQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvdG9kby1DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZhdWx0UHJvamVjdCB9IGZyb20gXCIuL3RvZG8tQ3JlYXRvci5qc1wiO1xuXG5sZXQgdG9kb1VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXVsXCIpO1xubGV0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC11bFwiKTtcblxuZnVuY3Rpb24gcmVuZGVyVG9kb3ModG9kb0FycmF5KSB7XG4gIC8vICEhXG4gIHRvZG9VTC5pbm5lckhUTUwgPSBcIlwiO1xuICAvLyAhIVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9BcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0b2RvTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IHRpdGxlTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgZHVlRGF0ZUxJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGJ0bkVkaXRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgYnRuRGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICB0b2RvVUwuYXBwZW5kQ2hpbGQodG9kb0xJKTtcbiAgICB0b2RvTEkuYXBwZW5kQ2hpbGQodGl0bGVMSSk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKGR1ZURhdGVMSSk7XG4gICAgdG9kb0xJLmFwcGVuZENoaWxkKGJ0bkVkaXRUb2RvKTtcbiAgICB0b2RvTEkuYXBwZW5kQ2hpbGQoYnRuRGVsZXRlVG9kbyk7XG5cbiAgICB0b2RvTEkuaWQgPSB0b2RvQXJyYXlbaV0uaWQ7XG4gICAgdGl0bGVMSS50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS50aXRsZTtcbiAgICBkdWVEYXRlTEkudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0uZHVlRGF0ZTtcbiAgICBidG5FZGl0VG9kby50ZXh0Q29udGVudCA9IFwiRURJVFwiO1xuICAgIGJ0bkRlbGV0ZVRvZG8udGV4dENvbnRlbnQgPSBcIkRFTEVURVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHByb2plY3RBcnJheSkge1xuICAvLyAhIVxuICBwcm9qZWN0VUwuaW5uZXJIVE1MID0gXCJcIjtcbiAgLy8gISFcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcHJvamVjdExJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxldCBwcm9qZWN0RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHByb2plY3RMSS50ZXh0Q29udGVudCA9IHByb2plY3RBcnJheVtpXS5uYW1lO1xuICAgIHByb2plY3REZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgIHByb2plY3RMSS5jbGFzc0xpc3QuYWRkKFwibGlcIik7XG5cbiAgICBwcm9qZWN0VUwuYXBwZW5kQ2hpbGQocHJvamVjdExJKTtcbiAgICBwcm9qZWN0TEkuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kb0luZm8oYXJyYXksIGluZGV4KSB7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tZWRpdFwiKTtcbiAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZHVlLWRhdGUtZWRpdFwiKTtcbiAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWVkaXRcIik7XG4gIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1lZGl0XCIpO1xuXG4gIHRpdGxlSW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0udGl0bGU7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0uZGVzY3JpcHRpb247XG4gIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5kdWVEYXRlO1xuICBwcmlvcml0eUlucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLnByaW9yaXR5O1xuICBub3Rlc0lucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLm5vdGVzO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRFZGl0VG9kbyhhcnJheSwgaW5kZXgpIHtcbiAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlLWVkaXRcIik7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvbi1lZGl0XCIpO1xuICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZS1lZGl0XCIpO1xuICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHktZWRpdFwiKTtcbiAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWVkaXRcIik7XG5cbiAgYXJyYXlbaW5kZXhdLnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgYXJyYXlbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgYXJyYXlbaW5kZXhdLmR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5wcmlvcml0eSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5ub3RlcyA9IG5vdGVzSW5wdXQudmFsdWU7XG59XG5cbmV4cG9ydCB7IHJlbmRlclRvZG9zLCByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9kb0luZm8sIHN1Ym1pdEVkaXRUb2RvIH07XG4iLCJsZXQgZGVmYXVsdFByb2plY3QgPSB7XG4gIG5hbWU6IFwiRGVmYXVsdFwiLFxuICB0b2RvczogW10sXG59O1xuXG5leHBvcnQgbGV0IHByb2plY3RzID0gW2RlZmF1bHRQcm9qZWN0XTtcbmxldCBwcm9qZWN0c1VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXVsXCIpO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobWFpbkFycmF5KSB7XG4gIGxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW5wdXRcIik7XG4gIC8vXG4gIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdElucHV0LnZhbHVlKTtcbiAgcHJvamVjdElucHV0LnZhbHVlID0gXCJcIjtcblxuICBtYWluQXJyYXkucHVzaChwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChtYWluQXJyYXkpIHt9XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QsIGRlbGV0ZVByb2plY3QgfTtcbiIsImNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8oYXJyKSB7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1hZGRcIikudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvbi1hZGRcIikudmFsdWU7XG4gIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWFkZFwiKS52YWx1ZTtcbiAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWFkZFwiKS52YWx1ZTtcbiAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWFkZFwiKS52YWx1ZTtcbiAgLy9cbiAgbGV0IHRvZG8gPSBuZXcgVG9kbyhcbiAgICB0aXRsZUlucHV0LFxuICAgIGRlc2NyaXB0aW9uSW5wdXQsXG4gICAgZHVlRGF0ZUlucHV0LFxuICAgIHByaW9yaXR5SW5wdXQsXG4gICAgbm90ZXNJbnB1dFxuICApO1xuXG4gIGFyci5wdXNoKHRvZG8pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVUb2RvIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJULy9GUkVTSCBTVEFSVC8vRlJFU0ggU1RBUlQvL0ZSRVNIIFNUQVJUXG5pbXBvcnQgeyBwcm9qZWN0cywgY3JlYXRlUHJvamVjdCwgZGVsZXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QtQ3JlYXRvclwiO1xuLy8gaW1wb3J0IHsgZGVmYXVsdFByb2plY3QsIHRlc3RQcm9qZWN0IH0gZnJvbSBcIi4vdG9kby1DcmVhdG9yLmpzXCI7XG5pbXBvcnQge1xuICByZW5kZXJUb2RvcyxcbiAgcmVuZGVyUHJvamVjdHMsXG4gIHJlbmRlclRvZG9JbmZvLFxuICBzdWJtaXRFZGl0VG9kbyxcbn0gZnJvbSBcIi4vZG9tLUNyZWF0b3IuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8sIGRlbGV0ZVRvZG8gfSBmcm9tIFwiLi90b2RvLUNyZWF0b3IuanNcIjtcblxubGV0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC11bFwiKTtcbmxldCB0b2RvVUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdWxcIik7XG5sZXQgYnRuQWRkVG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC10b2RvXCIpO1xuXG5sZXQgdG9kb0Zvcm1BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1hZGRcIik7XG5sZXQgYnRuU3VibWl0QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tc3VibWl0LWFkZFwiKTtcbmxldCBidG5DYW5jZWxBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1jYW5jZWwtYWRkXCIpO1xuXG5sZXQgdG9kb0Zvcm1FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tZWRpdFwiKTtcbmxldCBidG5TdWJtaXRFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tc3VibWl0LWVkaXRcIik7XG5sZXQgYnRuQ2FuY2VsRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWNhbmNlbC1lZGl0XCIpO1xuXG5sZXQgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC1wcm9qZWN0XCIpO1xubGV0IGlucHV0QWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1pbnB1dFwiKTtcblxubGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbMF0udG9kb3M7XG5sZXQgaW5kZXhPZkNsaWNrZWRUb2RvO1xuXG4vLyBFVkVOVCBMSVNURU5FUlNcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG59KTtcblxuYnRuQWRkVG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAodG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgIHRvZG9Gb3JtQWRkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cbn0pO1xuXG5idG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChpbnB1dEFkZFByb2plY3QudmFsdWUgIT09IFwiXCIpIHtcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RzKTtcbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgZW5hYmxlUHJvamVjdE5hdmlnYXRpb24oKTtcbiAgfVxufSk7XG5cbmJ0blN1Ym1pdEFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGNyZWF0ZVRvZG8oY3VycmVudFByb2plY3QpO1xuICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIHRvZG9Gb3JtQWRkLnJlc2V0KCk7XG4gIHRvZG9Gb3JtQWRkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59KTtcblxuYnRuQ2FuY2VsQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn0pO1xuXG5idG5TdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIHN1Ym1pdEVkaXRUb2RvKGN1cnJlbnRQcm9qZWN0LCBpbmRleE9mQ2xpY2tlZFRvZG8pO1xuICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG59KTtcblxuYnRuQ2FuY2VsRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufSk7XG5cbnRvZG9VTC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgZnVuY3Rpb24gZmluZEluZGV4KGFycikge1xuICAgIGxldCBwb3MgPSBhcnJcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaWQ7XG4gICAgICB9KVxuICAgICAgLmluZGV4T2YocGFyc2VJbnQoZS50YXJnZXQucGFyZW50Tm9kZS5pZCkpO1xuICAgIHJldHVybiBwb3M7XG4gIH1cblxuICAvLyBERUxFVEVcbiAgZnVuY3Rpb24gZGVsZXRlVG9kbyhhcnJheSkge1xuICAgIGFycmF5LnNwbGljZShmaW5kSW5kZXgoY3VycmVudFByb2plY3QpLCAxKTtcbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiREVMRVRFXCIpIHtcbiAgICBkZWxldGVUb2RvKGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuICAvL0VESVRcbiAgZnVuY3Rpb24gb3BlbkVkaXRGb3JtKCkge1xuICAgIGluZGV4T2ZDbGlja2VkVG9kbyA9IGZpbmRJbmRleChjdXJyZW50UHJvamVjdCk7XG4gICAgdG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgcmVuZGVyVG9kb0luZm8oY3VycmVudFByb2plY3QsIGluZGV4T2ZDbGlja2VkVG9kbyk7XG4gIH1cblxuICBpZiAoXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiRURJVFwiICYmXG4gICAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpXG4gICkge1xuICAgIG9wZW5FZGl0Rm9ybSgpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZW5hYmxlUHJvamVjdE5hdmlnYXRpb24oKSB7XG4gIC8vIEdldCBhbGwgYnV0dG9ucyB3aXRoIGNsYXNzPVwiYnRuXCIgaW5zaWRlIHRoZSBjb250YWluZXJcbiAgbGV0IHByb2plY3RMSXMgPSBwcm9qZWN0VUwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpXCIpO1xuXG4gIC8vIExvb3AgdGhyb3VnaCB0aGUgYnV0dG9ucyBhbmQgYWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIGN1cnJlbnQvY2xpY2tlZCBidXR0b25cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TElzLmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdExJc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlXCIpO1xuICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c1tpXS50b2RvcztcbiAgICAgIHJlbmRlclRvZG9zKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gYWN0aXZlIGNsYXNzXG4gICAgICBpZiAoY3VycmVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGN1cnJlbnRbMF0uY2xhc3NOYW1lID0gY3VycmVudFswXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aGUgYWN0aXZlIGNsYXNzIHRvIHRoZSBjdXJyZW50L2NsaWNrZWQgYnV0dG9uXG4gICAgICB0aGlzLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcbiAgICB9KTtcbiAgfVxufVxuXG5zO1xuLy9cblxuLy9cblxuLy9cblxuLy9cblxuLy9cblxuLy9cblxuLy9cblxuLy9cblxuLy9cblxuLy9cblxuLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQvL0ZSRVNIIFNUQVJULy9GUkVTSCBTVEFSVC8vRlJFU0ggU1RBUlRcblxuLy8gaW1wb3J0IHtcbi8vICAgc3VibWl0QWRkVG9kbyxcbi8vICAgY2FuY2VsQWRkVG9kbyxcbi8vICAgc3VibWl0RWRpdFRvZG8sXG4vLyAgIGNhbmNlbEVkaXRUb2RvLFxuLy8gfSBmcm9tIFwiLi90b2RvQ3JlYXRvclwiO1xuXG4vLyBpbXBvcnQgeyBzdWJtaXRBZGRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdENyZWF0b3JcIjtcblxuLy8gKFwidXNlIHN0cmljdFwiKTtcblxuLy8gbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1hZGRcIik7XG5cbi8vIGxldCBidG5BZGRUb0RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tYWRkLXRvZG9cIik7XG4vLyBsZXQgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC1wcm9qZWN0XCIpO1xuXG4vLyBsZXQgYnRuU3VibWl0QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tc3VibWl0LWFkZFwiKTtcbi8vIGxldCBidG5DYW5jZWxBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jYW5jZWwtYWRkXCIpO1xuXG4vLyBsZXQgYnRuU3VibWl0RWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXN1Ym1pdC1lZGl0XCIpO1xuLy8gbGV0IGJ0bkNhbmNlbEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jYW5jZWwtZWRpdFwiKTtcblxuLy8gYnRuQWRkVG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4vLyB9KTtcbi8vIGJ0bkFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEFkZFByb2plY3QpO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyAgIC8vXG4vLyB9KTtcbi8vIGJ0blN1Ym1pdEFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0QWRkVG9kbyk7XG4vLyBidG5DYW5jZWxBZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbEFkZFRvZG8pO1xuLy8gLy9cbi8vIGJ0blN1Ym1pdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEVkaXRUb2RvKTtcbi8vIGJ0bkNhbmNlbEVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbEVkaXRUb2RvKTtcbi8vIC8vXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=