import * as cartApi from "../api/cartApi";

export const CART_UPDATED_EVENT = "cart-updated";

function notifyCartUpdated() {
  window.dispatchEvent(new CustomEvent(CART_UPDATED_EVENT));
}


export const getCart = async (accessToken) => {
  const response = await cartApi.getCart(accessToken);

  return {
    success: response.success,
    cartItems: response.data?.cartItems ?? [],
    message: response.message,
  };
};


export const addCartItem = async (productId, quantity, accessToken) => {
  const response = await cartApi.addCartItem(productId, quantity, accessToken);

  if (response.success) {
    notifyCartUpdated();
  }

  return {
    success: response.success,
    cartItem: response.data?.cartItem ?? null,
    message: response.message,
  };
};


export const addCartItemsBulk = async (items, accessToken) => {
  const response = await cartApi.addCartItemsBulk(items, accessToken);

  if (response.success) {
    notifyCartUpdated();
  }

  return {
    success: response.success,
    cartItems: response.data?.cartItems ?? [],
    addedItemCount: response.data?.addedItemCount ?? 0,
    message: response.message,
  };
};


export const updateCartItem = async (cartItemId, quantity, accessToken) => {
  const response = await cartApi.updateCartItem(
    cartItemId,
    quantity,
    accessToken,
  );

  if (response.success) {
    notifyCartUpdated();
  }

  return {
    success: response.success,
    cartItem: response.data?.cartItem ?? null,
    message: response.message,
  };
};


export const deleteCartItem = async (cartItemId, accessToken) => {
  const response = await cartApi.deleteCartItem(cartItemId, accessToken);

  if (response.success) {
    notifyCartUpdated();
  }

  return {
    success: response.success,
    message: response.message,
  };
};


export const deleteCartItems = async (cartItemIds, accessToken) => {
  const response = await cartApi.deleteCartItems(cartItemIds, accessToken);

  if (response.success) {
    notifyCartUpdated();
  }

  return {
    success: response.success,
    deletedCartItemIds: response.data?.deletedCartItemIds ?? [],
    message: response.message,
  };
};


export const clearCart = async (accessToken) => {
  const response = await cartApi.clearCart(accessToken);

  if (response.success) {
    notifyCartUpdated();
  }

  return {
    success: response.success,
    message: response.message,
  };
};


export const getCartCount = async (accessToken) => {
  const response = await cartApi.getCartCount(accessToken);

  return {
    success: response.success,
    count: response.data?.count ?? 0,
    message: response.message,
  };
};
