<template>
  <div class="main">
    <div class="main__wrapper--col">
      <!-- 상단 -->
      <div class="main__wrapper-contents">
        <!-- <img :src="logo" /> -->
        <input
          class="main__contents-name"
          :class="{ inputActive: isContentsInputActive }"
          v-model="title"
          :disabled="!isContentsInputActive"
        />
        <button @click="isContentsInputActive = true" class="btn--transparent">
          <img :src="edit" />
        </button>
      </div>
      <span class="main__contents-link">{{ link }}</span>
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
      <div
        class="main__category"
        v-for="(item, index) in myCategories"
        :key="item"
      >
        <button
          @click="selectCategory(index, item)"
          class="btn--transparent btn--select-category"
        >
          <p>
            {{ filterTitle(item.name) }}
            <span class="main__category-divider">|</span>
            <span v-if="myContents[index]"
              >&nbsp;{{ myContents[index].length }} contents</span
            >
            <span v-else>&nbsp;{{ 0 }} contents</span>
            <img :src="check" v-if="isCategorySelected[index]" />
          </p>
        </button>
      </div>
    </div>
    <!-- 카테고리 추가 -->
    <div class="main__add-category">
      <input
        v-if="isCategoryInputActive"
        class="input--add-category"
        v-model="categoryName"
        @blur="addCategory()"
      />
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
import edit from '../assets/img/edit.svg';
import check from '../assets/img/check.svg';
import { addContents } from '../api/contents';
import { fetchMyCategory, fetchMyContents } from '../api/user.js';
import { addCategory } from '../api/category';

export default {
  data() {
    return {
      edit,
      check,
      myCategories: [],
      myContents: [],
      categoryName: '',
      selectedCategory: '',
      // 저장 버튼
      isSaved: false,
      // 카테고리 체크 버튼
      isCategorySelected: [],
      isCategoryInputActive: false,
      isContentsInputActive: false,
      // 현재 페이지 경로
      link: '',
      title: '',
    };
  },
  methods: {
    // 콘텐츠 저장
    async saveContents() {
      // 버튼 ui 변경
      // 콘텐츠 추가
      try {
        const contentsData = {
          link: this.link,
          categoryName: this.selectedCategory,
          title: this.title,
        };
        Object.keys(contentsData).forEach(
          (key) =>
            (contentsData[key] == '' || contentsData[key] == undefined) &&
            delete contentsData[key]
        );
        const response = await addContents(contentsData);
        console.log(response);
        this.isSaved = true;
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    // 카테고리 선택
    selectCategory(index, item) {
      this.isCategoryInputActive = false;
      this.selectedCategory = item.name;
      let i = 0;
      for (i; i < this.myCategories.length; i++) {
        if (i !== index) {
          this.isCategorySelected[i] = false;
        } else if (i == index) {
          this.isCategorySelected[i] = true;
        }
      }
    },
    // 카테고리 추가
    async addCategory() {
      try {
        if (this.categoryName !== '' || undefined) {
          const categoryName = {
            categoryName: this.categoryName,
          };
          const response = await addCategory(categoryName);
          console.log(response);
          await this.getMyCategory();
          // await this.getMyContents();
          // myContents[index].length
          this.isCategoryInputActive = false;
          this.categoryName = '';
        }
      } catch (error) {
        console.log(error);
      }
    },
    // 카테고리 조회
    async getMyCategory() {
      try {
        const response = await fetchMyCategory();
        this.myCategories = response.data.categories;
      } catch (error) {
        console.log(error);
      }
    },

    // 제목 글자수 10자 이상
    filterTitle(title) {
      if (title.length >= 10) {
        return title.substr(0, 10) + '...';
      } else {
        return title;
      }
    },
    async getMyContents() {
      try {
        let i = 0;
        for (i; i < this.myCategories.length; i++) {
          const response = await fetchMyContents(this.myCategories[i].id);
          this.myContents.push(response.data.contents);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    await this.getMyCategory();
    await this.getMyContents();
    let [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    this.link = tab.url;
    this.title = tab.title;
    this.isCategorySelected = Array.from(
      { length: this.myCategories.length },
      () => false
    );
  },
};
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
</style>
