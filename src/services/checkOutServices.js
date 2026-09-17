import * as checkoutApi from "../api/checkoutApi";

/**
 * Checkout 생성
 *
 * 장바구니:
 * createCheckout(
 *   { cartItemIds: [...] },
 *   accessToken,
 * )
 *
 * 바로구매:
 * createCheckout(
 *   {
 *     items: [
 *       {
 *         productId,
 *         quantity,
 *       },
 *     ],
 *   },
 *   accessToken,
 * )
 */
export const createCheckout = async (checkoutData, accessToken) => {
  const response = await checkoutApi.createCheckout(checkoutData, accessToken);

  return {
    success: response.success,
    checkoutId: response.data?.checkoutId ?? null,
    selectedAddressId: response.data?.selectedAddressId ?? null,
    message: response.message,
  };
};

/**
 * 배송지 목록 조회
 */
export const getAddresses = async (accessToken) => {
  const response = await checkoutApi.getAddresses(accessToken);

  return {
    success: response.success,
    addresses: response.data?.addresses ?? [],
    message: response.message,
  };
};

/**
 * 배송지 추가
 */
// export const addAddress = async (addressData, accessToken) => {
//   const response = await checkoutApi.addAddress(addressData, accessToken);

//   return {
//     success: response.success,
//     recipient: response.data?.recipient ?? "",
//     phone: response.data?.phone ?? "",
//     address: response.data?.address ?? "",
//     message: response.message,
//   };
// };
export const addAddress = async (addressData, accessToken) => {
  const response = await checkoutApi.addAddress(addressData, accessToken);

  return {
    success: response.success,

    recipient: response.data?.recipient ?? "",
    phone: response.data?.phone ?? "",
    zipCode: response.data?.zipCode ?? "",
    address: response.data?.address ?? "",
    detailAddress: response.data?.detailAddress ?? "",

    message: response.message,
  };
};

/**
 * Checkout 배송지 선택
 */
export const selectCheckoutAddress = async (
  checkoutId,
  addressId,
  accessToken,
) => {
  const response = await checkoutApi.selectCheckoutAddress(
    checkoutId,
    addressId,
    accessToken,
  );

  return {
    success: response.success,
    checkoutId: response.data?.checkoutId ?? checkoutId,
    selectedAddressId: response.data?.selectedAddressId ?? null,
    message: response.message,
  };
};

/**
 * Checkout 적립금 적용
 */
export const applyCheckoutPoints = async (checkoutId, points, accessToken) => {
  const response = await checkoutApi.applyCheckoutPoints(
    checkoutId,
    points,
    accessToken,
  );

  return {
    success: response.success,
    appliedPoints: response.data?.appliedPoints ?? 0,
    expectedPoint: response.data?.expectedPoint ?? 0,
    finalAmount: response.data?.finalAmount ?? 0,
    message: response.message,
  };
};

/**
 * Checkout 주문 요약 조회
 */
export const getCheckoutSummary = async (checkoutId, accessToken) => {
  const response = await checkoutApi.getCheckoutSummary(
    checkoutId,
    accessToken,
  );

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
};

/**
 * Checkout 주문 가능 여부 검증
 */
export const validateCheckout = async (checkoutId, accessToken) => {
  const response = await checkoutApi.validateCheckout(checkoutId, accessToken);

  return {
    success: response.success,
    isValid: response.data?.isValid ?? false,
    reasons: response.data?.reasons ?? [],
    message: response.message,
  };
};
