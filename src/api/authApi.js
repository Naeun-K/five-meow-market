
















































































































































import { apiRequest } from "./apiClient";


export const checkEmail = async (email) => {
  return apiRequest(`/auth/check-email?email=${encodeURIComponent(email)}`);
};


export const checkNickname = async (nickname) => {
  return apiRequest(
    `/auth/check-nickname?nickname=${encodeURIComponent(nickname)}`,
  );
};


export const verifyPhone = async (phone) => {
  return apiRequest("/auth/phone/verify", {
    method: "POST",
    body: {
      phone,
    },
  });
};


export const signup = async ({
  nickname,
  email,
  password,
  phone,
  zipCode,
  address,
  detailAddress,
}) => {
  return apiRequest("/auth/signup", {
    method: "POST",
    body: {
      nickname,
      email,
      password,
      phone,
      zipCode,
      address,
      detailAddress,
    },
  });
};


export const login = async (email, password) => {
  return apiRequest("/auth/login", {
    method: "POST",
    body: {
      email,
      password,
    },
  });
};


export const refresh = async () => {
  return apiRequest("/auth/refresh", {
    method: "POST",
  });
};


export const getMe = async (accessToken) => {
  return apiRequest("/auth/me", {
    token: accessToken,
  });
};


export const logout = async (accessToken) => {
  return apiRequest("/auth/logout", {
    method: "POST",
    token: accessToken,
  });
};


export const verifyPassword = async (password, accessToken) => {
  return apiRequest("/auth/verify-password", {
    method: "POST",
    token: accessToken,
    body: {
      password,
    },
  });
};


export const verifyPasswordResetIdentity = async (email, phone) => {
  return apiRequest("/auth/password-reset/verification", {
    method: "POST",
    body: {
      email,
      phone,
    },
  });
};


export const resetPassword = async ({
  newPassword,
  newPasswordConfirm,
  passwordResetToken,
}) => {
  return apiRequest("/auth/password-reset", {
    method: "POST",
    token: passwordResetToken,
    body: {
      newPassword,
      newPasswordConfirm,
    },
  });
};
