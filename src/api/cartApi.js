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

// 장바구니 상품 개별 삭제
export function deleteCartItem(cartItemId, token) {
  return apiRequest(`/cart/items/${cartItemId}`, {
    method: "DELETE",
    token,
  });
}

// 선택한 장바구니 상품 삭제
export function deleteCartItems(cartItemIds, token) {
  return apiRequest("/cart/items", {
    method: "DELETE",
    token,
    body: {
      cartItemIds,
    },
  });
}

// 장바구니 전체 비우기
export function clearCart(token) {
  return apiRequest("/cart", {
    method: "DELETE",
    token,
  });
}

// 장바구니 상품 개수 조회
export function getCartCount(token) {
  return apiRequest("/cart/count", {
    token,
  });
}
