document.addEventListener('DOMContentLoaded', (event) => {
  const listForm = document.getElementById("create-list-form")
  const listDiv = document.getElementById("app-content");
  const listTitle = document.getElementById("new-list-title")
  const taskFormArea = document.querySelector("#task-form")
  const listArea = document.querySelector("#lists")

  listForm.addEventListener("submit", function (event) {
    event.preventDefault()
    new List(listTitle.value)
    renderTaskForm();
    renderLists();
    listenToTaskForm();
  })

  listArea.addEventListener("click", function (event) {
    if(event.target.dataset.action === "delete-list") {
      let listToDelete = store.lists.find(list => list.id === parseInt(event.target.dataset.id))
      listToDelete.removeList()
      renderTaskForm();
      renderLists();
    }

    if(event.target.dataset.action === "delete-task") {
      let taskToDelete = store.tasks.find(task => task.id === parseInt(event.target.dataset.id))
      taskToDelete.removeTask();
      renderLists();
    }
  })

  function listenToTaskForm(){
    const taskForm = document.getElementById("create-task-form")

    taskForm.addEventListener("submit", function (event) {
      event.preventDefault()
      const taskDescription = document.getElementById("new-task-description")
      const taskPriority = document.getElementById("new-task-priority")
      const taskList = document.getElementById("parent-list")
      let specificList = store.lists.find(list => list.id === parseInt(taskList.value))
      new Task(taskDescription.value, taskPriority.value, specificList)

      renderLists();
    })
  }

  function generateTaskFormOptions() {
    let optionArray = store.lists.map(list => `<option value="${list.id}" selected>
      ${list.title}
    </option>`)
    return optionArray.join("")
  }

  function generateTaskFormHtml() {
    return `<form id="create-task-form">
    <label for="parent-list">Select List:</label>
    <select id="parent-list">
      ${generateTaskFormOptions()}
    </select>

    <label for="new-task-description">Task description:</label>
    <input required type="text" id="new-task-description" placeholder="description">

    <label for="new-task-priority">Priority level:</label>
    <input type="text" id="new-task-priority" placeholder="priority">
    <input data-action= "submit-new-task" type="submit" value="Create New Task">
  </form>`
  }

  function renderTaskForm() {
    taskFormArea.innerHTML = generateTaskFormHtml()
  }

  function renderLists() {
    listArea.innerHTML = store.lists.map(list => list.generateListHtml()).join("")
  }

  // const app = new TaskLister();
});
