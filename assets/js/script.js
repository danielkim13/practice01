const buttonEl = document.querySelector("#save-task");
const taskToDoEl = document.querySelector("#tasks-to-do");


const createTasksHandler = () => {
    const listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(listItemEl);
}

buttonEl.addEventListener("click", createTasksHandler)