const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// 내 정보 조회
export async function getMyInfo(accessToken) {
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
}

// 회원정보 수정
export async function updateMyInfo(updateData, accessToken) {
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(updateData),
  });

  return response.json();
}

// 회원탈퇴
export async function deleteAccount(accessToken) {
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
}

// 보유 적립금 조회
export async function getMyPoint(accessToken) {
  const response = await fetch(`${BASE_URL}/users/me/point`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
}

// 적립금 내역 조회
export async function getPointHistory(accessToken) {
  const response = await fetch(`${BASE_URL}/users/me/point/history`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
}
