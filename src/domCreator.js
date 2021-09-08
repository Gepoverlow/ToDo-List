let ul = document.getElementById("todo-ul");

function updateDOM() {
  let listItem = document.createElement("li");
  ul.appendChild(listItem);
  listItem.innerHTML = "hi testing";
}

export { updateDOM };
