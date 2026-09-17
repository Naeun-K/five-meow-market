// import * as userApi from "../api/userApi";

// /**
//  * 내 정보 조회
//  */
// export const getMe = async (accessToken) => {
//   const response = await userApi.getMe(accessToken);

//   return {
//     success: response.success,
//     user: response.data?.user ?? null,
//     message: response.message,
//   };
// };

// /**
//  * 회원정보 수정
//  *
//  * userData 예:
//  * {
//  *   newPassword,
//  *   phone,
//  *   zipCode,
//  *   address,
//  *   detailAddress,
//  * }
//  *
//  * 변경하지 않는 값은 보내지 않아도 됨
//  */
// export const updateMe = async (
//   userData,
//   accessToken,
//   passwordVerificationToken,
// ) => {
//   const response = await userApi.updateMe(
//     userData,
//     accessToken,
//     passwordVerificationToken,
//   );

//   return {
//     success: response.success,
//     message: response.message,
//   };
// };

// /**
//  * 회원 탈퇴
//  */
// export const deleteMe = async (accessToken, passwordVerificationToken) => {
//   const response = await userApi.deleteMe(
//     accessToken,
//     passwordVerificationToken,
//   );

//   return {
//     success: response.success,
//     message: response.message,
//   };
// };

// /**
//  * 현재 보유 적립금 조회
//  */
// export const getPoints = async (accessToken) => {
//   const response = await userApi.getPoints(accessToken);

//   return {
//     success: response.success,
//     point: response.data?.point ?? 0,
//     message: response.message,
//   };
// };

// /**
//  * 적립금 내역 조회
//  *
//  * options:
//  * {
//  *   page: 1,
//  *   limit: 10,
//  *   type: "EARN" | "USE" | "REFUND"
//  * }
//  */
// export const getPointHistory = async (accessToken, options = {}) => {
//   const response = await userApi.getPointHistory(accessToken, options);

//   return {
//     success: response.success,
//     pointHistory: response.data?.pointHistory ?? [],
//     pagination: response.data?.pagination ?? {
//       currentPage: 1,
//       totalPages: 1,
//       totalCount: 0,
//       limit: options.limit ?? 10,
//     },
//     message: response.message,
//   };
// };

import * as userApi from "../api/userApi";

/**
 * 내 정보 조회
 */
export const getMe = async (accessToken) => {
  const response = await userApi.getMe(accessToken);

  return {
    success: response.success,
    user: response.data?.user ?? null,
    message: response.message,
  };
};

/**
 * 회원정보 수정
 *
 * userData 예:
 * {
 *   newPassword,
 *   phone,
 *   zipCode,
 *   address,
 *   detailAddress,
 * }
 *
 * 변경하지 않는 값은 보내지 않아도 됩니다.
 *
 * 비밀번호 확인은
 * POST /auth/verify-password에서 먼저 처리합니다.
 */
export const updateMe = async (userData, accessToken) => {
  const response = await userApi.updateMe(userData, accessToken);

  return {
    success: response.success,
    message: response.message,
  };
};

/**
 * 회원 탈퇴
 *
 * 비밀번호 확인은
 * POST /auth/verify-password에서 먼저 처리합니다.
 */
export const deleteMe = async (accessToken) => {
  const response = await userApi.deleteMe(accessToken);

  return {
    success: response.success,
    message: response.message,
  };
};

/**
 * 현재 보유 적립금 조회
 */
export const getPoints = async (accessToken) => {
  const response = await userApi.getPoints(accessToken);

  return {
    success: response.success,
    point: response.data?.point ?? 0,
    message: response.message,
  };
};

/**
 * 적립금 내역 조회
 *
 * options:
 * {
 *   page: 1,
 *   limit: 10,
 *   type: "EARN" | "USE" | "REFUND"
 * }
 */
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
