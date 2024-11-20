export class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = false;
        this.id = self.crypto.randomUUID();
    }
    // editToDo(title,description,dueDate,priority){
    //     this.title = title;
    //     this.description = description;
    //     this.dueDate = dueDate;
    //     this.priority = priority;
    // }
}


export function editToDo(title,description,dueDate,priority){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

ToDo.prototype.editToDo = editToDo