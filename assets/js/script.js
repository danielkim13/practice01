const formEl = document.querySelector("#task-form");
const taskToDoEl = document.querySelector("#tasks-to-do");


const createTasksHandler = (event) => {
    event.preventDefault();

    const taskNameInput = document.querySelector("input[name='task-name']").value;
    const taskTypeInput = document.querySelector("select[name='task-type']").value;

    const listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    const taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    listItemEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    taskToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", createTasksHandler)