// src/services/userService.js

import * as userApi from "../api/userApi";

// 회원정보 조회
export async function getUser(token) {
  return userApi.getUser(token);
}

// 회원정보 수정
export async function updateUser(userData, token) {
  return userApi.updateUser(userData, token);
}

// 회원 탈퇴
export async function deleteUser(token) {
  return userApi.deleteUser(token);
}

// 보유 적립금 조회
export async function getPoints(token) {
  return userApi.getPoints(token);
}

// 적립금 내역 조회
export async function getPointHistory(token) {
  return userApi.getPointHistory(token);
}
