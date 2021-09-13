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
    let ulNodeList = ul.getElementsByTagName("li");
    let titleEdit = document.getElementById("input-title-edit");
    let descriptionEdit = document.getElementById("input-description-edit");
    let dueDateEdit = document.getElementById("input-due-date-edit");
    let priorityEdit = document.getElementById("input-priority-edit");
    let notesEdit = document.getElementById("input-notes-edit");

    for (let i = 0; i < _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.length; i++) {
      ulNodeList[i].addEventListener("click", function () {
        titleEdit.value = _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i].title;
        descriptionEdit.value = _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i].description;
        dueDateEdit.value = _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i].dueDate;
        priorityEdit.value = _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i].priority;
        notesEdit.value = _todoCreator_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i].notes;
        console.log("does this bit work alright?NO");
      });
    }

    formEdit.classList.remove("hidden");
    console.log("this bit works alright");
  }

  listDeleteBtn.addEventListener("click", deleteTodo);
  listEditBtn.addEventListener("click", editTodo);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ3RELHdDQUF3Qyx3REFBYztBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy9kb21DcmVhdG9yLmpzIiwid2VicGFjazovL3Jlc3R1YXJhbnQtcGFnZS8uL3NyYy90b2RvQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3VibWl0RWRpdFRvZG8sIHByb2plY3RBcnJheSB9IGZyb20gXCIuL3RvZG9DcmVhdG9yLmpzXCI7XG5cbmxldCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby11bFwiKTtcbmxldCBmb3JtRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWVkaXRcIik7XG5cbmZ1bmN0aW9uIHJlbmRlcihmcmVzaFRvZG8pIHtcbiAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICB1bC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIGxpc3RJdGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2ZyZXNoVG9kby5pZH1gKTtcblxuICBsZXQgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCBsaXN0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsZXQgbGlzdERlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCBsaXN0RWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCBsaXN0Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgbGlzdENoZWNrLnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdERhdGUpO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0RGVsZXRlQnRuKTtcbiAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdEVkaXRCdG4pO1xuICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0Q2hlY2spO1xuXG4gIGxpc3RUaXRsZS50ZXh0Q29udGVudCA9IGAke2ZyZXNoVG9kby50aXRsZX1gO1xuICBsaXN0RGF0ZS50ZXh0Q29udGVudCA9IGAke2ZyZXNoVG9kby5kdWVEYXRlfWA7XG4gIGxpc3REZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICBsaXN0RWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuXG4gIGZ1bmN0aW9uIGZpbmRJbmRleChhcnIpIHtcbiAgICBsZXQgcG9zID0gYXJyXG4gICAgICAubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBlLmlkO1xuICAgICAgfSlcbiAgICAgIC5pbmRleE9mKHBhcnNlSW50KGxpc3RJdGVtLmlkKSk7XG4gICAgcmV0dXJuIHBvcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRvZG8oKSB7XG4gICAgcHJvamVjdEFycmF5LnNwbGljZShmaW5kSW5kZXgocHJvamVjdEFycmF5KSwgMSk7XG4gICAgdWwucmVtb3ZlQ2hpbGQobGlzdEl0ZW0pO1xuICAgIGNvbnNvbGUubG9nKFwidGVzdGluZyBkZWxldGUgdG9kb1wiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRUb2RvKCkge1xuICAgIGxldCB1bE5vZGVMaXN0ID0gdWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaVwiKTtcbiAgICBsZXQgdGl0bGVFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpO1xuICAgIGxldCBkZXNjcmlwdGlvbkVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uLWVkaXRcIik7XG4gICAgbGV0IGR1ZURhdGVFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZS1lZGl0XCIpO1xuICAgIGxldCBwcmlvcml0eUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWVkaXRcIik7XG4gICAgbGV0IG5vdGVzRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtbm90ZXMtZWRpdFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB1bE5vZGVMaXN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRpdGxlRWRpdC52YWx1ZSA9IHByb2plY3RBcnJheVtpXS50aXRsZTtcbiAgICAgICAgZGVzY3JpcHRpb25FZGl0LnZhbHVlID0gcHJvamVjdEFycmF5W2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICBkdWVEYXRlRWRpdC52YWx1ZSA9IHByb2plY3RBcnJheVtpXS5kdWVEYXRlO1xuICAgICAgICBwcmlvcml0eUVkaXQudmFsdWUgPSBwcm9qZWN0QXJyYXlbaV0ucHJpb3JpdHk7XG4gICAgICAgIG5vdGVzRWRpdC52YWx1ZSA9IHByb2plY3RBcnJheVtpXS5ub3RlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJkb2VzIHRoaXMgYml0IHdvcmsgYWxyaWdodD9OT1wiKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvcm1FZGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGJpdCB3b3JrcyBhbHJpZ2h0XCIpO1xuICB9XG5cbiAgbGlzdERlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVG9kbyk7XG4gIGxpc3RFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0VG9kbyk7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gZnVuY3Rpb24gbWFuaXB1bGF0ZURPTShmcmVzaFRvZG8pIHtcbi8vICAgbGV0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuLy8gICB1bC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG5cbi8vICAgbGlzdEl0ZW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7ZnJlc2hUb2RvLmlkfWApO1xuXG4vLyAgIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vICAgbGV0IGxpc3REYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4vLyAgIGxldCBsaXN0Q2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuLy8gICBsZXQgbGlzdEVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuLy8gICBsZXQgbGlzdFZpZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuLy8gICBsZXQgbGlzdENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4vLyAgIGxpc3RDaGVjay50eXBlID0gXCJjaGVja2JveFwiO1xuXG4vLyAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG4vLyAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3REYXRlKTtcbi8vICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdENsb3NlQnRuKTtcbi8vICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGlzdEVkaXRCdG4pO1xuLy8gICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaXN0Vmlld0J0bik7XG4vLyAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpc3RDaGVjayk7XG5cbi8vICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gYCR7ZnJlc2hUb2RvLnRpdGxlfWA7XG4vLyAgIGxpc3REYXRlLnRleHRDb250ZW50ID0gYCR7ZnJlc2hUb2RvLmR1ZURhdGV9YDtcbi8vICAgbGlzdFZpZXdCdG4udGV4dENvbnRlbnQgPSBcIlZpZXdcIjtcbi8vICAgbGlzdENsb3NlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbi8vICAgbGlzdEVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcblxuLy8gICBmdW5jdGlvbiBmaW5kSW5kZXgoYXJyKSB7XG4vLyAgICAgbGV0IHBvcyA9IGFyclxuLy8gICAgICAgLm1hcChmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgICByZXR1cm4gZS5pZDtcbi8vICAgICAgIH0pXG4vLyAgICAgICAuaW5kZXhPZihwYXJzZUludChsaXN0SXRlbS5pZCkpO1xuLy8gICAgIHJldHVybiBwb3M7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuLy8gICAgIHByb2plY3RBcnJheS5zcGxpY2UoZmluZEluZGV4KHByb2plY3RBcnJheSksIDEpO1xuLy8gICAgIHVsLnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcbi8vICAgfVxuXG4vLyAgIGZ1bmN0aW9uIGVkaXRUb2RvKCkge1xuLy8gICAgIGZvcm1FZGl0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10aXRsZS1lZGl0XCIpLnZhbHVlID0gYCR7ZnJlc2hUb2RvLnRpdGxlfWA7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyAgICAgICBcImlucHV0LWRlc2NyaXB0aW9uLWVkaXRcIlxuLy8gICAgICkudmFsdWUgPSBgJHtmcmVzaFRvZG8uZGVzY3JpcHRpb259YDtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbi8vICAgICAgIFwiaW5wdXQtZHVlLWRhdGUtZWRpdFwiXG4vLyAgICAgKS52YWx1ZSA9IGAke2ZyZXNoVG9kby5kdWVEYXRlfWA7XG4vLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4vLyAgICAgICBcImlucHV0LXByaW9yaXR5LWVkaXRcIlxuLy8gICAgICkudmFsdWUgPSBgJHtmcmVzaFRvZG8ucHJpb3JpdHl9YDtcbi8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWVkaXRcIikudmFsdWUgPSBgJHtmcmVzaFRvZG8ubm90ZXN9YDtcblxuLy8gICAgIC8vICEhIC8vXG4vLyAgICAgLy9DQU5DRUwgQlVUVE9OXG5cbi8vICAgICBkb2N1bWVudFxuLy8gICAgICAgLmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLWNhbmNlbC1lZGl0XCIpXG4vLyAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldikge1xuLy8gICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgICAgICBmb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuLy8gICAgICAgfSk7XG5cbi8vICAgICAvL1NVQk1JVCBDSEFOR0VTIEJVVFRPTlxuXG4vLyAgICAgZG9jdW1lbnRcbi8vICAgICAgIC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1zdWJtaXQtZWRpdFwiKVxuLy8gICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXYpIHtcbi8vICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbi8vICAgICAgIH0pO1xuLy8gICAgIC8vICEhIC8vXG4vLyAgIH1cblxuLy8gICBsZXQgYnRuRGVsZXRlID0gbGlzdEl0ZW0uY2hpbGROb2Rlc1syXTtcbi8vICAgbGV0IGJ0bkVkaXQgPSBsaXN0SXRlbS5jaGlsZE5vZGVzWzNdO1xuLy8gICBsZXQgYnRuVmlldyA9IGxpc3RJdGVtLmNoaWxkTm9kZXNbNF07XG5cbi8vICAgYnRuRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb2RvKTtcbi8vICAgLy9cbi8vICAgYnRuRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRvZG8pO1xuLy8gICAvL1xuLy8gICBidG5WaWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgY29uc29sZS5sb2coYGhpIGkgYW0gdmlldyBvZiBsaSB0aXRsZSAke2ZyZXNoVG9kby50aXRsZX1gKTtcbi8vICAgfSk7XG4vLyB9XG5cbmV4cG9ydCB7IHJlbmRlciB9O1xuXG4vLyBleHBvcnQgeyBtYW5pcHVsYXRlRE9NIH07XG4iLCIvLyBpbXBvcnQgeyBtYW5pcHVsYXRlRE9NIH0gZnJvbSBcIi4vZG9tQ3JlYXRvclwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vZG9tQ3JlYXRvclwiO1xuXG4oXCJ1c2Ugc3RyaWN0XCIpO1xuXG5sZXQgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdWxcIik7XG5sZXQgZm9ybUFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWFkZFwiKTtcbmxldCBmb3JtRWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWVkaXRcIik7XG5cbmV4cG9ydCBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbmNsYXNzIFRvRG8ge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3Rlcykge1xuICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICB9XG59XG5cbmNvbnN0IHN1Ym1pdEFkZFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHRvRG8gPSBuZXcgVG9EbyhcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRpdGxlLWFkZFwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWRlc2NyaXB0aW9uLWFkZFwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWR1ZS1kYXRlLWFkZFwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXByaW9yaXR5LWFkZFwiKS52YWx1ZSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LW5vdGVzLWFkZFwiKS52YWx1ZVxuICApO1xuXG4gIHByb2plY3RBcnJheS5wdXNoKHRvRG8pO1xuICAvL1xuICBkb2N1bWVudC5mb3Jtc1swXS5yZXNldCgpO1xuXG4gIGZvcm1BZGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuXG4gIHVsLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgcHJvamVjdEFycmF5LmZvckVhY2gocmVuZGVyKTtcbn07XG5cbmNvbnN0IGNhbmNlbEFkZFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgZm9ybUFkZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xufTtcblxuY29uc3Qgc3VibWl0RWRpdFRvZG8gPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgZm9ybUVkaXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbn07XG5cbmNvbnN0IGNhbmNlbEVkaXRUb2RvID0gKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGZvcm1FZGl0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59O1xuXG5leHBvcnQgeyBzdWJtaXRBZGRUb2RvLCBjYW5jZWxBZGRUb2RvLCBzdWJtaXRFZGl0VG9kbywgY2FuY2VsRWRpdFRvZG8gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgc3VibWl0QWRkVG9kbyxcbiAgY2FuY2VsQWRkVG9kbyxcbiAgc3VibWl0RWRpdFRvZG8sXG4gIGNhbmNlbEVkaXRUb2RvLFxufSBmcm9tIFwiLi90b2RvQ3JlYXRvclwiO1xuXG4oXCJ1c2Ugc3RyaWN0XCIpO1xuXG5sZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1mb3JtLWFkZFwiKTtcblxubGV0IGJ0bkFkZFRvRG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1hZGQtdG9kb1wiKTtcblxubGV0IGJ0blN1Ym1pdEFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uLXN1Ym1pdC1hZGRcIik7XG5sZXQgYnRuQ2FuY2VsQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY2FuY2VsLWFkZFwiKTtcblxubGV0IGJ0blN1Ym1pdEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1dHRvbi1zdWJtaXQtZWRpdFwiKTtcbmxldCBidG5DYW5jZWxFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXR0b24tY2FuY2VsLWVkaXRcIik7XG5cbmJ0bkFkZFRvRG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgLy9cbn0pO1xuYnRuU3VibWl0QWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRBZGRUb2RvKTtcbmJ0bkNhbmNlbEFkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsQWRkVG9kbyk7XG4vL1xuYnRuU3VibWl0RWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0RWRpdFRvZG8pO1xuYnRuQ2FuY2VsRWRpdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsRWRpdFRvZG8pO1xuLy9cblxuLy8gICB7XG4vLyAgICAgaWQ6IERhdGUubm93KCksXG4vLyAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGl0bGVcIikudmFsdWUsXG4vLyAgICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtZGVzY3JpcHRpb25cIikudmFsdWUsXG4vLyAgICAgZHVlRGF0ZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1kdWUtZGF0ZVwiKS52YWx1ZSxcbi8vICAgICBwcmlvcml0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1wcmlvcml0eVwiKS52YWx1ZSxcbi8vICAgICBub3RlczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1ub3Rlc1wiKS52YWx1ZSxcbi8vICAgfTtcblxuLy8gbGV0IGFycmF5ID0gW1xuLy8gICB7XG4vLyAgICAgaWQ6IDExMSxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIGlkOiAyMjIsXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBpZDogMzMzLFxuLy8gICB9LFxuLy8gXTtcbi8vIGZ1bmN0aW9uIGZpbmRJbmRleCgpIHtcbi8vICAgbGV0IHBvcyA9IGFycmF5XG4vLyAgICAgLm1hcChmdW5jdGlvbiAoZSkge1xuLy8gICAgICAgcmV0dXJuIGUuaWQ7XG4vLyAgICAgfSlcbi8vICAgICAuaW5kZXhPZigzMzMpO1xuLy8gICByZXR1cm4gcG9zO1xuLy8gfVxuLy8gY29uc29sZS5sb2coZmluZEluZGV4KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9