// import { apiRequest } from "./apiClient";

// export function checkEmail(email) {
//   const params = new URLSearchParams({ email });

//   return apiRequest(`/auth/check-email?${params.toString()}`);
// }

// export function checkNickname(nickname) {
//   const params = new URLSearchParams({ nickname });

//   return apiRequest(`/auth/check-nickname?${params.toString()}`);
// }

// export function verifyPhone(phone) {
//   return apiRequest("/auth/phone/verify", {
//     method: "POST",
//     body: { phone },
//   });
// }

// export function signup(userData) {
//   return apiRequest("/auth/signup", {
//     method: "POST",
//     body: userData,
//   });
// }

// export function login(email, password) {
//   return apiRequest("/auth/login", {
//     method: "POST",
//     body: {
//       email,
//       password,
//     },
//   });
// }

// export function logout(token) {
//   return apiRequest("/auth/logout", {
//     method: "POST",
//     token,
//   });
// }

// export function getMe(token) {
//   return apiRequest("/auth/me", {
//     token,
//   });
// }

// export function refreshAccessToken() {
//   return apiRequest("/auth/refresh", {
//     method: "POST",
//   });
// }

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

// 이메일 중복 확인
export function checkEmail(email) {
  const params = new URLSearchParams({ email });

  return apiRequest(`/auth/check-email?${params.toString()}`);
}

// 닉네임 중복 확인
export function checkNickname(nickname) {
  const params = new URLSearchParams({ nickname });

  return apiRequest(`/auth/check-nickname?${params.toString()}`);
}

// 휴대폰 인증
export function verifyPhone(phone) {
  return apiRequest("/auth/phone/verify", {
    method: "POST",
    body: {
      phone,
    },
  });
}

// 회원가입
export function signup(userData) {
  return apiRequest("/auth/signup", {
    method: "POST",
    body: userData,
  });
}

// 로그인
export function login(email, password) {
  return apiRequest("/auth/login", {
    method: "POST",
    body: {
      email,
      password,
    },
  });
}

// Access Token 재발급
export function refreshAccessToken() {
  return apiRequest("/auth/refresh", {
    method: "POST",
  });
}

// 로그인 사용자 조회
export function getMe(token) {
  return apiRequest("/auth/me", {
    token,
  });
}

// 로그아웃
export function logout(token) {
  return apiRequest("/auth/logout", {
    method: "POST",
    token,
  });
}

// 현재 비밀번호 확인
export function verifyPassword(password, token) {
  return apiRequest("/auth/verify-password", {
    method: "POST",
    token,
    body: {
      password,
    },
  });
}
