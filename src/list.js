// const storeLists = []
let listId = 0

class List {
  // your code here
  constructor(title){
    this.title = title
    this.id = ++listId
    store.lists.push(this)
  }

  renderHTML(){
    let tasks = this.tasks().map(task => task.renderTaskHTML()).join("")

    return `
      <div>
        <h2>${this.title}
          <button data-title="${this.title}" class="delete-list" data-action="delete-list">
            X
          </button>
        </h2>
        <ul>
          ${tasks}
        </ul>
      </div>
        `
  }

  removeList(){
    store.lists = store.lists.filter(list => list.id !== this.id)
  }

  tasks(){
    return store.tasks.filter(task => task.list.id === this.id)
  }


}
