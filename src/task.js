let taskId = 0;

class Task {
  // your code here

  constructor(taskName, priorityLevel) {
    this.name = taskName;
    this.priorityLevel = priorityLevel;
    this.id = ++taskId;
    this.listId = undefined;
  }

  generateTaskElement() {
    let newTaskElement = document.createElement('li');
    newTaskElement.dataset.id = `${this.id}`;
    newTaskElement.innerText = this.name;
    return newTaskElement;
  }

  renderTaskElement() {
    return `
        <h5>${this.name}
          <button data-title="${this.name}" class="delete-task">
            X
          </button>
        </h5>
        <h5> Priority Level: ${this.priorityLevel}
        </h5>`
  }

}
