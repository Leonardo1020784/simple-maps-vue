// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import MapComponent from "../components/MapComponent.vue";
import FormComponent from "../components/FormComponent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Map",
    component: MapComponent,
  },
  {
    path: "/form",
    name: "Form",
    component: FormComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
