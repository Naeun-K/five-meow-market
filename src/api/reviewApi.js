import { apiRequest } from "./apiClient";

/**
 * 리뷰 작성 가능 상품 목록 조회
 *
 * GET /users/me/reviews/writable
 */
export const getWritableReviews = async (
  { page = 1, limit = 10 } = {},
  accessToken,
) => {
  const searchParams = new URLSearchParams();

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  return apiRequest(`/users/me/reviews/writable?${searchParams.toString()}`, {
    token: accessToken,
  });
};

/**
 * 리뷰 작성
 *
 * POST /reviews
 *
 * body:
 * {
 *   orderId,
 *   productId,
 *   rating,
 *   content,
 *   images
 * }
 */
export const createReview = async (reviewData, accessToken) => {
  return apiRequest("/reviews", {
    method: "POST",
    token: accessToken,
    body: reviewData,
  });
};

/**
 * 전체 리뷰 조회
 *
 * GET /reviews
 *
 * Query:
 * page
 * limit
 * period?
 */
export const getReviews = async ({ page = 1, limit = 10, period } = {}) => {
  const searchParams = new URLSearchParams();

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  if (period) {
    searchParams.set("period", period);
  }

  return apiRequest(`/reviews?${searchParams.toString()}`);
};

/**
 * 상품별 리뷰 조회
 *
 * GET /products/:productId/reviews
 *
 * Query:
 * page
 * limit
 * sort
 * period?
 */
export const getProductReviews = async (
  productId,
  { page = 1, limit = 10, sort, period } = {},
) => {
  const searchParams = new URLSearchParams();

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  if (sort) {
    searchParams.set("sort", sort);
  }

  if (period) {
    searchParams.set("period", period);
  }

  return apiRequest(
    `/products/${encodeURIComponent(
      productId,
    )}/reviews?${searchParams.toString()}`,
  );
};

/**
 * 내가 작성한 리뷰 조회
 *
 * GET /users/me/reviews
 */
export const getMyReviews = async (
  { page = 1, limit = 10, period } = {},
  accessToken,
) => {
  const searchParams = new URLSearchParams();

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  if (period) {
    searchParams.set("period", period);
  }

  return apiRequest(`/users/me/reviews?${searchParams.toString()}`, {
    token: accessToken,
  });
};

/**
 * 리뷰 상세 조회
 *
 * GET /reviews/:reviewId
 */
export const getReview = async (reviewId) => {
  return apiRequest(`/reviews/${encodeURIComponent(reviewId)}`);
};

/**
 * 리뷰 수정
 *
 * PATCH /reviews/:reviewId
 *
 * 변경 가능한 필드:
 * rating?
 * content?
 * images?
 */
export const updateReview = async (reviewId, reviewData, accessToken) => {
  return apiRequest(`/reviews/${encodeURIComponent(reviewId)}`, {
    method: "PATCH",
    token: accessToken,
    body: reviewData,
  });
};

/**
 * 리뷰 삭제
 *
 * DELETE /reviews/:reviewId
 */
export const deleteReview = async (reviewId, accessToken) => {
  return apiRequest(`/reviews/${encodeURIComponent(reviewId)}`, {
    method: "DELETE",
    token: accessToken,
  });
};
