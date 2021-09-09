let ul = document.getElementById("todo-ul");

function updateDOM(freshTodo) {
  let listItem = document.createElement("li");
  ul.appendChild(listItem);

  let listTitle = document.createElement("p");
  let listDate = document.createElement("p");

  listItem.appendChild(listTitle);
  listItem.appendChild(listDate);

  listTitle.innerHTML = `${freshTodo.title}`;
  listDate.innerHTML = `${freshTodo.dueDate}`;
}

export { updateDOM };
