import { defaultProject } from "./todo-Creator.js";

let todoUL = document.getElementById("todo-ul");

function renderTodos(arr) {
  // !!
  todoUL.innerHTML = "";
  // !!
  for (let i = 0; i < arr.length; i++) {
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

    todoLI.id = arr[i].id;
    titleLI.textContent = arr[i].title;
    dueDateLI.textContent = arr[i].dueDate;
    btnEditTodo.textContent = "EDIT";
    btnDeleteTodo.textContent = "DELETE";
  }
}

export { renderTodos };
