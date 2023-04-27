import { createRouter, createWebHistory } from 'vue-router'
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
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
