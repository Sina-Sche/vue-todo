<template>
  <div class="app-wrapper">
    <h1>To Do App</h1>
    <button
      @click="toggleForm"
      v-if="!form"
      v-bind:class="[addClass, toggleClass]"
    >
      + Add New To Do
    </button>
    <button
      @click="toggleForm"
      v-if="form"
      v-bind:class="[cancelClass, toggleClass]"
    >
      x Cancel
    </button>
    <Form v-if="form" @todo-added="addTodo" />
    <p>💡 Click the To Do Name to see more details</p>
    <ToDoList :todos="todos" @deleteTodo="deleteTodo" @editTodo="editTodo" />
    <UpdateForm v-if="updateForm" :id="id" @todo-updated="updateTodo" />
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
import UpdateForm from "./components/UpdateForm";
import {
  deleteTodoById,
  getAllTodos,
  postTodo,
  updateTodoById,
} from "./api/todos";
export default {
  name: "App",
  components: { Form, ToDoList, UpdateForm },
  data() {
    return {
      todos: [],
      todo: {},
      id: Number,
      form: false,
      updateForm: false,
      addClass: "add",
      toggleClass: "toggle",
      cancelClass: "cancel",
    };
  },
  async created() {
    this.todos = await getAllTodos();
  },
  methods: {
    toggleForm() {
      this.form = !this.form;
    },
    async deleteTodo(id) {
      await deleteTodoById(id);
      this.todos = await getAllTodos();
    },
    async addTodo(todo) {
      const newTodo = await postTodo(todo);
      this.todos.push(newTodo);
    },
    editTodo(id) {
      this.updateForm = !this.updateForm;
      this.id = id;
    },
    async updateTodo(todo) {
      this.updateForm = !this.updateForm;
      const updatedTodo = await updateTodoById(todo);
      this.todos = await getAllTodos();
      return updatedTodo;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "LaurenPremier";
  src: local("LaurenPremier"),
    url(./fonts/LaurenPremier.woff2) format("truetype");
}
.app-wrapper {
  min-height: 100vh;
  width: 100vw;
  background-image: url(https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80);
  background-attachment: fixed;
  background-size: cover;
}
#app {
  font-family: "LaurenPremier";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  font-size: 3rem;
  font-weight: bold;
  color: white;
}
.toggle {
  font-family: "LaurenPremier";
  border-radius: 40px;
  padding: 10px;
  font-size: 1.5rem;
  margin-bottom: 10px;
  width: 200px;
}
p {
  text-align: center;
}
.add {
  border: 1px solid #e3ebd7;
  backdrop-filter: blur(10px);
  background-color: rgba(182, 211, 186, 0.45);
  color: green;
}
.cancel {
  backdrop-filter: blur(10px);
  background-color: rgba(182, 211, 186, 0.45);
  color: #2c3e50;
  border: 1px solid #2c3e50;
}
</style>
