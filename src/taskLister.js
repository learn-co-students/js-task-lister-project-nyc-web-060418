class TaskLister {
  // your solution here
  constructor() {
    this.listStore = {};
  }

  createNewTaskForm() {
    const newTaskForm = document.createElement('form');
    newTaskForm.id = "create-task-form";
    newTaskForm.innerHTML += this.renderCreateTaskForm();
    return newTaskForm;
  }

  renderCreateTaskForm() {
    return (`
          <label for="parent-list">Select List:</label>
          <select id="parent-list">
          </select>

          <label for="new-task-description">Task description:</label>
          <input required="" type="text" id="new-task-description" placeholder="description">

          <label for="new-task-priority">Priority level:</label>
          <input type="text" id="new-task-priority" placeholder="priority">
          <input id="create-task-button" type="submit" value="Create New Task">
          <br>`);
  }

  deleteList(listId) {
    delete this.listStore[`${listId}`];
  }

  createList(listName) {
    let newList = new List(listName);
    this.listStore[`${newList.id}`] = newList;
    return newList;
  }

  createTaskThroughList(taskName, priorityLevel, listId) {
    let foundList = this.listStore[`${listId}`];
    foundList.createTask(taskName, priorityLevel);
  }




}
