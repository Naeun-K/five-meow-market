import * as cartApi from "../api/cartApi";

// 장바구니 조회
export async function getCart(token) {
  const response = await cartApi.getCart(token);

  return {
    success: response.success,
    items: response.data?.items ?? [],
    summary: response.data?.summary ?? null,
    message: response.message,
  };
}

// 장바구니 상품 추가
export async function addCartItem(productId, quantity, token) {
  const response = await cartApi.addCartItem(productId, quantity, token);

  return {
    success: response.success,
    cartItemId: response.data?.cartItemId ?? null,
    productId: response.data?.productId ?? productId,
    quantity: response.data?.quantity ?? quantity,
    message: response.message,
  };
}

// 장바구니 상품 수량 변경
export async function updateCartItem(cartItemId, quantity, token) {
  const response = await cartApi.updateCartItem(cartItemId, quantity, token);

  return {
    success: response.success,
    cartItemId: response.data?.cartItemId ?? cartItemId,
    quantity: response.data?.quantity ?? quantity,
    itemAmount: response.data?.itemAmount ?? 0,
    message: response.message,
  };
}

// 장바구니 상품 개별 삭제
export async function deleteCartItem(cartItemId, token) {
  const response = await cartApi.deleteCartItem(cartItemId, token);

  return {
    success: response.success,
    message: response.message,
  };
}

// 선택한 장바구니 상품 삭제
export async function deleteCartItems(cartItemIds, token) {
  const response = await cartApi.deleteCartItems(cartItemIds, token);

  return {
    success: response.success,
    deletedCount: response.data?.deletedCount ?? 0,
    message: response.message,
  };
}

// 장바구니 전체 비우기
export async function clearCart(token) {
  const response = await cartApi.clearCart(token);

  return {
    success: response.success,
    message: response.message,
  };
}

// 장바구니 상품 개수 조회
export async function getCartCount(token) {
  const response = await cartApi.getCartCount(token);

  return {
    success: response.success,
    count: response.data?.count ?? 0,
    message: response.message,
  };
}
