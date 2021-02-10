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
      <p>💡 Type a "," (comma) to submit a task.</p>
      <p v-if="isError" class="error">❗ You already added this task</p>
      <ul class="subtask-list">
        <li v-for="(task, index) in subtasks" :key="index">
          {{ task }}
          <button class="delete" @click.prevent="deleteSubtask(index)">
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
      tempSubtasks: "",
      errorMessage: "",
      isError: false,
    };
  },
  emits: ["todo-added"],
  methods: {
    addTask(e) {
      if (e.key === "," && this.tempSubtasks) {
        const formattedTask = this.tempSubtasks.slice(
          0,
          this.tempSubtasks.length - 1
        );
        console.log();
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

    deleteSubtask(index) {
      this.subtasks.splice(index, 1);
      return this.subtasks;
    },
  },
};
</script>

<style>
form {
  display: flex;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  width: 70vw;
  padding: 20px;
  margin: 0 auto 20px;
  text-align: left;
  position: relative;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.15);
}
@media only screen and (min-width: 900px) {
  form {
    width: 45vw;
  }
}

#submit {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: 10px auto;
  border: none;
  font-size: 3em;
  color: white;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  backdrop-filter: blur(10px);
  background-color: rgba(38, 177, 56, 0.45);
}
input {
  border: none;
  width: 80%;
  margin: 5px;
  border-radius: 15px;
  height: 25px;
  padding: 5px;
}
label {
  font-size: 1.5rem;
}
.subtasks {
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  width: 70%;
  text-align: left;
}
li {
  color: white;
  font-size: 1.2rem;
}
p {
  color: white;
  font-size: 1rem;
}
button {
  border: none;
  background: none;
  color: red;
}
.error {
  color: red;
}
.delete {
  font-size: 1rem;
  margin-left: 10px;
}
</style>
