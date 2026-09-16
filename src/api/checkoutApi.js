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

// 배송지 목록 조회
export function getShippingAddresses(token) {
  return apiRequest("/checkout/addresses", {
    token,
  });
}

// 배송지 추가
export function addShippingAddress(addressData, token) {
  return apiRequest("/checkout/addresses", {
    method: "POST",
    token,
    body: addressData,
  });
}

// 배송지 선택
export function selectShippingAddress(checkoutId, shippingAddressId, token) {
  return apiRequest(`/checkout/${checkoutId}/address`, {
    method: "PATCH",
    token,
    body: {
      shippingAddressId,
    },
  });
}

// 포인트 적용
export function applyPoints(checkoutId, appliedPoints, token) {
  return apiRequest(`/checkout/${checkoutId}/points`, {
    method: "PATCH",
    token,
    body: {
      appliedPoints,
    },
  });
}

// 주문 요약 조회
export function getCheckoutSummary(checkoutId, token) {
  return apiRequest(`/checkout/${checkoutId}/summary`, {
    token,
  });
}

// 주문 가능 여부 검증
export function validateCheckout(checkoutId, token) {
  return apiRequest(`/checkout/${checkoutId}/validate`, {
    token,
  });
}
