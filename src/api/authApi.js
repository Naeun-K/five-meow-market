// // import { apiRequest } from "./apiClient";

// // export function checkEmail(email) {
// //   const params = new URLSearchParams({ email });

// //   return apiRequest(`/auth/check-email?${params.toString()}`);
// // }

// // export function checkNickname(nickname) {
// //   const params = new URLSearchParams({ nickname });

// //   return apiRequest(`/auth/check-nickname?${params.toString()}`);
// // }

// // export function verifyPhone(phone) {
// //   return apiRequest("/auth/phone/verify", {
// //     method: "POST",
// //     body: { phone },
// //   });
// // }

// // export function signup(userData) {
// //   return apiRequest("/auth/signup", {
// //     method: "POST",
// //     body: userData,
// //   });
// // }

// // export function login(email, password) {
// //   return apiRequest("/auth/login", {
// //     method: "POST",
// //     body: {
// //       email,
// //       password,
// //     },
// //   });
// // }

// // export function logout(token) {
// //   return apiRequest("/auth/logout", {
// //     method: "POST",
// //     token,
// //   });
// // }

// // export function getMe(token) {
// //   return apiRequest("/auth/me", {
// //     token,
// //   });
// // }

// // export function refreshAccessToken() {
// //   return apiRequest("/auth/refresh", {
// //     method: "POST",
// //   });
// // }

// // export function verifyPassword(password, token) {
// //   return apiRequest("/auth/verify-password", {
// //     method: "POST",
// //     token,
// //     body: {
// //       password,
// //     },
// //   });
// // }

// import { apiRequest } from "./apiClient";

// // 이메일 중복 확인
// export function checkEmail(email) {
//   const params = new URLSearchParams({ email });

//   return apiRequest(`/auth/check-email?${params.toString()}`);
// }

// // 닉네임 중복 확인
// export function checkNickname(nickname) {
//   const params = new URLSearchParams({ nickname });

//   return apiRequest(`/auth/check-nickname?${params.toString()}`);
// }

// // 휴대폰 인증
// export function verifyPhone(phone) {
//   return apiRequest("/auth/phone/verify", {
//     method: "POST",
//     body: {
//       phone,
//     },
//   });
// }

// // 회원가입
// export function signup(userData) {
//   return apiRequest("/auth/signup", {
//     method: "POST",
//     body: userData,
//   });
// }

// // 로그인
// export function login(email, password) {
//   return apiRequest("/auth/login", {
//     method: "POST",
//     body: {
//       email,
//       password,
//     },
//   });
// }

// // Access Token 재발급
// export function refreshAccessToken() {
//   return apiRequest("/auth/refresh", {
//     method: "POST",
//   });
// }

// // 로그인 사용자 조회
// export function getMe(token) {
//   return apiRequest("/auth/me", {
//     token,
//   });
// }

// // 로그아웃
// export function logout(token) {
//   return apiRequest("/auth/logout", {
//     method: "POST",
//     token,
//   });
// }

// // 현재 비밀번호 확인
// export function verifyPassword(password, token) {
//   return apiRequest("/auth/verify-password", {
//     method: "POST",
//     token,
//     body: {
//       password,
//     },
//   });
// }

import { apiRequest } from "./apiClient";

/**
 * 이메일 중복 확인
 * GET /auth/check-email?email={email}
 */
export const checkEmail = async (email) => {
  return apiRequest(`/auth/check-email?email=${encodeURIComponent(email)}`);
};

/**
 * 닉네임 중복 확인
 * GET /auth/check-nickname?nickname={nickname}
 */
export const checkNickname = async (nickname) => {
  return apiRequest(
    `/auth/check-nickname?nickname=${encodeURIComponent(nickname)}`,
  );
};

/**
 * 휴대폰 번호 검증
 * POST /auth/phone/verify
 */
export const verifyPhone = async (phone) => {
  return apiRequest("/auth/phone/verify", {
    method: "POST",
    body: {
      phone,
    },
  });
};

/**
 * 회원가입
 * POST /auth/signup
 */
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

/**
 * 로그인
 * POST /auth/login
 *
 * 성공 시
 * - accessToken 반환
 * - Refresh Token은 HttpOnly Cookie로 저장
 */
export const login = async (email, password) => {
  return apiRequest("/auth/login", {
    method: "POST",
    body: {
      email,
      password,
    },
  });
};

/**
 * Access Token 재발급
 * POST /auth/refresh
 *
 * Refresh Token은 HttpOnly Cookie로 자동 전송
 */
export const refresh = async () => {
  return apiRequest("/auth/refresh", {
    method: "POST",
  });
};

/**
 * 로그인 사용자 조회
 * GET /auth/me
 */
export const getMe = async (accessToken) => {
  return apiRequest("/auth/me", {
    token: accessToken,
  });
};

/**
 * 로그아웃
 * POST /auth/logout
 */
export const logout = async (accessToken) => {
  return apiRequest("/auth/logout", {
    method: "POST",
    token: accessToken,
  });
};

/**
 * 현재 비밀번호 확인
 *
 * POST /auth/verify-password
 *
 * Request
 * {
 *   password
 * }
 *
 * Response
 * {
 *   success: true,
 *   data: {
 *     isMatched: true | false
 *   },
 *   message
 * }
 *
 * 별도의 비밀번호 검증 Token은 발급하지 않습니다.
 */
export const verifyPassword = async (password, accessToken) => {
  return apiRequest("/auth/verify-password", {
    method: "POST",
    token: accessToken,
    body: {
      password,
    },
  });
};

/**
 * 비밀번호 찾기 본인 확인
 * POST /auth/password-reset/verification
 */
export const verifyPasswordResetIdentity = async (email, phone) => {
  return apiRequest("/auth/password-reset/verification", {
    method: "POST",
    body: {
      email,
      phone,
    },
  });
};

/**
 * 비밀번호 재설정
 * POST /auth/password-reset
 *
 * passwordResetToken을 Bearer Token으로 전달
 */
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
