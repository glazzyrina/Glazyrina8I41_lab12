import { createRouter, createWebHistory } from 'vue-router'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Page3 from '../views/Page3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'page1', component: Page1 },
    { path: '/api', name: 'page2', component: Page2 },
    { path: '/form', name: 'page3', component: Page3 }
  ]
})

export default router