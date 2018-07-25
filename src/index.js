document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const app = new TaskLister();
  let noListsYet = true;
  let noListDivYet = true;

  const mainContent = document.getElementById("main-content");
  const appContent = document.getElementById("app-content");
  const listCreateForm = document.getElementById("create-list-form");
  const listCreateFormButton = document.getElementById("create-list-form-button")

  listCreateFormButton.addEventListener("click", createFormClick)

  function createFormClick(e) {
    //for the first time this button is clicked, we must generate multiple new elements.
    e.preventDefault();
    generateTaskCreateForm();
    generateListDiv();

    //now we get to the list creation logic
    const listDiv = document.getElementById("lists");
    let newList = app.createList(listCreateForm.elements[0].value);
    let newListElement = newList.generateListElement();
    newListElement.innerHTML = newList.renderListElement();
    listDiv.appendChild(newListElement);
    listCreateForm.elements[0].value = "";

    //fill out the dropdown menu
    addListOptionsToDropdown()

    //add delete capabilities
    listDiv.addEventListener("click", deleteButtonPress)
  }

  function generateListDiv() {
    if (noListDivYet)
    {const listDiv = document.createElement('div');
    listDiv.id = "lists";
    appContent.appendChild(listDiv);
    noListDivYet = false;}
  }

  function generateTaskCreateForm() {
    if (noListsYet) {
      const taskForm = app.createNewTaskForm()
      appContent.appendChild(taskForm);
      const createTaskButton = document.getElementById("create-task-button");
      createTaskButton.addEventListener("click", createTaskButtonClick)
      noListsYet = false;
    }
  }

  function addListOptionsToDropdown() {
    const listOptionDropdown = document.getElementById("parent-list");
    listOptionDropdown.innerHTML = ""
    for (let list in app.listStore) {
      let newListOption = document.createElement('option');
      newListOption.dataset.listId = app.listStore[list].id;
      newListOption.innerHTML = `${app.listStore[list].name}`;
      listOptionDropdown.appendChild(newListOption);
    }
  }

  function createTaskButtonClick(e) {
    e.preventDefault();
    const createTaskForm = document.getElementById("create-task-form");
    let listId = createTaskForm.elements[0].options[createTaskForm.elements[0].selectedIndex].dataset.listId;
    let newTask = app.listStore[listId].createTask(createTaskForm.elements[1].value, createTaskForm.elements[2].value);
    let listElement = document.getElementsByClassName("list-ul")[listId - 1];
    let newTaskElement = newTask.generateTaskElement();
    newTaskElement.innerHTML = newTask.renderTaskElement();
    listElement.appendChild(newTaskElement);
  }

  function deleteButtonPress(e) {
    e.preventDefault();
    if (e.target.className == "delete-task") {
      e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    }
    if (e.target.className == "delete-list") {
      e.target.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode);
    }
  }

});
