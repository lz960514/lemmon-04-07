import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/Home'
import LoginPage from '@/views/Login'
import RegisterPage from '@/views/Register'
import AdminPage from '@/views/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/admin',
      name: 'AdminPage',
      component: AdminPage
    }
  ]
})
