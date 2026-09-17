// // // // import { apiRequest } from "./apiClient";

// // // // // 내 정보 조회
// // // // export function getUser(token) {
// // // //   return apiRequest("/users/me", {
// // // //     token,
// // // //   });
// // // // }

// // // // // 회원정보 수정
// // // // export function updateUser(userData, token) {
// // // //   return apiRequest("/users/me", {
// // // //     method: "PATCH",
// // // //     token,
// // // //     body: userData,
// // // //   });
// // // // }

// // // // // 회원 탈퇴
// // // // export function deleteUser(password, token) {
// // // //   return apiRequest("/users/me", {
// // // //     method: "DELETE",
// // // //     token,
// // // //     body: {
// // // //       password,
// // // //     },
// // // //   });
// // // // }

// // // // // 보유 적립금 조회
// // // // export function getPoints(token) {
// // // //   return apiRequest("/users/me/points", {
// // // //     token,
// // // //   });
// // // // }

// // // // // 적립금 내역 조회
// // // // export function getPointHistory({ page = 1, limit = 10, token } = {}) {
// // // //   const params = new URLSearchParams({
// // // //     page: String(page),
// // // //     limit: String(limit),
// // // //   });

// // // //   return apiRequest(`/users/me/points/history?${params.toString()}`, {
// // // //     token,
// // // //   });
// // // // }

// // // import { apiRequest } from "./apiClient";

// // // // 내 정보 조회
// // // export function getUser(token) {
// // //   return apiRequest("/users/me", {
// // //     token,
// // //   });
// // // }

// // // // 회원정보 수정
// // // export function updateUser(userData, token) {
// // //   return apiRequest("/users/me", {
// // //     method: "PATCH",
// // //     token,
// // //     body: userData,
// // //   });
// // // }

// // // // 회원 탈퇴
// // // // 비밀번호는 /auth/verify-password에서 먼저 확인하므로
// // // // DELETE 요청에는 Body를 전달하지 않습니다.
// // // export function deleteUser(token) {
// // //   return apiRequest("/users/me", {
// // //     method: "DELETE",
// // //     token,
// // //   });
// // // }

// // // // 보유 적립금 조회
// // // export function getPoints(token) {
// // //   return apiRequest("/users/me/points", {
// // //     token,
// // //   });
// // // }

// // // // 적립금 내역 조회
// // // // 현재 명세에는 페이지네이션이 없습니다.
// // // export function getPointHistory(token) {
// // //   return apiRequest("/users/me/points/history", {
// // //     token,
// // //   });
// // // }

// // import { apiRequest } from "./apiClient";

// // // 내 정보 조회
// // export function getUser(token) {
// //   return apiRequest("/users/me", {
// //     token,
// //   });
// // }

// // // 회원정보 수정
// // export function updateUser(userData, token) {
// //   return apiRequest("/users/me", {
// //     method: "PATCH",
// //     token,
// //     body: userData,
// //   });
// // }

// // // 회원 탈퇴
// // // 비밀번호는 verify-password에서 이미 확인했으므로
// // // DELETE 요청에는 Access Token만 전달합니다.
// // export function deleteUser(token) {
// //   return apiRequest("/users/me", {
// //     method: "DELETE",
// //     token,
// //   });
// // }

// // // 보유 적립금 조회
// // export function getPoints(token) {
// //   return apiRequest("/users/me/points", {
// //     token,
// //   });
// // }

// // // 적립금 내역 조회
// // export function getPointHistory(token) {
// //   return apiRequest("/users/me/points/history", {
// //     token,
// //   });
// // }

// import { apiRequest } from "./apiClient";

// /**
//  * 내 정보 조회
//  * GET /users/me
//  */
// export const getMe = async (accessToken) => {
//   return apiRequest("/users/me", {
//     token: accessToken,
//   });
// };

// /**
//  * 회원정보 수정
//  * PATCH /users/me
//  *
//  * Authorization
//  * X-Password-Verification-Token
//  * 둘 다 필요
//  */
// export const updateMe = async (
//   userData,
//   accessToken,
//   passwordVerificationToken,
// ) => {
//   return apiRequest("/users/me", {
//     method: "PATCH",
//     token: accessToken,

//     headers: {
//       "X-Password-Verification-Token": passwordVerificationToken,
//     },

//     body: userData,
//   });
// };

// /**
//  * 회원 탈퇴
//  * DELETE /users/me
//  *
//  * Authorization
//  * X-Password-Verification-Token
//  * 둘 다 필요
//  */
// export const deleteMe = async (accessToken, passwordVerificationToken) => {
//   return apiRequest("/users/me", {
//     method: "DELETE",
//     token: accessToken,

//     headers: {
//       "X-Password-Verification-Token": passwordVerificationToken,
//     },
//   });
// };

// /**
//  * 현재 보유 적립금 조회
//  * GET /users/me/points
//  */
// export const getPoints = async (accessToken) => {
//   return apiRequest("/users/me/points", {
//     token: accessToken,
//   });
// };

// /**
//  * 적립금 내역 조회
//  *
//  * GET /users/me/points/history
//  *
//  * Query
//  * page
//  * limit
//  * type
//  *
//  * type:
//  * EARN
//  * USE
//  * REFUND
//  */
// export const getPointHistory = async (
//   accessToken,
//   { page = 1, limit = 10, type } = {},
// ) => {
//   const searchParams = new URLSearchParams();

//   searchParams.set("page", String(page));
//   searchParams.set("limit", String(limit));

//   if (type) {
//     searchParams.set("type", type);
//   }

//   return apiRequest(`/users/me/points/history?${searchParams.toString()}`, {
//     token: accessToken,
//   });
// };

import { apiRequest } from "./apiClient";

/**
 * 내 정보 조회
 *
 * GET /users/me
 */
export const getMe = async (accessToken) => {
  return apiRequest("/users/me", {
    token: accessToken,
  });
};

/**
 * 회원정보 수정
 *
 * PATCH /users/me
 *
 * 비밀번호 확인은
 * POST /auth/verify-password에서 먼저 처리합니다.
 *
 * 회원정보 수정 요청에는
 * Access Token만 사용합니다.
 */
export const updateMe = async (userData, accessToken) => {
  return apiRequest("/users/me", {
    method: "PATCH",
    token: accessToken,
    body: userData,
  });
};

/**
 * 회원 탈퇴
 *
 * DELETE /users/me
 *
 * 비밀번호 확인은
 * POST /auth/verify-password에서 먼저 처리합니다.
 *
 * 회원탈퇴 요청에는
 * Access Token만 사용합니다.
 */
export const deleteMe = async (accessToken) => {
  return apiRequest("/users/me", {
    method: "DELETE",
    token: accessToken,
  });
};

/**
 * 현재 보유 적립금 조회
 *
 * GET /users/me/points
 */
export const getPoints = async (accessToken) => {
  return apiRequest("/users/me/points", {
    token: accessToken,
  });
};

/**
 * 적립금 내역 조회
 *
 * GET /users/me/points/history
 *
 * Query
 * page
 * limit
 * type
 *
 * type:
 * EARN
 * USE
 * REFUND
 */
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
