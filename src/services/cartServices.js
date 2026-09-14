import * as cartApi from "../api/cartApi";

export async function getCart(token) {
  return cartApi.getCart(token);
}

export async function addCartItem(productId, quantity, token) {
  return cartApi.addCartItem(productId, quantity, token);
}

export async function updateCartItem(cartItemId, quantity, token) {
  return cartApi.updateCartItem(cartItemId, quantity, token);
}

export async function deleteCartItem(cartItemId, token) {
  return cartApi.deleteCartItem(cartItemId, token);
}
