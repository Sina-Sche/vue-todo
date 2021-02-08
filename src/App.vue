<template>
  <h1>To Do App</h1>
  <div class="app-container">
    <Form @todo-added="addTodo" />
    <ToDoList :todos="todos" @deleteTodo="deleteTodo" />
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
import { deleteTodoById, getAllTodos, postTodo } from "./api/todos";
export default {
  name: "App",
  components: { Form, ToDoList },
  data() {
    return {
      todos: [],
      todo: {},
    };
  },
  async created() {
    this.todos = await getAllTodos();
  },
  methods: {
    async deleteTodo(id) {
      await deleteTodoById(id);
      this.todos = await getAllTodos();
    },
    async addTodo(todo) {
      const newTodo = await postTodo(todo);
      this.todos.push(newTodo);
    },
  },
};
</script>

<style>
#app {
  font-family: Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
