import * as cartApi from "../api/cartApi";

/**
 * 장바구니 조회
 */
export const getCart = async (accessToken) => {
  const response = await cartApi.getCart(accessToken);

  return {
    success: response.success,
    cartItems: response.data?.cartItems ?? [],
    message: response.message,
  };
};

/**
 * 장바구니 상품 추가
 */
export const addCartItem = async (productId, quantity, accessToken) => {
  const response = await cartApi.addCartItem(productId, quantity, accessToken);

  return {
    success: response.success,
    cartItem: response.data?.cartItem ?? null,
    message: response.message,
  };
};

/**
 * 장바구니 여러 상품 일괄 추가
 */
export const addCartItemsBulk = async (items, accessToken) => {
  const response = await cartApi.addCartItemsBulk(items, accessToken);

  return {
    success: response.success,
    cartItems: response.data?.cartItems ?? [],
    addedItemCount: response.data?.addedItemCount ?? 0,
    message: response.message,
  };
};

/**
 * 장바구니 상품 수량 변경
 */
export const updateCartItem = async (cartItemId, quantity, accessToken) => {
  const response = await cartApi.updateCartItem(
    cartItemId,
    quantity,
    accessToken,
  );

  return {
    success: response.success,
    cartItem: response.data?.cartItem ?? null,
    message: response.message,
  };
};

/**
 * 장바구니 상품 하나 삭제
 */
export const deleteCartItem = async (cartItemId, accessToken) => {
  const response = await cartApi.deleteCartItem(cartItemId, accessToken);

  return {
    success: response.success,
    message: response.message,
  };
};

/**
 * 장바구니 선택 상품 삭제
 */
export const deleteCartItems = async (cartItemIds, accessToken) => {
  const response = await cartApi.deleteCartItems(cartItemIds, accessToken);

  return {
    success: response.success,
    deletedCartItemIds: response.data?.deletedCartItemIds ?? [],
    message: response.message,
  };
};

/**
 * 장바구니 전체 삭제
 */
export const clearCart = async (accessToken) => {
  const response = await cartApi.clearCart(accessToken);

  return {
    success: response.success,
    message: response.message,
  };
};

/**
 * 장바구니 상품 개수 조회
 */
export const getCartCount = async (accessToken) => {
  const response = await cartApi.getCartCount(accessToken);

  return {
    success: response.success,
    count: response.data?.count ?? 0,
    message: response.message,
  };
};
