const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 이메일 중복 확인
export async function checkEmail(email) {
  const response = await fetch(
    `${BASE_URL}/auth/check-email?email=${encodeURIComponent(email)}`,
  );

  return response.json();
}

// 닉네임 중복 확인
export async function checkNickname(nickname) {
  const response = await fetch(
    `${BASE_URL}/auth/check-nickname?nickname=${encodeURIComponent(nickname)}`,
  );

  return response.json();
}

// 휴대폰 인증
export async function verifyPhone(phone) {
  const response = await fetch(`${BASE_URL}/auth/phone/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phone }),
  });

  return response.json();
}

// 회원가입
export async function signup(signupData) {
  const response = await fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(signupData),
  });

  return response.json();
}

// 로그인
export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return response.json();
}

// 로그아웃
export async function logout(accessToken) {
  const response = await fetch(`${BASE_URL}/auth/logout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
}

// 로그인 상태 조회
export async function checkAuth(accessToken) {
  const response = await fetch(`${BASE_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
}

// Access Token 재발급
export async function refreshAccessToken(refreshToken) {
  const response = await fetch(`${BASE_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refreshToken,
    }),
  });

  return response.json();
}

// 비밀번호 확인
export async function verifyPassword(password, accessToken) {
  const response = await fetch(`${BASE_URL}/auth/verify-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      password,
    }),
  });

  return response.json();
}
