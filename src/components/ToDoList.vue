<template>
  <ul>
    <ToDoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @removeTodo="handleRemoveTodo"
    />
  </ul>
</template>

<script>
import ToDoItem from "./ToDoItem";
export default {
  name: "ToDoList",
  components: { ToDoItem },
  props: { todos: Array },
  emits: ["deleteTodo", "id"],
  data() {
    return {};
  },
  methods: {
    handleRemoveTodo(id) {
      this.$emit("deleteTodo", id);
    },
  },
};
</script>
