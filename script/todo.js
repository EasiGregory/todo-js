let todos = [
  { id: 1, text: 'Take out trash and recycling', complete: true },
  { id: 2, text: 'Pick up dry cleaning', complete: false },
  { id: 3, text: 'Get oil change', complete: false },
  { id: 4, text: 'Write thank-you notes', complete: false },
];

const buildTodos = todos => {
  todos.map(todo => {
    // Setting up elements for a todo
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo';
    todoDiv.id = todo.id;

    const divInput = document.createElement('input');
    divInput.type = 'checkbox';
    divInput.className = 'todo-checkbox';
    // Setting an event for checking a todo
    divInput.addEventListener('click', function() {
      checkTodo(todo);
    });

    const divSpan = document.createElement('span');
    divSpan.className = 'todo-text';

    // Setting the CSS for a completed todo (should move this up to be more reusable)
    todo.complete
      ? ((divInput.checked = 'checked'),
        (todoDiv.style.textDecoration = 'line-through'),
        (todoDiv.style.color = '#ccc'))
      : null;

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

const checkTodo = todo => {
  // Grabbing the todo we want to update
  const todoToUpdate = document.getElementById(todo.id);

  if (todo.complete === false) {
    todo.complete = true;
    todoToUpdate.style.textDecoration = 'line-through';
    todoToUpdate.style.color = '#ccc';
  } else {
    todo.complete = false;
    todoToUpdate.style.textDecoration = '';
    todoToUpdate.style.color = 'black';
  }
};

document.addEventListener('DOMContentLoaded', function() {
  buildTodos(todos);
});
