let todos = [
  { id: 1, text: 'Take out trash and recycling', complete: true },
  { id: 2, text: 'Pick up dry cleaning', complete: false },
  { id: 3, text: 'Get oil change', complete: false },
  { id: 4, text: 'Write thank-you notes', complete: false },
];

const displayTodos = todos => {
  todos.map(todo => {
    // Setting up elements for a todo
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo';

    const divInput = document.createElement('input');
    divInput.type = 'checkbox';
    divInput.className = 'todo-checkbox';

    const divSpan = document.createElement('span');
    divSpan.className = 'todo-text';

    const spanText = document.createTextNode(todo.text);
    divSpan.appendChild(spanText);

    // building todo element block
    todoDiv.appendChild(divInput);
    todoDiv.appendChild(divSpan);

    // inserting todo element into the document
    const id = document.getElementById('main-todo-list');
    id.appendChild(todoDiv);
  });
};

document.addEventListener('DOMContentLoaded', function() {
  displayTodos(todos);
});
