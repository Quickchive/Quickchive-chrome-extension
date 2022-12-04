<template>
  <div>
    <TheHeader />
    <RouterView />
    <!-- <OnboardingComponent /> -->
  </div>
</template>

<script>
import TheHeader from './components/common/TheHeader.vue';

export default {
  name: 'App',
  components: { TheHeader },
  data() {
    return {
      refreshToken: '',
    };
  },
};
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<style lang="scss">
@import './assets/scss/common.scss';
</style>
