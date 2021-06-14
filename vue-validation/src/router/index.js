import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Forgotpassword from '../views/Forgotpassword'
import Signup from '../views/Signup'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgotpassword',
    name: 'Forgotpassword',
    component: Forgotpassword
  },
  {
  path: '/signup',
  name: 'Signup',
  component: Signup
 },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
