import { apiRequest } from "./apiClient";

/**
 * 찜 추가
 *
 * POST /wishlist
 *
 * body:
 * {
 *   productId
 * }
 */
export const addWishlist = async (productId, accessToken) => {
  return apiRequest("/wishlist", {
    method: "POST",
    token: accessToken,

    body: {
      productId,
    },
  });
};

/**
 * 찜 해제
 *
 * DELETE /wishlist/:productId
 */
export const removeWishlist = async (productId, accessToken) => {
  return apiRequest(`/wishlist/${encodeURIComponent(productId)}`, {
    method: "DELETE",
    token: accessToken,
  });
};

/**
 * 찜 목록 조회
 *
 * GET /wishlist
 *
 * Query:
 * page
 * limit
 */
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
