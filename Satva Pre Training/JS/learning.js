// Mini Project: Simple To-Do List Application

// 1. Variables and Data Types
let tasks = [];

// 2. Functions
function addTask(task) {
    tasks.push(task);
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear the list
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = task;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.marginLeft = "10px";
        deleteButton.onclick = () => deleteTask(index);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}

// 3. DOM Manipulation
function createToDoApp() {
    const appContainer = document.createElement("div");
    appContainer.style.padding = "20px";
    appContainer.style.border = "1px solid #ddd";
    appContainer.style.borderRadius = "5px";
    appContainer.style.maxWidth = "400px";
    appContainer.style.margin = "20px auto";
    appContainer.style.fontFamily = "Arial, sans-serif";

    appContainer.innerHTML = `
        <h2>Simple To-Do List</h2>
        <input type="text" id="taskInput" placeholder="Enter a new task" style="width: 100%; padding: 8px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 4px;">
        <button id="addTaskButton" style="width: 100%; padding: 10px; background-color: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">Add Task</button>
        <ul id="taskList" style="list-style-type: none; padding: 0; margin-top: 15px;"></ul>
    `;

    document.body.appendChild(appContainer);

    const addTaskButton = document.getElementById("addTaskButton");
    addTaskButton.addEventListener("click", function () {
        const taskInput = document.getElementById("taskInput");
        const task = taskInput.value.trim();
        if (task) {
            addTask(task);
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    });
}

// 4. Events and Initialization
createToDoApp();
