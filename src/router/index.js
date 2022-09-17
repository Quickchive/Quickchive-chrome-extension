import { createWebHistory, createRouter } from "vue-router";
import { store } from "../store/index";

// 라우터 정의
const routes = [
  // 루트: 랜딩 페이지
  {
    path: "/",
    component: () => import("../components/OnboardingComponent.vue"),
    beforeEnter: (to, from, next) => {
      if (store.getters.isLogin || store.getters.isOauthLogin) {
        alert("경고");
        next("/main");
      } else {
        next();
      }
    },
  },
  {
    path: "/main",
    component: () => import("../components/MainComponent.vue"),
  },
  {
    path: "/load",
    component: () => import("../components/CategoryComponent.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
