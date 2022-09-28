import { authInstance } from "./index";

// 자신의 콘텐츠 조회
function fetchMyContents(categoryId) {
  return authInstance.get(`users/load-contents?categoryId=${categoryId}`);
}

// 자신의 카테고리 목록 조회
function fetchMyCategory() {
  return authInstance.get("users/load-categories");
}

// 프로필 조회
function fetchProfile() {
  return authInstance.get("users/me");
}
export { fetchMyContents, fetchMyCategory, fetchProfile };
