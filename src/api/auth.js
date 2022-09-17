import { instance, authInstance } from "./index";

// 토큰 재발행
function reissueToken(refreshToken) {
  return instance.post("auth/reissue", refreshToken);
}

export { reissueToken };
