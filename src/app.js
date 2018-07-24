const newListTitle = document.getElementById('new-list-title');
const listSubmit = document.getElementById('create-list-form').querySelector('input[type="submit"]')
const appContent = document.getElementById('app-content');


let taskSubmit = ()=> document.getElementById('create-task-form').querySelector('input[type="submit"]')

let createNewTask = (event) => {
  event.preventDefault();
  let selectList = document.getElementById('parent-list');
  let description = document.getElementById('new-task-description');
  let priority = document.getElementById('new-task-priority');
  let newTask = new Task(selectList.value, description.value, priority.value);
  let allTaskList = document.querySelectorAll('#lists div');
  allTaskList.forEach(function(el){
    let card = el.querySelector('h2');
    if (card.querySelector('button').dataset.title == selectList.value){
      el.querySelector('ul').innerHTML += `<li>
        Task: ${description.value}
        <button data-list-title="list" data-task-name="asdf" class="delete-task">
          X
        </button>
        <br>
        Priority: ${priority.value}
      </li>`
    }

  })
}

listSubmit.addEventListener('click', function(event){
  event.preventDefault();
  let newList = new List(newListTitle.value)
  let app = new TaskLister(newList)
  appContent.innerHTML = app.render();

  taskSubmit().addEventListener('click', createNewTask);
})
