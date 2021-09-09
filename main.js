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
/* harmony export */   "addToDoToDOM": () => (/* binding */ addToDoToDOM)
/* harmony export */ });
let ul = document.getElementById("todo-ul");

function addToDoToDOM(freshTodo) {
  let listItem = document.createElement("li");
  ul.appendChild(listItem);

  listItem.setAttribute("id", `${freshTodo.id}`);

  let listTitle = document.createElement("p");
  let listDate = document.createElement("p");
  let listCloseBtn = document.createElement("button");
  let listEditBtn = document.createElement("button");

  listItem.appendChild(listTitle);
  listItem.appendChild(listDate);
  listItem.appendChild(listCloseBtn);
  listItem.appendChild(listEditBtn);

  listTitle.innerHTML = `${freshTodo.title}`;
  listDate.innerHTML = `${freshTodo.dueDate}`;
  listCloseBtn.innerHTML = "Delete";
  listEditBtn.innerHTML = "Edit";
}




/***/ }),

/***/ "./src/todoCreator.js":
/*!****************************!*\
  !*** ./src/todoCreator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "cancelAddTodo": () => (/* binding */ cancelAddTodo)
/* harmony export */ });
/* harmony import */ var _domCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreator */ "./src/domCreator.js");


("use strict");

let form = document.getElementById("todo-form");
let ul = document.getElementById("todo-ul");

const projectArray = [];

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
    document.getElementById("input-title").value,
    document.getElementById("input-description").value,
    document.getElementById("input-due-date").value,
    document.getElementById("input-priority").value,
    document.getElementById("input-notes").value
  );

  projectArray.push(toDo);
  //
  document.forms[0].reset();

  form.classList.add("hidden");

  console.log(projectArray);

  ul.innerHTML = "";

  projectArray.forEach(_domCreator__WEBPACK_IMPORTED_MODULE_0__.addToDoToDOM);
};

const cancelAddTodo = (ev) => {
  ev.preventDefault();
  form.classList.add("hidden");
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

let form = document.getElementById("todo-form");
let btnAddToDo = document.getElementById("btn-add-todo");
let btnSubmit = document.getElementById("button-submit");
let btnCancel = document.getElementById("button-cancel");

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsYUFBYTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGdCQUFnQjtBQUMzQywwQkFBMEIsa0JBQWtCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJvQjs7QUFFNUM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVCQUF1QixxREFBWTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa0M7Ozs7Ozs7VUNoRGxDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUQ7O0FBRXZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esc0NBQXNDLGlEQUFPOztBQUU3QyxzQ0FBc0MsdURBQWE7QUFDbkQsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL2RvbUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL3RvZG9DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdWxcIik7XG5cbmZ1bmN0aW9uIGFkZFRvRG9Ub0RPTShmcmVzaFRvZG8pIHtcbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB1bC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7ZnJlc2hUb2RvLmlkfWApO1xuXG4gIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IGxpc3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCBsaXN0Q2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgbGlzdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3REYXRlKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdENsb3NlQnRuKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdEVkaXRCdG4pO1xuXG4gIGxpc3RUaXRsZS5pbm5lckhUTUwgPSBgJHtmcmVzaFRvZG8udGl0bGV9YDtcbiAgbGlzdERhdGUuaW5uZXJIVE1MID0gYCR7ZnJlc2hUb2RvLmR1ZURhdGV9YDtcbiAgbGlzdENsb3NlQnRuLmlubmVySFRNTCA9IFwiRGVsZXRlXCI7XG4gIGxpc3RFZGl0QnRuLmlubmVySFRNTCA9IFwiRWRpdFwiO1xufVxuXG5leHBvcnQgeyBhZGRUb0RvVG9ET00gfTtcbiIsImltcG9ydCB7IGFkZFRvRG9Ub0RPTSB9IGZyb20gXCIuL2RvbUNyZWF0b3JcIjtcblxuKFwidXNlIHN0cmljdFwiKTtcblxubGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybVwiKTtcbmxldCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby11bFwiKTtcblxuY29uc3QgcHJvamVjdEFycmF5ID0gW107XG5cbmNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB9XG59XG5cbmNvbnN0IGFkZFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHRvRG8gPSBuZXcgVG9EbyhcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb25cIikudmFsdWUsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZVwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5XCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXNcIikudmFsdWVcbiAgKTtcblxuICBwcm9qZWN0QXJyYXkucHVzaCh0b0RvKTtcbiAgLy9cbiAgZG9jdW1lbnQuZm9ybXNbMF0ucmVzZXQoKTtcblxuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcblxuICB1bC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIHByb2plY3RBcnJheS5mb3JFYWNoKGFkZFRvRG9Ub0RPTSk7XG59O1xuXG5jb25zdCBjYW5jZWxBZGRUb2RvID0gKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn07XG5cbmV4cG9ydCB7IGFkZFRvZG8sIGNhbmNlbEFkZFRvZG8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkVG9kbywgY2FuY2VsQWRkVG9kbyB9IGZyb20gXCIuL3RvZG9DcmVhdG9yXCI7XG5cbihcInVzZSBzdHJpY3RcIik7XG5cbmxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm1cIik7XG5sZXQgYnRuQWRkVG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC10b2RvXCIpO1xubGV0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXN1Ym1pdFwiKTtcbmxldCBidG5DYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jYW5jZWxcIik7XG5cbmJ0bkFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb2RvKTtcblxuICBidG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbEFkZFRvZG8pO1xufSk7XG5cbi8vICAge1xuLy8gICAgIGlkOiBEYXRlLm5vdygpLFxuLy8gICAgIHRpdGxlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlXCIpLnZhbHVlLFxuLy8gICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uXCIpLnZhbHVlLFxuLy8gICAgIGR1ZURhdGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZHVlLWRhdGVcIikudmFsdWUsXG4vLyAgICAgcHJpb3JpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHlcIikudmFsdWUsXG4vLyAgICAgbm90ZXM6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXNcIikudmFsdWUsXG4vLyAgIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=