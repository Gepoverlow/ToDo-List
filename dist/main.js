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

    projectLI.id = projectArray[i].id;
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
  id: "defaultID",
  name: "Default",
  todos: [],
};

let projects = [defaultProject];
let projectsUL = document.getElementById("project-ul");

class Project {
  constructor(name) {
    this.id = Date.now();
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
  (0,_dom_Creator_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)(_project_Creator__WEBPACK_IMPORTED_MODULE_0__.projects);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxZQUFZLG1CQUFtQjs7QUFFL0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9kb20tQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvcHJvamVjdC1DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy90b2RvLUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHRQcm9qZWN0IH0gZnJvbSBcIi4vdG9kby1DcmVhdG9yLmpzXCI7XG5cbmxldCB0b2RvVUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdWxcIik7XG5sZXQgcHJvamVjdFVMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXVsXCIpO1xuXG5mdW5jdGlvbiByZW5kZXJUb2Rvcyh0b2RvQXJyYXkpIHtcbiAgLy8gISFcbiAgdG9kb1VMLmlubmVySFRNTCA9IFwiXCI7XG4gIC8vICEhXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRvZG9MSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsZXQgdGl0bGVMSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGxldCBkdWVEYXRlTEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgYnRuRWRpdFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBidG5EZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHRvZG9VTC5hcHBlbmRDaGlsZCh0b2RvTEkpO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZCh0aXRsZUxJKTtcbiAgICB0b2RvTEkuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxJKTtcbiAgICB0b2RvTEkuYXBwZW5kQ2hpbGQoYnRuRWRpdFRvZG8pO1xuICAgIHRvZG9MSS5hcHBlbmRDaGlsZChidG5EZWxldGVUb2RvKTtcblxuICAgIHRvZG9MSS5pZCA9IHRvZG9BcnJheVtpXS5pZDtcbiAgICB0aXRsZUxJLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2ldLnRpdGxlO1xuICAgIGR1ZURhdGVMSS50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS5kdWVEYXRlO1xuICAgIGJ0bkVkaXRUb2RvLnRleHRDb250ZW50ID0gXCJFRElUXCI7XG4gICAgYnRuRGVsZXRlVG9kby50ZXh0Q29udGVudCA9IFwiREVMRVRFXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdEFycmF5KSB7XG4gIC8vICEhXG4gIHByb2plY3RVTC5pbm5lckhUTUwgPSBcIlwiO1xuICAvLyAhIVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0TEkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGV0IHByb2plY3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgcHJvamVjdExJLnRleHRDb250ZW50ID0gcHJvamVjdEFycmF5W2ldLm5hbWU7XG4gICAgcHJvamVjdERlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgcHJvamVjdExJLmlkID0gcHJvamVjdEFycmF5W2ldLmlkO1xuICAgIHByb2plY3RMSS5jbGFzc0xpc3QuYWRkKFwibGlcIik7XG5cbiAgICBwcm9qZWN0VUwuYXBwZW5kQ2hpbGQocHJvamVjdExJKTtcbiAgICBwcm9qZWN0TEkuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZUJ0bik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kb0luZm8oYXJyYXksIGluZGV4KSB7XG4gIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tZWRpdFwiKTtcbiAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZHVlLWRhdGUtZWRpdFwiKTtcbiAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWVkaXRcIik7XG4gIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1lZGl0XCIpO1xuXG4gIHRpdGxlSW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0udGl0bGU7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBhcnJheVtpbmRleF0uZGVzY3JpcHRpb247XG4gIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGFycmF5W2luZGV4XS5kdWVEYXRlO1xuICBwcmlvcml0eUlucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLnByaW9yaXR5O1xuICBub3Rlc0lucHV0LnZhbHVlID0gYXJyYXlbaW5kZXhdLm5vdGVzO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRFZGl0VG9kbyhhcnJheSwgaW5kZXgpIHtcbiAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlLWVkaXRcIik7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvbi1lZGl0XCIpO1xuICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZS1lZGl0XCIpO1xuICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHktZWRpdFwiKTtcbiAgbGV0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWVkaXRcIik7XG5cbiAgYXJyYXlbaW5kZXhdLnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgYXJyYXlbaW5kZXhdLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgYXJyYXlbaW5kZXhdLmR1ZURhdGUgPSBkdWVEYXRlSW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5wcmlvcml0eSA9IHByaW9yaXR5SW5wdXQudmFsdWU7XG4gIGFycmF5W2luZGV4XS5ub3RlcyA9IG5vdGVzSW5wdXQudmFsdWU7XG59XG5cbmV4cG9ydCB7IHJlbmRlclRvZG9zLCByZW5kZXJQcm9qZWN0cywgcmVuZGVyVG9kb0luZm8sIHN1Ym1pdEVkaXRUb2RvIH07XG4iLCJsZXQgZGVmYXVsdFByb2plY3QgPSB7XG4gIGlkOiBcImRlZmF1bHRJRFwiLFxuICBuYW1lOiBcIkRlZmF1bHRcIixcbiAgdG9kb3M6IFtdLFxufTtcblxuZXhwb3J0IGxldCBwcm9qZWN0cyA9IFtkZWZhdWx0UHJvamVjdF07XG5sZXQgcHJvamVjdHNVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC11bFwiKTtcblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLmlkID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG1haW5BcnJheSkge1xuICBsZXQgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0XCIpO1xuICAvL1xuICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RJbnB1dC52YWx1ZSk7XG4gIHByb2plY3RJbnB1dC52YWx1ZSA9IFwiXCI7XG5cbiAgbWFpbkFycmF5LnB1c2gocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QobWFpbkFycmF5KSB7fVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0LCBkZWxldGVQcm9qZWN0IH07XG4iLCJjbGFzcyBUb2RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICB0aGlzLmlkID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKGFycikge1xuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGUtYWRkXCIpLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tYWRkXCIpLnZhbHVlO1xuICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZS1hZGRcIikudmFsdWU7XG4gIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcmlvcml0eS1hZGRcIikudmFsdWU7XG4gIGxldCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1hZGRcIikudmFsdWU7XG4gIC8vXG4gIGxldCB0b2RvID0gbmV3IFRvZG8oXG4gICAgdGl0bGVJbnB1dCxcbiAgICBkZXNjcmlwdGlvbklucHV0LFxuICAgIGR1ZURhdGVJbnB1dCxcbiAgICBwcmlvcml0eUlucHV0LFxuICAgIG5vdGVzSW5wdXRcbiAgKTtcblxuICBhcnIucHVzaCh0b2RvKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kbyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVC8vRlJFU0ggU1RBUlQvL0ZSRVNIIFNUQVJULy9GUkVTSCBTVEFSVFxuaW1wb3J0IHsgcHJvamVjdHMsIGNyZWF0ZVByb2plY3QsIGRlbGV0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LUNyZWF0b3JcIjtcbi8vIGltcG9ydCB7IGRlZmF1bHRQcm9qZWN0LCB0ZXN0UHJvamVjdCB9IGZyb20gXCIuL3RvZG8tQ3JlYXRvci5qc1wiO1xuaW1wb3J0IHtcbiAgcmVuZGVyVG9kb3MsXG4gIHJlbmRlclByb2plY3RzLFxuICByZW5kZXJUb2RvSW5mbyxcbiAgc3VibWl0RWRpdFRvZG8sXG59IGZyb20gXCIuL2RvbS1DcmVhdG9yLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvLCBkZWxldGVUb2RvIH0gZnJvbSBcIi4vdG9kby1DcmVhdG9yLmpzXCI7XG5cbmxldCBwcm9qZWN0VUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdWxcIik7XG5sZXQgdG9kb1VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXVsXCIpO1xubGV0IGJ0bkFkZFRvRG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1hZGQtdG9kb1wiKTtcblxubGV0IHRvZG9Gb3JtQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tYWRkXCIpO1xubGV0IGJ0blN1Ym1pdEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXN1Ym1pdC1hZGRcIik7XG5sZXQgYnRuQ2FuY2VsQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY2FuY2VsLWFkZFwiKTtcblxubGV0IHRvZG9Gb3JtRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWVkaXRcIik7XG5sZXQgYnRuU3VibWl0RWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXN1Ym1pdC1lZGl0XCIpO1xubGV0IGJ0bkNhbmNlbEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1jYW5jZWwtZWRpdFwiKTtcblxubGV0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1hZGQtcHJvamVjdFwiKTtcbmxldCBpbnB1dEFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW5wdXRcIik7XG5cbmxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzWzBdLnRvZG9zO1xubGV0IGluZGV4T2ZDbGlja2VkVG9kbztcblxuLy8gRVZFTlQgTElTVEVORVJTXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG4gIGVuYWJsZVByb2plY3ROYXZpZ2F0aW9uKCk7XG59KTtcblxuYnRuQWRkVG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAodG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgIHRvZG9Gb3JtQWRkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cbn0pO1xuXG5idG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGlmIChpbnB1dEFkZFByb2plY3QudmFsdWUgIT09IFwiXCIpIHtcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RzKTtcbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgZW5hYmxlUHJvamVjdE5hdmlnYXRpb24oKTtcbiAgfVxufSk7XG5cbmJ0blN1Ym1pdEFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGNyZWF0ZVRvZG8oY3VycmVudFByb2plY3QpO1xuICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIHRvZG9Gb3JtQWRkLnJlc2V0KCk7XG4gIHRvZG9Gb3JtQWRkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59KTtcblxuYnRuQ2FuY2VsQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn0pO1xuXG5idG5TdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgdG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIHN1Ym1pdEVkaXRUb2RvKGN1cnJlbnRQcm9qZWN0LCBpbmRleE9mQ2xpY2tlZFRvZG8pO1xuICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG59KTtcblxuYnRuQ2FuY2VsRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZG9Gb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufSk7XG5cbnRvZG9VTC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgZnVuY3Rpb24gZmluZEluZGV4KGFycikge1xuICAgIGxldCBwb3MgPSBhcnJcbiAgICAgIC5tYXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGUuaWQ7XG4gICAgICB9KVxuICAgICAgLmluZGV4T2YocGFyc2VJbnQoZS50YXJnZXQucGFyZW50Tm9kZS5pZCkpO1xuICAgIHJldHVybiBwb3M7XG4gIH1cblxuICAvLyBERUxFVEVcbiAgZnVuY3Rpb24gZGVsZXRlVG9kbyhhcnJheSkge1xuICAgIGFycmF5LnNwbGljZShmaW5kSW5kZXgoY3VycmVudFByb2plY3QpLCAxKTtcbiAgICByZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XG4gIH1cblxuICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiREVMRVRFXCIpIHtcbiAgICBkZWxldGVUb2RvKGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuICAvL0VESVRcbiAgZnVuY3Rpb24gb3BlbkVkaXRGb3JtKCkge1xuICAgIGluZGV4T2ZDbGlja2VkVG9kbyA9IGZpbmRJbmRleChjdXJyZW50UHJvamVjdCk7XG4gICAgdG9kb0Zvcm1FZGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgcmVuZGVyVG9kb0luZm8oY3VycmVudFByb2plY3QsIGluZGV4T2ZDbGlja2VkVG9kbyk7XG4gIH1cblxuICBpZiAoXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiRURJVFwiICYmXG4gICAgdG9kb0Zvcm1BZGQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpXG4gICkge1xuICAgIG9wZW5FZGl0Rm9ybSgpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZW5hYmxlUHJvamVjdE5hdmlnYXRpb24oKSB7XG4gIC8vIEdldCBhbGwgYnV0dG9ucyB3aXRoIGNsYXNzPVwibGlcIiBpbnNpZGUgdGhlIGNvbnRhaW5lclxuICBsZXQgcHJvamVjdExJcyA9IHByb2plY3RVTC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlcIik7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBidXR0b25zIGFuZCBhZGQgdGhlIGFjdGl2ZSBjbGFzcyB0byB0aGUgY3VycmVudC9jbGlja2VkIGJ1dHRvblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMSXMubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0TElzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmVcIik7XG4gICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzW2ldLnRvZG9zO1xuICAgICAgcmVuZGVyVG9kb3MoY3VycmVudFByb2plY3QpO1xuICAgICAgLy8gSWYgdGhlcmUncyBubyBhY3RpdmUgY2xhc3NcbiAgICAgIGlmIChjdXJyZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBhY3RpdmUgY2xhc3MgdG8gdGhlIGN1cnJlbnQvY2xpY2tlZCBidXR0b25cbiAgICAgIHRoaXMuY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xuICAgIH0pO1xuICB9XG59XG5cbi8vXG5cbi8vXG5cbi8vXG5cbi8vXG5cbi8vXG5cbi8vXG5cbi8vXG5cbi8vXG5cbi8vXG5cbi8vXG5cbi8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJUIC8vRlJFU0ggU1RBUlQgLy9GUkVTSCBTVEFSVCAvL0ZSRVNIIFNUQVJULy9GUkVTSCBTVEFSVC8vRlJFU0ggU1RBUlQvL0ZSRVNIIFNUQVJUXG5cbi8vIGltcG9ydCB7XG4vLyAgIHN1Ym1pdEFkZFRvZG8sXG4vLyAgIGNhbmNlbEFkZFRvZG8sXG4vLyAgIHN1Ym1pdEVkaXRUb2RvLFxuLy8gICBjYW5jZWxFZGl0VG9kbyxcbi8vIH0gZnJvbSBcIi4vdG9kb0NyZWF0b3JcIjtcblxuLy8gaW1wb3J0IHsgc3VibWl0QWRkUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RDcmVhdG9yXCI7XG5cbi8vIChcInVzZSBzdHJpY3RcIik7XG5cbi8vIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tYWRkXCIpO1xuXG4vLyBsZXQgYnRuQWRkVG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC10b2RvXCIpO1xuLy8gbGV0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1hZGQtcHJvamVjdFwiKTtcblxuLy8gbGV0IGJ0blN1Ym1pdEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXN1Ym1pdC1hZGRcIik7XG4vLyBsZXQgYnRuQ2FuY2VsQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY2FuY2VsLWFkZFwiKTtcblxuLy8gbGV0IGJ0blN1Ym1pdEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1zdWJtaXQtZWRpdFwiKTtcbi8vIGxldCBidG5DYW5jZWxFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY2FuY2VsLWVkaXRcIik7XG5cbi8vIGJ0bkFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbi8vICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuLy8gfSk7XG4vLyBidG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRBZGRQcm9qZWN0KTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICAvL1xuLy8gfSk7XG4vLyBidG5TdWJtaXRBZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEFkZFRvZG8pO1xuLy8gYnRuQ2FuY2VsQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxBZGRUb2RvKTtcbi8vIC8vXG4vLyBidG5TdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRFZGl0VG9kbyk7XG4vLyBidG5DYW5jZWxFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxFZGl0VG9kbyk7XG4vLyAvL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9