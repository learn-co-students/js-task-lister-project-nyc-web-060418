// const storeTasks = []
let taskId = 0

class Task {
  // your code here
  constructor(listItem, description, priority){
    this.list = listItem
    this.description = description
    this.priority = priority
    this.id = ++taskId
    store.tasks.push(this)
  }

  removeTask(){
    store.tasks = store.tasks.filter(task => task.id !== this.id)
  }

  renderTaskHTML(){
    return `
    <li>
      Task: ${this.description}
      <button data-list-title="${this.list.title}" data-task-name="${this.description}" data-action="delete-task" class="delete-task">
          X
      </button>
      <br>
      Priority: ${this.priority}
    </li>
        `
  }
}
