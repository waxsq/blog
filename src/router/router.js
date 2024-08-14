import { createWebHistory, createRouter } from "vue-router";
import Edit from "../views/Edit.vue";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";

const routes = [
  { path: "/edit/:id?", component: Edit, name: "Edit" },
  { path: "/detail/:id", component: Detail, name: "Detail" },
  { path: "/", component: Home, name: "Home" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
