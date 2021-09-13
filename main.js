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
    console.log("testing delete todo");
  }

  function editTodo() {
    formEdit.classList.remove("hidden");
  }

  listDeleteBtn.addEventListener("click", deleteTodo);
  listEditBtn.addEventListener("click", editTodo);
}

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
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "cancelAddTodo": () => (/* binding */ cancelAddTodo),
/* harmony export */   "editTodo": () => (/* binding */ editTodo),
/* harmony export */   "cancelEditTodo": () => (/* binding */ cancelEditTodo),
/* harmony export */   "cancelViewTodo": () => (/* binding */ cancelViewTodo)
/* harmony export */ });
/* harmony import */ var _domCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domCreator */ "./src/domCreator.js");



("use strict");

let ul = document.getElementById("todo-ul");
let formAdd = document.getElementById("todo-form-add");
let formEdit = document.getElementById("todo-form-edit");
let formView = document.getElementById("todo-form-view");

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
  console.log(projectArray.length);

  ul.innerHTML = "";

  projectArray.forEach(_domCreator__WEBPACK_IMPORTED_MODULE_0__.render);
};

const cancelAddTodo = (ev) => {
  ev.preventDefault();
  formAdd.classList.add("hidden");
};

const editTodo = (ev) => {
  ev.preventDefault();
  formEdit.classList.add("hidden");
};

const cancelEditTodo = (ev) => {
  ev.preventDefault();
  formEdit.classList.add("hidden");
};

const cancelViewTodo = (ev) => {
  ev.preventDefault();
  formView.classList.add("hidden");
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
  btnSubmitAdd.addEventListener("click", _todoCreator__WEBPACK_IMPORTED_MODULE_0__.addTodo);
  btnCancelAdd.addEventListener("click", _todoCreator__WEBPACK_IMPORTED_MODULE_0__.cancelAddTodo);
  //
  btnSubmitEdit.addEventListener("click", _todoCreator__WEBPACK_IMPORTED_MODULE_0__.editTodo);
  btnCancelEdit.addEventListener("click", _todoCreator__WEBPACK_IMPORTED_MODULE_0__.cancelEditTodo);
  //
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL2RvbUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL3RvZG9DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi90b2RvQ3JlYXRvci5qc1wiO1xuXG5sZXQgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdWxcIik7XG5sZXQgZm9ybUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1lZGl0XCIpO1xuXG5mdW5jdGlvbiByZW5kZXIoZnJlc2hUb2RvKSB7XG4gIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICBsaXN0SXRlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtmcmVzaFRvZG8uaWR9YCk7XG5cbiAgbGV0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsZXQgbGlzdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IGxpc3REZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgbGlzdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgbGlzdENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gIGxpc3RDaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xuXG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3REYXRlKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdERlbGV0ZUJ0bik7XG4gIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RFZGl0QnRuKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdENoZWNrKTtcblxuICBsaXN0VGl0bGUudGV4dENvbnRlbnQgPSBgJHtmcmVzaFRvZG8udGl0bGV9YDtcbiAgbGlzdERhdGUudGV4dENvbnRlbnQgPSBgJHtmcmVzaFRvZG8uZHVlRGF0ZX1gO1xuICBsaXN0RGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgbGlzdEVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblxuICBmdW5jdGlvbiBmaW5kSW5kZXgoYXJyKSB7XG4gICAgbGV0IHBvcyA9IGFyclxuICAgICAgLm1hcChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gZS5pZDtcbiAgICAgIH0pXG4gICAgICAuaW5kZXhPZihwYXJzZUludChsaXN0SXRlbS5pZCkpO1xuICAgIHJldHVybiBwb3M7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICAgIHByb2plY3RBcnJheS5zcGxpY2UoZmluZEluZGV4KHByb2plY3RBcnJheSksIDEpO1xuICAgIHVsLnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcbiAgICBjb25zb2xlLmxvZyhcInRlc3RpbmcgZGVsZXRlIHRvZG9cIik7XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0VG9kbygpIHtcbiAgICBmb3JtRWRpdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgbGlzdERlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVG9kbyk7XG4gIGxpc3RFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VG9kbyk7XG59XG5cbi8vIGZ1bmN0aW9uIG1hbmlwdWxhdGVET00oZnJlc2hUb2RvKSB7XG4vLyAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbi8vICAgdWwuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXG4vLyAgIGxpc3RJdGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2ZyZXNoVG9kby5pZH1gKTtcblxuLy8gICBsZXQgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4vLyAgIGxldCBsaXN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuLy8gICBsZXQgbGlzdENsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbi8vICAgbGV0IGxpc3RFZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbi8vICAgbGV0IGxpc3RWaWV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbi8vICAgbGV0IGxpc3RDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuLy8gICBsaXN0Q2hlY2sudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuLy8gICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuLy8gICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0RGF0ZSk7XG4vLyAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RDbG9zZUJ0bik7XG4vLyAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RFZGl0QnRuKTtcbi8vICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdFZpZXdCdG4pO1xuLy8gICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0Q2hlY2spO1xuXG4vLyAgIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IGAke2ZyZXNoVG9kby50aXRsZX1gO1xuLy8gICBsaXN0RGF0ZS50ZXh0Q29udGVudCA9IGAke2ZyZXNoVG9kby5kdWVEYXRlfWA7XG4vLyAgIGxpc3RWaWV3QnRuLnRleHRDb250ZW50ID0gXCJWaWV3XCI7XG4vLyAgIGxpc3RDbG9zZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4vLyAgIGxpc3RFZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG5cbi8vICAgZnVuY3Rpb24gZmluZEluZGV4KGFycikge1xuLy8gICAgIGxldCBwb3MgPSBhcnJcbi8vICAgICAgIC5tYXAoZnVuY3Rpb24gKGUpIHtcbi8vICAgICAgICAgcmV0dXJuIGUuaWQ7XG4vLyAgICAgICB9KVxuLy8gICAgICAgLmluZGV4T2YocGFyc2VJbnQobGlzdEl0ZW0uaWQpKTtcbi8vICAgICByZXR1cm4gcG9zO1xuLy8gICB9XG5cbi8vICAgZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcbi8vICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGZpbmRJbmRleChwcm9qZWN0QXJyYXkpLCAxKTtcbi8vICAgICB1bC5yZW1vdmVDaGlsZChsaXN0SXRlbSk7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBlZGl0VG9kbygpIHtcbi8vICAgICBmb3JtRWRpdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGUtZWRpdFwiKS52YWx1ZSA9IGAke2ZyZXNoVG9kby50aXRsZX1gO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuLy8gICAgICAgXCJpbnB1dC1kZXNjcmlwdGlvbi1lZGl0XCJcbi8vICAgICApLnZhbHVlID0gYCR7ZnJlc2hUb2RvLmRlc2NyaXB0aW9ufWA7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyAgICAgICBcImlucHV0LWR1ZS1kYXRlLWVkaXRcIlxuLy8gICAgICkudmFsdWUgPSBgJHtmcmVzaFRvZG8uZHVlRGF0ZX1gO1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuLy8gICAgICAgXCJpbnB1dC1wcmlvcml0eS1lZGl0XCJcbi8vICAgICApLnZhbHVlID0gYCR7ZnJlc2hUb2RvLnByaW9yaXR5fWA7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlcy1lZGl0XCIpLnZhbHVlID0gYCR7ZnJlc2hUb2RvLm5vdGVzfWA7XG5cbi8vICAgICAvLyAhISAvL1xuLy8gICAgIC8vQ0FOQ0VMIEJVVFRPTlxuXG4vLyAgICAgZG9jdW1lbnRcbi8vICAgICAgIC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1jYW5jZWwtZWRpdFwiKVxuLy8gICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbi8vICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgICAgZm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbi8vICAgICAgIH0pO1xuXG4vLyAgICAgLy9TVUJNSVQgQ0hBTkdFUyBCVVRUT05cblxuLy8gICAgIGRvY3VtZW50XG4vLyAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tc3VibWl0LWVkaXRcIilcbi8vICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2KSB7XG4vLyAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgICB9KTtcbi8vICAgICAvLyAhISAvL1xuLy8gICB9XG5cbi8vICAgbGV0IGJ0bkRlbGV0ZSA9IGxpc3RJdGVtLmNoaWxkTm9kZXNbMl07XG4vLyAgIGxldCBidG5FZGl0ID0gbGlzdEl0ZW0uY2hpbGROb2Rlc1szXTtcbi8vICAgbGV0IGJ0blZpZXcgPSBsaXN0SXRlbS5jaGlsZE5vZGVzWzRdO1xuXG4vLyAgIGJ0bkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVG9kbyk7XG4vLyAgIC8vXG4vLyAgIGJ0bkVkaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVkaXRUb2RvKTtcbi8vICAgLy9cbi8vICAgYnRuVmlldy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKGBoaSBpIGFtIHZpZXcgb2YgbGkgdGl0bGUgJHtmcmVzaFRvZG8udGl0bGV9YCk7XG4vLyAgIH0pO1xuLy8gfVxuXG5leHBvcnQgeyByZW5kZXIgfTtcblxuLy8gZXhwb3J0IHsgbWFuaXB1bGF0ZURPTSB9O1xuIiwiaW1wb3J0IHsgbWFuaXB1bGF0ZURPTSB9IGZyb20gXCIuL2RvbUNyZWF0b3JcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL2RvbUNyZWF0b3JcIjtcblxuKFwidXNlIHN0cmljdFwiKTtcblxubGV0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXVsXCIpO1xubGV0IGZvcm1BZGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1hZGRcIik7XG5sZXQgZm9ybUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZm9ybS1lZGl0XCIpO1xubGV0IGZvcm1WaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWZvcm0tdmlld1wiKTtcblxuZXhwb3J0IGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuY2xhc3MgVG9EbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSB7XG4gICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gIH1cbn1cblxuY29uc3QgYWRkVG9kbyA9IChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgdG9EbyA9IG5ldyBUb0RvKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGUtYWRkXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb24tYWRkXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZHVlLWRhdGUtYWRkXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtcHJpb3JpdHktYWRkXCIpLnZhbHVlLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtYWRkXCIpLnZhbHVlXG4gICk7XG5cbiAgcHJvamVjdEFycmF5LnB1c2godG9Ebyk7XG4gIC8vXG4gIGRvY3VtZW50LmZvcm1zWzBdLnJlc2V0KCk7XG5cbiAgZm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RBcnJheS5sZW5ndGgpO1xuXG4gIHVsLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgcHJvamVjdEFycmF5LmZvckVhY2gocmVuZGVyKTtcbn07XG5cbmNvbnN0IGNhbmNlbEFkZFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgZm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufTtcblxuY29uc3QgZWRpdFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgZm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn07XG5cbmNvbnN0IGNhbmNlbEVkaXRUb2RvID0gKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGZvcm1FZGl0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59O1xuXG5jb25zdCBjYW5jZWxWaWV3VG9kbyA9IChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBmb3JtVmlldy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufTtcblxuZXhwb3J0IHsgYWRkVG9kbywgY2FuY2VsQWRkVG9kbywgZWRpdFRvZG8sIGNhbmNlbEVkaXRUb2RvLCBjYW5jZWxWaWV3VG9kbyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBhZGRUb2RvLFxuICBjYW5jZWxBZGRUb2RvLFxuICBlZGl0VG9kbyxcbiAgY2FuY2VsRWRpdFRvZG8sXG4gIGNhbmNlbFZpZXdUb2RvLFxufSBmcm9tIFwiLi90b2RvQ3JlYXRvclwiO1xuXG4oXCJ1c2Ugc3RyaWN0XCIpO1xuXG5sZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWFkZFwiKTtcblxubGV0IGJ0bkFkZFRvRG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1hZGQtdG9kb1wiKTtcblxubGV0IGJ0blN1Ym1pdEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXN1Ym1pdC1hZGRcIik7XG5sZXQgYnRuQ2FuY2VsQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY2FuY2VsLWFkZFwiKTtcblxubGV0IGJ0blN1Ym1pdEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1zdWJtaXQtZWRpdFwiKTtcbmxldCBidG5DYW5jZWxFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY2FuY2VsLWVkaXRcIik7XG5cbmJ0bkFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgLy9cbiAgYnRuU3VibWl0QWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb2RvKTtcbiAgYnRuQ2FuY2VsQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxBZGRUb2RvKTtcbiAgLy9cbiAgYnRuU3VibWl0RWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRvZG8pO1xuICBidG5DYW5jZWxFZGl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxFZGl0VG9kbyk7XG4gIC8vXG59KTtcblxuLy8gICB7XG4vLyAgICAgaWQ6IERhdGUubm93KCksXG4vLyAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGVcIikudmFsdWUsXG4vLyAgICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb25cIikudmFsdWUsXG4vLyAgICAgZHVlRGF0ZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZVwiKS52YWx1ZSxcbi8vICAgICBwcmlvcml0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcmlvcml0eVwiKS52YWx1ZSxcbi8vICAgICBub3RlczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlc1wiKS52YWx1ZSxcbi8vICAgfTtcblxuLy8gbGV0IGFycmF5ID0gW1xuLy8gICB7XG4vLyAgICAgaWQ6IDExMSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAyMjIsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogMzMzLFxuLy8gICB9LFxuLy8gXTtcbi8vIGZ1bmN0aW9uIGZpbmRJbmRleCgpIHtcbi8vICAgbGV0IHBvcyA9IGFycmF5XG4vLyAgICAgLm1hcChmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgcmV0dXJuIGUuaWQ7XG4vLyAgICAgfSlcbi8vICAgICAuaW5kZXhPZigzMzMpO1xuLy8gICByZXR1cm4gcG9zO1xuLy8gfVxuLy8gY29uc29sZS5sb2coZmluZEluZGV4KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9