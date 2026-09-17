


































































































































































import { apiRequest } from "./apiClient";


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


export const createReview = async (reviewData, accessToken) => {
  return apiRequest("/reviews", {
    method: "POST",
    token: accessToken,
    body: reviewData,
  });
};


export const getReviews = async ({ page = 1, limit = 10, period } = {}) => {
  const searchParams = new URLSearchParams();

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  if (period) {
    searchParams.set("period", period);
  }

  return apiRequest(`/reviews?${searchParams.toString()}`);
};


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


export const getReview = async (reviewId) => {
  return apiRequest(`/reviews/${encodeURIComponent(reviewId)}`);
};


export const updateReview = async (reviewId, reviewData, accessToken) => {
  return apiRequest(`/reviews/${encodeURIComponent(reviewId)}`, {
    method: "PATCH",
    token: accessToken,
    body: reviewData,
  });
};


export const deleteReview = async (reviewId, accessToken) => {
  return apiRequest(`/reviews/${encodeURIComponent(reviewId)}`, {
    method: "DELETE",
    token: accessToken,
  });
};
