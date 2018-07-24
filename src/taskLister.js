class TaskLister {
  constructor(listInstance) {
    this.listInstance = listInstance
  }

  render() {
    return (`<form id="create-task-form">
          <label for="parent-list">Select List:</label>
          <select id="parent-list">

          ${allList.reduce(function(agg, list){
            return agg +=
            `<option value="${list.title}" selected="">
            ${list.title}
            </option>`
            debugger
          },'')}


          </select>

          <label for="new-task-description">Task description:</label>
          <input required="" type="text" id="new-task-description" placeholder="description">

          <label for="new-task-priority">Priority level:</label>
          <input type="text" id="new-task-priority" placeholder="priority">
          <input type="submit" value="Create New Task">
        </form>

        <div id="lists">

        ${allList.reduce(function(agg, list){
          return agg += `<div>
            <h2>${list.title}
              <button data-title="${list.title}" class="delete-list">
                X
              </button>
            </h2>
            <ul>

            </ul>
          </div>`
        },'')}

        </div>`);

  }
}
