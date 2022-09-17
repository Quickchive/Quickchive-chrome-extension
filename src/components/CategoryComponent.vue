<template>
  <div class="category">
    <span class="category-title">Choose what you want to open</span>
    <div class="category-list">
      <ul
        class="category-list__wrapper"
        v-for="(category, index) in categoryName"
        :key="index"
      >
        <li class="category-name">
          <button
            @click="openCategory(index)"
            class="btn--transparent btn--categoryName"
          >
            {{ category }}
            <img v-show="isOpen[index]" :src="open" />
            <img v-show="!isOpen[index]" :src="close" />
          </button>
        </li>
        <ul class="contents-list__wrapper" v-show="isOpen[index]">
          <li class="contents-list" v-for="item in contents" :key="item">
            <button class="btn--transparent" @click="toLink(item)">
              {{ item }}
            </button>
          </li>
        </ul>
      </ul>
    </div>
    <div class="logo-btn__wrapper">
      <button class="btn--logo btn--transparent">Quickchive</button>
    </div>
  </div>
</template>

<script>
import open from "../assets/img/open.svg";
import close from "../assets/img/close.svg";

export default {
  data() {
    return {
      // 더미
      categoryName: ["기획", "부동산", "기타", "Quickchive 프로젝트"],
      // 카테고리 조회해서 콘텐츠 조회
      contents: ["Unipath로 업무 자동화 1탄", "Unipath로 업무 자동화 2탄"],
      open,
      close,
      isOpen: [],
    };
  },
  methods: {
    openCategory(index) {
      this.isOpen[index] = !this.isOpen[index];
      console.log(index);
    },
    toLink(item) {
      console.log(item);
      // 콘텐츠 링크로 이동
    },
  },
  created() {
    this.isOpen = Array.from({ length: 5 }, () => false);
  },
};
</script>

<style lang="scss">
@import "../assets/scss/category.scss";
</style>
