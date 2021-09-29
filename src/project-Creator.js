export let inboxProject = {
  id: "defaultID",
  name: "Inbox",
  todos: getStorageData("inboxArray"),
};

export let projects = getStorageData("projectsArray");

class Project {
  constructor(name) {
    this.id = Date.now();
    this.name = name;
    this.todos = [];
  }
}

function createProject(mainArray) {
  //CREATE THE PROJECT
  let projectInput = document.getElementById("project-input");
  let project = new Project(projectInput.value);
  mainArray.push(project);
  projectInput.value = "";
}
function getStorageData(name) {
  return JSON.parse(localStorage.getItem(name) || "[]");
}

export { createProject };
