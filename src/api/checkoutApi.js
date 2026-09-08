import { apiRequest } from "./apiClient";

// Checkout 생성
export function createCheckout(cartItemIds, token) {
  return apiRequest("/checkout", {
    method: "POST",
    token,
    body: {
      cartItemIds,
    },
  });
}

// 포인트 적용
export function applyPoints(checkoutId, points, token) {
  return apiRequest(`/checkout/${checkoutId}/points`, {
    method: "PATCH",
    token,
    body: {
      points,
    },
  });
}

// 주문 요약 조회
export function getCheckout(checkoutId, token) {
  return apiRequest(`/checkout/${checkoutId}`, {
    token,
  });
}

// 주문 가능 여부 확인
export function validateCheckout(checkoutId, token) {
  return apiRequest(`/checkout/${checkoutId}/validate`, {
    token,
  });
}
