<template>
  <div class="onboarding">
    <p class="onboarding__description">
      3초만에 로그인하고<br />
      Quickchive를 즐겨보세요
    </p>
    <div class="onboarding__btn--wrapper">
      <button class="btn--transparent">
        <!-- 카카오 로그인 -->
        <a href="https://api.hou27.shop/api/oauth/kakao-auth" target="_blank">
          <img :src="kakaoBtn"
        /></a>
      </button>
      <!-- 구글 로그인 -->
      <button class="btn--transparent">
        <a href="https://api.hou27.shop/api/oauth/google-auth" target="_blank">
          <img :src="googleBtn" />
        </a>
      </button>
      <!-- 회원가입 -->
      <button class="btn--transparent btn--signup">
        <a href="https://quickchive.swygbro.com/register/email" target="_blank"
          >이메일 회원가입</a
        >
      </button>
    </div>
  </div>
</template>

<script>
import kakaoBtn from "../assets/img/kakaoBtn.png";
import googleBtn from "../assets/img/googleBtn.svg";

export default {
  data() {
    return {
      kakaoBtn,
      googleBtn,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/onboarding.scss";
</style>
