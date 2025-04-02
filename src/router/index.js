import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Kitchen from "../views/kitchen.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/kitchen",
    name: "Kitchen",
    component: Kitchen,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
