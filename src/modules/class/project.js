export class Project {
    constructor(name) {
        this.name = name;
        this.toDos = [];
        this.id = self.crypto.randomUUID();
    }
    // addToDo(toDo) {
    //     this.toDos.push(toDo);
    // }
    // removeToDo(toDoId){
    //     const toDo = this.toDos.find(e => e.id === toDoId);
    //     const index = this.toDos.indexOf(toDo)
    //     this.toDos.splice(index, 1)
    // }
}

export function addToDo(toDo){
    this.toDos.push(toDo);
}

export function removeToDo(toDoId){
    const toDo = this.toDos.find(e => e.id === toDoId);
    const index = this.toDos.indexOf(toDo)
    this.toDos.splice(index, 1)
}
Project.prototype.addToDo = addToDo
Project.prototype.removeToDo = removeToDo