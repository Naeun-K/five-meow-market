



































































































import * as userApi from "../api/userApi";


export const getMe = async (accessToken) => {
  const response = await userApi.getMe(accessToken);

  return {
    success: response.success,
    user: response.data?.user ?? null,
    message: response.message,
  };
};


export const updateMe = async (userData, accessToken) => {
  const response = await userApi.updateMe(userData, accessToken);

  return {
    success: response.success,
    message: response.message,
  };
};


export const deleteMe = async (accessToken) => {
  const response = await userApi.deleteMe(accessToken);

  return {
    success: response.success,
    message: response.message,
  };
};


export const getPoints = async (accessToken) => {
  const response = await userApi.getPoints(accessToken);

  return {
    success: response.success,
    point: response.data?.point ?? 0,
    message: response.message,
  };
};


export const getPointHistory = async (accessToken, options = {}) => {
  const response = await userApi.getPointHistory(accessToken, options);

  return {
    success: response.success,

    pointHistory: response.data?.pointHistory ?? [],

    pagination: response.data?.pagination ?? {
      currentPage: 1,
      totalPages: 1,
      totalCount: 0,
      limit: options.limit ?? 10,
    },

    message: response.message,
  };
};
