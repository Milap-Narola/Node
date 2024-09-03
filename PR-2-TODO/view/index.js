const fetchTodos = async () => {
    const response = await fetch('/todos');
    const todos = await response.json();
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `${todo.title} <button onclick="deleteTodo(${todo.id})">Delete</button>`;
        todoList.appendChild(li);
    });
}

const addTodo = async () => {
    const title = document.getElementById('todoTitle').value;
    const response = await fetch('/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, isCompleted: false })
    });
    const newTodo = await response.json();
    document.getElementById('todoTitle').value = '';
    fetchTodos();
}

const deleteTodo = async (id) => {
    await fetch(`/todos/delete/${id}`, { method: 'DELETE' });
    fetchTodos();
}


fetchTodos();