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

function manipulateDOM(freshTodo) {
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
  let btn = listItem.childNodes[2];

  btn.addEventListener("click", deleteTodo);
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

let form = document.getElementById("todo-form");
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

  projectArray.forEach(_domCreator__WEBPACK_IMPORTED_MODULE_0__.manipulateDOM);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7O0FBRWhEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsYUFBYTs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGdCQUFnQjtBQUMzQywwQkFBMEIsa0JBQWtCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxnRUFBbUIsV0FBVyx5REFBWTtBQUM5QztBQUNBLGdCQUFnQix5REFBWTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q29COztBQUU3Qzs7QUFFQTtBQUNBOztBQUVPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUJBQXVCLHNEQUFhO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVrQzs7Ozs7OztVQ2hEbEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051RDs7QUFFdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxzQ0FBc0MsaURBQU87QUFDN0Msc0NBQXNDLHVEQUFhO0FBQ25ELENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvZG9tQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvdG9kb0NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIuL3RvZG9DcmVhdG9yLmpzXCI7XG5cbmxldCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby11bFwiKTtcblxuZnVuY3Rpb24gbWFuaXB1bGF0ZURPTShmcmVzaFRvZG8pIHtcbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB1bC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbiAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7ZnJlc2hUb2RvLmlkfWApO1xuXG4gIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IGxpc3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCBsaXN0Q2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgbGlzdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3REYXRlKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdENsb3NlQnRuKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdEVkaXRCdG4pO1xuXG4gIGxpc3RUaXRsZS5pbm5lckhUTUwgPSBgJHtmcmVzaFRvZG8udGl0bGV9YDtcbiAgbGlzdERhdGUuaW5uZXJIVE1MID0gYCR7ZnJlc2hUb2RvLmR1ZURhdGV9YDtcbiAgbGlzdENsb3NlQnRuLmlubmVySFRNTCA9IFwiRGVsZXRlXCI7XG4gIGxpc3RFZGl0QnRuLmlubmVySFRNTCA9IFwiRWRpdFwiO1xuXG4gIGZ1bmN0aW9uIGZpbmRJbmRleChhcnIpIHtcbiAgICBsZXQgcG9zID0gYXJyXG4gICAgICAubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlkO1xuICAgICAgfSlcbiAgICAgIC5pbmRleE9mKHBhcnNlSW50KGxpc3RJdGVtLmlkKSk7XG4gICAgcmV0dXJuIHBvcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG8oKSB7XG4gICAgcHJvamVjdEFycmF5LnNwbGljZShmaW5kSW5kZXgocHJvamVjdEFycmF5KSwgMSk7XG4gICAgdWwucmVtb3ZlQ2hpbGQobGlzdEl0ZW0pO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gIH1cbiAgbGV0IGJ0biA9IGxpc3RJdGVtLmNoaWxkTm9kZXNbMl07XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb2RvKTtcbn1cblxuZXhwb3J0IHsgbWFuaXB1bGF0ZURPTSB9O1xuIiwiaW1wb3J0IHsgbWFuaXB1bGF0ZURPTSB9IGZyb20gXCIuL2RvbUNyZWF0b3JcIjtcblxuKFwidXNlIHN0cmljdFwiKTtcblxubGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybVwiKTtcbmxldCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby11bFwiKTtcblxuZXhwb3J0IGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIH1cbn1cblxuY29uc3QgYWRkVG9kbyA9IChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgdG9EbyA9IG5ldyBUb0RvKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGVcIikudmFsdWUsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvblwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHlcIikudmFsdWUsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlc1wiKS52YWx1ZVxuICApO1xuXG4gIHByb2plY3RBcnJheS5wdXNoKHRvRG8pO1xuICAvL1xuICBkb2N1bWVudC5mb3Jtc1swXS5yZXNldCgpO1xuXG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuXG4gIHVsLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgcHJvamVjdEFycmF5LmZvckVhY2gobWFuaXB1bGF0ZURPTSk7XG59O1xuXG5jb25zdCBjYW5jZWxBZGRUb2RvID0gKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn07XG5cbmV4cG9ydCB7IGFkZFRvZG8sIGNhbmNlbEFkZFRvZG8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkVG9kbywgY2FuY2VsQWRkVG9kbyB9IGZyb20gXCIuL3RvZG9DcmVhdG9yXCI7XG5cbihcInVzZSBzdHJpY3RcIik7XG5cbmxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm1cIik7XG5sZXQgYnRuQWRkVG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWFkZC10b2RvXCIpO1xubGV0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXN1Ym1pdFwiKTtcbmxldCBidG5DYW5jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jYW5jZWxcIik7XG5cbmJ0bkFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgYnRuU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb2RvKTtcbiAgYnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxBZGRUb2RvKTtcbn0pO1xuXG4vLyAgIHtcbi8vICAgICBpZDogRGF0ZS5ub3coKSxcbi8vICAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZVwiKS52YWx1ZSxcbi8vICAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kZXNjcmlwdGlvblwiKS52YWx1ZSxcbi8vICAgICBkdWVEYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlXCIpLnZhbHVlLFxuLy8gICAgIHByaW9yaXR5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5XCIpLnZhbHVlLFxuLy8gICAgIG5vdGVzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzXCIpLnZhbHVlLFxuLy8gICB9O1xuXG4vLyBsZXQgYXJyYXkgPSBbXG4vLyAgIHtcbi8vICAgICBpZDogMTExLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgaWQ6IDIyMixcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAzMzMsXG4vLyAgIH0sXG4vLyBdO1xuLy8gZnVuY3Rpb24gZmluZEluZGV4KCkge1xuLy8gICBsZXQgcG9zID0gYXJyYXlcbi8vICAgICAubWFwKGZ1bmN0aW9uIChlKSB7XG4vLyAgICAgICByZXR1cm4gZS5pZDtcbi8vICAgICB9KVxuLy8gICAgIC5pbmRleE9mKDMzMyk7XG4vLyAgIHJldHVybiBwb3M7XG4vLyB9XG4vLyBjb25zb2xlLmxvZyhmaW5kSW5kZXgoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=