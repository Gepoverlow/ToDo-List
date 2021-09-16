/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domCreator.js":
/*!***************************!*\
  !*** ./src/domCreator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIndex": () => (/* binding */ getIndex),
/* harmony export */   "renderTODOS": () => (/* binding */ renderTODOS),
/* harmony export */   "renderPROJECTS": () => (/* binding */ renderPROJECTS)
/* harmony export */ });
/* harmony import */ var _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCreator.js */ "./src/todoCreator.js");



let todoUL = document.getElementById("todo-ul");
let formEdit = document.getElementById("todo-form-edit");
let projectUL = document.getElementById("project-ul");
let projectInput = document.getElementById("project-input");

let getIndex;

function renderTODOS(freshTodo) {
  let listItem = document.createElement("li");
  todoUL.appendChild(listItem);
  listItem.setAttribute("id", `${freshTodo.id}`);

  let listTitle = document.createElement("p");
  let listDate = document.createElement("p");
  let listDeleteBtn = document.createElement("button");
  let listEditBtn = document.createElement("button");
  let listCheck = document.createElement("input");

  listCheck.type = "checkbox";

  listItem.appendChild(listTitle);
  listItem.appendChild(listDate);
  listItem.appendChild(listDeleteBtn);
  listItem.appendChild(listEditBtn);
  listItem.appendChild(listCheck);

  listTitle.textContent = `${freshTodo.title}`;
  listDate.textContent = `${freshTodo.dueDate}`;
  listDeleteBtn.textContent = "Delete";
  listEditBtn.textContent = "Edit";
  //
  function findIndex(arr) {
    let pos = arr
      .map(function (e) {
        return e.id;
      })
      .indexOf(parseInt(listItem.id));
    return pos;
  }
  //
  function deleteTodo() {
    _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.splice(findIndex(_todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray), 1);
    todoUL.removeChild(listItem);
  }
  //
  function editTodo() {
    let titleEdit = document.getElementById("input-title-edit");
    let descriptionEdit = document.getElementById("input-description-edit");
    let dueDateEdit = document.getElementById("input-due-date-edit");
    let priorityEdit = document.getElementById("input-priority-edit");
    let notesEdit = document.getElementById("input-notes-edit");

    getIndex = findIndex(_todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray);

    titleEdit.value = _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[getIndex].title;
    descriptionEdit.value = _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[getIndex].description;
    dueDateEdit.value = _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[getIndex].dueDate;
    priorityEdit.value = _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[getIndex].priority;
    notesEdit.value = _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[getIndex].notes;

    formEdit.classList.remove("hidden");
  }

  listEditBtn.addEventListener("click", editTodo);
  listDeleteBtn.addEventListener("click", deleteTodo);
}

function renderPROJECTS() {
  let listItem = document.createElement("li");
  projectUL.appendChild(listItem);

  listItem.textContent = _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projects[0];

  //

  // //////// /////////////////////////////////////////
  // function deleteTodo() {
  //   projectArray.splice(findIndex(projectArray), 1);
  //   todoUL.removeChild(listItem);
  // }
  /////////////////////////////////////////////////////
}




/***/ }),

/***/ "./src/projectCreator.js":
/*!*******************************!*\
  !*** ./src/projectCreator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitAddProject": () => (/* binding */ submitAddProject)
/* harmony export */ });
/* harmony import */ var _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCreator.js */ "./src/todoCreator.js");
/* harmony import */ var _domCreator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domCreator.js */ "./src/domCreator.js");




let projectUL = document.getElementById("project-ul");
let projectInput = document.getElementById("project-input");

class Project {
  constructor(name) {
    this.id = Date.now();
    this.name = name;
    this.array = [];
  }
}

function submitAddProject() {
  if (projectInput.value !== "") {
    let input = projectInput.value;
    let project = new Project(input);

    projectUL.innerHTML = "";
    _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projects.forEach(_domCreator_js__WEBPACK_IMPORTED_MODULE_1__.renderPROJECTS);

    _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projects.push(project);

    console.log(_todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projects);
  }
}




/***/ }),

/***/ "./src/todoCreator.js":
/*!****************************!*\
  !*** ./src/todoCreator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "submitAddTodo": () => (/* binding */ submitAddTodo),
/* harmony export */   "cancelAddTodo": () => (/* binding */ cancelAddTodo),
/* harmony export */   "submitEditTodo": () => (/* binding */ submitEditTodo),
/* harmony export */   "cancelEditTodo": () => (/* binding */ cancelEditTodo)
/* harmony export */ });
/* harmony import */ var _domCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreator.js */ "./src/domCreator.js");
// import { manipulateDOM } from "./domCreator";


("use strict");

let todoUL = document.getElementById("todo-ul");
let formAdd = document.getElementById("todo-form-add");
let formEdit = document.getElementById("todo-form-edit");

let projectArray = [];
let projects = [{ projectArray }];

class ToDo {
  constructor(title, description, dueDate, priority, notes) {
    this.id = Date.now();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

const submitAddTodo = (ev) => {
  ev.preventDefault();
  let toDo = new ToDo(
    document.getElementById("input-title-add").value,
    document.getElementById("input-description-add").value,
    document.getElementById("input-due-date-add").value,
    document.getElementById("input-priority-add").value,
    document.getElementById("input-notes-add").value
  );

  projectArray.push(toDo);
  //
  document.forms[0].reset();

  formAdd.classList.add("hidden");

  todoUL.innerHTML = "";

  projectArray.forEach(_domCreator_js__WEBPACK_IMPORTED_MODULE_0__.renderTODOS);
};

const cancelAddTodo = (ev) => {
  ev.preventDefault();
  formAdd.classList.add("hidden");
};

const submitEditTodo = (ev) => {
  ev.preventDefault();
  formEdit.classList.add("hidden");

  let titleEdit = document.getElementById("input-title-edit");
  let descriptionEdit = document.getElementById("input-description-edit");
  let dueDateEdit = document.getElementById("input-due-date-edit");
  let priorityEdit = document.getElementById("input-priority-edit");
  let notesEdit = document.getElementById("input-notes-edit");

  for (let i = 0; i < projectArray.length; i++) {
    projectArray[_domCreator_js__WEBPACK_IMPORTED_MODULE_0__.getIndex].title = titleEdit.value;
    projectArray[_domCreator_js__WEBPACK_IMPORTED_MODULE_0__.getIndex].descrption = descriptionEdit.value;
    projectArray[_domCreator_js__WEBPACK_IMPORTED_MODULE_0__.getIndex].dueDate = dueDateEdit.value;
    projectArray[_domCreator_js__WEBPACK_IMPORTED_MODULE_0__.getIndex].priority = priorityEdit.value;
    projectArray[_domCreator_js__WEBPACK_IMPORTED_MODULE_0__.getIndex].notes = notesEdit.value;
  }

  todoUL.innerHTML = "";

  projectArray.forEach(_domCreator_js__WEBPACK_IMPORTED_MODULE_0__.renderTODOS);
};

const cancelEditTodo = (ev) => {
  ev.preventDefault();
  formEdit.classList.add("hidden");
};




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
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var _projectCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectCreator */ "./src/projectCreator.js");




("use strict");

let form = document.getElementById("todo-form-add");

let btnAddToDo = document.getElementById("btn-add-todo");
let btnAddProject = document.getElementById("btn-add-project");

let btnSubmitAdd = document.getElementById("button-submit-add");
let btnCancelAdd = document.getElementById("button-cancel-add");

let btnSubmitEdit = document.getElementById("button-submit-edit");
let btnCancelEdit = document.getElementById("button-cancel-edit");

btnAddToDo.addEventListener("click", () => {
  form.classList.remove("hidden");
});
btnAddProject.addEventListener("click", _projectCreator__WEBPACK_IMPORTED_MODULE_1__.submitAddProject);

document.addEventListener("DOMContentLoaded", () => {
  //
});
btnSubmitAdd.addEventListener("click", _todoCreator__WEBPACK_IMPORTED_MODULE_0__.submitAddTodo);
btnCancelAdd.addEventListener("click", _todoCreator__WEBPACK_IMPORTED_MODULE_0__.cancelAddTodo);
//
btnSubmitEdit.addEventListener("click", _todoCreator__WEBPACK_IMPORTED_MODULE_0__.submitEditTodo);
btnCancelEdit.addEventListener("click", _todoCreator__WEBPACK_IMPORTED_MODULE_0__.cancelEditTodo);
//

//   {
//     id: Date.now(),
//     title: document.getElementById("input-title").value,
//     description: document.getElementById("input-description").value,
//     dueDate: document.getElementById("input-due-date").value,
//     priority: document.getElementById("input-priority").value,
//     notes: document.getElementById("input-notes").value,
//   };

// let array = [
//   {
//     id: 111,
//   },
//   {
//     id: 222,
//   },
//   {
//     id: 333,
//   },
// ];
// function findIndex() {
//   let pos = array
//     .map(function (e) {
//       return e.id;
//     })
//     .indexOf(333);
//   return pos;
// }
// console.log(findIndex());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9kb21DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9wcm9qZWN0Q3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvdG9kb0NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vdG9kb0NyZWF0b3IuanNcIjtcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIuL3RvZG9DcmVhdG9yLmpzXCI7XG5cbmxldCB0b2RvVUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdWxcIik7XG5sZXQgZm9ybUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1lZGl0XCIpO1xubGV0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC11bFwiKTtcbmxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW5wdXRcIik7XG5cbmV4cG9ydCBsZXQgZ2V0SW5kZXg7XG5cbmZ1bmN0aW9uIHJlbmRlclRPRE9TKGZyZXNoVG9kbykge1xuICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHRvZG9VTC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIGxpc3RJdGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2ZyZXNoVG9kby5pZH1gKTtcblxuICBsZXQgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCBsaXN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsZXQgbGlzdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCBsaXN0RWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCBsaXN0Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgbGlzdENoZWNrLnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdERhdGUpO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0RGVsZXRlQnRuKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdEVkaXRCdG4pO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0Q2hlY2spO1xuXG4gIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IGAke2ZyZXNoVG9kby50aXRsZX1gO1xuICBsaXN0RGF0ZS50ZXh0Q29udGVudCA9IGAke2ZyZXNoVG9kby5kdWVEYXRlfWA7XG4gIGxpc3REZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICBsaXN0RWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAvL1xuICBmdW5jdGlvbiBmaW5kSW5kZXgoYXJyKSB7XG4gICAgbGV0IHBvcyA9IGFyclxuICAgICAgLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5pZDtcbiAgICAgIH0pXG4gICAgICAuaW5kZXhPZihwYXJzZUludChsaXN0SXRlbS5pZCkpO1xuICAgIHJldHVybiBwb3M7XG4gIH1cbiAgLy9cbiAgZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcbiAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGZpbmRJbmRleChwcm9qZWN0QXJyYXkpLCAxKTtcbiAgICB0b2RvVUwucmVtb3ZlQ2hpbGQobGlzdEl0ZW0pO1xuICB9XG4gIC8vXG4gIGZ1bmN0aW9uIGVkaXRUb2RvKCkge1xuICAgIGxldCB0aXRsZUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlLWVkaXRcIik7XG4gICAgbGV0IGRlc2NyaXB0aW9uRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tZWRpdFwiKTtcbiAgICBsZXQgZHVlRGF0ZUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWVkaXRcIik7XG4gICAgbGV0IHByaW9yaXR5RWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHktZWRpdFwiKTtcbiAgICBsZXQgbm90ZXNFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1lZGl0XCIpO1xuXG4gICAgZ2V0SW5kZXggPSBmaW5kSW5kZXgocHJvamVjdEFycmF5KTtcblxuICAgIHRpdGxlRWRpdC52YWx1ZSA9IHByb2plY3RBcnJheVtnZXRJbmRleF0udGl0bGU7XG4gICAgZGVzY3JpcHRpb25FZGl0LnZhbHVlID0gcHJvamVjdEFycmF5W2dldEluZGV4XS5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlRWRpdC52YWx1ZSA9IHByb2plY3RBcnJheVtnZXRJbmRleF0uZHVlRGF0ZTtcbiAgICBwcmlvcml0eUVkaXQudmFsdWUgPSBwcm9qZWN0QXJyYXlbZ2V0SW5kZXhdLnByaW9yaXR5O1xuICAgIG5vdGVzRWRpdC52YWx1ZSA9IHByb2plY3RBcnJheVtnZXRJbmRleF0ubm90ZXM7XG5cbiAgICBmb3JtRWRpdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgbGlzdEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUb2RvKTtcbiAgbGlzdERlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVG9kbyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBST0pFQ1RTKCkge1xuICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHByb2plY3RVTC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgbGlzdEl0ZW0udGV4dENvbnRlbnQgPSBwcm9qZWN0c1swXTtcblxuICAvL1xuXG4gIC8vIC8vLy8vLy8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIGZ1bmN0aW9uIGRlbGV0ZVRvZG8oKSB7XG4gIC8vICAgcHJvamVjdEFycmF5LnNwbGljZShmaW5kSW5kZXgocHJvamVjdEFycmF5KSwgMSk7XG4gIC8vICAgdG9kb1VMLnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcbiAgLy8gfVxuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xufVxuXG5leHBvcnQgeyByZW5kZXJUT0RPUywgcmVuZGVyUFJPSkVDVFMgfTtcbiIsImltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIuL3RvZG9DcmVhdG9yLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3RvZG9DcmVhdG9yLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJQUk9KRUNUUyB9IGZyb20gXCIuL2RvbUNyZWF0b3IuanNcIjtcblxubGV0IHByb2plY3RVTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC11bFwiKTtcbmxldCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW5wdXRcIik7XG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFycmF5ID0gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gc3VibWl0QWRkUHJvamVjdCgpIHtcbiAgaWYgKHByb2plY3RJbnB1dC52YWx1ZSAhPT0gXCJcIikge1xuICAgIGxldCBpbnB1dCA9IHByb2plY3RJbnB1dC52YWx1ZTtcbiAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGlucHV0KTtcblxuICAgIHByb2plY3RVTC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RzLmZvckVhY2gocmVuZGVyUFJPSkVDVFMpO1xuXG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgfVxufVxuXG5leHBvcnQgeyBzdWJtaXRBZGRQcm9qZWN0IH07XG4iLCIvLyBpbXBvcnQgeyBtYW5pcHVsYXRlRE9NIH0gZnJvbSBcIi4vZG9tQ3JlYXRvclwiO1xuaW1wb3J0IHsgcmVuZGVyVE9ET1MsIGdldEluZGV4IH0gZnJvbSBcIi4vZG9tQ3JlYXRvci5qc1wiO1xuXG4oXCJ1c2Ugc3RyaWN0XCIpO1xuXG5sZXQgdG9kb1VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXVsXCIpO1xubGV0IGZvcm1BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1hZGRcIik7XG5sZXQgZm9ybUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1lZGl0XCIpO1xuXG5leHBvcnQgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuZXhwb3J0IGxldCBwcm9qZWN0cyA9IFt7IHByb2plY3RBcnJheSB9XTtcblxuY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIH1cbn1cblxuY29uc3Qgc3VibWl0QWRkVG9kbyA9IChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgdG9EbyA9IG5ldyBUb0RvKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGUtYWRkXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tYWRkXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZHVlLWRhdGUtYWRkXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHktYWRkXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtYWRkXCIpLnZhbHVlXG4gICk7XG5cbiAgcHJvamVjdEFycmF5LnB1c2godG9Ebyk7XG4gIC8vXG4gIGRvY3VtZW50LmZvcm1zWzBdLnJlc2V0KCk7XG5cbiAgZm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gIHRvZG9VTC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHByb2plY3RBcnJheS5mb3JFYWNoKHJlbmRlclRPRE9TKTtcbn07XG5cbmNvbnN0IGNhbmNlbEFkZFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgZm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufTtcblxuY29uc3Qgc3VibWl0RWRpdFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgZm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBsZXQgdGl0bGVFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpO1xuICBsZXQgZGVzY3JpcHRpb25FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvbi1lZGl0XCIpO1xuICBsZXQgZHVlRGF0ZUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWVkaXRcIik7XG4gIGxldCBwcmlvcml0eUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWVkaXRcIik7XG4gIGxldCBub3Rlc0VkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWVkaXRcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0QXJyYXlbZ2V0SW5kZXhdLnRpdGxlID0gdGl0bGVFZGl0LnZhbHVlO1xuICAgIHByb2plY3RBcnJheVtnZXRJbmRleF0uZGVzY3JwdGlvbiA9IGRlc2NyaXB0aW9uRWRpdC52YWx1ZTtcbiAgICBwcm9qZWN0QXJyYXlbZ2V0SW5kZXhdLmR1ZURhdGUgPSBkdWVEYXRlRWRpdC52YWx1ZTtcbiAgICBwcm9qZWN0QXJyYXlbZ2V0SW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHlFZGl0LnZhbHVlO1xuICAgIHByb2plY3RBcnJheVtnZXRJbmRleF0ubm90ZXMgPSBub3Rlc0VkaXQudmFsdWU7XG4gIH1cblxuICB0b2RvVUwuaW5uZXJIVE1MID0gXCJcIjtcblxuICBwcm9qZWN0QXJyYXkuZm9yRWFjaChyZW5kZXJUT0RPUyk7XG59O1xuXG5jb25zdCBjYW5jZWxFZGl0VG9kbyA9IChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBmb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufTtcblxuZXhwb3J0IHsgc3VibWl0QWRkVG9kbywgY2FuY2VsQWRkVG9kbywgc3VibWl0RWRpdFRvZG8sIGNhbmNlbEVkaXRUb2RvIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIHN1Ym1pdEFkZFRvZG8sXG4gIGNhbmNlbEFkZFRvZG8sXG4gIHN1Ym1pdEVkaXRUb2RvLFxuICBjYW5jZWxFZGl0VG9kbyxcbn0gZnJvbSBcIi4vdG9kb0NyZWF0b3JcIjtcblxuaW1wb3J0IHsgc3VibWl0QWRkUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RDcmVhdG9yXCI7XG5cbihcInVzZSBzdHJpY3RcIik7XG5cbmxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tYWRkXCIpO1xuXG5sZXQgYnRuQWRkVG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC10b2RvXCIpO1xubGV0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1hZGQtcHJvamVjdFwiKTtcblxubGV0IGJ0blN1Ym1pdEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXN1Ym1pdC1hZGRcIik7XG5sZXQgYnRuQ2FuY2VsQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY2FuY2VsLWFkZFwiKTtcblxubGV0IGJ0blN1Ym1pdEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1zdWJtaXQtZWRpdFwiKTtcbmxldCBidG5DYW5jZWxFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY2FuY2VsLWVkaXRcIik7XG5cbmJ0bkFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufSk7XG5idG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRBZGRQcm9qZWN0KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAvL1xufSk7XG5idG5TdWJtaXRBZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEFkZFRvZG8pO1xuYnRuQ2FuY2VsQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxBZGRUb2RvKTtcbi8vXG5idG5TdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRFZGl0VG9kbyk7XG5idG5DYW5jZWxFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxFZGl0VG9kbyk7XG4vL1xuXG4vLyAgIHtcbi8vICAgICBpZDogRGF0ZS5ub3coKSxcbi8vICAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZVwiKS52YWx1ZSxcbi8vICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvblwiKS52YWx1ZSxcbi8vICAgICBkdWVEYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlXCIpLnZhbHVlLFxuLy8gICAgIHByaW9yaXR5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5XCIpLnZhbHVlLFxuLy8gICAgIG5vdGVzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzXCIpLnZhbHVlLFxuLy8gICB9O1xuXG4vLyBsZXQgYXJyYXkgPSBbXG4vLyAgIHtcbi8vICAgICBpZDogMTExLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6IDIyMixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAzMzMsXG4vLyAgIH0sXG4vLyBdO1xuLy8gZnVuY3Rpb24gZmluZEluZGV4KCkge1xuLy8gICBsZXQgcG9zID0gYXJyYXlcbi8vICAgICAubWFwKGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICByZXR1cm4gZS5pZDtcbi8vICAgICB9KVxuLy8gICAgIC5pbmRleE9mKDMzMyk7XG4vLyAgIHJldHVybiBwb3M7XG4vLyB9XG4vLyBjb25zb2xlLmxvZyhmaW5kSW5kZXgoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=