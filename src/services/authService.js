import * as authApi from "../api/authApi";
import * as authMock from "../mocks/authMock";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

// 이메일 중복 확인
export async function checkEmail(email) {
  if (USE_MOCK) {
    return authMock.mockCheckEmail(email);
  }

  return authApi.checkEmail(email);
}

// 닉네임 중복 확인
export async function checkNickname(nickname) {
  if (USE_MOCK) {
    return authMock.mockCheckNickname(nickname);
  }

  return authApi.checkNickname(nickname);
}

// 휴대폰 인증
export async function verifyPhone(phone) {
  if (USE_MOCK) {
    return authMock.mockVerifyPhone(phone);
  }

  return authApi.verifyPhone(phone);
}

// 회원가입
export async function signup(signupData) {
  if (USE_MOCK) {
    return authMock.mockSignup(signupData);
  }

  return authApi.signup(signupData);
}

// 로그인
export async function login(email, password) {
  let result;

  if (USE_MOCK) {
    result = authMock.mockLogin(email, password);
  } else {
    result = await authApi.login(email, password);
  }

  if (result.success) {
    localStorage.setItem("accessToken", result.accessToken);
    localStorage.setItem("refreshToken", result.refreshToken);
  }

  return result;
}

// 로그아웃
export async function logout() {
  const accessToken = localStorage.getItem("accessToken");

  let result;

  if (USE_MOCK) {
    result = authMock.mockLogout();
  } else {
    result = await authApi.logout(accessToken);
  }

  if (result.success) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

  return result;
}

// 로그인 상태 확인
export async function checkAuth() {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return {
      success: false,
      message: "로그인이 필요합니다.",
    };
  }

  if (USE_MOCK) {
    return authMock.mockCheckAuth(accessToken);
  }

  return authApi.checkAuth(accessToken);
}

// Access Token 재발급
export async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    return {
      success: false,
      message: "인증 정보가 만료되었습니다. 다시 로그인해주세요.",
    };
  }

  let result;

  if (USE_MOCK) {
    result = authMock.mockRefreshToken(refreshToken);
  } else {
    result = await authApi.refreshAccessToken(refreshToken);
  }

  if (result.success) {
    localStorage.setItem("accessToken", result.accessToken);
  }

  return result;
}

// 비밀번호 확인
export async function verifyPassword(password) {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return {
      success: false,
      message: "로그인이 필요합니다.",
    };
  }

  if (USE_MOCK) {
    return authMock.mockVerifyPassword(password);
  }

  return authApi.verifyPassword(password, accessToken);
}
