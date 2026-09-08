import { apiRequest } from "./apiClient";

// 내 정보 조회
export function getUser(token) {
  return apiRequest("/users/me", {
    token,
  });
}

// 회원정보 수정
export function updateUser(userData, token) {
  return apiRequest("/users/me", {
    method: "PATCH",
    token,
    body: userData,
  });
}

// 회원 탈퇴
export function deleteUser(token) {
  return apiRequest("/users/me", {
    method: "DELETE",
    token,
  });
}

// 현재 보유 적립금 조회
export function getPoints(token) {
  return apiRequest("/users/me/points", {
    token,
  });
}

// 적립금 내역 조회
export function getPointHistory(token) {
  return apiRequest("/users/me/points/history", {
    token,
  });
}
