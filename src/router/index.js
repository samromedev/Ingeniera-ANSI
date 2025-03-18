import { createRouter, createWebHistory } from 'vue-router'
import ErrorPage from '@/views/ErrorPage.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
  {
    path: '/',
    redirect: '/home', // Or whatever default page you want
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorPage',
    component: ErrorPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
