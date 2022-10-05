var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

buttonEl.addEventListener("click", function() {
    alert("button clicked");
  });

var taskEl = document.createElement("li");

taskEl.textContent = "hello";


var taskToDoEl = document.querySelector("#tasks-to-do");
console.log(taskToDoEl);

taskToDoEl.appendChild(taskItemEl);
