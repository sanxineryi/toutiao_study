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
  { path: '/search', component: () => import('../views/Search') },
  // { path: '/article', component: () => import('../views/Article') }
  // { path: '/article/:', name: 'article', component: () => import('../views/Article') }

  //   将路由动态参数映射到组件的 props 中，更推荐这种做法
  { path: '/article/:articleId', name: 'article', component: () => import('../views/Article'), props: true },
  { path: '/user/profile', component: () => import('../views/userProfile') }
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
