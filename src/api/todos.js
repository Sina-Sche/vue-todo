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
  const response = await fetch(`http://localhost:5000/todos/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await response.json();
  return newTodo;
}
