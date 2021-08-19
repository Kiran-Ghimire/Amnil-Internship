function saveLocalTodos(todo, completedtodo, startingTime, endingTime) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push([todo, completedtodo, startingTime, endingTime]);

  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function clearLocalTodos() {
  todos = [];
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  searchTodo = [];
  const todoList = document.querySelector(".todo-list");
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    todoDiv.classList.add(todo[1]);

    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todo[0] + " " + todo[2] + " " + "upto" + " " + todo[3];
    newTodo.dataset.startTime = todo[2];
    newTodo.dataset.endTime = todo[3];

    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    searchTodo.push([todo[0], todo[2], todo[3]]);

    // todoInput.value = "";
    //Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //attach final Todo
    todoList.appendChild(todoDiv);
  });
}

export default {
  saveLocalTodos,
  removeLocalTodos,
  clearLocalTodos,
  getTodos,
};
