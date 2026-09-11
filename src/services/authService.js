import * as authApi from "../api/authApi";

export async function checkEmail(email) {
  return authApi.checkEmail(email);
}

export async function checkNickname(nickname) {
  return authApi.checkNickname(nickname);
}

export async function verifyPhone(phone) {
  return authApi.verifyPhone(phone);
}

export async function signup(userData) {
  return authApi.signup(userData);
}

export async function login(email, password) {
  return authApi.login(email, password);
}

export async function logout(token) {
  return authApi.logout(token);
}

export async function getMe(token) {
  return authApi.getMe(token);
}

export async function refreshAccessToken() {
  return authApi.refreshAccessToken();
}

export async function verifyPassword(password, token) {
  return authApi.verifyPassword(password, token);
}
