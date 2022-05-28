import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login.vue"
import MainView from "../views/MainView.vue"
import Room from "../views/Room.vue"
import Register from "../views/Register.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  
  {
    path: '/MainView',
    name: 'MainView',
    component: MainView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
