import deleteIcon from "../assets/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import editIcon from "../assets/edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";
import check from "../assets/check_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import expand from "../assets/arrow_drop_down_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
import priorityOne from "../assets/priority1.svg"
import priorityTwo from "../assets/priority2.svg"
import priorityThree from "../assets/priority3.svg"

export class Populate {

    static populate(projectsArray, project) {
        document.querySelector('#toDoList').textContent = ''
        document.querySelector('#projectList').textContent = ''
        if (projectsArray.length === 0) return
        const toDoButton = document.querySelector('#addToDo button');

        const h2 = document.createElement('h2');
        h2.textContent = project.name
        document.querySelector('#toDoList').appendChild(h2);

        toDoButton.dataset.project = project.id;


        projectsArray.forEach(e => {
            if(e === null) return
            const li = document.createElement('li');
            const span1 = document.createElement('span');
            const img = document.createElement('img');
            const container = document.createElement('span')

            span1.classList.add('projectTitle');
            img.classList.add('deleteProject');

            console.log(e)
            span1.textContent = e.name
            img.src = deleteIcon
            li.dataset.id = e.id

            li.append(span1, container);
            container.appendChild(img);
            document.querySelector('#projectList').appendChild(li);

        });
        project.toDos.forEach(e => {
            const li = document.createElement('li');
            const span1 = document.createElement('span');
            const img = document.createElement('img');
            const span4 = document.createElement('span');
            const spanDescription = document.createElement('span');
            const checkBox = document.createElement('span');
            const container = document.createElement('span');
            const imgDelete = document.createElement('img');
            const imgCheck = document.createElement('img');
            const imgExpand = document.createElement('img');
            const priority = document.createElement('img');
            const div = document.createElement('div');

            div.classList.add('toDoDiv')
            priority.classList.add('priority')
            imgCheck.classList.add('checked');
            imgDelete.classList.add('deleteToDo');
            imgExpand.classList.add('expandToDo');
            spanDescription.classList.add('hidden')
            span4.classList.add('toDoDataContainer')
            checkBox.classList.add('checkBox');
            container.classList.add('optionsContainer');
            spanDescription.classList.add('description')
            img.classList.add('editToDo');
            span1.classList.add('toDoData');

            imgCheck.src = check;
            imgDelete.src = deleteIcon
            imgExpand.src = expand
            li.dataset.toDoId = e.id;
            spanDescription.textContent = e.description;
            span1.textContent = `${e.title}, ${e.dueDate}`
            img.src = editIcon

            if (e.checked === true) {
                checkBox.append(imgCheck);
                span4.style.textDecoration = "line-through";
                span4.style.textDecorationThickness = "3px";
                spanDescription.style.textDecoration = "underline line-through ";
                spanDescription.style.textDecorationThickness = "2px";
            }
            const priorityMap = {
                1: priorityOne,
                2: priorityTwo,
                3: priorityThree
            };
            if (priorityMap[e.priority]) priority.src = priorityMap[e.priority];

            span4.append(span1, priority);
            container.append(imgExpand, img, imgDelete);
            div.append(checkBox, span4, container)
            li.append(div, spanDescription);
            document.querySelector('#toDoList').appendChild(li);
        }
        )
    }
}
