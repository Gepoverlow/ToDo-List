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
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCreator.js */ "./src/todoCreator.js");


let ul = document.getElementById("todo-ul");
let formEdit = document.getElementById("todo-form-edit");
let getIndex;

function render(freshTodo) {
  let listItem = document.createElement("li");
  ul.appendChild(listItem);
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
    ul.removeChild(listItem);
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
    console.log(getIndex);
  }

  listEditBtn.addEventListener("click", editTodo);
  listDeleteBtn.addEventListener("click", deleteTodo);
}

//////////////////////////////////// --------------------------------------///////////////////////////////////--------------------------------------

// function manipulateDOM(freshTodo) {
//   let listItem = document.createElement("li");
//   ul.appendChild(listItem);

//   listItem.setAttribute("id", `${freshTodo.id}`);

//   let listTitle = document.createElement("p");
//   let listDate = document.createElement("p");
//   let listCloseBtn = document.createElement("button");
//   let listEditBtn = document.createElement("button");
//   let listViewBtn = document.createElement("button");
//   let listCheck = document.createElement("input");

//   listCheck.type = "checkbox";

//   listItem.appendChild(listTitle);
//   listItem.appendChild(listDate);
//   listItem.appendChild(listCloseBtn);
//   listItem.appendChild(listEditBtn);
//   listItem.appendChild(listViewBtn);
//   listItem.appendChild(listCheck);

//   listTitle.textContent = `${freshTodo.title}`;
//   listDate.textContent = `${freshTodo.dueDate}`;
//   listViewBtn.textContent = "View";
//   listCloseBtn.textContent = "Delete";
//   listEditBtn.textContent = "Edit";

//   function findIndex(arr) {
//     let pos = arr
//       .map(function (e) {
//         return e.id;
//       })
//       .indexOf(parseInt(listItem.id));
//     return pos;
//   }

//   function deleteTodo() {
//     projectArray.splice(findIndex(projectArray), 1);
//     ul.removeChild(listItem);
//   }

//   function editTodo() {
//     formEdit.classList.remove("hidden");
//     document.getElementById("input-title-edit").value = `${freshTodo.title}`;
//     document.getElementById(
//       "input-description-edit"
//     ).value = `${freshTodo.description}`;
//     document.getElementById(
//       "input-due-date-edit"
//     ).value = `${freshTodo.dueDate}`;
//     document.getElementById(
//       "input-priority-edit"
//     ).value = `${freshTodo.priority}`;
//     document.getElementById("input-notes-edit").value = `${freshTodo.notes}`;

//     // !! //
//     //CANCEL BUTTON

//     document
//       .getElementById("button-cancel-edit")
//       .addEventListener("click", function (ev) {
//         ev.preventDefault();
//         formEdit.classList.add("hidden");
//       });

//     //SUBMIT CHANGES BUTTON

//     document
//       .getElementById("button-submit-edit")
//       .addEventListener("click", function (ev) {
//         ev.preventDefault();
//       });
//     // !! //
//   }

//   let btnDelete = listItem.childNodes[2];
//   let btnEdit = listItem.childNodes[3];
//   let btnView = listItem.childNodes[4];

//   btnDelete.addEventListener("click", deleteTodo);
//   //
//   btnEdit.addEventListener("click", editTodo);
//   //
//   btnView.addEventListener("click", function () {
//     console.log(`hi i am view of li title ${freshTodo.title}`);
//   });
// }



// export { manipulateDOM };


/***/ }),

/***/ "./src/todoCreator.js":
/*!****************************!*\
  !*** ./src/todoCreator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "submitAddTodo": () => (/* binding */ submitAddTodo),
/* harmony export */   "cancelAddTodo": () => (/* binding */ cancelAddTodo),
/* harmony export */   "submitEditTodo": () => (/* binding */ submitEditTodo),
/* harmony export */   "cancelEditTodo": () => (/* binding */ cancelEditTodo)
/* harmony export */ });
/* harmony import */ var _domCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreator */ "./src/domCreator.js");
// import { manipulateDOM } from "./domCreator";


("use strict");

let ul = document.getElementById("todo-ul");
let formAdd = document.getElementById("todo-form-add");
let formEdit = document.getElementById("todo-form-edit");

let projectArray = [];

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

  console.log(projectArray);

  ul.innerHTML = "";

  projectArray.forEach(_domCreator__WEBPACK_IMPORTED_MODULE_0__.render);
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
    projectArray[_domCreator__WEBPACK_IMPORTED_MODULE_0__.getIndex].title = titleEdit.value;
    projectArray[_domCreator__WEBPACK_IMPORTED_MODULE_0__.getIndex].descrption = descriptionEdit.value;
    projectArray[_domCreator__WEBPACK_IMPORTED_MODULE_0__.getIndex].dueDate = dueDateEdit.value;
    projectArray[_domCreator__WEBPACK_IMPORTED_MODULE_0__.getIndex].priority = priorityEdit.value;
    projectArray[_domCreator__WEBPACK_IMPORTED_MODULE_0__.getIndex].notes = notesEdit.value;
  }

  ul.innerHTML = "";

  projectArray.forEach(_domCreator__WEBPACK_IMPORTED_MODULE_0__.render);

  console.log(projectArray);
  console.log(_domCreator__WEBPACK_IMPORTED_MODULE_0__.getIndex);
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


("use strict");

let form = document.getElementById("todo-form-add");

let btnAddToDo = document.getElementById("btn-add-todo");

let btnSubmitAdd = document.getElementById("button-submit-add");
let btnCancelAdd = document.getElementById("button-cancel-add");

let btnSubmitEdit = document.getElementById("button-submit-edit");
let btnCancelEdit = document.getElementById("button-cancel-edit");

btnAddToDo.addEventListener("click", () => {
  form.classList.remove("hidden");
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNEdUI7O0FBRXZCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQztBQUNELHVDQUF1Qyx1REFBYTtBQUNwRCx1Q0FBdUMsdURBQWE7QUFDcEQ7QUFDQSx3Q0FBd0Msd0RBQWM7QUFDdEQsd0NBQXdDLHdEQUFjO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL2RvbUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL3RvZG9DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi90b2RvQ3JlYXRvci5qc1wiO1xuXG5sZXQgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdWxcIik7XG5sZXQgZm9ybUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1lZGl0XCIpO1xuZXhwb3J0IGxldCBnZXRJbmRleDtcblxuZnVuY3Rpb24gcmVuZGVyKGZyZXNoVG9kbykge1xuICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHVsLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7ZnJlc2hUb2RvLmlkfWApO1xuXG4gIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IGxpc3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCBsaXN0RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IGxpc3RFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IGxpc3RDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBsaXN0Q2hlY2sudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0RGF0ZSk7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3REZWxldGVCdG4pO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0RWRpdEJ0bik7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RDaGVjayk7XG5cbiAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gYCR7ZnJlc2hUb2RvLnRpdGxlfWA7XG4gIGxpc3REYXRlLnRleHRDb250ZW50ID0gYCR7ZnJlc2hUb2RvLmR1ZURhdGV9YDtcbiAgbGlzdERlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gIGxpc3RFZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gIC8vXG4gIGZ1bmN0aW9uIGZpbmRJbmRleChhcnIpIHtcbiAgICBsZXQgcG9zID0gYXJyXG4gICAgICAubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlkO1xuICAgICAgfSlcbiAgICAgIC5pbmRleE9mKHBhcnNlSW50KGxpc3RJdGVtLmlkKSk7XG4gICAgcmV0dXJuIHBvcztcbiAgfVxuICAvL1xuICBmdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICAgIHByb2plY3RBcnJheS5zcGxpY2UoZmluZEluZGV4KHByb2plY3RBcnJheSksIDEpO1xuICAgIHVsLnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcbiAgfVxuICAvL1xuICBmdW5jdGlvbiBlZGl0VG9kbygpIHtcbiAgICBsZXQgdGl0bGVFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpO1xuICAgIGxldCBkZXNjcmlwdGlvbkVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uLWVkaXRcIik7XG4gICAgbGV0IGR1ZURhdGVFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZS1lZGl0XCIpO1xuICAgIGxldCBwcmlvcml0eUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWVkaXRcIik7XG4gICAgbGV0IG5vdGVzRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtZWRpdFwiKTtcblxuICAgIGdldEluZGV4ID0gZmluZEluZGV4KHByb2plY3RBcnJheSk7XG5cbiAgICB0aXRsZUVkaXQudmFsdWUgPSBwcm9qZWN0QXJyYXlbZ2V0SW5kZXhdLnRpdGxlO1xuICAgIGRlc2NyaXB0aW9uRWRpdC52YWx1ZSA9IHByb2plY3RBcnJheVtnZXRJbmRleF0uZGVzY3JpcHRpb247XG4gICAgZHVlRGF0ZUVkaXQudmFsdWUgPSBwcm9qZWN0QXJyYXlbZ2V0SW5kZXhdLmR1ZURhdGU7XG4gICAgcHJpb3JpdHlFZGl0LnZhbHVlID0gcHJvamVjdEFycmF5W2dldEluZGV4XS5wcmlvcml0eTtcbiAgICBub3Rlc0VkaXQudmFsdWUgPSBwcm9qZWN0QXJyYXlbZ2V0SW5kZXhdLm5vdGVzO1xuXG4gICAgZm9ybUVkaXQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBjb25zb2xlLmxvZyhnZXRJbmRleCk7XG4gIH1cblxuICBsaXN0RWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRvZG8pO1xuICBsaXN0RGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb2RvKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBmdW5jdGlvbiBtYW5pcHVsYXRlRE9NKGZyZXNoVG9kbykge1xuLy8gICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4vLyAgIHVsLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcblxuLy8gICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtmcmVzaFRvZG8uaWR9YCk7XG5cbi8vICAgbGV0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuLy8gICBsZXQgbGlzdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vICAgbGV0IGxpc3RDbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyAgIGxldCBsaXN0RWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyAgIGxldCBsaXN0Vmlld0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyAgIGxldCBsaXN0Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vICAgbGlzdENoZWNrLnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbi8vICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcbi8vICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdERhdGUpO1xuLy8gICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0Q2xvc2VCdG4pO1xuLy8gICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0RWRpdEJ0bik7XG4vLyAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RWaWV3QnRuKTtcbi8vICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdENoZWNrKTtcblxuLy8gICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtmcmVzaFRvZG8udGl0bGV9YDtcbi8vICAgbGlzdERhdGUudGV4dENvbnRlbnQgPSBgJHtmcmVzaFRvZG8uZHVlRGF0ZX1gO1xuLy8gICBsaXN0Vmlld0J0bi50ZXh0Q29udGVudCA9IFwiVmlld1wiO1xuLy8gICBsaXN0Q2xvc2VCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuLy8gICBsaXN0RWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG4vLyAgIGZ1bmN0aW9uIGZpbmRJbmRleChhcnIpIHtcbi8vICAgICBsZXQgcG9zID0gYXJyXG4vLyAgICAgICAubWFwKGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICAgIHJldHVybiBlLmlkO1xuLy8gICAgICAgfSlcbi8vICAgICAgIC5pbmRleE9mKHBhcnNlSW50KGxpc3RJdGVtLmlkKSk7XG4vLyAgICAgcmV0dXJuIHBvcztcbi8vICAgfVxuXG4vLyAgIGZ1bmN0aW9uIGRlbGV0ZVRvZG8oKSB7XG4vLyAgICAgcHJvamVjdEFycmF5LnNwbGljZShmaW5kSW5kZXgocHJvamVjdEFycmF5KSwgMSk7XG4vLyAgICAgdWwucmVtb3ZlQ2hpbGQobGlzdEl0ZW0pO1xuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gZWRpdFRvZG8oKSB7XG4vLyAgICAgZm9ybUVkaXQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlLWVkaXRcIikudmFsdWUgPSBgJHtmcmVzaFRvZG8udGl0bGV9YDtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbi8vICAgICAgIFwiaW5wdXQtZGVzY3JpcHRpb24tZWRpdFwiXG4vLyAgICAgKS52YWx1ZSA9IGAke2ZyZXNoVG9kby5kZXNjcmlwdGlvbn1gO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuLy8gICAgICAgXCJpbnB1dC1kdWUtZGF0ZS1lZGl0XCJcbi8vICAgICApLnZhbHVlID0gYCR7ZnJlc2hUb2RvLmR1ZURhdGV9YDtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbi8vICAgICAgIFwiaW5wdXQtcHJpb3JpdHktZWRpdFwiXG4vLyAgICAgKS52YWx1ZSA9IGAke2ZyZXNoVG9kby5wcmlvcml0eX1gO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtZWRpdFwiKS52YWx1ZSA9IGAke2ZyZXNoVG9kby5ub3Rlc31gO1xuXG4vLyAgICAgLy8gISEgLy9cbi8vICAgICAvL0NBTkNFTCBCVVRUT05cblxuLy8gICAgIGRvY3VtZW50XG4vLyAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY2FuY2VsLWVkaXRcIilcbi8vICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4vLyAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICAgIGZvcm1FZGl0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4vLyAgICAgICB9KTtcblxuLy8gICAgIC8vU1VCTUlUIENIQU5HRVMgQlVUVE9OXG5cbi8vICAgICBkb2N1bWVudFxuLy8gICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXN1Ym1pdC1lZGl0XCIpXG4vLyAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuLy8gICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgfSk7XG4vLyAgICAgLy8gISEgLy9cbi8vICAgfVxuXG4vLyAgIGxldCBidG5EZWxldGUgPSBsaXN0SXRlbS5jaGlsZE5vZGVzWzJdO1xuLy8gICBsZXQgYnRuRWRpdCA9IGxpc3RJdGVtLmNoaWxkTm9kZXNbM107XG4vLyAgIGxldCBidG5WaWV3ID0gbGlzdEl0ZW0uY2hpbGROb2Rlc1s0XTtcblxuLy8gICBidG5EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRvZG8pO1xuLy8gICAvL1xuLy8gICBidG5FZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VG9kbyk7XG4vLyAgIC8vXG4vLyAgIGJ0blZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICBjb25zb2xlLmxvZyhgaGkgaSBhbSB2aWV3IG9mIGxpIHRpdGxlICR7ZnJlc2hUb2RvLnRpdGxlfWApO1xuLy8gICB9KTtcbi8vIH1cblxuZXhwb3J0IHsgcmVuZGVyIH07XG5cbi8vIGV4cG9ydCB7IG1hbmlwdWxhdGVET00gfTtcbiIsIi8vIGltcG9ydCB7IG1hbmlwdWxhdGVET00gfSBmcm9tIFwiLi9kb21DcmVhdG9yXCI7XG5pbXBvcnQgeyByZW5kZXIsIGdldEluZGV4IH0gZnJvbSBcIi4vZG9tQ3JlYXRvclwiO1xuXG4oXCJ1c2Ugc3RyaWN0XCIpO1xuXG5sZXQgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdWxcIik7XG5sZXQgZm9ybUFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWFkZFwiKTtcbmxldCBmb3JtRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWVkaXRcIik7XG5cbmV4cG9ydCBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbmNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB9XG59XG5cbmNvbnN0IHN1Ym1pdEFkZFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHRvRG8gPSBuZXcgVG9EbyhcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlLWFkZFwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uLWFkZFwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWFkZFwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWFkZFwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWFkZFwiKS52YWx1ZVxuICApO1xuXG4gIHByb2plY3RBcnJheS5wdXNoKHRvRG8pO1xuICAvL1xuICBkb2N1bWVudC5mb3Jtc1swXS5yZXNldCgpO1xuXG4gIGZvcm1BZGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuXG4gIHVsLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgcHJvamVjdEFycmF5LmZvckVhY2gocmVuZGVyKTtcbn07XG5cbmNvbnN0IGNhbmNlbEFkZFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgZm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufTtcblxuY29uc3Qgc3VibWl0RWRpdFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgZm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBsZXQgdGl0bGVFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpO1xuICBsZXQgZGVzY3JpcHRpb25FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvbi1lZGl0XCIpO1xuICBsZXQgZHVlRGF0ZUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWVkaXRcIik7XG4gIGxldCBwcmlvcml0eUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWVkaXRcIik7XG4gIGxldCBub3Rlc0VkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWVkaXRcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0QXJyYXlbZ2V0SW5kZXhdLnRpdGxlID0gdGl0bGVFZGl0LnZhbHVlO1xuICAgIHByb2plY3RBcnJheVtnZXRJbmRleF0uZGVzY3JwdGlvbiA9IGRlc2NyaXB0aW9uRWRpdC52YWx1ZTtcbiAgICBwcm9qZWN0QXJyYXlbZ2V0SW5kZXhdLmR1ZURhdGUgPSBkdWVEYXRlRWRpdC52YWx1ZTtcbiAgICBwcm9qZWN0QXJyYXlbZ2V0SW5kZXhdLnByaW9yaXR5ID0gcHJpb3JpdHlFZGl0LnZhbHVlO1xuICAgIHByb2plY3RBcnJheVtnZXRJbmRleF0ubm90ZXMgPSBub3Rlc0VkaXQudmFsdWU7XG4gIH1cblxuICB1bC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHByb2plY3RBcnJheS5mb3JFYWNoKHJlbmRlcik7XG5cbiAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbiAgY29uc29sZS5sb2coZ2V0SW5kZXgpO1xufTtcblxuY29uc3QgY2FuY2VsRWRpdFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgZm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn07XG5cbmV4cG9ydCB7IHN1Ym1pdEFkZFRvZG8sIGNhbmNlbEFkZFRvZG8sIHN1Ym1pdEVkaXRUb2RvLCBjYW5jZWxFZGl0VG9kbyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBzdWJtaXRBZGRUb2RvLFxuICBjYW5jZWxBZGRUb2RvLFxuICBzdWJtaXRFZGl0VG9kbyxcbiAgY2FuY2VsRWRpdFRvZG8sXG59IGZyb20gXCIuL3RvZG9DcmVhdG9yXCI7XG5cbihcInVzZSBzdHJpY3RcIik7XG5cbmxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tYWRkXCIpO1xuXG5sZXQgYnRuQWRkVG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC10b2RvXCIpO1xuXG5sZXQgYnRuU3VibWl0QWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tc3VibWl0LWFkZFwiKTtcbmxldCBidG5DYW5jZWxBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jYW5jZWwtYWRkXCIpO1xuXG5sZXQgYnRuU3VibWl0RWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXN1Ym1pdC1lZGl0XCIpO1xubGV0IGJ0bkNhbmNlbEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jYW5jZWwtZWRpdFwiKTtcblxuYnRuQWRkVG9Eby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAvL1xufSk7XG5idG5TdWJtaXRBZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEFkZFRvZG8pO1xuYnRuQ2FuY2VsQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxBZGRUb2RvKTtcbi8vXG5idG5TdWJtaXRFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRFZGl0VG9kbyk7XG5idG5DYW5jZWxFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxFZGl0VG9kbyk7XG4vL1xuXG4vLyAgIHtcbi8vICAgICBpZDogRGF0ZS5ub3coKSxcbi8vICAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZVwiKS52YWx1ZSxcbi8vICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvblwiKS52YWx1ZSxcbi8vICAgICBkdWVEYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlXCIpLnZhbHVlLFxuLy8gICAgIHByaW9yaXR5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5XCIpLnZhbHVlLFxuLy8gICAgIG5vdGVzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzXCIpLnZhbHVlLFxuLy8gICB9O1xuXG4vLyBsZXQgYXJyYXkgPSBbXG4vLyAgIHtcbi8vICAgICBpZDogMTExLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6IDIyMixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAzMzMsXG4vLyAgIH0sXG4vLyBdO1xuLy8gZnVuY3Rpb24gZmluZEluZGV4KCkge1xuLy8gICBsZXQgcG9zID0gYXJyYXlcbi8vICAgICAubWFwKGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICByZXR1cm4gZS5pZDtcbi8vICAgICB9KVxuLy8gICAgIC5pbmRleE9mKDMzMyk7XG4vLyAgIHJldHVybiBwb3M7XG4vLyB9XG4vLyBjb25zb2xlLmxvZyhmaW5kSW5kZXgoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=