<template>
  <h1>To Do App</h1>
  <ToDoItem />
</template>

<script>
import ToDoItem from "./components/ToDoItem";
export default {
  name: "App",
  components: { ToDoItem },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
