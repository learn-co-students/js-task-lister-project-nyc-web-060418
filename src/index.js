document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const appContent = document.getElementById("app-content");
  const app = new TaskLister();

  const mainContent = document.getElementById("main-content");
  const listForm = document.getElementById("create-list-form");
  const listTitle = document.getElementById("new-list-title");
  const listCollection = document.getElementById("lists");



//// EVENT LISTENERS
  mainContent.addEventListener("click", (event) =>{
    event.preventDefault();

    if (event.target.dataset.action === 'submit-list') {
      appContent.innerHTML = ""

      if (store.lists.map(list => list.title.toLowerCase()).includes( listTitle.value.toLowerCase() )) {
        alert("Title must be unique!")
        appContent.innerHTML += renderTaskForm()
      } else {
        let newList = new List(listTitle.value)

        appContent.innerHTML += renderTaskForm()
      }
    }
    listForm.reset()
    return listsCollectionHTML()

  });

  appContent.addEventListener('click',(event) => {
    event.preventDefault();

    const parentList = document.getElementById("parent-list")
    const taskDescrip = document.getElementById("new-task-description")
    const taskPriority = document.getElementById("new-task-priority")
    const taskForm = document.getElementById("create-task-form")

    if (event.target.dataset.action === 'submit-task') {

      let taskList = store.lists.find(list => list.title === parentList.value)

      let newTask = new Task(taskList, taskDescrip.value, taskPriority.value)
      taskForm.reset();
    }

    return listsCollectionHTML()
  });


  listCollection.addEventListener('click', (event) =>{
    event.preventDefault();

    if (event.target.dataset.action === 'delete-task') {
      let task = store.tasks.find(task => task.description === event.target.dataset.taskName)
      task.removeTask()
    }

    if (event.target.dataset.action === 'delete-list') {
      let list = store.lists.find(list => list.title === event.target.dataset.title)
      list.removeList()
    }
    return listsCollectionHTML()
  });


//// ADDITIONAL FUNCTIONS
  function allLists(){
    return store.lists.map( list => list.renderHTML() ).join("")
  }

  function listsCollectionHTML(){
    listCollection.innerHTML = allLists()
  }

  function renderTaskForm(){
    return `
    <form id="create-task-form">
      <label for="parent-list">Select List:</label>
      <select id="parent-list">
      <!-- Major key alert:
      read the docs for HTML option selected:
      https://www.w3schools.com/tags/att_option_selected.asp -->

      ${listsOptions()}

      </select>

      <label for="new-task-description">Task description:</label>
      <input required type="text" id="new-task-description" placeholder="description">

      <label for="new-task-priority">Priority level:</label>
      <input type="text" id="new-task-priority" placeholder="priority">
      <input type="submit" value="Create New Task" data-action="submit-task" >
    </form>
        `
  }

  function listsOptions(){
    return store.lists.map(list => {
      return `
      <option value="${list.title}" selected>
      ${list.title}
      </option>
        `
    }).join("")
  }

});
