import * as checkoutApi from "../api/checkoutApi";

// Checkout 생성
export async function createCheckout(cartItemIds, token) {
  const response = await checkoutApi.createCheckout(cartItemIds, token);

  return {
    success: response.success,
    checkoutId: response.data?.checkoutId ?? null,
    items: response.data?.items ?? [],
    shippingAddress: response.data?.shippingAddress ?? null,
    productAmount: response.data?.productAmount ?? 0,
    shippingFee: response.data?.shippingFee ?? 0,
    appliedPoints: response.data?.appliedPoints ?? 0,
    expectedPoint: response.data?.expectedPoint ?? 0,
    finalAmount: response.data?.finalAmount ?? 0,
    isOrderable: response.data?.isOrderable ?? false,
    message: response.message,
  };
}

// 배송지 목록 조회
export async function getShippingAddresses(token) {
  const response = await checkoutApi.getShippingAddresses(token);

  return {
    success: response.success,
    addresses: response.data?.addresses ?? [],
    message: response.message,
  };
}

// 배송지 추가
export async function addShippingAddress(addressData, token) {
  const response = await checkoutApi.addShippingAddress(addressData, token);

  return {
    success: response.success,
    shippingAddressId: response.data?.shippingAddressId ?? null,
    message: response.message,
  };
}

// 배송지 선택
export async function selectShippingAddress(
  checkoutId,
  shippingAddressId,
  token,
) {
  const response = await checkoutApi.selectShippingAddress(
    checkoutId,
    shippingAddressId,
    token,
  );

  return {
    success: response.success,
    checkoutId: response.data?.checkoutId ?? checkoutId,
    shippingAddress: response.data?.shippingAddress ?? null,
    message: response.message,
  };
}

// 포인트 적용
export async function applyPoints(checkoutId, appliedPoints, token) {
  const response = await checkoutApi.applyPoints(
    checkoutId,
    appliedPoints,
    token,
  );

  return {
    success: response.success,
    checkoutId: response.data?.checkoutId ?? checkoutId,
    appliedPoints: response.data?.appliedPoints ?? 0,
    finalAmount: response.data?.finalAmount ?? 0,
    expectedPoint: response.data?.expectedPoint ?? 0,
    message: response.message,
  };
}

// 주문 요약 조회
export async function getCheckoutSummary(checkoutId, token) {
  const response = await checkoutApi.getCheckoutSummary(checkoutId, token);

  return {
    success: response.success,
    checkoutId: response.data?.checkoutId ?? checkoutId,
    items: response.data?.items ?? [],
    shippingAddress: response.data?.shippingAddress ?? null,
    productAmount: response.data?.productAmount ?? 0,
    shippingFee: response.data?.shippingFee ?? 0,
    appliedPoints: response.data?.appliedPoints ?? 0,
    expectedPoint: response.data?.expectedPoint ?? 0,
    finalAmount: response.data?.finalAmount ?? 0,
    message: response.message,
  };
}

// 주문 가능 여부 검증
export async function validateCheckout(checkoutId, token) {
  const response = await checkoutApi.validateCheckout(checkoutId, token);

  return {
    success: response.success,
    checkoutId: response.data?.checkoutId ?? checkoutId,
    isOrderable: response.data?.isOrderable ?? false,
    reasons: response.data?.reasons ?? [],
    message: response.message,
  };
}
