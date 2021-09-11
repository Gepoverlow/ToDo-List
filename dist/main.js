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
/* harmony export */   "manipulateDOM": () => (/* binding */ manipulateDOM)
/* harmony export */ });
/* harmony import */ var _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoCreator.js */ "./src/todoCreator.js");


let ul = document.getElementById("todo-ul");
let formAdd = document.getElementById("todo-form-add");
let formEdit = document.getElementById("todo-form-edit");
let formView = document.getElementById("todo-form-view");

function manipulateDOM(freshTodo) {
  let listItem = document.createElement("li");
  ul.appendChild(listItem);

  listItem.setAttribute("id", `${freshTodo.id}`);

  let listTitle = document.createElement("p");
  let listDate = document.createElement("p");
  let listCloseBtn = document.createElement("button");
  let listEditBtn = document.createElement("button");
  let listViewBtn = document.createElement("button");
  let listCheck = document.createElement("input");

  listCheck.type = "checkbox";

  listItem.appendChild(listTitle);
  listItem.appendChild(listDate);
  listItem.appendChild(listCloseBtn);
  listItem.appendChild(listEditBtn);
  listItem.appendChild(listViewBtn);
  listItem.appendChild(listCheck);

  listTitle.textContent = `${freshTodo.title}`;
  listDate.textContent = `${freshTodo.dueDate}`;
  listViewBtn.textContent = "View";
  listCloseBtn.textContent = "Delete";
  listEditBtn.textContent = "Edit";

  function findIndex(arr) {
    let pos = arr
      .map(function (e) {
        return e.id;
      })
      .indexOf(parseInt(listItem.id));
    return pos;
  }

  function deleteTodo() {
    _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.splice(findIndex(_todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray), 1);
    ul.removeChild(listItem);
    console.log(_todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray);
  }

  function editTodo() {
    formEdit.classList.remove("hidden");
    document.getElementById("input-title-edit").value = `${freshTodo.title}`;
    document.getElementById(
      "input-description-edit"
    ).value = `${freshTodo.description}`;
    document.getElementById(
      "input-due-date-edit"
    ).value = `${freshTodo.dueDate}`;
    document.getElementById(
      "input-priority-edit"
    ).value = `${freshTodo.priority}`;
    document.getElementById("input-notes-edit").value = `${freshTodo.notes}`;

    //CANCEL BUTTON
    document
      .getElementById("button-cancel-edit")
      .addEventListener("click", function (ev) {
        ev.preventDefault();
        formEdit.classList.add("hidden");
      });
    //SUBMIT CHANGES BUTTON
    document
      .getElementById("button-submit-edit")
      .addEventListener("click", function (ev) {
        ev.preventDefault();
      });
  }
  // !
  let btnDelete = listItem.childNodes[2];
  let btnEdit = listItem.childNodes[3];
  let btnView = listItem.childNodes[4];
  // !

  btnDelete.addEventListener("click", deleteTodo);
  //
  btnEdit.addEventListener("click", editTodo);
  //
  btnView.addEventListener("click", function () {
    console.log(`hi i am view of li title ${freshTodo.title}`);
  });
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
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "cancelAddTodo": () => (/* binding */ cancelAddTodo)
/* harmony export */ });
/* harmony import */ var _domCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreator */ "./src/domCreator.js");


("use strict");

let formAdd = document.getElementById("todo-form-add");
let ul = document.getElementById("todo-ul");

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

const addTodo = (ev) => {
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

  projectArray.forEach(_domCreator__WEBPACK_IMPORTED_MODULE_0__.manipulateDOM);
};

const cancelAddTodo = (ev) => {
  ev.preventDefault();
  formAdd.classList.add("hidden");
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
let btnSubmit = document.getElementById("button-submit-add");
let btnCancel = document.getElementById("button-cancel-add");

btnAddToDo.addEventListener("click", () => {
  form.classList.remove("hidden");
});

document.addEventListener("DOMContentLoaded", () => {
  btnSubmit.addEventListener("click", _todoCreator__WEBPACK_IMPORTED_MODULE_0__.addTodo);
  btnCancel.addEventListener("click", _todoCreator__WEBPACK_IMPORTED_MODULE_0__.cancelAddTodo);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsYUFBYTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsZ0JBQWdCO0FBQzdDLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksZ0VBQW1CLFdBQVcseURBQVk7QUFDOUM7QUFDQSxnQkFBZ0IseURBQVk7QUFDNUI7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRCxnQkFBZ0I7QUFDM0U7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBLGlCQUFpQixtQkFBbUI7QUFDcEMsMkRBQTJELGdCQUFnQjs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsZ0JBQWdCO0FBQzVELEdBQUc7QUFDSDs7QUFFeUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGb0I7O0FBRTdDOztBQUVBO0FBQ0E7O0FBRU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1QkFBdUIsc0RBQWE7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWtDOzs7Ozs7O1VDaERsQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVEOztBQUV2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHNDQUFzQyxpREFBTztBQUM3QyxzQ0FBc0MsdURBQWE7QUFDbkQsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9kb21DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy90b2RvQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJvamVjdEFycmF5IH0gZnJvbSBcIi4vdG9kb0NyZWF0b3IuanNcIjtcblxubGV0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXVsXCIpO1xubGV0IGZvcm1BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1hZGRcIik7XG5sZXQgZm9ybUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1lZGl0XCIpO1xubGV0IGZvcm1WaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tdmlld1wiKTtcblxuZnVuY3Rpb24gbWFuaXB1bGF0ZURPTShmcmVzaFRvZG8pIHtcbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB1bC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7ZnJlc2hUb2RvLmlkfWApO1xuXG4gIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IGxpc3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCBsaXN0Q2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgbGlzdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgbGlzdFZpZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgbGlzdENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIGxpc3RDaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xuXG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3REYXRlKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdENsb3NlQnRuKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdEVkaXRCdG4pO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0Vmlld0J0bik7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RDaGVjayk7XG5cbiAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gYCR7ZnJlc2hUb2RvLnRpdGxlfWA7XG4gIGxpc3REYXRlLnRleHRDb250ZW50ID0gYCR7ZnJlc2hUb2RvLmR1ZURhdGV9YDtcbiAgbGlzdFZpZXdCdG4udGV4dENvbnRlbnQgPSBcIlZpZXdcIjtcbiAgbGlzdENsb3NlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgbGlzdEVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblxuICBmdW5jdGlvbiBmaW5kSW5kZXgoYXJyKSB7XG4gICAgbGV0IHBvcyA9IGFyclxuICAgICAgLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5pZDtcbiAgICAgIH0pXG4gICAgICAuaW5kZXhPZihwYXJzZUludChsaXN0SXRlbS5pZCkpO1xuICAgIHJldHVybiBwb3M7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICAgIHByb2plY3RBcnJheS5zcGxpY2UoZmluZEluZGV4KHByb2plY3RBcnJheSksIDEpO1xuICAgIHVsLnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFRvZG8oKSB7XG4gICAgZm9ybUVkaXQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlLWVkaXRcIikudmFsdWUgPSBgJHtmcmVzaFRvZG8udGl0bGV9YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiaW5wdXQtZGVzY3JpcHRpb24tZWRpdFwiXG4gICAgKS52YWx1ZSA9IGAke2ZyZXNoVG9kby5kZXNjcmlwdGlvbn1gO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgXCJpbnB1dC1kdWUtZGF0ZS1lZGl0XCJcbiAgICApLnZhbHVlID0gYCR7ZnJlc2hUb2RvLmR1ZURhdGV9YDtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIFwiaW5wdXQtcHJpb3JpdHktZWRpdFwiXG4gICAgKS52YWx1ZSA9IGAke2ZyZXNoVG9kby5wcmlvcml0eX1gO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtZWRpdFwiKS52YWx1ZSA9IGAke2ZyZXNoVG9kby5ub3Rlc31gO1xuXG4gICAgLy9DQU5DRUwgQlVUVE9OXG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jYW5jZWwtZWRpdFwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIH0pO1xuICAgIC8vU1VCTUlUIENIQU5HRVMgQlVUVE9OXG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1zdWJtaXQtZWRpdFwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuICB9XG4gIC8vICFcbiAgbGV0IGJ0bkRlbGV0ZSA9IGxpc3RJdGVtLmNoaWxkTm9kZXNbMl07XG4gIGxldCBidG5FZGl0ID0gbGlzdEl0ZW0uY2hpbGROb2Rlc1szXTtcbiAgbGV0IGJ0blZpZXcgPSBsaXN0SXRlbS5jaGlsZE5vZGVzWzRdO1xuICAvLyAhXG5cbiAgYnRuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb2RvKTtcbiAgLy9cbiAgYnRuRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRvZG8pO1xuICAvL1xuICBidG5WaWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coYGhpIGkgYW0gdmlldyBvZiBsaSB0aXRsZSAke2ZyZXNoVG9kby50aXRsZX1gKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IG1hbmlwdWxhdGVET00gfTtcbiIsImltcG9ydCB7IG1hbmlwdWxhdGVET00gfSBmcm9tIFwiLi9kb21DcmVhdG9yXCI7XG5cbihcInVzZSBzdHJpY3RcIik7XG5cbmxldCBmb3JtQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tYWRkXCIpO1xubGV0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXVsXCIpO1xuXG5leHBvcnQgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG5jbGFzcyBUb0RvIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICB0aGlzLmlkID0gRGF0ZS5ub3coKTtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgfVxufVxuXG5jb25zdCBhZGRUb2RvID0gKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCB0b0RvID0gbmV3IFRvRG8oXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1hZGRcIikudmFsdWUsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvbi1hZGRcIikudmFsdWUsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZS1hZGRcIikudmFsdWUsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcmlvcml0eS1hZGRcIikudmFsdWUsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1hZGRcIikudmFsdWVcbiAgKTtcblxuICBwcm9qZWN0QXJyYXkucHVzaCh0b0RvKTtcbiAgLy9cbiAgZG9jdW1lbnQuZm9ybXNbMF0ucmVzZXQoKTtcblxuICBmb3JtQWRkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcblxuICB1bC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHByb2plY3RBcnJheS5mb3JFYWNoKG1hbmlwdWxhdGVET00pO1xufTtcblxuY29uc3QgY2FuY2VsQWRkVG9kbyA9IChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBmb3JtQWRkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59O1xuXG5leHBvcnQgeyBhZGRUb2RvLCBjYW5jZWxBZGRUb2RvIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGFkZFRvZG8sIGNhbmNlbEFkZFRvZG8gfSBmcm9tIFwiLi90b2RvQ3JlYXRvclwiO1xuXG4oXCJ1c2Ugc3RyaWN0XCIpO1xuXG5sZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWFkZFwiKTtcbmxldCBidG5BZGRUb0RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tYWRkLXRvZG9cIik7XG5sZXQgYnRuU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tc3VibWl0LWFkZFwiKTtcbmxldCBidG5DYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jYW5jZWwtYWRkXCIpO1xuXG5idG5BZGRUb0RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGZvcm0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGJ0blN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9kbyk7XG4gIGJ0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsQWRkVG9kbyk7XG59KTtcblxuLy8gICB7XG4vLyAgICAgaWQ6IERhdGUubm93KCksXG4vLyAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGVcIikudmFsdWUsXG4vLyAgICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb25cIikudmFsdWUsXG4vLyAgICAgZHVlRGF0ZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZVwiKS52YWx1ZSxcbi8vICAgICBwcmlvcml0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcmlvcml0eVwiKS52YWx1ZSxcbi8vICAgICBub3RlczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlc1wiKS52YWx1ZSxcbi8vICAgfTtcblxuLy8gbGV0IGFycmF5ID0gW1xuLy8gICB7XG4vLyAgICAgaWQ6IDExMSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAyMjIsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogMzMzLFxuLy8gICB9LFxuLy8gXTtcbi8vIGZ1bmN0aW9uIGZpbmRJbmRleCgpIHtcbi8vICAgbGV0IHBvcyA9IGFycmF5XG4vLyAgICAgLm1hcChmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgcmV0dXJuIGUuaWQ7XG4vLyAgICAgfSlcbi8vICAgICAuaW5kZXhPZigzMzMpO1xuLy8gICByZXR1cm4gcG9zO1xuLy8gfVxuLy8gY29uc29sZS5sb2coZmluZEluZGV4KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9