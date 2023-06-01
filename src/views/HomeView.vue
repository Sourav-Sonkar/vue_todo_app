<template>
  <div class="container">
    <h1 v-if="todos.length == 0">No Todos Stored</h1>
    <ol class="list-group list-group-numbered">
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold text-left">{{ todo.title.trim() }}</div>
          Due Date: {{ todo.dueDate }}
        </div>
        <span v-if="todo.isCompleted" class="badge bg-primary rounded-pill m-2"
          >Completed</span
        >
        <button
          v-else
          class="btn btn-sm btn-outline-success m-1"
          @click="completeTodoById(todo.id)"
        >
          Done
        </button>
        <button
          class="btn btn-sm btn-outline-danger m-1"
          @click="deleteTodoById(todo.id)"
        >
          Delete
        </button>
        <router-link
          class="btn btn-sm btn-outline-primary m-1"
          :to="`/storeTodo/${todo.id}`"
          >Edit Todo</router-link
        >
      </li>
    </ol>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("todos"));
  },
  methods: {
    deleteTodoById(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    completeTodoById(id) {
      //change complete status
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          todo.isCompleted = true;
        }
      });
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
};
</script>
