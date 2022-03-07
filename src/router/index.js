import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    { path: '/', component: Home },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL || '/'),
    routes,
    scrollBehavior () {
        return { top: 0 }
    }
})

export default router
