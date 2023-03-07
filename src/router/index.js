import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditPost from "@/views/EditPost.vue";
import Canvas from "@/views/Canvas.vue";
import Login from "@/views/Login.vue";

const router = createRouter({
    history: createWebHistory(/*import.meta.env.BASE_URL*/),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: "/login",
            name: 'login',
            component: Login
        },
        {
            path: '/edit',
            name: 'edit',
            component: EditPost
        },
        {
            path: '/canvas',
            name: 'canvas',
            component: Canvas
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: () => import('../views/NotFnd.vue')
        }
    ]
})

export default router
