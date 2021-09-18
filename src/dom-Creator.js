import { defaultProject } from "./todo-Creator.js";

let todoUL = document.getElementById("todo-ul");
let projectUL = document.getElementById("project-ul");

function renderTodos(todoArray) {
  // !!
  todoUL.innerHTML = "";
  // !!
  for (let i = 0; i < todoArray.length; i++) {
    let todoLI = document.createElement("li");
    let titleLI = document.createElement("p");
    let dueDateLI = document.createElement("p");
    let btnEditTodo = document.createElement("button");
    let btnDeleteTodo = document.createElement("button");

    todoUL.appendChild(todoLI);
    todoLI.appendChild(titleLI);
    todoLI.appendChild(dueDateLI);
    todoLI.appendChild(btnEditTodo);
    todoLI.appendChild(btnDeleteTodo);

    todoLI.id = todoArray[i].id;
    titleLI.textContent = todoArray[i].title;
    dueDateLI.textContent = todoArray[i].dueDate;
    btnEditTodo.textContent = "EDIT";
    btnDeleteTodo.textContent = "DELETE";
  }
}

function renderProjects(projectArray) {
  // !!
  projectUL.innerHTML = "";
  // !!
  for (let i = 0; i < projectArray.length; i++) {
    let projectLI = document.createElement("li");

    projectUL.appendChild(projectLI);

    projectLI.textContent = projectArray[i].name;

    projectLI.classList.add("li");
  }
}

export { renderTodos, renderProjects };
