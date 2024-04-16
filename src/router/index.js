import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MusicView from '../views/MusicView.vue'
import LiveView from '../views/LiveView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/music',
        name: 'MusicView',
        component: MusicView
    },
    {
        path: '/live',
        name: 'LiveView',
        component: LiveView
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
    },
    {
        path: '/contact',
        name: 'ContactView',
        component: ContactView
    },
]

const router = createRouter({
    history: createMemoryHistory(process.env.BASE_URL),
    routes
})

export default router