import { ToDo } from "./todoCreator";
import { addInfo } from "./domCreator";

("use strict");

const addTodoButton = document.getElementById("btn-add-todo");

addTodoButton.addEventListener("click", function () {
  addInfo();
});

const projectArray = [];

const test = new ToDo(
  "testTitle",
  "testDescription",
  "testDate",
  "testPriority",
  false
);

projectArray.push(test);

console.log(projectArray);
