let listId = 0
class List {
  constructor(title) {
    this.id = ++listId
    this.title = title
    store.lists.push(this)
  }

  generateTaskHtmlForAList() {
    let listTasksArray = store.tasks.filter(task => task.list.id === this.id)

    let listTasksHtml = listTasksArray.map(task => task.generateTaskHtml())
    return listTasksHtml.join("")
  }

  generateListHtml() {
    return `<div>
    <h2>${this.title}
      <button data-action="delete-list" data-id="${this.id}" data-title="${this.title}" class="delete-list">
        X
      </button>
    </h2>
    <ul>
      ${this.generateTaskHtmlForAList()}
    </ul>
  </div>`
  }

  removeList() {
    store.lists = store.lists.filter(list => list.id !== this.id)
  }
}
