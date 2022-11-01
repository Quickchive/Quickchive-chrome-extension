// accessToken
function saveAuthToCookie(value) {
  document.cookie = `accessToken=${value}`;
}

function saveUserToCookie(value) {
  document.cookie = `bookmark_user=${value}`;
}

// accessToken
function getAuthFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

function getUserFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)bookmark_user\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

function getQuickchiveCookie() {
  return chrome.cookies.get(
    {
      url: "https://quickchive.swygbro.com/*",
      name: "accessToken",
    },
    function (cookie) {
      console.log("cookie", cookie);
      console.log("쿠키 값", cookie.value);
      localStorage.setItem("accessToken", cookie.value);
    }
  );
}

export {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  deleteCookie,
  getQuickchiveCookie,
};
