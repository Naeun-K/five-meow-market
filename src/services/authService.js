// // import * as authApi from "../api/authApi";

// // export async function checkEmail(email) {
// //   return authApi.checkEmail(email);
// // }

// // export async function checkNickname(nickname) {
// //   return authApi.checkNickname(nickname);
// // }

// // export async function verifyPhone(phone) {
// //   return authApi.verifyPhone(phone);
// // }

// // export async function signup(userData) {
// //   return authApi.signup(userData);
// // }

// // export async function login(email, password) {
// //   return authApi.login(email, password);
// // }

// // export async function logout(token) {
// //   return authApi.logout(token);
// // }

// // export async function getMe(token) {
// //   return authApi.getMe(token);
// // }

// // export async function refreshAccessToken() {
// //   return authApi.refreshAccessToken();
// // }

// // export async function verifyPassword(password, token) {
// //   return authApi.verifyPassword(password, token);
// // }

// import * as authApi from "../api/authApi";

// // 이메일 중복 확인
// export async function checkEmail(email) {
//   const response = await authApi.checkEmail(email);

//   return {
//     success: response.success,
//     email: response.data?.email ?? email,
//     isAvailable: response.data?.isAvailable ?? false,
//     message: response.message,
//   };
// }

// // 닉네임 중복 확인
// export async function checkNickname(nickname) {
//   const response = await authApi.checkNickname(nickname);

//   return {
//     success: response.success,
//     nickname: response.data?.nickname ?? nickname,
//     isAvailable: response.data?.isAvailable ?? false,
//     message: response.message,
//   };
// }

// // 휴대폰 인증
// export async function verifyPhone(phone) {
//   const response = await authApi.verifyPhone(phone);

//   return {
//     success: response.success,
//     phone: response.data?.phone ?? phone,
//     verified: response.data?.verified ?? false,
//     message: response.message,
//   };
// }

// // 회원가입
// export async function signup(userData) {
//   const response = await authApi.signup(userData);

//   return {
//     success: response.success,
//     user: response.data ?? null,
//     message: response.message,
//   };
// }

// // 로그인
// export async function login(email, password) {
//   const response = await authApi.login(email, password);

//   return {
//     success: response.success,
//     accessToken: response.data?.accessToken ?? null,
//     user: response.data?.user ?? null,
//     message: response.message,
//   };
// }

// // Access Token 재발급
// export async function refreshAccessToken() {
//   const response = await authApi.refreshAccessToken();

//   return {
//     success: response.success,
//     accessToken: response.data?.accessToken ?? null,
//     message: response.message,
//   };
// }

// // 로그인 사용자 조회
// export async function getMe(token) {
//   const response = await authApi.getMe(token);

//   return {
//     success: response.success,
//     user: response.data?.user ?? null,
//     message: response.message,
//   };
// }

// // 로그아웃
// export async function logout(token) {
//   const response = await authApi.logout(token);

//   return {
//     success: response.success,
//     message: response.message,
//   };
// }

// // 현재 비밀번호 확인
// export async function verifyPassword(password, token) {
//   const response = await authApi.verifyPassword(password, token);

//   return {
//     success: response.success,
//     verified: response.data?.verified ?? false,
//     message: response.message,
//   };
// }

import * as authApi from "../api/authApi";

/*
 * 서버 응답이 다음 두 구조 중 어느 형태여도
 * 사용할 수 있도록 실제 데이터를 꺼냅니다.
 *
 * 실제 서버:
 * {
 *   success: true,
 *   data: {...}
 * }
 *
 * Auth 명세:
 * {
 *   success: true,
 *   ...
 * }
 */
function getResponseData(response) {
  return response.data ?? response;
}

// 이메일 중복 확인
export async function checkEmail(email) {
  const response = await authApi.checkEmail(email);

  const data = getResponseData(response);

  return {
    success: response.success,
    email: data.email ?? email,
    isAvailable: data.isAvailable ?? false,
    message: response.message,
  };
}

// 닉네임 중복 확인
export async function checkNickname(nickname) {
  const response = await authApi.checkNickname(nickname);

  const data = getResponseData(response);

  return {
    success: response.success,
    nickname: data.nickname ?? nickname,
    isAvailable: data.isAvailable ?? false,
    message: response.message,
  };
}

// 휴대폰 인증
export async function verifyPhone(phone) {
  const response = await authApi.verifyPhone(phone);

  const data = getResponseData(response);

  return {
    success: response.success,
    phone: data.phone ?? phone,
    verified: data.verified ?? false,
    message: response.message,
  };
}

// 회원가입
export async function signup(userData) {
  const response = await authApi.signup(userData);

  const data = getResponseData(response);

  return {
    success: response.success,

    /*
     * 서버가 data 자체를 사용자 객체로 반환하거나
     * data.user로 반환하는 경우를 모두 처리합니다.
     */
    user: data.user ?? response.data ?? null,

    message: response.message,
  };
}

// 로그인
export async function login(email, password) {
  const response = await authApi.login(email, password);

  const data = getResponseData(response);

  return {
    success: response.success,
    accessToken: data.accessToken ?? null,
    user: data.user ?? null,
    message: response.message,
  };
}

// Access Token 재발급
export async function refreshAccessToken() {
  const response = await authApi.refreshAccessToken();

  const data = getResponseData(response);

  return {
    success: response.success,
    accessToken: data.accessToken ?? null,
    message: response.message,
  };
}

// 로그인 사용자 조회
export async function getMe(token) {
  const response = await authApi.getMe(token);

  const data = getResponseData(response);

  return {
    success: response.success,
    user: data.user ?? null,
    message: response.message,
  };
}

// 로그아웃
export async function logout(token) {
  const response = await authApi.logout(token);

  return {
    success: response.success,
    message: response.message,
  };
}

// 현재 비밀번호 확인
export async function verifyPassword(password, token) {
  const response = await authApi.verifyPassword(password, token);

  const data = getResponseData(response);

  /*
   * 실제 서버의 verified와
   * 명세의 isMatched를 모두 처리합니다.
   */
  const verified = data.verified ?? data.isMatched ?? false;

  return {
    success: response.success,
    verified,
    message: response.message,
  };
}
