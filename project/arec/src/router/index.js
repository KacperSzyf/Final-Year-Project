import { createRouter, createWebHashHistory } from 'vue-router'
import MenuPage from '@/views/MenuPage/index'
import CameraPage from "@/views/CameraPage/CameraPage";

const routes = [
  {
    path: '/',
    name: 'index',
    component: MenuPage
  },
  {
    path: '/app',
    name: 'CameraPage',
    component: CameraPage
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
