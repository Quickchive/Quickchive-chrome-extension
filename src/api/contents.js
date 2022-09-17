import { authInstance } from "./index";

// 콘텐츠 추가(단일)
function addContents(contentsData) {
  return authInstance.post("contents/add", contentsData);
}

export { addContents };
