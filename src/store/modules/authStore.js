import { fetchProfile } from '../../api/user';

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
  mutations: {
    setLoginState(state, loginState) {
      state.loginState = loginState;
    },
  },
  actions: {
    // 프로필 조회이자 로그인 여부 확인
    async FETCH_PROFILE({ commit }) {
      try {
        const { data } = await fetchProfile();
        if (data.statusCode == 201) {
          commit('setLoginState', true);
        } else if (data.statusCode == 200) {
          commit('setLoginState', true);
        }
      } catch (error) {
        if (error.statusCode == 401) {
          commit('setLoginState', false);
        }
      }
    },
    // 액세스 토큰 갱신
    RENEW_TOKEN(accessToken) {
      localStorage.setItem('accessToken', accessToken);
    },
    // 리프레시 토큰 갱신
    RENEW_REFRESH_TOKEN(refreshToken) {
      localStorage.setItem('refreshToken', refreshToken);
    },
  },
};

export default authStore;
