<template>
  <div class="container">
    <div class="input-group rounded">
      <input
        v-model="search"
        type="search"
        class="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span
        class="input-group-text border-0"
        id="search-addon"
        @click="updateSearchList()"
      >
        <i class="fas fa-search"></i>
      </span>
    </div>

    <ul class="list-group m-2">
      <li v-for="todo in filteredList" :key="todo.id" class="list-group-item">
        <router-link :to="`/storeTodo/${todo.id}`">{{
          todo.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchTodo",
  data() {
    return {
      search: "",
      todos: [],
      filteredList: [],
    };
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("todos"));
  },
  methods: {
    updateSearchList() {
      this.filteredList = this.todos.filter((todo) => {
        return todo.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>