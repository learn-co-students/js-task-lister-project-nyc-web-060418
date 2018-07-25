let listId = 0;

class List {
  // your code here

  constructor(name) {
    this.name = name;
    this.id = ++listId;
    this.taskStore = {};
  }

  createTask(taskName, priorityLevel) {
    const newTask = new Task(taskName, priorityLevel);
    newTask.listId = this.id;
    this.taskStore[newTask.id] = newTask;
    return newTask;
  }

  generateListElement() {
    let newListElement = document.createElement('ul');
    newListElement.dataset.id = `${this.id}`;
    newListElement.innerText = this.name;
    return newListElement;
  }

  renderListElement() {
    return `<div>
        <h2>${this.name}
          <button data-title="${this.name}" class="delete-list">
            X
          </button>
        </h2>
        <ul class="list-ul" data-list-id=${this.id}>

        </ul>
      </div>`
  }
}
