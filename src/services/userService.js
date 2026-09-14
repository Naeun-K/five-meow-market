

import * as userApi from "../api/userApi";


export async function getUser(token) {
  return userApi.getUser(token);
}


export async function updateUser(userData, token) {
  return userApi.updateUser(userData, token);
}


export async function deleteUser(token) {
  return userApi.deleteUser(token);
}


export async function getPoints(token) {
  return userApi.getPoints(token);
}


export async function getPointHistory(token) {
  return userApi.getPointHistory(token);
}
