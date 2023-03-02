import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Home.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/components/Home.vue')
        }
      ]
    }
  ]
})

export default router
