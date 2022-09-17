import { createStore } from "vuex";
import authStore from "./modules/authStore.js";
import postStore from "./modules/postStore.js";

// Create a new store instance.
export const store = createStore({
  modules: {
    // 키: 값 형태로 저장됩니다.
    authStore: authStore,
    postStore: postStore,
  },
});

// Install the store instance s a plugin

// export default store;
