<template>
  <div class="category">
    <span class="category-title">Choose what you want to open</span>
    <div class="category-list">
      <ul
        class="category-list__wrapper"
        v-for="(item, index) in myCategories"
        :key="index"
      >
        <li class="category-name">
          <button
            @click="openCategory(index, item.id)"
            class="btn--transparent btn--categoryName"
          >
            {{ filterTitle(item.name) }}
            <img v-show="isOpen[index]" :src="open" />
            <img v-show="!isOpen[index]" :src="close" />
          </button>
        </li>
        <ul
          class="contents-list__wrapper"
          v-show="myContents[index].length !== 0 && isOpen[index]"
        >
          <li
            class="contents-list"
            v-for="(content, index) in myContents[index]"
            :key="index"
          >
            <button class="btn--transparent" @click="toLink(content.link)">
              {{ filterContents(content.title) }}
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
import open from '../assets/img/open.svg';
import close from '../assets/img/close.svg';
import check from '../assets/img/check.svg';
import { fetchMyCategory, fetchMyContents } from '../api/user.js';

export default {
  data() {
    return {
      // 카테고리 조회해서 콘텐츠 조회
      contents: [],
      open,
      close,
      check,
      isOpen: [],
      // 카테고리 체크 버튼
      isContentsSelected: [],
      myCategories: [],
      myContents: [],
    };
  },
  methods: {
    // 카테고리 클릭 이벤트
    async openCategory(index) {
      this.isOpen[index] = !this.isOpen[index];
      console.log('인덱스', index);
    },
    async getMyContents() {
      try {
        let i = 0;
        for (i; i < this.myCategories.length; i++) {
          const response = await fetchMyContents(this.myCategories[i].id);
          console.log(i, response);
          this.myContents.push(response.data.contents);
        }
        console.log('myContents', this.myContents);
      } catch (error) {
        console.log(error);
      }
    },
    toLink(link) {
      window.open(link, '_blank');
      // 콘텐츠 링크로 이동
    },
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
    // 카테고리 조회
    async getMyCategory() {
      console.log('카테고리 조회');

      try {
        const response = await fetchMyCategory();
        console.log(response);
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
    // 콘텐츠 26자 이상
    filterContents(contents) {
      if (contents.length >= 26) {
        return contents.substr(0, 26) + '...';
      } else {
        return contents;
      }
    },
  },
  async created() {
    this.isOpen = Array.from({ length: this.category.name }, () => false);
    await this.getMyCategory();
    await this.getMyContents();
  },
};
</script>

<style lang="scss">
@import '../assets/scss/category.scss';
</style>
