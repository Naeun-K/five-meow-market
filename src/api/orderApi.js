// import { apiRequest } from "./apiClient";

// // 주문 생성
// export function createOrder(checkoutId, token) {
//   return apiRequest("/orders", {
//     method: "POST",
//     token,
//     body: {
//       checkoutId,
//     },
//   });
// }

// // 주문 목록 조회
// export function getOrders(token) {
//   return apiRequest("/orders", {
//     token,
//   });
// }

// // 주문 상세 조회
// export function getOrder(orderId, token) {
//   return apiRequest(`/orders/${orderId}`, {
//     token,
//   });
// }

// // 구매 확정
// export function confirmOrder(orderId, token) {
//   return apiRequest(`/orders/${orderId}/confirm`, {
//     method: "POST",
//     token,
//   });
// }

import { apiRequest } from "./apiClient";

export function createOrder(checkoutId, token) {
  return apiRequest("/orders", {
    method: "POST",
    token,
    body: {
      checkoutId,
    },
  });
}

export function getOrders(
  { period = "all", status = "ALL", keyword = "", page = 1, limit = 5 } = {},
  token,
) {
  const params = new URLSearchParams();

  params.set("period", period);
  params.set("status", status);

  if (keyword.trim()) {
    params.set("keyword", keyword.trim());
  }

  params.set("page", page);
  params.set("limit", limit);

  return apiRequest(`/orders?${params.toString()}`, {
    token,
  });
}

export function getOrder(orderId, token) {
  return apiRequest(`/orders/${orderId}`, {
    token,
  });
}

export function confirmOrder(orderId, token) {
  return apiRequest(`/orders/${orderId}/confirm`, {
    method: "POST",
    token,
  });
}
