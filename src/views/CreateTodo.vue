<template>
  <div class="container">
    <h1>Store Todo</h1>
    <form  @submit.prevent="storeTodo()" >
      <div class="form-group m-2">
        <input type="text" v-model="title" class="form-control" id="title" placeholder="Enter title">
      </div>
      <div class="form-group m-2">
       <textarea v-model="description" class="form-control" id="description" placeholder="Enter description"></textarea>
      </div>
      <div class="form-group m-2">
        <input type="date" data-date-inline-picker="true"  v-model="dueDate" class="form-control" >
      </div>

      <button type="submit" class="btn btn-primary m-4">Store</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateTodo',
  data() {
    return {
      id: null,
      title: '',
      description: '',
      dueDate: '',
      mytodos:[]
    }
  },
  mounted() {
    this.mytodos=localStorage.getItem('todos');
    this.id = this.$route.params.id;
    if(this.id!=null && this.id!=""){
      this.mytodos=JSON.parse(this.mytodos);
      this.mytodos.forEach((todo) => {
        if(todo.id==this.id){
          this.title=todo.title;
          this.description=todo.description;
          this.dueDate=todo.dueDate;
        }
      });
    }
  },
  methods: {

    storeTodo() {
      if(this.title=='' || this.description==''){
        alert('Please fill all the fields');
        return;
      }
      if(this.id!=null && this.id!=""){
        this.mytodos.forEach((todo) => {
          if(todo.id==this.id){
            todo.title=this.title;
            todo.description=this.description;
            todo.dueDate=this.dueDate;
          }
        });
        localStorage.setItem('todos',JSON.stringify(this.mytodos));
      }
      else{
        const todo = {
          id: (new Date().getTime()).toString(36),
          title: this.title,
          description: this.description,
          isCompleted: false,
          date: new Date(),
          dueDate:this.dueDate
        }
        if(this.mytodos==null){
          this.mytodos=[];
          this.mytodos.push(todo);
          localStorage.setItem('todos',JSON.stringify(this.mytodos));
        }
        else{
          this.mytodos=JSON.parse(this.mytodos);
          this.mytodos.push(todo);
          localStorage.setItem('todos',JSON.stringify(this.mytodos));
        }
      }
      this.title='';
      this.description='';
      this.$router.push('/');
    }
  }
}
</script>