import * as orderApi from "../api/orderApi";

/**
 * 주문 생성
 */
export const createOrder = async (checkoutId, accessToken) => {
  const response = await orderApi.createOrder(checkoutId, accessToken);

  return {
    success: response.success,

    orderId: response.data?.orderId ?? null,

    status: response.data?.status ?? null,

    payment: response.data?.payment ?? null,

    pointBalance: response.data?.pointBalance ?? 0,

    createdAt: response.data?.createdAt ?? null,

    message: response.message,
  };
};

/**
 * 주문 목록 조회
 */
export const getOrders = async (options = {}, accessToken) => {
  const response = await orderApi.getOrders(options, accessToken);

  return {
    success: response.success,

    orders: response.data?.orders ?? [],

    pagination: response.data?.pagination ?? {
      currentPage: options.page ?? 1,
      totalPages: 1,
      totalCount: 0,
      limit: options.limit ?? 10,
    },

    message: response.message,
  };
};

/**
 * 주문 상세 조회
 */
export const getOrder = async (orderId, accessToken) => {
  const response = await orderApi.getOrder(orderId, accessToken);

  return {
    success: response.success,

    order: response.data?.order ?? null,

    message: response.message,
  };
};

/**
 * 구매확정
 */
export const confirmOrder = async (orderId, accessToken) => {
  const response = await orderApi.confirmOrder(orderId, accessToken);

  return {
    success: response.success,

    orderId: response.data?.orderId ?? orderId,

    status: response.data?.status ?? null,

    confirmedAt: response.data?.confirmedAt ?? null,

    message: response.message,
  };
};
