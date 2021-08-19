//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const clearAll = document.querySelector("#clearBtn");
const searchBar = document.getElementById("searchBar");
const startTime = document.getElementById("start-time");
const endTime = document.getElementById("end-time");
const sortTime = document.querySelector(".sort-button");

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
clearAll.addEventListener("click", allClear);
searchBar.addEventListener("keyup", searchTodos);
sortTime.addEventListener("click", sortTodos);

//Functions

function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();

  //making a Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  if (
    todoInput.value.length > 0 &&
    startTime.value.length > 0 &&
    endTime.value.length > 0
  ) {
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText =
      todoInput.value +
      " " +
      startTime.value +
      " " +
      "upto" +
      " " +
      endTime.value;
    newTodo.dataset.startTime = startTime.value;
    newTodo.dataset.endTime = endTime.value;

    newTodo.classList.add("todo-item");

    todoDiv.appendChild(newTodo);

    //CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //CHECK trash BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    searchTodo.push(
      todoInput.value,
      newTodo.className,
      startTime.value,
      endTime.value
    );

    saveLocalTodos(
      todoInput.value,
      newTodo.parentElement.className,
      startTime.value,
      endTime.value
    );
    //APPEND TO LIST
    todoList.appendChild(todoDiv);

    //Clear Todo INPUT VALUE
    todoInput.value = "";
  } else {
    alert("Please Enter a value");
  }
}

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    removeLocalTodos(todo);
    todo.remove();
  }

  //CHECK MARK
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    console.log(time);
    console.log(todo.firstChild.getAttribute("data-start-time"));
    if (
      time >= todo.firstChild.getAttribute("data-start-time") &&
      time <= todo.firstChild.getAttribute("data-end-time")
    ) {
      todo.classList.toggle("completed");
    } else {
      alert("You are not on the specified time");
    }
  }
}

function allClear(e) {
  const item = document.getElementById("todo-list");

  if (item) {
    while (item.firstChild) {
      clearLocalTodos();
      item.removeChild(item.firstChild);
    }
  }
}

function searchTodos(e) {
  const searchString = e.target.value.toLowerCase();
  const item = document.getElementById("todo-list");
  if (item) {
    while (item.firstChild) {
      item.removeChild(item.firstChild);
    }
  }

  if (searchString !== "") {
    const filteredList = searchTodo.filter((item) =>
      item[0].includes(searchString)
    );
    // console.log(filteredList);

    filteredList.forEach(function (todo) {
      //Create todo div
      console.log(todo);
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");

      todoDiv.classList.add(todo);

      //Create list
      const newTodo = document.createElement("li");
      newTodo.innerText =
        todo[0] + " " + todo[1] + " " + "upto" + " " + todo[2];
      newTodo.dataset.startTime = todo[1];
      newTodo.dataset.endTime = todo[2];
      newTodo.classList.add("todo-item");
      todoDiv.appendChild(newTodo);

      todoInput.value = "";
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
  } else {
    getTodos();
  }
}

function sortTodos(event) {
  event.preventDefault();

  todos = JSON.parse(localStorage.getItem("todos"));
  console.log(todos);
  todos.sort((a, b) => {
    if (a[2] === b[2]) {
      return a[0] < b[0] ? -1 : 1;
    } else {
      return a[2] < b[2] ? -1 : 1;
    }
  });
  const item = document.getElementById("todo-list");
  if (item) {
    while (item.firstChild) {
      item.removeChild(item.firstChild);
    }
  }
  todos.forEach(function (todo) {
    //Create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    todoDiv.classList.add(todo[1]);
    console.log("todo1", todo[1]);
    //Create list
    const newTodo = document.createElement("li");
    newTodo.innerText = todo[0] + " " + todo[2] + " " + "upto" + " " + todo[3];
    newTodo.dataset.startTime = todo[2];
    newTodo.dataset.endTime = todo[3];
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    todoInput.value = "";
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
