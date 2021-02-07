<template>
  <ul>
    <ToDoItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      :index="index"
      @removeTodo="handleRemoveTodo(index)"
    />
  </ul>
</template>

<script>
import ToDoItem from "./ToDoItem";
export default {
  name: "ToDoList",
  components: { ToDoItem },
  props: { todos: Array, index: Number },
  data() {
    return {};
  },
  methods: {
    handleRemoveTodo(index) {
      this.$emit("deleteTodo", index);
    },
  },
};
</script>
