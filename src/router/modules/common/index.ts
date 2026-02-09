import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/layout.vue'),
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/nxtDy',
    name: 'nxtDy',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/nxtDy/index.vue'),
  },
]

export default routes
