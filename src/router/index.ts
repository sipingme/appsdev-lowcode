import { createRouter, createWebHistory, type RouteLocationNormalized } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/components/DashBoard/DashBoard.vue"),
    },
    {
      path: "/dashboard/:path",
      component: () => import("@/components/DashBoard/DashBoard.vue"),
    },
    {
      path: "/dashboard/:path/list",
      name: "list",
      component: () => import("@/components/List/List.vue"),
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/components/NotFound/NotFound.vue"),
    },
  ],
});

router.beforeEach((to: RouteLocationNormalized, _from, next) => {
  to.params.path === undefined && to.name === undefined
    ? router.push("/404")
    : "";
  next();
});

export default router;
