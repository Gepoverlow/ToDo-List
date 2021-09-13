import { projectArray } from "./todoCreator.js";

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
    projectArray.splice(findIndex(projectArray), 1);
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

export { render };

// export { manipulateDOM };
