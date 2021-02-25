import Vue from 'vue';
import VueRouter from 'vue-router';
import homePageRouters from '../layout/home/route';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/home',
        name: 'HomePage',
        component: () => import('../layout/home/HomePage.vue'),
        children: [
            ... homePageRouters
        ]
    }
];

const router = new VueRouter({
    routes
})

export default router