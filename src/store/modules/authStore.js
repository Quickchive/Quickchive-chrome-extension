import { getAuthFromCookie } from "../../utils/cookies";

const authStore = {
  // namespaced: true,
  state: {
    nickname: "",
    email: "",
    loginState: false || localStorage.getItem("refreshToken"),
    oauthLoginState: false,
    accessToken: "" || getAuthFromCookie("accessToken"),
    refreshToken: "" || localStorage.getItem("refreshToken"),
    oauthInfo: false || localStorage.getItem("oauthInfo"),
    oauthName: "" || localStorage.getItem("oauthInfo"),
    stayLoginState: false || localStorage.getItem("stayLogin"),
  },
  getters: {
    // 로그인 여부 확인
    isLogin(state) {
      return state.loginState;
    },
    // 소셜 로그인 여부 확인
    isOauthLogin(state) {
      return state.oauthLoginState;
    },
    isUserStayLogin(state) {
      return state.stayLoginState;
    },
    // 소셜 정보 가져옴
    getOauthName(state) {
      return state.oauthName;
    },
    getNickname(state) {
      return state.nickname;
    },
  },
  actions: {},
};

export default authStore;
