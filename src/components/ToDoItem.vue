<template>
  <div class="todoItem" :class="{ todoDone: done }">
    <div class="todoPreview">
      <button @click="toggleDone()" v-if="!done">✔</button>
      <button @click="toggleDone()" v-else class="reverse">↩</button>
      <h3 :class="{ done: done }" @click="toggleSeen">{{ todo.todoName }}</h3>

      <button class="edit">🖊</button>
      <button class="delete" @click="handleRemove(todo.id)">✖</button>
    </div>
    <div v-if="seen">
      <p>
        {{ todo.description }}
      </p>
      <ol>
        <h5>Subtasks:</h5>
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
    id: Number,
  },
  emits: ["removeTodo", "id"],
  methods: {
    toggleSeen() {
      this.seen = !this.seen;
    },
    toggleDone() {
      this.done = !this.done;
    },
    handleRemove(id) {
      this.$emit("removeTodo", id);
    },
  },
};
</script>

<style scoped>
.todoItem {
  backdrop-filter: blur(10px);
  background: rgba(76, 161, 87, 0.45);
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px auto;
  border: 1px solid white;
  color: #e4eee9;
  text-align: left;
}
@media only screen and (min-width: 900px) {
  .todoItem {
    width: 45vw;
  }
}

h3 {
  justify-self: center;
  cursor: pointer;
  font-size: 1.5rem;
}
h5 {
  font-size: 1rem;
}
p {
  margin-left: 20px;
}
li {
  color: white;
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
  color: rgb(151, 221, 151);
  background: none;
  font-size: 2rem;
  justify-items: flex-start;
  margin-right: 5px;
}
.edit {
  color: white;
}
.delete {
  font-size: 2rem;
  color: rgb(241, 46, 46);
  border-radius: 20px;
  padding: 0px;
}
.reverse {
  color: #2c3e50;
}
.done {
  text-decoration: line-through 2px red;
}
.todoDone {
  background: rgba(189, 192, 190, 0.575);
}
</style>
