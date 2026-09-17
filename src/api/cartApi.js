import { apiRequest } from "./apiClient";

/**
 * 장바구니 조회
 *
 * GET /cart
 */
export const getCart = async (accessToken) => {
  return apiRequest("/cart", {
    token: accessToken,
  });
};

/**
 * 장바구니 상품 추가
 *
 * POST /cart/items
 *
 * body:
 * {
 *   productId,
 *   quantity
 * }
 */
export const addCartItem = async (productId, quantity, accessToken) => {
  return apiRequest("/cart/items", {
    method: "POST",
    token: accessToken,

    body: {
      productId,
      quantity,
    },
  });
};

/**
 * 여러 상품 일괄 추가
 *
 * POST /cart/items/bulk
 *
 * body:
 * {
 *   items: [
 *     {
 *       productId,
 *       quantity
 *     }
 *   ]
 * }
 */
export const addCartItemsBulk = async (items, accessToken) => {
  return apiRequest("/cart/items/bulk", {
    method: "POST",
    token: accessToken,

    body: {
      items,
    },
  });
};

/**
 * 장바구니 수량 변경
 *
 * PATCH /cart/items/:cartItemId
 */
export const updateCartItem = async (cartItemId, quantity, accessToken) => {
  return apiRequest(`/cart/items/${encodeURIComponent(cartItemId)}`, {
    method: "PATCH",
    token: accessToken,

    body: {
      quantity,
    },
  });
};

/**
 * 장바구니 상품 하나 삭제
 *
 * DELETE /cart/items/:cartItemId
 */
export const deleteCartItem = async (cartItemId, accessToken) => {
  return apiRequest(`/cart/items/${encodeURIComponent(cartItemId)}`, {
    method: "DELETE",
    token: accessToken,
  });
};

/**
 * 선택 상품 삭제
 *
 * DELETE /cart/items
 *
 * body:
 * {
 *   cartItemIds: []
 * }
 */
export const deleteCartItems = async (cartItemIds, accessToken) => {
  return apiRequest("/cart/items", {
    method: "DELETE",
    token: accessToken,

    body: {
      cartItemIds,
    },
  });
};

/**
 * 장바구니 전체 삭제
 *
 * DELETE /cart
 */
export const clearCart = async (accessToken) => {
  return apiRequest("/cart", {
    method: "DELETE",
    token: accessToken,
  });
};

/**
 * 장바구니 상품 개수 조회
 *
 * GET /cart/count
 */
export const getCartCount = async (accessToken) => {
  return apiRequest("/cart/count", {
    token: accessToken,
  });
};
