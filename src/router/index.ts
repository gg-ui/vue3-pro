
import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from 'vue-router';

// glob添加eager：true，vite 在构建时立即加载所有匹配文件，并将它们作为已解析的模块包含在结果中
// 即可以直接调用.default，若不添加eager：true，routeContext结果是一个promise的function函数
const routeContext = import.meta.glob('./modules/*/*.ts', { eager: true });
const route = Object.keys(routeContext).map((key) => {
  const defaults = routeContext[key] as any
  return defaults.default
})
const routes: RouteRecordRaw[] = [].concat(...route);

const router = createRouter({
  history: createWebHistory('/vue3-pro'),
  routes
})
export default router;
