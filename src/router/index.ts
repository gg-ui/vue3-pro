
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router';

const routeContext = import.meta.globEager('./modules/*/*.ts');
const route = Object.keys(routeContext).map((key) => routeContext[key].default)
const routes: RouteRecordRaw[] = [].concat(...route);

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
