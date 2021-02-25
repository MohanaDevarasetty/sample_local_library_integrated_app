import Vue from 'vue';
import VueRouter from 'vue-router';
import AdminForm from '../admin/AdminForm.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: AdminForm,
        name: 'Admin Form'
    },
    {
        path: '/form',
        name: 'Admin Summary',
        component: () => import('../admin/AdminSummary.vue')
    }
];

const router = new VueRouter({
    routes
})

export default router