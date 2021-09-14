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
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCreator.js */ "./src/todoCreator.js");


let ul = document.getElementById("todo-ul");
let formEdit = document.getElementById("todo-form-edit");

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

    let getIndex = findIndex(_todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray);
    let testIndex = findIndex(_todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray);

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
    projectArray[i].title = titleEdit.value;
    projectArray[i].descrption = descriptionEdit.value;
    projectArray[i].dueDate = dueDateEdit.value;
    projectArray[i].priority = priorityEdit.value;
    projectArray[i].notes = notesEdit.value;
  }

  ul.innerHTML = "";

  projectArray.forEach(_domCreator__WEBPACK_IMPORTED_MODULE_0__.render);

  console.log(projectArray);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7QUFDRCx1Q0FBdUMsdURBQWE7QUFDcEQsdUNBQXVDLHVEQUFhO0FBQ3BEO0FBQ0Esd0NBQXdDLHdEQUFjO0FBQ3RELHdDQUF3Qyx3REFBYztBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9kb21DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy90b2RvQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vdG9kb0NyZWF0b3IuanNcIjtcblxubGV0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXVsXCIpO1xubGV0IGZvcm1FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tZWRpdFwiKTtcblxuZnVuY3Rpb24gcmVuZGVyKGZyZXNoVG9kbykge1xuICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIHVsLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7ZnJlc2hUb2RvLmlkfWApO1xuXG4gIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IGxpc3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCBsaXN0RGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IGxpc3RFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbGV0IGxpc3RDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICBsaXN0Q2hlY2sudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0RGF0ZSk7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3REZWxldGVCdG4pO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0RWRpdEJ0bik7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RDaGVjayk7XG5cbiAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gYCR7ZnJlc2hUb2RvLnRpdGxlfWA7XG4gIGxpc3REYXRlLnRleHRDb250ZW50ID0gYCR7ZnJlc2hUb2RvLmR1ZURhdGV9YDtcbiAgbGlzdERlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gIGxpc3RFZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gIC8vXG4gIGZ1bmN0aW9uIGZpbmRJbmRleChhcnIpIHtcbiAgICBsZXQgcG9zID0gYXJyXG4gICAgICAubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlkO1xuICAgICAgfSlcbiAgICAgIC5pbmRleE9mKHBhcnNlSW50KGxpc3RJdGVtLmlkKSk7XG4gICAgcmV0dXJuIHBvcztcbiAgfVxuICAvL1xuICBmdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICAgIHByb2plY3RBcnJheS5zcGxpY2UoZmluZEluZGV4KHByb2plY3RBcnJheSksIDEpO1xuICAgIHVsLnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcbiAgfVxuICAvL1xuICBmdW5jdGlvbiBlZGl0VG9kbygpIHtcbiAgICBsZXQgdGl0bGVFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpO1xuICAgIGxldCBkZXNjcmlwdGlvbkVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uLWVkaXRcIik7XG4gICAgbGV0IGR1ZURhdGVFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZS1lZGl0XCIpO1xuICAgIGxldCBwcmlvcml0eUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWVkaXRcIik7XG4gICAgbGV0IG5vdGVzRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtZWRpdFwiKTtcblxuICAgIGxldCBnZXRJbmRleCA9IGZpbmRJbmRleChwcm9qZWN0QXJyYXkpO1xuICAgIGxldCB0ZXN0SW5kZXggPSBmaW5kSW5kZXgocHJvamVjdEFycmF5KTtcblxuICAgIHRpdGxlRWRpdC52YWx1ZSA9IHByb2plY3RBcnJheVtnZXRJbmRleF0udGl0bGU7XG4gICAgZGVzY3JpcHRpb25FZGl0LnZhbHVlID0gcHJvamVjdEFycmF5W2dldEluZGV4XS5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlRWRpdC52YWx1ZSA9IHByb2plY3RBcnJheVtnZXRJbmRleF0uZHVlRGF0ZTtcbiAgICBwcmlvcml0eUVkaXQudmFsdWUgPSBwcm9qZWN0QXJyYXlbZ2V0SW5kZXhdLnByaW9yaXR5O1xuICAgIG5vdGVzRWRpdC52YWx1ZSA9IHByb2plY3RBcnJheVtnZXRJbmRleF0ubm90ZXM7XG5cbiAgICBmb3JtRWRpdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgbGlzdEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUb2RvKTtcbiAgbGlzdERlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVG9kbyk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gZnVuY3Rpb24gbWFuaXB1bGF0ZURPTShmcmVzaFRvZG8pIHtcbi8vICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuLy8gICB1bC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbi8vICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7ZnJlc2hUb2RvLmlkfWApO1xuXG4vLyAgIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vICAgbGV0IGxpc3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4vLyAgIGxldCBsaXN0Q2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuLy8gICBsZXQgbGlzdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuLy8gICBsZXQgbGlzdFZpZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuLy8gICBsZXQgbGlzdENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgIGxpc3RDaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xuXG4vLyAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG4vLyAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3REYXRlKTtcbi8vICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdENsb3NlQnRuKTtcbi8vICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdEVkaXRCdG4pO1xuLy8gICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0Vmlld0J0bik7XG4vLyAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RDaGVjayk7XG5cbi8vICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gYCR7ZnJlc2hUb2RvLnRpdGxlfWA7XG4vLyAgIGxpc3REYXRlLnRleHRDb250ZW50ID0gYCR7ZnJlc2hUb2RvLmR1ZURhdGV9YDtcbi8vICAgbGlzdFZpZXdCdG4udGV4dENvbnRlbnQgPSBcIlZpZXdcIjtcbi8vICAgbGlzdENsb3NlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbi8vICAgbGlzdEVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblxuLy8gICBmdW5jdGlvbiBmaW5kSW5kZXgoYXJyKSB7XG4vLyAgICAgbGV0IHBvcyA9IGFyclxuLy8gICAgICAgLm1hcChmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgICByZXR1cm4gZS5pZDtcbi8vICAgICAgIH0pXG4vLyAgICAgICAuaW5kZXhPZihwYXJzZUludChsaXN0SXRlbS5pZCkpO1xuLy8gICAgIHJldHVybiBwb3M7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuLy8gICAgIHByb2plY3RBcnJheS5zcGxpY2UoZmluZEluZGV4KHByb2plY3RBcnJheSksIDEpO1xuLy8gICAgIHVsLnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcbi8vICAgfVxuXG4vLyAgIGZ1bmN0aW9uIGVkaXRUb2RvKCkge1xuLy8gICAgIGZvcm1FZGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpLnZhbHVlID0gYCR7ZnJlc2hUb2RvLnRpdGxlfWA7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyAgICAgICBcImlucHV0LWRlc2NyaXB0aW9uLWVkaXRcIlxuLy8gICAgICkudmFsdWUgPSBgJHtmcmVzaFRvZG8uZGVzY3JpcHRpb259YDtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbi8vICAgICAgIFwiaW5wdXQtZHVlLWRhdGUtZWRpdFwiXG4vLyAgICAgKS52YWx1ZSA9IGAke2ZyZXNoVG9kby5kdWVEYXRlfWA7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyAgICAgICBcImlucHV0LXByaW9yaXR5LWVkaXRcIlxuLy8gICAgICkudmFsdWUgPSBgJHtmcmVzaFRvZG8ucHJpb3JpdHl9YDtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWVkaXRcIikudmFsdWUgPSBgJHtmcmVzaFRvZG8ubm90ZXN9YDtcblxuLy8gICAgIC8vICEhIC8vXG4vLyAgICAgLy9DQU5DRUwgQlVUVE9OXG5cbi8vICAgICBkb2N1bWVudFxuLy8gICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNhbmNlbC1lZGl0XCIpXG4vLyAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuLy8gICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICBmb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuLy8gICAgICAgfSk7XG5cbi8vICAgICAvL1NVQk1JVCBDSEFOR0VTIEJVVFRPTlxuXG4vLyAgICAgZG9jdW1lbnRcbi8vICAgICAgIC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1zdWJtaXQtZWRpdFwiKVxuLy8gICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbi8vICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgIH0pO1xuLy8gICAgIC8vICEhIC8vXG4vLyAgIH1cblxuLy8gICBsZXQgYnRuRGVsZXRlID0gbGlzdEl0ZW0uY2hpbGROb2Rlc1syXTtcbi8vICAgbGV0IGJ0bkVkaXQgPSBsaXN0SXRlbS5jaGlsZE5vZGVzWzNdO1xuLy8gICBsZXQgYnRuVmlldyA9IGxpc3RJdGVtLmNoaWxkTm9kZXNbNF07XG5cbi8vICAgYnRuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb2RvKTtcbi8vICAgLy9cbi8vICAgYnRuRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRvZG8pO1xuLy8gICAvL1xuLy8gICBidG5WaWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgY29uc29sZS5sb2coYGhpIGkgYW0gdmlldyBvZiBsaSB0aXRsZSAke2ZyZXNoVG9kby50aXRsZX1gKTtcbi8vICAgfSk7XG4vLyB9XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuXG4vLyBleHBvcnQgeyBtYW5pcHVsYXRlRE9NIH07XG4iLCIvLyBpbXBvcnQgeyBtYW5pcHVsYXRlRE9NIH0gZnJvbSBcIi4vZG9tQ3JlYXRvclwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vZG9tQ3JlYXRvclwiO1xuXG4oXCJ1c2Ugc3RyaWN0XCIpO1xuXG5sZXQgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdWxcIik7XG5sZXQgZm9ybUFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWFkZFwiKTtcbmxldCBmb3JtRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWVkaXRcIik7XG5cbmV4cG9ydCBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbmNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB9XG59XG5cbmNvbnN0IHN1Ym1pdEFkZFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHRvRG8gPSBuZXcgVG9EbyhcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlLWFkZFwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uLWFkZFwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWFkZFwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWFkZFwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWFkZFwiKS52YWx1ZVxuICApO1xuXG4gIHByb2plY3RBcnJheS5wdXNoKHRvRG8pO1xuICAvL1xuICBkb2N1bWVudC5mb3Jtc1swXS5yZXNldCgpO1xuXG4gIGZvcm1BZGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuXG4gIHVsLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgcHJvamVjdEFycmF5LmZvckVhY2gocmVuZGVyKTtcbn07XG5cbmNvbnN0IGNhbmNlbEFkZFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgZm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufTtcblxuY29uc3Qgc3VibWl0RWRpdFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgZm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBsZXQgdGl0bGVFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpO1xuICBsZXQgZGVzY3JpcHRpb25FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvbi1lZGl0XCIpO1xuICBsZXQgZHVlRGF0ZUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWVkaXRcIik7XG4gIGxldCBwcmlvcml0eUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWVkaXRcIik7XG4gIGxldCBub3Rlc0VkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWVkaXRcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0QXJyYXlbaV0udGl0bGUgPSB0aXRsZUVkaXQudmFsdWU7XG4gICAgcHJvamVjdEFycmF5W2ldLmRlc2NycHRpb24gPSBkZXNjcmlwdGlvbkVkaXQudmFsdWU7XG4gICAgcHJvamVjdEFycmF5W2ldLmR1ZURhdGUgPSBkdWVEYXRlRWRpdC52YWx1ZTtcbiAgICBwcm9qZWN0QXJyYXlbaV0ucHJpb3JpdHkgPSBwcmlvcml0eUVkaXQudmFsdWU7XG4gICAgcHJvamVjdEFycmF5W2ldLm5vdGVzID0gbm90ZXNFZGl0LnZhbHVlO1xuICB9XG5cbiAgdWwuaW5uZXJIVE1MID0gXCJcIjtcblxuICBwcm9qZWN0QXJyYXkuZm9yRWFjaChyZW5kZXIpO1xuXG4gIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG59O1xuXG5jb25zdCBjYW5jZWxFZGl0VG9kbyA9IChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBmb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufTtcblxuZXhwb3J0IHsgc3VibWl0QWRkVG9kbywgY2FuY2VsQWRkVG9kbywgc3VibWl0RWRpdFRvZG8sIGNhbmNlbEVkaXRUb2RvIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIHN1Ym1pdEFkZFRvZG8sXG4gIGNhbmNlbEFkZFRvZG8sXG4gIHN1Ym1pdEVkaXRUb2RvLFxuICBjYW5jZWxFZGl0VG9kbyxcbn0gZnJvbSBcIi4vdG9kb0NyZWF0b3JcIjtcblxuKFwidXNlIHN0cmljdFwiKTtcblxubGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1hZGRcIik7XG5cbmxldCBidG5BZGRUb0RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tYWRkLXRvZG9cIik7XG5cbmxldCBidG5TdWJtaXRBZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1zdWJtaXQtYWRkXCIpO1xubGV0IGJ0bkNhbmNlbEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNhbmNlbC1hZGRcIik7XG5cbmxldCBidG5TdWJtaXRFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tc3VibWl0LWVkaXRcIik7XG5sZXQgYnRuQ2FuY2VsRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNhbmNlbC1lZGl0XCIpO1xuXG5idG5BZGRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIC8vXG59KTtcbmJ0blN1Ym1pdEFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0QWRkVG9kbyk7XG5idG5DYW5jZWxBZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbEFkZFRvZG8pO1xuLy9cbmJ0blN1Ym1pdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEVkaXRUb2RvKTtcbmJ0bkNhbmNlbEVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbEVkaXRUb2RvKTtcbi8vXG5cbi8vICAge1xuLy8gICAgIGlkOiBEYXRlLm5vdygpLFxuLy8gICAgIHRpdGxlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlXCIpLnZhbHVlLFxuLy8gICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uXCIpLnZhbHVlLFxuLy8gICAgIGR1ZURhdGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZHVlLWRhdGVcIikudmFsdWUsXG4vLyAgICAgcHJpb3JpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHlcIikudmFsdWUsXG4vLyAgICAgbm90ZXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXNcIikudmFsdWUsXG4vLyAgIH07XG5cbi8vIGxldCBhcnJheSA9IFtcbi8vICAge1xuLy8gICAgIGlkOiAxMTEsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogMjIyLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6IDMzMyxcbi8vICAgfSxcbi8vIF07XG4vLyBmdW5jdGlvbiBmaW5kSW5kZXgoKSB7XG4vLyAgIGxldCBwb3MgPSBhcnJheVxuLy8gICAgIC5tYXAoZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgIHJldHVybiBlLmlkO1xuLy8gICAgIH0pXG4vLyAgICAgLmluZGV4T2YoMzMzKTtcbi8vICAgcmV0dXJuIHBvcztcbi8vIH1cbi8vIGNvbnNvbGUubG9nKGZpbmRJbmRleCgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==