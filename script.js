// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task Function
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = ""; // Clear input
    taskInput.focus(); // Focus back to input
  }
});

// Enter Key to Add Task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});

// Function to Add Task
function addTask(taskText) {
  const taskItem = document.createElement("li");
  taskItem.className =
    "flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-200";

  // Task Text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.className = "flex-1 text-gray-700";

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className =
    "bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-200";

  // Delete Task Functionality
  deleteBtn.addEventListener("click", () => {
    taskItem.classList.add(
      "opacity-0",
      "translate-x-full",
      "transition",
      "duration-300"
    );
    setTimeout(() => {
      taskItem.remove();
    }, 300);
  });

  // Append Elements
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  // Animation for New Task
  taskItem.classList.add("opacity-0", "translate-y-4");
  setTimeout(() => {
    taskItem.classList.remove("opacity-0", "translate-y-4");
    taskItem.classList.add("opacity-100", "translate-y-0");
  }, 10);
}
