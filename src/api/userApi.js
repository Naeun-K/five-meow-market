







































































































































































































































import { apiRequest } from "./apiClient";


export const getMe = async (accessToken) => {
  return apiRequest("/users/me", {
    token: accessToken,
  });
};


export const updateMe = async (userData, accessToken) => {
  return apiRequest("/users/me", {
    method: "PATCH",
    token: accessToken,
    body: userData,
  });
};


export const deleteMe = async (accessToken) => {
  return apiRequest("/users/me", {
    method: "DELETE",
    token: accessToken,
  });
};


export const getPoints = async (accessToken) => {
  return apiRequest("/users/me/points", {
    token: accessToken,
  });
};


export const getPointHistory = async (
  accessToken,
  { page = 1, limit = 10, type } = {},
) => {
  const searchParams = new URLSearchParams();

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  if (type) {
    searchParams.set("type", type);
  }

  return apiRequest(`/users/me/points/history?${searchParams.toString()}`, {
    token: accessToken,
  });
};
