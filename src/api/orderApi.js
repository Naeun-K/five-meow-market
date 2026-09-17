import { apiRequest } from "./apiClient";


export const createOrder = async (checkoutId, accessToken) => {
  return apiRequest("/orders", {
    method: "POST",
    token: accessToken,

    body: {
      checkoutId,
    },
  });
};


export const getOrders = async (
  { period, status, keyword, page = 1, limit = 10 } = {},
  accessToken,
) => {
  const searchParams = new URLSearchParams();

  if (period) {
    searchParams.set("period", period);
  }

  if (status) {
    searchParams.set("status", status);
  }

  if (keyword) {
    searchParams.set("keyword", keyword);
  }

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  return apiRequest(`/orders?${searchParams.toString()}`, {
    token: accessToken,
  });
};


export const getOrder = async (orderId, accessToken) => {
  return apiRequest(`/orders/${encodeURIComponent(orderId)}`, {
    token: accessToken,
  });
};


export const confirmOrder = async (orderId, accessToken) => {
  return apiRequest(`/orders/${encodeURIComponent(orderId)}/confirm`, {
    method: "POST",
    token: accessToken,
  });
};
