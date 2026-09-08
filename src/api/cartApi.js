import { apiRequest } from "./apiClient";

// 장바구니 조회
export function getCart(token) {
  return apiRequest("/cart", {
    token,
  });
}

// 장바구니 상품 추가
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

// 장바구니 상품 수량 변경
export function updateCartItem(cartItemId, quantity, token) {
  return apiRequest(`/cart/items/${cartItemId}`, {
    method: "PATCH",
    token,
    body: {
      quantity,
    },
  });
}

// 장바구니 상품 삭제
export function deleteCartItem(cartItemId, token) {
  return apiRequest(`/cart/items/${cartItemId}`, {
    method: "DELETE",
    token,
  });
}
