//FRESH START //FRESH START //FRESH START //FRESH START //FRESH START //FRESH START//FRESH START//FRESH START//FRESH START

//FRESH START //FRESH START //FRESH START //FRESH START //FRESH START //FRESH START//FRESH START//FRESH START//FRESH START

// import { renderTODOS, getIndex } from "./domCreator.js";

// ("use strict");

// let todoUL = document.getElementById("todo-ul");
// let formAdd = document.getElementById("todo-form-add");
// let formEdit = document.getElementById("todo-form-edit");

// export let projectArray = [];
// export let defaultProject = {
//   id: Date.now(),
//   name: "Default",
//   array: projectArray,
// };
// export let projects = [defaultProject];

// class ToDo {
//   constructor(title, description, dueDate, priority, notes) {
//     this.id = Date.now();
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;
//     this.notes = notes;
//   }
// }

// const submitAddTodo = (ev) => {
//   ev.preventDefault();
//   let toDo = new ToDo(
//     document.getElementById("input-title-add").value,
//     document.getElementById("input-description-add").value,
//     document.getElementById("input-due-date-add").value,
//     document.getElementById("input-priority-add").value,
//     document.getElementById("input-notes-add").value
//   );

//   projectArray.push(toDo);
//   //
//   document.forms[0].reset();

//   formAdd.classList.add("hidden");

//   todoUL.innerHTML = "";

//   projectArray.forEach(renderTODOS);
// };

// const cancelAddTodo = (ev) => {
//   ev.preventDefault();
//   formAdd.classList.add("hidden");
// };

// const submitEditTodo = (ev) => {
//   ev.preventDefault();
//   formEdit.classList.add("hidden");

//   let titleEdit = document.getElementById("input-title-edit");
//   let descriptionEdit = document.getElementById("input-description-edit");
//   let dueDateEdit = document.getElementById("input-due-date-edit");
//   let priorityEdit = document.getElementById("input-priority-edit");
//   let notesEdit = document.getElementById("input-notes-edit");

//   for (let i = 0; i < projectArray.length; i++) {
//     projectArray[getIndex].title = titleEdit.value;
//     projectArray[getIndex].descrption = descriptionEdit.value;
//     projectArray[getIndex].dueDate = dueDateEdit.value;
//     projectArray[getIndex].priority = priorityEdit.value;
//     projectArray[getIndex].notes = notesEdit.value;
//   }

//   todoUL.innerHTML = "";

//   projectArray.forEach(renderTODOS);
// };

// const cancelEditTodo = (ev) => {
//   ev.preventDefault();
//   formEdit.classList.add("hidden");
// };

// export { submitAddTodo, cancelAddTodo, submitEditTodo, cancelEditTodo };