import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import Home from '../views/Home.vue';
// @ts-ignore
import Services from '../views/Services.vue';
// @ts-ignore
import AboutUs from '../views/AboutUs.vue';
// @ts-ignore
import Contact from '../views/Contact.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component: AboutUs,
    },
    {
        path: '/services',
        name: 'Services',
        component: Services,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
