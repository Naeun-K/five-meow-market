const mockUser = {
  id: "550e8400-e29b-41d4-a716-446655440000",
  nickname: "오묘집사",
  email: "cat@test.com",
};

let mockPoint = 4500;

const mockPointHistory = [
  {
    id: "point-history-001",
    type: "EARN",
    amount: 1000,
    description: "상품 구매 적립",
    balance: 5000,
    createdAt: "2026-08-25T14:30:00",
  },
  {
    id: "point-history-002",
    type: "USE",
    amount: 500,
    description: "상품 구매 사용",
    balance: 4500,
    createdAt: "2026-08-30T11:20:00",
  },
];

export function mockGetMyInfo() {
  return {
    success: true,
    user: mockUser,
  };
}

export function mockUpdateMyInfo(updateData) {
  console.log("Mock 회원정보 수정 데이터, updataData")
  return {
    success: true,
    message: "회원정보수정이 정상적으로 완료되었습니다.",
  };
}

export function mockDeleteAccount() {
  return {
    success: true,
    message:
      "회원탈퇴가 정상적으로 완료되었습니다. 그동안 서비스를 이용해주셔서 감사합니다.",
  };
}

export function mockGetMyPoint() {
  return {
    success: true,
    point: mockPoint,
  };
}

export function mockGetPointHistory() {
  return {
    success: true,
    pointHistory: mockPointHistory,
  };
}
