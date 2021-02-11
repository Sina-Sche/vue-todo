<template>
  <ul>
    <ToDoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @removeTodo="handleRemoveTodo"
      @editTodo="handleEditTodo"
    />
  </ul>
</template>

<script>
import ToDoItem from "./ToDoItem";
export default {
  name: "ToDoList",
  components: { ToDoItem },
  props: { todos: Array },
  emits: ["deleteTodo", "editTodo"],
  data() {
    return {};
  },
  methods: {
    handleRemoveTodo(id) {
      this.$emit("deleteTodo", id);
    },
    handleEditTodo(id) {
      this.$emit("editTodo", id);
    },
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
</style>
