const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiRequest(
  endpoint,
  { method = "GET", body, token, headers: customHeaders = {} } = {},
) {
  const headers = {
    Accept: "application/json",
    ...customHeaders,
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
