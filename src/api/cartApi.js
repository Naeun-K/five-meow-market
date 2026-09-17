import { apiRequest } from "./apiClient";


export const getCart = async (accessToken) => {
  return apiRequest("/cart", {
    token: accessToken,
  });
};


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


export const addCartItemsBulk = async (items, accessToken) => {
  return apiRequest("/cart/items/bulk", {
    method: "POST",
    token: accessToken,

    body: {
      items,
    },
  });
};


export const updateCartItem = async (cartItemId, quantity, accessToken) => {
  return apiRequest(`/cart/items/${encodeURIComponent(cartItemId)}`, {
    method: "PATCH",
    token: accessToken,

    body: {
      quantity,
    },
  });
};


export const deleteCartItem = async (cartItemId, accessToken) => {
  return apiRequest(`/cart/items/${encodeURIComponent(cartItemId)}`, {
    method: "DELETE",
    token: accessToken,
  });
};


export const deleteCartItems = async (cartItemIds, accessToken) => {
  return apiRequest("/cart/items", {
    method: "DELETE",
    token: accessToken,

    body: {
      cartItemIds,
    },
  });
};


export const clearCart = async (accessToken) => {
  return apiRequest("/cart", {
    method: "DELETE",
    token: accessToken,
  });
};


export const getCartCount = async (accessToken) => {
  return apiRequest("/cart/count", {
    token: accessToken,
  });
};
