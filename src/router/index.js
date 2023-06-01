import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/storeTodo/:id?',
    name: 'createTodo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateTodo.vue')
  }, 
  {
    path:'/searchTodo',
    name:'seachTodo',
    component: () => import('../views/SeachTodo.vue')
  },
  // {
  //   path:'editTodo/:id',
  //   name:'editTodo',
  //   component: () => import('../views/EditTodo.vue')
  // }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
