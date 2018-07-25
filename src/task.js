let taskId = 0
class Task {
  constructor(description, priority, list) {
    this.id = ++taskId
    this.description = description
    this.priority = priority
    this.list = list
    store.tasks.push(this)
  }

  generateTaskHtml() {
    return `<li>
        Task: ${this.description}
        <button data-list-title="${this.list.title}" data-action="delete-task" data-id="${this.id}" data-task-name="${this.title}" class="delete-task">
            X
        </button>
        <br>
        Priority: ${this.priority}
      </li>`
  }
  removeTask() {
    store.tasks = store.tasks.filter(task => task.id !== this.id)
  }
}
