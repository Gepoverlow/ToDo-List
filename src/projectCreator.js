import { projectArray } from "./todoCreator.js";
import { projects } from "./todoCreator.js";
import { renderPROJECTS } from "./domCreator.js";

let projectUL = document.getElementById("project-ul");
let projectInput = document.getElementById("project-input");

class Project {
  constructor(name) {
    this.id = Date.now();
    this.name = name;
    this.array = [];
  }
}

function submitAddProject() {
  if (projectInput.value !== "") {
    let input = projectInput.value;
    let project = new Project(input);

    projectUL.innerHTML = "";
    projects.forEach(renderPROJECTS);

    projects.push(project);

    console.log(projects);
  }
}

export { submitAddProject };
