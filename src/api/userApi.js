import { apiRequest } from "./apiClient";


export function getUser(token) {
  return apiRequest("/users/me", {
    token,
  });
}


export function updateUser(userData, token) {
  return apiRequest("/users/me", {
    method: "PATCH",
    token,
    body: userData,
  });
}


export function deleteUser(token) {
  return apiRequest("/users/me", {
    method: "DELETE",
    token,
  });
}


export function getPoints(token) {
  return apiRequest("/users/me/points", {
    token,
  });
}


export function getPointHistory(token) {
  return apiRequest("/users/me/points/history", {
    token,
  });
}
