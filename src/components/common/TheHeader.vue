<template>
  <div>
    <header>
      <div class="header__btn-wrapper">
        <button
          @click="activateBtn(0)"
          class="btn--save"
          :class="isActive[0] ? 'btnActive' : 'btnInactive'"
        >
          SAVE
        </button>
        <button
          @click="activateBtn(1)"
          class="btn--load"
          :class="isActive[1] == true ? 'btnActive' : 'btnInactive'"
        >
          LOAD
        </button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: [true, false],
    };
  },
  watch: {
    $route() {
      if (this.$route.fullPath == "/load") {
        this.isActive[0] = false;
        this.isActive[1] = true;
      } else if (this.$route.fullPath !== "/load") {
        this.isActive[0] = true;
        this.isActive[1] = false;
      }
    },
  },
  methods: {
    activateBtn(index) {
      this.isActive[index] = true;
      if (index == 0) {
        this.isActive[1] = false;
        this.$router.push("/save");
      } else if (index == 1) {
        this.isActive[0] = false;
        this.$router.push("/load");
      }
    },
  },
};
</script>

<style lang="scss">
@import "src/assets/scss/header.scss";
</style>
