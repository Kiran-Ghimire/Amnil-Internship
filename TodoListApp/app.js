//Selectors
const todoInput= document.querySelector('.todo-input');
const todoButton= document.querySelector('.todo-button');
const todoList= document.querySelector('.todo-list');
const clearAll= document.querySelector('#clearBtn')


//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
clearAll.addEventListener("click", allClear)



//Functions

function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();

    //making a Todo DIV
    const todoDiv= document.createElement("div");
    todoDiv.classList.add("todo");

    if(todoInput.value.length > 0){//Create LI
        const newTodo= document.createElement("li");
        newTodo.innerText= todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
    
        //CHECK MARK BUTTON
        const completedButton= document.createElement('button');
        completedButton.innerHTML= '<i class="fas fa-check"></i>'
        completedButton.classList.add("complete-btn")
        todoDiv.appendChild(completedButton);
    
        //CHECK trash BUTTON
        const trashButton= document.createElement('button');
        trashButton.innerHTML= '<i class="fas fa-trash"></i>'
        trashButton.classList.add("trash-btn")
        todoDiv.appendChild(trashButton);
    
        
    
        //APPEND TO LIST
        todoList.appendChild(todoDiv);

        //Clear Todo INPUT VALUE
        todoInput.value="";}
        else{
            alert("Please Enter a value")
        }
    
}

function deleteCheck(e){
    const item= e.target;
    
    if(item.classList[0] === 'trash-btn'){
        const todo= item.parentElement;
        todo.remove();
    }

    //CHECK MARK
    if (item.classList[0] === "complete-btn"){
        const todo= item.parentElement;
        todo.classList.toggle('completed');
    }
}

function allClear(e){
    const item= document.getElementById("todo-list")
    
    if(item){
        while(item.firstChild){
            item.removeChild(item.firstChild)
        }
    }
}

