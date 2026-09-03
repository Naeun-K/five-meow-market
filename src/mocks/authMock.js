const mockUser = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  nickname: "오묘집사",
  email: "cat@test.com",
  password: "ohmyo1234",
  phone: "01012345678",
};

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

export function mockLogin(email, password) {
  if (email === mockUser.email && password === mockUser.password) {
    return {
      success: true,
      accessToken: "mock-access-token",
      refreshToken: "mock-refresh-token",
      user: {
        id: mockUser.id,
        nickname: mockUser.nickname,
      },
      message: "로그인이 정상적으로 완료되었습니다.",
    };
  }

  return {
    success: false,
    message: "이메일 또는 비밀번호가 올바르지 않습니다.",
  };
}

export function mockLogout() {
  return {
    success: true,
    message: "로그아웃이 정상적으로 완료되었습니다.",
  };
}

export function mockCheckAuth(accessToken) {
  if (accessToken === "mock-access-token") {
    return {
      success: true,
    };
  }

  return {
    success: false,
    message: "로그인이 필요합니다.",
  };
}

export function mockRefreshToken(refreshToken) {
  if (refreshToken === "mock-refresh-token") {
    return {
      success: true,
      accessToken: "new-mock-access-token",
    };
  }

  return {
    success: false,
    message: "인증 정보가 만료되었습니다. 다시 로그인해주세요.",
  };
}

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
