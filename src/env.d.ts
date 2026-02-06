
// ts类型声明文件，专门为vite特有的API 环境变量 模块提供类型声明
// 没有这个文件，ts可能无法识别vite自动注入的一些类型
// 
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}