import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/layout'),
    children: [
      { path: 'home', component: () => import('@/views/home') },
      { path: 'qa', component: () => import('@/views/qa') },
      { path: 'video', component: () => import('@/views/video') },
      { path: 'my', component: () => import('@/views/my') }
    ]
  },
  { path: '/login', component: () => import('../views/Login') },
  { path: '/search', component: () => import('../views/Search') }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
