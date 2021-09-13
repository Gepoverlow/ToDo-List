const submitAddTodo = (ev) => {
  //
  ev.preventDefault();
  //
  let toDo = new ToDo(
    document.getElementById("input-title-add").value,
    document.getElementById("input-description-add").value,
    document.getElementById("input-due-date-add").value,
    document.getElementById("input-priority-add").value,
    document.getElementById("input-notes-add").value
  );
  //
  projectArray.push(toDo);
  //
  document.forms[0].reset();
  //
  ul.innerHTML = "";
  //
  projectArray.forEach(doDomStuff);
};

function doDomStuff() {
  // IRRELEVANT DOM STUFF //

  function editTodo() {
    let ulNodeList = ul.getElementsByTagName("li");
    let titleEdit = document.getElementById("input-title-edit");
    let descriptionEdit = document.getElementById("input-description-edit");
    let dueDateEdit = document.getElementById("input-due-date-edit");
    let priorityEdit = document.getElementById("input-priority-edit");
    let notesEdit = document.getElementById("input-notes-edit");

    for (let i = 0; i < projectArray.length; i++) {
      ulNodeList[i].addEventListener("click", function () {
        titleEdit.value = projectArray[i].title;
        descriptionEdit.value = projectArray[i].description;
        dueDateEdit.value = projectArray[i].dueDate;
        priorityEdit.value = projectArray[i].priority;
        notesEdit.value = projectArray[i].notes;
        console.log(
          "does this bit work alright? NO, it keeps printing an extra copy on each click event iteration"
        );
      });
    }

    formEdit.classList.remove("hidden");
    console.log("this bit works alright");
  }
  listEditBtn.addEventListener("click", editTodo);
}

btnSubmitAdd.addEventListener("click", submitAddTodo);
