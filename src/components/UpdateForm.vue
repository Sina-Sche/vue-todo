<template>
  <form @submit.prevent="updateTodo">
    <label for="todo">To Do Name</label>
    <input id="todo" v-model="todoName" placeholder="Add To Do Name" required />
    <label for="description">Description:</label>
    <input
      id="todo-description"
      v-model="description"
      placeholder="Describe the To Do"
    />

    <div class="subtasks">
      <label for="tasks">Tasks</label>
      <input
        id="tasks"
        v-model="tempSubtasks"
        placeholder="Add Subtasks"
        @keyup="addTask"
      />
      <p>💡 Type a "," (comma) to submit a task.</p>
      <p v-if="isError" class="error">❗ You already added this task</p>
      <ul class="subtask-list">
        <li v-for="(task, index) in subtasks" :key="index">
          {{ task }}
          <button class="delete" @click="deleteSubtask(index)">
            ✖
          </button>
        </li>
      </ul>
      <label for="task-description">Description:</label>
      <input
        id="task-description"
        v-model="subtaskDescription"
        placeholder="Add a description for the subtasks"
      />
    </div>
    <input id="submit" type="submit" value="🖊" @submit.prevent="updateTodo" />
  </form>
</template>

<script>
import { getTodoById } from "../api/todos";
export default {
  name: "UpdateForm",
  props: { id: Number },
  emits: ["todo-updated"],
  data() {
    return {
      todoName: "",
      description: "",
      subtasks: [],
      subtaskDescription: "",
      tempSubtasks: "",
      errorMessage: "",
      isError: false,
    };
  },
  async created() {
    this.todo = await getTodoById(this.id);
    this.todoName = this.todo.todoName;
    this.description = this.todo.description;
    this.subtasks = this.todo.subtasks;
    this.subtaskDescription = this.todo.subtaskDescription;
  },
  methods: {
    addTask(e) {
      if (e.key === "," && this.tempSubtasks) {
        const formattedTask = this.tempSubtasks.slice(
          0,
          this.tempSubtasks.length - 1
        );
        if (!this.subtasks.includes(formattedTask)) {
          this.isError = false;
          this.subtasks.push(formattedTask);
          this.tempSubtasks = "";
        } else {
          this.isError = true;
          this.errorMessage = "You already entered this task for this To Do.";
          return;
        }
      }
    },
    updateTodo() {
      let todo = {
        id: this.todo.id,
        todoName: this.todoName,
        description: this.description,
        subtasks: this.subtasks,
        subtaskDescription: this.subtaskDescription,
      };
      this.$emit("todo-updated", todo);
    },
    deleteSubtask(index) {
      this.subtasks.splice(index, 1);
      return this.subtasks;
    },
  },
};
</script>

<style scoped>
#submit {
  font-size: 2em;
}
</style>
