<template>
  <div class="todoItem">
    <div class="todoPreview">
      <button @click="toggleDone()">✔</button>
      <h3 :class="{ done: done }" @click="toggleSeen">{{ todo.todoName }}</h3>

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
      done: false,
    };
  },
  props: {
    todo: Object,
  },
  methods: {
    toggleSeen() {
      this.seen = !this.seen;
    },
    toggleDone() {
      this.done = !this.done;
    },
  },
};
</script>

<style>
.todoItem {
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
  font-size: 1.5rem;
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
.todoPreview {
  display: grid;
  width: 100%;
  grid-template-columns: 0.5fr 2fr 0.5fr 0.5fr;
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
.done {
  text-decoration: line-through 2px black;
}
.doneTodo {
  color: red;
}
</style>
