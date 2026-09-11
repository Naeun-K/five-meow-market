const mockUser = {
  nickname: "오묘집사",
  email: "cat@test.com",
  password: "Ohmyo1234",
  phone: "01012345678",
  zipcode: "61945",
  address: "광주광역시 서구 상무대로 123",
  detailAddress: "101동 123호",
  agreements: true,
};

// 현재 유효한 Access Token
let currentAccessToken = null;

// Mock Refresh 세션
const MOCK_REFRESH_SESSION_KEY = "mock-refresh-session";

function getMockRefreshSession() {
  const session = sessionStorage.getItem(MOCK_REFRESH_SESSION_KEY);

  if (!session) {
    return null;
  }

  try {
    return JSON.parse(session);
  } catch {
    sessionStorage.removeItem(MOCK_REFRESH_SESSION_KEY);
    return null;
  }
}

// export function createMockRefreshSession(user) {
//   const session = {
//     refreshToken: "mock-refresh-token",
//     email: user.email,
//   };

//   sessionStorage.setItem(MOCK_REFRESH_SESSION_KEY, JSON.stringify(session));
// }

export function createMockRefreshSession(user) {
  const session = {
    email: user.email,
  };

  sessionStorage.setItem(MOCK_REFRESH_SESSION_KEY, JSON.stringify(session));
}

export function clearMockRefreshSession() {
  sessionStorage.removeItem(MOCK_REFRESH_SESSION_KEY);
}
export function mockCheckEmail(email) {
  const isDuplicate = email === mockUser.email;

  return {
    success: true,
    isDuplicate,
    message: isDuplicate
      ? "이미 사용 중인 이메일입니다."
      : "사용 가능한 이메일입니다.",
  };
}

export function mockCheckNickname(nickname) {
  const isDuplicate = nickname === mockUser.nickname;

  return {
    success: true,
    isDuplicate,
    message: isDuplicate
      ? "이미 사용 중인 닉네임입니다."
      : "사용 가능한 닉네임입니다.",
  };
}

export function mockVerifyPhone() {
  return {
    success: true,
    message: "휴대폰 인증이 완료되었습니다.",
  };
}

export function mockSignup() {
  return {
    success: true,
    message: "회원가입이 정상적으로 완료되었습니다.",
  };
}

// 로그인
export function mockLogin(email, password) {
  if (email !== mockUser.email || password !== mockUser.password) {
    return {
      success: false,
      message: "이메일 또는 비밀번호가 올바르지 않습니다.",
    };
  }

  // Access Token 발급
  currentAccessToken = `mock-access-token-${Date.now()}`;

  // 실제 서버의 Refresh Token + HttpOnly Cookie 역할을 Mock에서 흉내냄
  createMockRefreshSession(mockUser);

  return {
    success: true,
    accessToken: currentAccessToken,
    user: {
      nickname: mockUser.nickname,
    },
    message: "로그인이 정상적으로 완료되었습니다.",
  };
}

// // 로그인 성공 시 Refresh 세션 생성
// export function createMockRefreshSession(user) {
//   mockRefreshSession = {
//     refreshToken: "mock-refresh-token",
//     email: user.email,
//   };
// }

// Access Token 재발급
export function mockRefreshAccessToken() {
  const refreshSession = getMockRefreshSession();

  if (!refreshSession) {
    return {
      success: false,
      message: "인증 정보가 만료되었습니다. 다시 로그인해주세요.",
    };
  }

  currentAccessToken = `mock-access-token-${Date.now()}`;

  return {
    success: true,
    accessToken: currentAccessToken,
  };
}
// 로그인 상태 조회
export function mockCheckAuth(accessToken) {
  if (accessToken === currentAccessToken) {
    return {
      success: true,
      user: {
        nickname: mockUser.nickname,
        email: mockUser.email,
        phone: mockUser.phone,
      },
    };
  }

  return {
    success: false,
    message: "로그인이 필요합니다.",
  };
}

// 로그아웃
export function mockLogout() {
  currentAccessToken = null;
  clearMockRefreshSession();

  return {
    success: true,
    message: "로그아웃이 정상적으로 완료되었습니다.",
  };
}

// // Refresh 세션 삭제
// export function clearMockRefreshSession() {
//   mockRefreshSession = null;
// }

export function mockVerifyPassword(password) {
  const isMatched = password === mockUser.password;

  return {
    success: true,
    isMatched,
    message: isMatched
      ? "비밀번호가 확인되었습니다."
      : "비밀번호가 일치하지 않습니다.",
  };
}
