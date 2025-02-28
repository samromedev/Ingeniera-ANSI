import { createRouter, createWebHistory } from 'vue-router'
import ErrorPage from '@/views/ErrorPage.vue' // Asegúrate de que este archivo exista

const routes = [
  {
    path: '/:pathMatch(.*)*', // Ruta para manejar errores 404
    name: 'ErrorPage',
    component: ErrorPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
