import currentProject from "./index.js";

let defaultProject = {
  id: "defaultID",
  name: "Default",
  todos: [],
};

export let projects = [defaultProject];

class Project {
  constructor(name) {
    this.id = Date.now();
    this.name = name;
    this.todos = [];
  }
}

function createProject(mainArray, test) {
  let projectInput = document.getElementById("project-input");
  //
  let project = new Project(projectInput.value);

  mainArray.push(project);

  projectInput.value = "";
}

export { createProject };
