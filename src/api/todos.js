export async function getAllTodos() {
  const response = await fetch("http://localhost:3000/todos");
  const todos = await response.json();
  return todos;
}

export async function getTodoById(id) {
  const response = await fetch(`http://localhost:3000/todos/${id}`);
  const todo = await response.json();
  return todo;
}

export async function postTodo(todo) {
  const response = await fetch(`http://localhost:3000/todos/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await response.json();
  return newTodo;
}

export async function deleteTodoById(id) {
  await fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  });
}

export async function updateTodoById(todo) {
  const id = todo.id;
  const response = await fetch(`http://localhost:3000/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = response.json();
  return updatedTodo;
}
