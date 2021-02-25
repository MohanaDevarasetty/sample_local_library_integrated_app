// import Vue from 'vue';
// import VueRouter from 'vue-router';

// Vue.use(VueRouter)

import AdminHome from '../admin/AdminHome'

const routes1 = [
    {
        path: 'home',
        name: 'AdminHome',
        component: AdminHome
    },
    {
        path: 'admin',
        components: {
            default: () => import('../admin/adminSummary.vue'),
            a: () => import('../admin/adminForm.vue'),
        }
    }
];

// const adminrouter = new VueRouter({
//     routes
// })

// export default adminrouter

export default routes1;