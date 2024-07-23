import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import SportCars from '../views/SportCars.vue'
import NewCars from '../views/NewCars.vue'
import AccessPage from '../views/AccessPage.vue'
import ContactPage from '../views/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'homepage',
      path: '/',
      component: HomePage,
    },
    {
      name: 'about',
      path: '/about',
      component: AboutPage,
    },
    {
      name: 'sportcars',
      path: '/sportcar',
      component: SportCars,
    },
    {
      name: 'newcars',
      path: '/newcar',
      component: NewCars,
    },
    {
      name: 'accessories',
      path: '/accessories',
      component: AccessPage,
    },
    {
      name: 'contact',
      path: '/contact',
      component: ContactPage,
    },


  ]
})







export default router
