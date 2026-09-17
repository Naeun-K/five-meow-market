import { apiRequest } from "./apiClient";


export const createCheckout = async (checkoutData, accessToken) => {
  return apiRequest("/checkout", {
    method: "POST",
    token: accessToken,
    body: checkoutData,
  });
};


export const getAddresses = async (accessToken) => {
  return apiRequest("/checkout/addresses", {
    token: accessToken,
  });
};


export const addAddress = async (
  { addressName, recipient, phone, zipCode, address, detailAddress },
  accessToken,
) => {
  return apiRequest("/checkout/addresses", {
    method: "POST",
    token: accessToken,

    body: {
      addressName,
      recipient,
      phone,
      zipCode,
      address,
      detailAddress,
    },
  });
};


export const selectCheckoutAddress = async (
  checkoutId,
  addressId,
  accessToken,
) => {
  return apiRequest(`/checkout/${encodeURIComponent(checkoutId)}/address`, {
    method: "PATCH",
    token: accessToken,

    body: {
      addressId,
    },
  });
};


export const applyCheckoutPoints = async (checkoutId, points, accessToken) => {
  return apiRequest(`/checkout/${encodeURIComponent(checkoutId)}/points`, {
    method: "PATCH",
    token: accessToken,

    body: {
      points,
    },
  });
};


export const getCheckoutSummary = async (checkoutId, accessToken) => {
  return apiRequest(`/checkout/${encodeURIComponent(checkoutId)}/summary`, {
    token: accessToken,
  });
};


export const validateCheckout = async (checkoutId, accessToken) => {
  return apiRequest(`/checkout/${encodeURIComponent(checkoutId)}/validate`, {
    token: accessToken,
  });
};
