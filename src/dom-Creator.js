let todoUL = document.getElementById("todo-ul");
let projectUL = document.getElementById("project-ul");
let projectLIs = projectUL.getElementsByClassName("li");

function renderTodos(todoArray) {
  emptyNode(todoUL);

  for (let i = 0; i < todoArray.length; i++) {
    let todoLI = document.createElement("li");
    let titleLI = document.createElement("p");
    let dueDateLI = document.createElement("p");
    let btnEditTodo = document.createElement("span");
    let btnDeleteTodo = document.createElement("span");
    let isChecked = document.createElement("span");

    todoUL.appendChild(todoLI);
    todoLI.appendChild(titleLI);
    todoLI.appendChild(dueDateLI);
    todoLI.appendChild(btnEditTodo);
    todoLI.appendChild(btnDeleteTodo);
    todoLI.appendChild(isChecked);

    todoLI.id = todoArray[i].id;
    titleLI.textContent = todoArray[i].title;
    dueDateLI.textContent = checkDueDate(todoArray[i].dueDate);
    btnEditTodo.textContent = "visibility";
    btnDeleteTodo.textContent = "delete";

    btnDeleteTodo.className = "material-icons-outlined";
    btnEditTodo.className = "material-icons-outlined";
    isChecked.className = "material-icons-outlined";

    if (todoArray[i].isChecked === true) {
      isChecked.textContent = "check";
    } else if (todoArray[i].isChecked === false) {
      isChecked.textContent = "pending_actions";
    }

    if (todoArray[i].priority === "0") {
      todoLI.style.backgroundColor = "#99ff99";
    } else if (todoArray[i].priority === "1") {
      todoLI.style.backgroundColor = "#adadeb";
    } else if (todoArray[i].priority === "2") {
      todoLI.style.backgroundColor = "#ff8080";
    }
  }
}

function renderProjects(projectArray) {
  emptyNode(projectUL);

  //CREATE TODO ELEMENTS
  for (let i = 0; i < projectArray.length; i++) {
    let projectLI = document.createElement("li");
    let projectDeleteBtn = document.createElement("span");

    projectLI.textContent = projectArray[i].name;
    projectDeleteBtn.textContent = "delete";

    projectDeleteBtn.className = "material-icons-outlined";
    projectLI.id = projectArray[i].id;
    projectLI.classList.add("li");

    projectUL.appendChild(projectLI);
    projectLI.appendChild(projectDeleteBtn);
  }

  //GIVE THE LAST ITEM OF THE NODELIST THE ACTIVE STYLE
  updateActiveProject(projectLIs.length - 1);
}

function renderTodoInfo(array, index) {
  let titleInput = document.getElementById("input-title-edit");
  let descriptionInput = document.getElementById("input-description-edit");
  let dueDateInput = document.getElementById("input-due-date-edit");
  let priorityInput = document.getElementById("input-priority-edit");
  let notesInput = document.getElementById("input-notes-edit");

  titleInput.value = array[index].title;
  descriptionInput.value = array[index].description;
  // dueDateInput.value = array[index].dueDate;
  priorityInput.value = array[index].priority;
  notesInput.value = array[index].notes;
  // dueDateInput.value = transformDateFormat(array[index].dueDate);

  if (typeof array[index].dueDate === "string") {
    dueDateInput.value = transformFromString(array[index].dueDate);
  } else if (typeof array[index].dueDate === "object") {
    dueDateInput.value = transformFromObj(array[index].dueDate);
  }
}

function submitEditTodo(array, index) {
  let titleInput = document.getElementById("input-title-edit");
  let descriptionInput = document.getElementById("input-description-edit");
  let dueDateInput = document.getElementById("input-due-date-edit");
  let priorityInput = document.getElementById("input-priority-edit");
  let notesInput = document.getElementById("input-notes-edit");

  array[index].title = titleInput.value;
  array[index].description = descriptionInput.value;
  array[index].dueDate = dueDateInput.value;
  array[index].priority = priorityInput.value;
  array[index].notes = notesInput.value;
}

function updateActiveProject(index) {
  let projectLIs = projectUL.getElementsByClassName("li");
  let lastProject = projectLIs[index];
  if (projectLIs.length > 0) {
    lastProject.classList.add("active");
  }
}

function emptyNode(node) {
  while (node.lastElementChild) {
    node.removeChild(node.lastElementChild);
  }
}

function checkDueDate(value) {
  let dateToday = new Date();
  let dateInputted = new Date(value);

  let diffTime = Math.abs(dateInputted - dateToday);
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (dateToday > dateInputted && diffDays === 1) {
    return `due today!`;
  } else if (dateToday < dateInputted) {
    return `due in ${diffDays.toString()} days`;
  } else if (dateToday > dateInputted) {
    return `${diffDays.toString() - 1} days overdue`;
  }
}

function transformFromObj(obj) {
  let dd = String(obj.getDate()).padStart(2, "0");
  let mm = String(obj.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = obj.getFullYear();

  let transformedDate = `${yyyy}-${mm}-${dd}`;
  console.log(transformedDate);
  return transformedDate;
}

function transformFromString(str) {
  let transformedDate = str.slice(0, 10);
  return transformedDate;
}

// function transformDateFormat(date) {
//   var dd = String(date.getDate()).padStart(2, "0");
//   var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
//   var yyyy = today.getFullYear();

//   transformedDate = `${mm}-${dd}-${yyyy}`;
//   return transformedDate;
// }

export { renderTodos, renderProjects, renderTodoInfo, submitEditTodo };
