import { apiRequest } from "./apiClient";


export const addWishlist = async (productId, accessToken) => {
  return apiRequest("/wishlist", {
    method: "POST",
    token: accessToken,

    body: {
      productId,
    },
  });
};


export const removeWishlist = async (productId, accessToken) => {
  return apiRequest(`/wishlist/${encodeURIComponent(productId)}`, {
    method: "DELETE",
    token: accessToken,
  });
};


export const getWishlist = async (
  { page = 1, limit = 10 } = {},
  accessToken,
) => {
  const searchParams = new URLSearchParams();

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  return apiRequest(`/wishlist?${searchParams.toString()}`, {
    token: accessToken,
  });
};
