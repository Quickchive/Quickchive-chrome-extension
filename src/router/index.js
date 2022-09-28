import { createWebHashHistory, createRouter } from "vue-router";
import { store } from "../store/index";

// 라우터 정의
const routes = [
  // 루트: 랜딩 페이지
  {
    path: "/",
    component: () => import("../components/OnboardingComponent.vue"),
    // beforeEnter: (to, from, next) => {
    //   if (store.getters.isLogin || store.getters.isOauthLogin) {
    //     alert("경고");
    //     next("/main");
    //   } else {
    //     next();
    //   }
    // },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("accessToken")) {
        next("/save");
        console.log("로그인 함");
      } else {
        next();
        console.log("로그인 안 했음");
      }
    },
  },
  {
    path: "/save",
    component: () => import("../components/MainComponent.vue"),
  },
  {
    path: "/load",
    component: () => import("../components/CategoryComponent.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
