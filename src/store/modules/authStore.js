import { fetchProfile } from "../../api/user";

const authStore = {
  state: {
    loginState: false,
  },
  getters: {
    // 로그인 여부 확인
    isLogin(state) {
      return state.loginState;
    },
  },
  actions: {
    // 프로필 조회이자 로그인 여부 확인
    async FETCH_PROFILE({ commit }) {
      try {
        const { data } = await fetchProfile();
        console.log("vuex에서 로그인 여부 확인중", data);
        if (data.statusCode == 201) {
          commit("setLoginState", true);
        } else if (data.statusCode == 200) {
          commit("setLoginState", true);
        }
      } catch (error) {
        console.log(error);
        if (error.statusCode == 401) {
          commit("setLoginState", false);
        }
      }
    },
  },
};

export default authStore;
