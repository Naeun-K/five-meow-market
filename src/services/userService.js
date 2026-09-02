import * as userApi from "../api/userApi";
import * as userMock from "../mocks/userMock";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

// 내 정보 조회
export async function getMyInfo() {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return {
      success: false,
      message: "로그인이 필요합니다.",
    };
  }

  if (USE_MOCK) {
    return userMock.mockGetMyInfo();
  }

  return userApi.getMyInfo(accessToken);
}

// 회원정보 수정
export async function updateMyInfo(updateData) {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return {
      success: false,
      message: "로그인이 필요합니다.",
    };
  }

  if (USE_MOCK) {
    return userMock.mockUpdateMyInfo(updateData);
  }

  return userApi.updateMyInfo(updateData, accessToken);
}

// 회원탈퇴
export async function deleteAccount() {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return {
      success: false,
      message: "로그인이 필요합니다.",
    };
  }

  let result;

  if (USE_MOCK) {
    result = userMock.mockDeleteAccount();
  } else {
    result = await userApi.deleteAccount(accessToken);
  }

  if (result.success) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

  return result;
}

// 보유 적립금 조회
export async function getMyPoint() {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return {
      success: false,
      message: "로그인이 필요합니다.",
    };
  }

  if (USE_MOCK) {
    return userMock.mockGetMyPoint();
  }

  return userApi.getMyPoint(accessToken);
}

// 적립금 내역 조회
export async function getPointHistory() {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return {
      success: false,
      message: "로그인이 필요합니다.",
    };
  }

  if (USE_MOCK) {
    return userMock.mockGetPointHistory();
  }

  return userApi.getPointHistory(accessToken);
}
