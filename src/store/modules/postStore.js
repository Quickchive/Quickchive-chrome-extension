import { fetchMyContents } from "../../api/user";
import { sortLatest } from "../../utils/sort";
import { fetchMyCategory } from "../../api/user";

const postStore = {
  // namespaced: true,
  state: {
    // 콘텐츠
    contentsData: [],
    latestSortedData: [],
    // 카테고리
    categories: {},
  },
  getters: {
    getContents(state) {
      return state.contentsData;
    },
    getLatestSortedData(state) {
      return state.latestSortedData;
    },
    getCategories(state) {
      return state.categories;
    },
  },
  mutations: {
    setContents(state, contents) {
      state.contentsData = contents;
    },

    setLatestOrder(state, newArr) {
      state.latestSortedData = newArr;
    },
    // 카테고리
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    // 콘텐츠 데이터 조회
    async GET_CONTENTS({ commit }, categoryId) {
      try {
        const response = await fetchMyContents(categoryId);
        const contents = response.data.contents;
        commit("setContents", contents);
      } catch (error) {
        console.log(error);
      }
    },

    // 최신순으로 정렬된 콘텐츠 목록을 반환
    async SORT_DATA({ commit }, categoryId) {
      try {
        const response = await fetchMyContents(categoryId);
        const contents = response.data.contents;
        const newArr = sortLatest(contents);
        commit("setLatestOrder", newArr);
      } catch (error) {
        console.log(error);
      }
    },

    // 카테고리 조회
    async GET_CATEGORIES({ commit }) {
      try {
        const response = await fetchMyCategory();
        const categories = response.data.categories;
        commit("setCategories", categories);
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default postStore;
