<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import TheHeader from "./components/common/TheHeader.vue";
</script>

<template>
  <div>
    <TheHeader />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/scss/common.scss";
</style>
