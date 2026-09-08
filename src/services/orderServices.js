import * as orderApi from "../api/orderApi";

export async function createOrder(checkoutId, token) {
  return orderApi.createOrder(checkoutId, token);
}

export async function getOrders(token) {
  return orderApi.getOrders(token);
}

export async function getOrder(orderId, token) {
  return orderApi.getOrder(orderId, token);
}

export async function confirmOrder(orderId, token) {
  return orderApi.confirmOrder(orderId, token);
}
