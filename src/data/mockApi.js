import {
  mockCheckEmail,
  mockCheckNickname,
  mockVerifyPhone,
  mockSignup,
  mockLogin,
  mockRefreshAccessToken,
  mockCheckAuth,
  mockLogout,
  mockVerifyPassword,
} from "./mockAuth";

export async function mockApiRequest(
  endpoint,
  { method = "GET", body, token } = {},
) {
  // 이메일 중복 확인
  if (method === "GET" && endpoint.startsWith("/auth/check-email")) {
    const params = new URLSearchParams(endpoint.split("?")[1]);
    const email = params.get("email");

    return mockCheckEmail(email);
  }

  // 닉네임 중복 확인
  if (method === "GET" && endpoint.startsWith("/auth/check-nickname")) {
    const params = new URLSearchParams(endpoint.split("?")[1]);
    const nickname = params.get("nickname");

    return mockCheckNickname(nickname);
  }

  // 휴대폰 인증
  if (method === "POST" && endpoint === "/auth/phone/verify") {
    return mockVerifyPhone(body?.phone);
  }

  // 회원가입
  if (method === "POST" && endpoint === "/auth/signup") {
    return mockSignup(body);
  }

  // 로그인
  if (method === "POST" && endpoint === "/auth/login") {
    return mockLogin(body?.email, body?.password);
  }

  // Access Token 재발급
  if (method === "POST" && endpoint === "/auth/refresh") {
    return mockRefreshAccessToken();
  }

  // 로그인 상태 조회
  if (method === "GET" && endpoint === "/auth/me") {
    return mockCheckAuth(token);
  }

  // 로그아웃
  if (method === "POST" && endpoint === "/auth/logout") {
    return mockLogout();
  }

  // 현재 비밀번호 확인
  if (method === "POST" && endpoint === "/auth/verify-password") {
    return mockVerifyPassword(body?.password);
  }

  throw new Error(`Mock API가 구현되지 않은 요청입니다: ${method} ${endpoint}`);
}
