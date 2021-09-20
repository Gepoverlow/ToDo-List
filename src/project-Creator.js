let defaultProject = {
  name: "Default",
  todos: [],
};

export let projects = [defaultProject];
let projectsUL = document.getElementById("project-ul");

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
}

function createProject(mainArray) {
  let projectInput = document.getElementById("project-input");
  //
  let project = new Project(projectInput.value);
  projectInput.value = "";

  mainArray.push(project);
}

function deleteProject(mainArray) {}

export { createProject, deleteProject };
