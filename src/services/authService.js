





































































































































































































































































































import * as authApi from "../api/authApi";


export const checkEmail = async (email) => {
  const response = await authApi.checkEmail(email);

  return {
    success: response.success,
    available: response.data?.available ?? !response.data?.isDuplicate,
    isDuplicate:
      response.data?.isDuplicate ?? response.data?.available === false,
    message: response.message,
  };
};


export const checkNickname = async (nickname) => {
  const response = await authApi.checkNickname(nickname);

  return {
    success: response.success,
    available: response.data?.available ?? !response.data?.isDuplicate,
    isDuplicate:
      response.data?.isDuplicate ?? response.data?.available === false,
    message: response.message,
  };
};


export const verifyPhone = async (phone) => {
  const response = await authApi.verifyPhone(phone);

  return {
    success: response.success,
    verified: response.data?.verified ?? false,
    message: response.message,
  };
};


export const signup = async (signupData) => {
  const response = await authApi.signup(signupData);

  return {
    success: response.success,
    user: response.data?.user ?? null,
    message: response.message,
  };
};


export const login = async (email, password) => {
  const response = await authApi.login(email, password);

  return {
    success: response.success,
    accessToken: response.data?.accessToken ?? null,
    user: response.data?.user ?? null,
    message: response.message,
  };
};


export const refreshAccessToken = async () => {
  const response = await authApi.refresh();

  return {
    success: response.success,
    accessToken: response.data?.accessToken ?? null,
    message: response.message,
  };
};


export const getMe = async (accessToken) => {
  const response = await authApi.getMe(accessToken);

  return {
    success: response.success,
    user: response.data?.user ?? null,
    message: response.message,
  };
};


export const logout = async (accessToken) => {
  const response = await authApi.logout(accessToken);

  return {
    success: response.success,
    message: response.message,
  };
};


export const verifyPassword = async (password, accessToken) => {
  const response = await authApi.verifyPassword(password, accessToken);

  return {
    success: response.success,
    isMatched: response.data?.isMatched ?? false,
    message: response.message,
  };
};

export const verifyPasswordResetIdentity = async (email, phone) => {
  const response = await authApi.verifyPasswordResetIdentity(email, phone);

  return {
    success: response.success,
    verified: response.data?.verified ?? false,
    passwordResetToken: response.data?.passwordResetToken ?? null,
    expiresIn: response.data?.expiresIn ?? null,
    message: response.message,
  };
};


export const resetPassword = async ({
  newPassword,
  newPasswordConfirm,
  passwordResetToken,
}) => {
  const response = await authApi.resetPassword({
    newPassword,
    newPasswordConfirm,
    passwordResetToken,
  });

  return {
    success: response.success,
    message: response.message,
  };
};
