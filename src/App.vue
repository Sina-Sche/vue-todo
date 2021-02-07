<template>
  <h1>To Do App</h1>
  <div class="app-container">
    <Form />
    <ToDoItem />
  </div>
</template>

<script>
import ToDoItem from "./components/ToDoItem";
import Form from "./components/Form";
export default {
  name: "App",
  components: { Form, ToDoItem },
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
