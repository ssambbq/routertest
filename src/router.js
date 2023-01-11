import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/Home.vue") },
  { path: "/pageMain", component: () => import("@/views/PageMain.vue") },
  { path: "/pageSub", component: () => import("@/views/PageSub.vue") },
];

const router = createRouter({
  routes,
  history: createWebHistory(),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
