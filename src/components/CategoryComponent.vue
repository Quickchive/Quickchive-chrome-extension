<template>
  <div class="category">
    <span class="category-title">Choose what you want to open</span>
    <div class="category-list">
      <ul
        class="category-list__wrapper"
        v-for="(item, index) in category"
        :key="index"
      >
        <li class="category-name">
          <button
            @click="openCategory(index)"
            class="btn--transparent btn--categoryName"
          >
            {{ item.name }}
            <img v-show="isOpen[index]" :src="open" />
            <img v-show="!isOpen[index]" :src="close" />
          </button>
        </li>
        <ul class="contents-list__wrapper" v-show="isOpen[index]">
          <li
            class="contents-list"
            v-for="(content, index) in category[index].contents"
            :key="index"
          >
            <button class="btn--transparent" @click="selectContents(index)">
              {{ content }}
              <img :src="check" v-if="isContentsSelected[index]" /><span
                class="text--checked"
                v-if="isContentsSelected[index]"
                >OPEN</span
              >
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
import check from "../assets/img/check.svg";

export default {
  data() {
    return {
      // 더미
      category: [
        {
          name: "기획",
          contents: ["Unipath로 업무 자동화 1탄", "Unipath로 업무 자동화 2탄"],
        },
        {
          name: "부동산",
          contents: ["Unipath로 업무 자동화 1탄", "Unipath로 업무 자동화 2탄"],
        },
        {
          name: "기타",
          contents: [
            "Unipath로 업무 자동화 1탄",
            "Unipath로 업무 자동화 2탄",
            "Unipath로 업무 자동화 3탄",
          ],
        },
        {
          name: "Quickchive 프로젝트",
          contents: ["Unipath로 업무 자동화 1탄", "Unipath로 업무 자동화 2탄"],
        },
      ],
      // 카테고리 조회해서 콘텐츠 조회
      contents: [],
      open,
      close,
      check,
      isOpen: [],
      // 카테고리 체크 버튼
      isContentsSelected: [],
    };
  },
  methods: {
    openCategory(index) {
      this.isOpen[index] = !this.isOpen[index];
      console.log(index);
    },
    // toLink(item) {
    //   console.log(item);
    //   // 콘텐츠 링크로 이동
    // },
    // 카테고리 선택
    selectContents(index) {
      this.isContentsSelected = Array.from(
        { length: this.category[index].contents.length },
        () => false
      );
      this.isContentsSelected[index] = true;

      // let i = 0;
      // for (i; i < this.isContentsSelected.length; i++) {
      //   if (i !== index) {
      //     this.isContentsSelected[i] = false;
      //   } else if (i == index) {
      //     this.isContentsSelected[i] = true;
      //   }
      // }
    },
  },
  created() {
    this.isOpen = Array.from({ length: this.category.name }, () => false);
  },
};
</script>

<style lang="scss">
@import "../assets/scss/category.scss";
</style>
