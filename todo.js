function addTodo() {
    const input = document.getElementById('todo-input');
    const newTodo = input.value.trim();

    if (newTodo !== "")
    {
        const todoList = document.getElementById('todo-list');

        const li = document.createElement('li');
        li.textContent = newTodo;

        li.onclick = function () {
            if (li.style.textDecoration === 'line-through') {
                li.style.textDecoration = 'none';
            }
            li.style.textDecoration ='line-through';
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Sil';
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function(){
            todoList.removeChild(li);
        };

        li.appendChild(deleteButton);

        todoList.appendChild(li);

        input.value = "";

    }
}

document.getElementById('todo-input').addEventListener('keypress', function(event){
    if (event.key == 'Enter'){
        addTodo();
    }
})