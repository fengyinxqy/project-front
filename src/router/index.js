import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookie from 'js-cookie'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../views/Music.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = Cookie.get('token') !== ''
  const isAdmin = Cookie.get('token') !== ''

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 需要登录才能访问的路由
    if (!isAuthenticated) {
      // 未登录，重定向到登录页
      next({ path: '/login' })
    } else {
      if (to.matched.some(record => record.meta.isAdmin)) {
        // 需要登录且是管理员才能访问的路由
        if (!isAdmin) {
          // 不是管理员，重定向到无权限页面
          next({ path: '/unauthorized' })
        } else {
          // 有权限，放行
          next()
        }
      } else {
        // 不需要管理员权限的其他路由，放行
        next()
      }
    }
  } else {
    // 不需要登录的路由，放行
    next()
  }
})

export default router
