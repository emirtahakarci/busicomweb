import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
