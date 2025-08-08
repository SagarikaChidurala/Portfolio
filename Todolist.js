// Select elements
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Initialize todo list
let todos = [];

// Add event listener to add todo button
addTodoBtn.addEventListener('click', addTodo);

// Function to add todo
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const newTodo = {
            text: todoText,
            completed: false
        };
        todos.push(newTodo);
        renderTodoList();
        todoInput.value = '';
    }
}

// Function to render todo list
function renderTodoList() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
            <input type="checkbox" data-index="${index}" ${todo.completed ? 'checked' : ''}>
            <span>${todo.text}</span>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        todoList.appendChild(todoItem);
    });
}

// Add event listener to todo list
todoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        const index = e.target.dataset.index;
        todos[index].completed = !todos[index].completed;
        renderTodoList();
    } else if (e.target.classList.contains('delete-btn')) {
        const index = e.target.dataset.index;
        todos.splice(index, 1);
        renderTodoList();
    }
});