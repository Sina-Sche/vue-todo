<template>
  <ul>
    <ToDoItem v-for="(todo, index) in todos" :key="index" :todo="todo" />
  </ul>
</template>

<script>
import ToDoItem from "./ToDoItem";
export default {
  name: "ToDoList",
  components: { ToDoItem },
  props: { todos: Array },
};
</script>
