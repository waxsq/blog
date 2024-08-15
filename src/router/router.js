import { createWebHistory, createRouter } from "vue-router";
import Edit from "../views/Edit.vue";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Info from "../components/Info.vue";
import HomeList from "../components/HomeList.vue";

const routes = [
  { path: "/edit/:id?", component: Edit, name: "Edit" },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "Home",
        components: {
          homeInfo: HomeList,
          rightInfo: Info,
        },
      },
      {
        path: "detail/:id",
        components: { homeInfo: Detail, rightInfo: Info },
        name: "Detail",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
