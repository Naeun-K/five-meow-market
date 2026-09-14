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
  
  if (method === "GET" && endpoint.startsWith("/auth/check-email")) {
    const params = new URLSearchParams(endpoint.split("?")[1]);
    const email = params.get("email");

    return mockCheckEmail(email);
  }

  
  if (method === "GET" && endpoint.startsWith("/auth/check-nickname")) {
    const params = new URLSearchParams(endpoint.split("?")[1]);
    const nickname = params.get("nickname");

    return mockCheckNickname(nickname);
  }

  
  if (method === "POST" && endpoint === "/auth/phone/verify") {
    return mockVerifyPhone(body?.phone);
  }

  
  if (method === "POST" && endpoint === "/auth/signup") {
    return mockSignup(body);
  }

  
  if (method === "POST" && endpoint === "/auth/login") {
    return mockLogin(body?.email, body?.password);
  }

  
  if (method === "POST" && endpoint === "/auth/refresh") {
    return mockRefreshAccessToken();
  }

  
  if (method === "GET" && endpoint === "/auth/me") {
    return mockCheckAuth(token);
  }

  
  if (method === "POST" && endpoint === "/auth/logout") {
    return mockLogout();
  }

  
  if (method === "POST" && endpoint === "/auth/verify-password") {
    return mockVerifyPassword(body?.password);
  }

  throw new Error(`Mock API가 구현되지 않은 요청입니다: ${method} ${endpoint}`);
}
