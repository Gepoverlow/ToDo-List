let ul = document.getElementById("todo-ul");

function addToDoToDOM(freshTodo) {
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
}

export { addToDoToDOM };
