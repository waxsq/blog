import { createWebHistory, createRouter } from "vue-router";
import Edit from "../views/Edit.vue";
import Home from "../views/Home.vue";

const routes = [
  { path: "/edit", component: Edit, name: "Edit" },
  { path: "/", component: Home, name: "Home" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
