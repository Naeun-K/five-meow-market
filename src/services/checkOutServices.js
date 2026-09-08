import * as checkoutApi from "../api/checkoutApi";

export async function createCheckout(cartItemIds, token) {
  return checkoutApi.createCheckout(cartItemIds, token);
}

export async function applyPoints(checkoutId, points, token) {
  return checkoutApi.applyPoints(checkoutId, points, token);
}

export async function getCheckout(checkoutId, token) {
  return checkoutApi.getCheckout(checkoutId, token);
}

export async function validateCheckout(checkoutId, token) {
  return checkoutApi.validateCheckout(checkoutId, token);
}
