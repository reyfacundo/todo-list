import { Project } from "./class/project";
import { ToDo } from "./class/toDo";
import { addToDo } from "./class/project";
import { removeToDo } from "./class/project";
import { editToDo } from "./class/toDo";

const defaultProject = new Project("Default Project");
defaultProject.addToDo(new ToDo("title1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan sit amet nulla et condimentum. ", "dueDate", 3));

if (!localStorage.getItem("projects")) {
    localStorage.setItem("projects", JSON.stringify([defaultProject]));
}

export class Storage{
    static getProjects(){
        const projects = JSON.parse(localStorage.getItem(("projects")));
        projects.forEach(e => {
            e.addToDo = addToDo
            e.removeToDo = removeToDo
            e.toDos.forEach(e => e.editToDo = editToDo)
        })
        return projects
    }
    static getProjectById(id){
        const projects = this.getProjects()
        return projects.find(e => e.id === id);
    }
    static updateStorage(updatedArray){
        localStorage.setItem("projects", JSON.stringify(updatedArray));
    }
}

export const projects = Storage.getProjects()
