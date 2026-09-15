import * as userApi from "../api/userApi";

// 내 정보 조회
export async function getUser(token) {
  const response = await userApi.getUser(token);

  return {
    success: response.success,
    user: response.data?.user ?? null,
    message: response.message,
  };
}

// 회원정보 수정
export async function updateUser(userData, token) {
  const response = await userApi.updateUser(userData, token);

  return {
    success: response.success,
    user: response.data?.user ?? null,
    message: response.message,
  };
}

// 회원 탈퇴
export async function deleteUser(password, token) {
  const response = await userApi.deleteUser(password, token);

  return {
    success: response.success,
    message: response.message,
  };
}

// 보유 적립금 조회
export async function getPoints(token) {
  const response = await userApi.getPoints(token);

  return {
    success: response.success,
    point: response.data?.point ?? 0,
    message: response.message,
  };
}

// 적립금 내역 조회
export async function getPointHistory({ page = 1, limit = 10, token } = {}) {
  const response = await userApi.getPointHistory({
    page,
    limit,
    token,
  });

  return {
    success: response.success,
    history: response.data?.history ?? [],
    pagination: response.data?.pagination ?? {
      currentPage: page,
      totalPages: 1,
      totalCount: 0,
      limit,
    },
    message: response.message,
  };
}
