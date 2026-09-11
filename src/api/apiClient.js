import { mockApiRequest } from "../data/mockApi";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

const MOCK_AUTH_ENDPOINTS = [
  "/auth/login",
  "/auth/refresh",
  "/auth/me",
  "/auth/logout",
];

export async function apiRequest(
  endpoint,
  { method = "GET", body, token } = {},
) {
  // 로그인 인증 흐름만 Mock 사용
  if (MOCK_AUTH_ENDPOINTS.includes(endpoint)) {
    return mockApiRequest(endpoint, {
      method,
      body,
      token,
    });
  }

  const headers = {
    Accept: "application/json",
  };

  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    credentials: "include",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    throw {
      status: response.status,
      ...data,
    };
  }

  return data;
}
