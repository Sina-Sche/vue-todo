<template>
  <div class="todo-item">
    <div class="todo-preview" @click="toggleSeen">
      <button>✔</button>
      <h3>{{ todo.todoName }}</h3>
      <button class="edit">🖊</button>
      <button class="delete">✖</button>
    </div>

    <div v-if="seen">
      <p>
        {{ todo.description }}
      </p>
      <ol>
        <li v-for="(subtask, index) in todo.subtasks" :key="index">
          {{ subtask }}
        </li>
      </ol>
      <p>{{ todo.subtaskDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoItem",
  data() {
    return {
      seen: false,
    };
  },
  props: {
    todo: Object,
  },
  methods: {
    toggleSeen() {
      this.seen = !this.seen;
    },
  },
};
</script>

<style>
.todo-item {
  background-color: #ffffff;
  background-image: linear-gradient(315deg, #27ac22 0%, #82bc23 74%);
  border-radius: 50px;
  width: 45vw;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  padding: 20px;
}
h3 {
  color: #e4eee9;
  justify-self: center;
  cursor: pointer;
}
p {
  text-align: left;
  margin: 20px;
  color: #f3f4f7;
}
li {
  align-self: center;
  justify-self: center;
  color: #f3f4f7;
  text-align: left;
}
.todo-preview {
  display: grid;
  width: 100%;
  grid-template-columns: 0.5fr 3fr 0.5fr 0.5fr;
}
button {
  cursor: pointer;
  border: none;
  color: green;
  background: none;
  font-size: 2rem;
  justify-items: flex-start;
  margin-right: 5px;
}
.edit {
  padding: 0;
  color: white;
}
.delete {
  font-size: 2rem;
  color: red;
  border-radius: 20px;
  padding: 0px;
}
</style>
