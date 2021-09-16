import { projects } from "./todoCreator.js";
import { projectArray } from "./todoCreator.js";

let todoUL = document.getElementById("todo-ul");
let formEdit = document.getElementById("todo-form-edit");
let projectUL = document.getElementById("project-ul");
let projectInput = document.getElementById("project-input");

export let getIndex;

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
    projectArray.splice(findIndex(projectArray), 1);
    todoUL.removeChild(listItem);
  }
  //
  function editTodo() {
    let titleEdit = document.getElementById("input-title-edit");
    let descriptionEdit = document.getElementById("input-description-edit");
    let dueDateEdit = document.getElementById("input-due-date-edit");
    let priorityEdit = document.getElementById("input-priority-edit");
    let notesEdit = document.getElementById("input-notes-edit");

    getIndex = findIndex(projectArray);

    titleEdit.value = projectArray[getIndex].title;
    descriptionEdit.value = projectArray[getIndex].description;
    dueDateEdit.value = projectArray[getIndex].dueDate;
    priorityEdit.value = projectArray[getIndex].priority;
    notesEdit.value = projectArray[getIndex].notes;

    formEdit.classList.remove("hidden");
  }

  listEditBtn.addEventListener("click", editTodo);
  listDeleteBtn.addEventListener("click", deleteTodo);
}

function renderPROJECTS() {
  let listItem = document.createElement("li");
  projectUL.appendChild(listItem);

  listItem.textContent = projects[0];

  //

  // //////// /////////////////////////////////////////
  // function deleteTodo() {
  //   projectArray.splice(findIndex(projectArray), 1);
  //   todoUL.removeChild(listItem);
  // }
  /////////////////////////////////////////////////////
}

export { renderTODOS, renderPROJECTS };
