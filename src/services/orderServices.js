// import * as orderApi from "../api/orderApi";

// // 주문 생성
// export async function createOrder(checkoutId, token) {
//   const response = await orderApi.createOrder(checkoutId, token);

//   return {
//     success: response.success,
//     orderId: response.data?.orderId ?? null,
//     status: response.data?.status ?? null,
//     createdAt: response.data?.createdAt ?? null,
//     message: response.message,
//   };
// }

// // 주문 목록 조회
// export async function getOrders(token) {
//   const response = await orderApi.getOrders(token);

//   return {
//     success: response.success,
//     orders: response.data?.orders ?? [],
//     message: response.message,
//   };
// }

// // 주문 상세 조회
// export async function getOrder(orderId, token) {
//   const response = await orderApi.getOrder(orderId, token);

//   return {
//     success: response.success,
//     order: response.data?.order ?? null,
//     message: response.message,
//   };
// }

// // 구매 확정
// export async function confirmOrder(orderId, token) {
//   const response = await orderApi.confirmOrder(orderId, token);

//   return {
//     success: response.success,
//     orderId: response.data?.orderId ?? orderId,
//     status: response.data?.status ?? null,
//     confirmedAt: response.data?.confirmedAt ?? null,
//     message: response.message,
//   };
// }

import * as orderApi from "../api/orderApi";

export async function createOrder(checkoutId, token) {
  const response = await orderApi.createOrder(checkoutId, token);

  return {
    success: response.success,
    orderId: response.data?.orderId ?? null,
    status: response.data?.status ?? null,
    createdAt: response.data?.createdAt ?? null,
    message: response.message,
  };
}

export async function getOrders(
  { period = "all", status = "ALL", keyword = "", page = 1, limit = 5 } = {},
  token,
) {
  const response = await orderApi.getOrders(
    {
      period,
      status,
      keyword,
      page,
      limit,
    },
    token,
  );

  return {
    success: response.success,
    orders: response.data?.orders ?? [],
    pagination: response.data?.pagination ?? {
      currentPage: 1,
      totalPages: 1,
      totalCount: 0,
      limit,
    },
    message: response.message,
  };
}

export async function getOrder(orderId, token) {
  const response = await orderApi.getOrder(orderId, token);

  return {
    success: response.success,
    order: response.data?.order ?? null,
    message: response.message,
  };
}

export async function confirmOrder(orderId, token) {
  const response = await orderApi.confirmOrder(orderId, token);

  return {
    success: response.success,
    orderId: response.data?.orderId ?? orderId,
    status: response.data?.status ?? null,
    confirmedAt: response.data?.confirmedAt ?? null,
    message: response.message,
  };
}
