// // // import * as userApi from "../api/userApi";

// // // // 내 정보 조회
// // // export async function getUser(token) {
// // //   const response = await userApi.getUser(token);

// // //   return {
// // //     success: response.success,
// // //     user: response.data?.user ?? null,
// // //     message: response.message,
// // //   };
// // // }

// // // // 회원정보 수정
// // // export async function updateUser(userData, token) {
// // //   const response = await userApi.updateUser(userData, token);

// // //   return {
// // //     success: response.success,
// // //     user: response.data?.user ?? null,
// // //     message: response.message,
// // //   };
// // // }

// // // // 회원 탈퇴
// // // export async function deleteUser(password, token) {
// // //   const response = await userApi.deleteUser(password, token);

// // //   return {
// // //     success: response.success,
// // //     message: response.message,
// // //   };
// // // }

// // // // 보유 적립금 조회
// // // export async function getPoints(token) {
// // //   const response = await userApi.getPoints(token);

// // //   return {
// // //     success: response.success,
// // //     point: response.data?.point ?? 0,
// // //     message: response.message,
// // //   };
// // // }

// // // // 적립금 내역 조회
// // // export async function getPointHistory({ page = 1, limit = 10, token } = {}) {
// // //   const response = await userApi.getPointHistory({
// // //     page,
// // //     limit,
// // //     token,
// // //   });

// // //   return {
// // //     success: response.success,
// // //     history: response.data?.history ?? [],
// // //     pagination: response.data?.pagination ?? {
// // //       currentPage: page,
// // //       totalPages: 1,
// // //       totalCount: 0,
// // //       limit,
// // //     },
// // //     message: response.message,
// // //   };
// // // }

// // import * as userApi from "../api/userApi";

// // // 내 정보 조회
// // export async function getUser(token) {
// //   const response = await userApi.getUser(token);

// //   return {
// //     success: response.success,
// //     user: response.user ?? null,
// //     message: response.message,
// //   };
// // }

// // // 회원정보 수정
// // // 명세상 응답에는 수정된 user 객체가 포함되지 않습니다.
// // export async function updateUser(userData, token) {
// //   const response = await userApi.updateUser(userData, token);

// //   return {
// //     success: response.success,
// //     message: response.message,
// //   };
// // }

// // // 회원 탈퇴
// // // 비밀번호 확인은 호출 전에 /auth/verify-password로 처리합니다.
// // export async function deleteUser(token) {
// //   const response = await userApi.deleteUser(token);

// //   return {
// //     success: response.success,
// //     message: response.message,
// //   };
// // }

// // // 보유 적립금 조회
// // export async function getPoints(token) {
// //   const response = await userApi.getPoints(token);

// //   return {
// //     success: response.success,
// //     point: response.point ?? 0,
// //     message: response.message,
// //   };
// // }

// // // 적립금 내역 조회
// // // 명세상 페이지네이션 없이 pointHistory 배열을 반환합니다.
// // export async function getPointHistory(token) {
// //   const response = await userApi.getPointHistory(token);

// //   return {
// //     success: response.success,
// //     pointHistory: response.pointHistory ?? [],
// //     message: response.message,
// //   };
// // }

// import * as userApi from "../api/userApi";

// // 내 정보 조회
// export async function getUser(token) {
//   const response = await userApi.getUser(token);

//   return {
//     success: response.success,
//     user: response.user ?? null,
//     message: response.message,
//   };
// }

// // 회원정보 수정
// export async function updateUser(userData, token) {
//   const response = await userApi.updateUser(userData, token);

//   return {
//     success: response.success,
//     message: response.message,
//   };
// }

// // 회원 탈퇴
// // token을 userApi.deleteUser의 첫 번째 인자로 전달합니다.
// export async function deleteUser(token) {
//   const response = await userApi.deleteUser(token);

//   return {
//     success: response.success,
//     message: response.message,
//   };
// }

// // 보유 적립금 조회
// export async function getPoints(token) {
//   const response = await userApi.getPoints(token);

//   return {
//     success: response.success,
//     point: response.point ?? 0,
//     message: response.message,
//   };
// }

// // 적립금 내역 조회
// export async function getPointHistory(token) {
//   const response = await userApi.getPointHistory(token);

//   return {
//     success: response.success,
//     pointHistory: response.pointHistory ?? [],
//     message: response.message,
//   };
// }

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
 * 변경하지 않는 값은 보내지 않아도 됨
 */
export const updateMe = async (
  userData,
  accessToken,
  passwordVerificationToken,
) => {
  const response = await userApi.updateMe(
    userData,
    accessToken,
    passwordVerificationToken,
  );

  return {
    success: response.success,
    message: response.message,
  };
};

/**
 * 회원 탈퇴
 */
export const deleteMe = async (accessToken, passwordVerificationToken) => {
  const response = await userApi.deleteMe(
    accessToken,
    passwordVerificationToken,
  );

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
