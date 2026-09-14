import { apiRequest } from "./apiClient";


export function createCheckout(cartItemIds, token) {
  return apiRequest("/checkout", {
    method: "POST",
    token,
    body: {
      cartItemIds,
    },
  });
}


export function applyPoints(checkoutId, points, token) {
  return apiRequest(`/checkout/${checkoutId}/points`, {
    method: "PATCH",
    token,
    body: {
      points,
    },
  });
}


export function getCheckout(checkoutId, token) {
  return apiRequest(`/checkout/${checkoutId}`, {
    token,
  });
}


export function validateCheckout(checkoutId, token) {
  return apiRequest(`/checkout/${checkoutId}/validate`, {
    token,
  });
}
