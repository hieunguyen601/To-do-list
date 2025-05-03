const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keypress", function (e) {
if (e.key === "Enter" && taskInput.value.trim() !== "") {
    addTask(taskInput.value.trim());
    taskInput.value = "";
}
});

function addTask(taskText) {
const li = document.createElement("li");
const span = document.createElement("span");
span.textContent = taskText;

span.onclick = function () {
    li.classList.toggle("completed");
};

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.onclick = function () {
    li.remove();
};

li.appendChild(span);
li.appendChild(deleteBtn);
taskList.appendChild(li);
}