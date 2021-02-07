<template>
  <form @submit.prevent="addNewTodo">
    <label for="todo">To Do:</label>
    <input id="todo" v-model="todoName" placeholder="Add To Do Name" required />

    <label for="description">Description:</label>
    <input
      id="todo-description"
      v-model="description"
      placeholder="Describe the To Do"
    />

    <div class="subtasks">
      <label for="tasks">Tasks:</label>
      <input
        id="tasks"
        v-model="tempSubtasks"
        placeholder="Add Subtasks"
        @keyup="addTask"
      />
      <ul class="subtask-list">
        <li v-for="(task, index) in subtasks" :key="index">
          {{ task }}
        </li>
      </ul>
      <label for="task-description">Description:</label>
      <input
        id="task-description"
        v-model="subtaskDescription"
        placeholder="Add a description"
      />
    </div>
    <input id="submit" type="submit" value="+" @submit.prevent="addNewTodo" />
  </form>
  <div class="form-results"></div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      todoName: "",
      description: "",
      subtasks: [],
      subtaskDescription: "",
    };
  },
  emits: ["todo-added"],
  methods: {
    addTask(e) {
      if (e.key === "," && this.tempSubtasks) {
        if (!this.subtasks.includes(this.tempSubtasks)) {
          const formattedTask = this.tempSubtasks.slice(
            0,
            this.tempSubtasks.length - 1
          );
          this.subtasks.push(formattedTask);
          this.tempSubtasks = "";
        }
      }
    },
    addNewTodo() {
      let todo = {
        todoName: this.todoName,
        description: this.description,
        subtasks: this.subtasks,
        subtaskDescription: this.subtaskDescription,
      };
      this.$emit("todo-added", todo);
      this.todoName = "";
      this.description = "";
      this.subtasks = [];
      this.subtaskDescription = "";
    },
  },
};
</script>

<style>
form {
  display: flex;
  background: lightgray;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  width: 25vw;
  padding: 20px;
  margin: 0 auto 20px;
  font-size: 0.8rem;
  text-align: left;
  font-weight: bold;
}

#submit {
  width: 40px;
  height: 40px;
  margin: 10px auto;
  border: none;
  border-radius: 40px;
  font-size: 1.5rem;
  background: #82bc23;
  color: white;
}
input {
  border: none;
  width: 80%;
  margin: 5px;
  border-radius: 10px;
  height: 25px;
  padding: 5px;
}
.subtasks {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 70%;
  text-align: left;
}
li {
  color: #2c3e50;
}
</style>
