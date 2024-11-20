import { ToDo } from "./class/toDo";
import { Project } from "./class/project";
import { Populate } from "./populate";
import { Storage } from "./storage";
import { projects } from "./storage";



export default function eventListeners(){
    document.querySelector('#projectList').addEventListener('click', e => {
        if (e.target.tagName === "LI" || e.target.classList.contains('projectTitle')) {
            const li = e.target.tagName === 'LI' ? e.target : e.target.closest('li');
            const project = projects.find(el => el.id === li.dataset.id);
            Populate.populate(projects, project)
        } else if (e.target.classList.contains('deleteProject')) {
            const project = projects.find(el => el.id === e.target.closest('li').dataset.id);
            const index = projects.indexOf(project);
            projects.splice(index, 1);
            Storage.updateStorage(projects);
            if (index === 0 && projects.length > 0) return Populate.populate(projects, projects[index]);
                if (projects.length === 1) return Populate.populate(projects, projects[0]);
            Populate.populate(projects, projects[index - 1])
        }
    })
    
    document.querySelector('#addToDo').addEventListener('submit', e => {
        e.preventDefault();
    
        const title = document.querySelector('#title').value;
        const description = document.querySelector('#description').value;
        const dueDate = document.querySelector('#dueDate').value;
        const priority = document.querySelector('#priority').value;
        const addButton = document.querySelector('#addToDo').querySelector('button');
    
        const project = projects.find(el => el.id == addButton.dataset.project);
        if (title === '') return console.log("Can't have an empty title!");
        if(!project) return
        project.addToDo(new ToDo(title, description, dueDate, priority));
        document.querySelector('#addToDo').classList.toggle('hidden');
        Populate.populate(projects, project);
        Storage.updateStorage(projects);
    })
    
    document.querySelector('#toDoList').addEventListener('click', e => {
        if (e.target.classList.contains('editToDo')) {
            document.querySelector('#editModal').classList.toggle('hidden');
            const projectId = document.querySelector('#addToDo').querySelector('button').dataset.project;
            const project = projects.find(el => el.id == projectId);
            const toDoId = e.target.closest('li').dataset.toDoId;
            const toDoFind = project.toDos.find(el => el.id === toDoId);
            document.querySelector('#editModal ');
            document.querySelector('#titleEdit').value = toDoFind.title;
            document.querySelector('#descriptionEdit').value = toDoFind.description;
            document.querySelector('#dueDateEdit').value = toDoFind.dueDate;
            document.querySelector('#priorityEdit').value = toDoFind.priority;
    
            document.querySelector('#editModal').dataset.toDoId = toDoId;
    
        }
        if (e.target.classList.contains('deleteToDo')) {
            const projectId = document.querySelector('#addToDo').querySelector('button').dataset.project;
            const project = projects.find(el => el.id == projectId);
            const toDoId = e.target.closest('li').dataset.toDoId;
            project.removeToDo(toDoId);
            Storage.updateStorage(projects)
            Populate.populate(projects, project);
        }
        if (e.target.classList.contains('checkBox') || e.target.classList.contains('checked')) {
            const projectId = document.querySelector('#addToDo').querySelector('button').dataset.project;
            const project = projects.find(el => el.id == projectId);
            const toDoId = e.target.closest('li').dataset.toDoId;
            const toDoFind = project.toDos.find(el => el.id === toDoId);
            toDoFind.checked = !toDoFind.checked;
            Storage.updateStorage(projects)
            Populate.populate(projects, project)
        }
        if (e.target.classList.contains('expandToDo')) {
            const liClosest = e.target.closest('li'); 
            const spanDescription = liClosest.querySelector('.description'); 
            spanDescription.classList.toggle('hidden')
        }
    
    })
    
    document.querySelector('#editModal').addEventListener('submit', e => {
        e.preventDefault();
    
        const projectId = document.querySelector('#addToDo').querySelector('button').dataset.project;
        const project = projects.find(el => el.id == projectId);
        const toDoFind = project.toDos.find(el => el.id === e.target.dataset.toDoId);
    
        const title = document.querySelector('#titleEdit').value
        const description = document.querySelector('#descriptionEdit').value
        const dueDate = document.querySelector('#dueDateEdit').value
        const priority = document.querySelector('#priorityEdit').value
    
        toDoFind.editToDo(title,description,dueDate,priority)

        Populate.populate(projects, project);
        Storage.updateStorage(projects);
        document.querySelector('#editModal').classList.toggle('hidden');
    })
    
    document.querySelector('#addProject').addEventListener('submit', e => {
        e.preventDefault()
        const projectName = document.querySelector('#name').value;
        if (document.querySelector('#name').value === '') return console.log("Project name can't be empty!");
        const newProject = new Project(projectName);
        projects.push(newProject);
        Populate.populate(projects, newProject);
        Storage.updateStorage(projects)
        document.querySelector('#addProject').classList.toggle('hidden');
    })
    
    document.querySelector('.addProject').addEventListener('click', (e) => {
        document.querySelector('#addProject').classList.toggle('hidden');
    })
    
    document.querySelector('.exitProject').addEventListener('click', e => {
        document.querySelector('#addProject').classList.toggle('hidden');
    })
    
    document.querySelector('.addToDo').addEventListener('click', e => {
        document.querySelector('#addToDo').classList.toggle('hidden');
    })
    
    document.querySelector('.exitToDo').addEventListener('click', e => {
        document.querySelector('#addToDo').classList.toggle('hidden');
    })
    
    document.querySelector('.exitEdit').addEventListener('click', e => {
        document.querySelector('#editModal').classList.toggle('hidden');
    })
}