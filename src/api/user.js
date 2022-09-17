import { authInstance } from "./index";

// 자신의 콘텐츠 조회
function fetchMyContents(categoryId) {
  return authInstance.get(`users/load-contents?categoryId=${categoryId}`);
}

// 자신의 카테고리 목록 조회
function fetchMyCategory() {
  return authInstance.get("users/load-categories");
}

export { fetchMyContents, fetchMyCategory };
