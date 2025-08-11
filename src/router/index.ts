import { createRouter, createWebHistory } from 'vue-router'
import BlogList from '../components/BlogList.vue'
import BlogView from '../components/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogList,
    },
    {
      path: '/article/:id',
      name: 'article',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue
      component: BlogView,
      props: true,
    },
  ],
})

export default router
