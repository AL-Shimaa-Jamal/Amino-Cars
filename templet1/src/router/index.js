import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import SportCars from '../views/SportCars.vue'
import NewCars from '../views/NewCars.vue'
import AccessPage from '../views/AccessPage.vue'
import ContactPage from '../views/ContactPage.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            name: 'homepage',
            path: '/',
            component: HomePage,
            meta: {
                title: 'Home '
            },
        },
        {
            name: 'about',
            path: '/about',
            component: AboutPage,
            meta: {
                title: 'About '
            },
        },
        {
            name: 'sportcars',
            path: '/sportcar',
            component: SportCars,
            meta: {
                title: 'Sports Cars'
            },
        },
        {
            name: 'newcars',
            path: '/newcar',
            component: NewCars,
            meta: {
                title: 'New Cars'
            },
        },
        {
            name: 'accessories',
            path: '/accessories',
            component: AccessPage,
            meta: {
                title: 'ACCESSORISE '
            },
        },
        {
            name: 'contact',
            path: '/contact',
            component: ContactPage,
            meta: {
                title: 'Contact '
            },
        },


    ]
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})




export default router