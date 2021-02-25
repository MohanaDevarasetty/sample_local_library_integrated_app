const homePageRouters = [
    {
        path: 'profile',
        name: 'Profile',
        component: () => import('../../components/routeComponents/Router1.vue')
    },
    {
        path: 'payments',
        name: 'Payments',
        component: () => import('../../components/routeComponents/Router2.vue')
    },
    {
        path: 'settings',
        name: 'Settings',
        component: () => import('../../components/routeComponents/Router3.vue')
    }
];

export default homePageRouters;