import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/DashboardView.vue')
  },
  {
    path: '/employees',
    name: 'employees',
    component: () => import(/* webpackChunkName: "about" */ '../views/EmployeesView.vue')
  },
  {
    path: '/mycomments',
    name: 'mycomments',
    component: () => import(/* webpackChunkName: "about" */ '../views/MycommentsView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue')
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutusView.vue')
  },
  {
    path: '/empprofile/:id',
    name: 'empprofile',
    component: () => import(/* webpackChunkName: "about" */ '../views/EmpProfileView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/updatepassword',
    name: 'updatepassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdatePasswordView.vue')
  },
  {
    path: '/makeacomment',
    name: 'makeacomment',
    component: () => import(/* webpackChunkName: "about" */ '../views/MakeaCommmentView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPanelView.vue')
  },
  {
    path: '/adminmessage',
    name: 'adminmessage',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPanelMessageView.vue')
  }

]

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  routes
})

export default router
