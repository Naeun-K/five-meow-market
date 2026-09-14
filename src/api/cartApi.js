import { apiRequest } from "./apiClient";


export function getCart(token) {
  return apiRequest("/cart", {
    token,
  });
}


export function addCartItem(productId, quantity, token) {
  return apiRequest("/cart/items", {
    method: "POST",
    token,
    body: {
      productId,
      quantity,
    },
  });
}


export function updateCartItem(cartItemId, quantity, token) {
  return apiRequest(`/cart/items/${cartItemId}`, {
    method: "PATCH",
    token,
    body: {
      quantity,
    },
  });
}


export function deleteCartItem(cartItemId, token) {
  return apiRequest(`/cart/items/${cartItemId}`, {
    method: "DELETE",
    token,
  });
}
