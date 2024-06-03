/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'vue3-virtual-scroll-list';

declare module '*.png' {
  const value: string;
  export default value;
}
