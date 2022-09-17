<template>
  <div class="main">
    <div class="main__wrapper--col">
      <!-- 상단 -->
      <div class="main__wrapper-contents">
        <img :src="logo" />
        <input
          class="main__contents-name"
          :class="{ inputActive: isContentsInputActive }"
          v-model="contentsName"
          :disabled="!isContentsInputActive"
        />
        <button @click="isContentsInputActive = true" class="btn--transparent">
          <img :src="edit" />
        </button>
      </div>
      <span class="main__contents-link">{{ contentsLink }}</span>
      <!-- default 버튼 -->
      <div class="main__default-btn-wrapper">
        <button v-if="!isSaved" @click="saveContents()" class="btn--default">
          SAVE
        </button>
        <button v-if="isSaved" class="btn--default-clicked btn--transparent">
          Completely Saved!
        </button>
      </div>
    </div>
    <div class="main__divider"><span>AND SPECIFY A CATEGORY</span></div>
    <!-- 하단 -->
    <!-- 카테고리 -->
    <div class="main__category-wrapper">
      <div class="main__category" v-for="(item, index) in category" :key="item">
        <button
          @click="selectCategory(index)"
          class="btn--transparent btn--select-category"
        >
          <p>
            {{ item.name }} <span class="main__category-divider">|</span>
            {{ item.contentsNum }} contents
            <img :src="check" v-if="isCategorySelected[index]" />
          </p>
        </button>
      </div>
    </div>
    <!-- 카테고리 추가 -->
    <div class="main__add-category">
      <input v-if="isCategoryInputActive" class="input--add-category" />
      <button
        @click="isCategoryInputActive = true"
        class="btn--transparent btn--add-category"
      >
        + Add category
      </button>
    </div>
    <!-- 로고 -->
    <div class="logo-btn__wrapper">
      <button class="btn--logo btn--transparent">Quickchive</button>
    </div>
  </div>
</template>

<script>
import edit from "../assets/img/edit.svg";
import check from "../assets/img/check.svg";

export default {
  data() {
    return {
      edit,
      check,
      // 더미 데이터
      contentsName: "까일 수 밖에 없는 기획안 VS 까이지 않는 기획..",
      contentsLink: "https://brunch.co.kr/@faef72c1c1ad402..",
      category: [
        {
          name: "기획",
          contentsNum: 3,
        },
        {
          name: "부동산",
          contentsNum: 2,
        },
        {
          name: "기타",
          contentsNum: 1,
        },
        {
          name: "Knownzip프로젝트",
          contentsNum: 3,
        },
      ],
      // 저장 버튼
      isSaved: false,
      // 카테고리 체크 버튼
      isCategorySelected: [],
      isCategoryInputActive: false,
      isContentsInputActive: false,
    };
  },
  methods: {
    // 콘텐츠 저장
    saveContents() {
      this.isSaved = true;
    },
    // 카테고리 선택
    selectCategory(index) {
      let i = 0;
      for (i; i < this.isCategorySelected.length; i++) {
        if (i !== index) {
          this.isCategorySelected[i] = false;
        } else if (i == index) {
          this.isCategorySelected[i] = true;
        }
      }
    },
    // 카테고리 추가
    addCategory() {},
  },
  created() {
    this.isCategorySelected = Array.from(
      { length: this.category.length },
      () => false
    );
  },
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
</style>
