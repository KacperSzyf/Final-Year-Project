import { createRouter, createWebHashHistory } from 'vue-router'
import MenuPage from '@/views/MenuPage/index'
import CameraPage from "@/views/CameraPage/index";

const routes = [
  {
    path: "/",
    name: "MenuPage",
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
