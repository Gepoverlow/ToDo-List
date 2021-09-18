let defaultProject = {
  name: "Default",
  todos: [],
};
let testProject = {
  name: "Test",
  todos: [],
};

export let projects = [defaultProject, testProject];

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

export { createProject };
