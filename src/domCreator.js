import { projectArray } from "./todoCreator.js";

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
    projectArray.splice(findIndex(projectArray), 1);
    ul.removeChild(listItem);
    console.log(projectArray);
  }
  let btn = listItem.childNodes[2];

  btn.addEventListener("click", deleteTodo);
}

export { manipulateDOM };
