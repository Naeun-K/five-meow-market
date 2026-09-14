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


export function getOrders(token) {
  return apiRequest("/orders", {
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
