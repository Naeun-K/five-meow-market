import * as reviewApi from "../api/reviewApi";

/**
 * 리뷰 작성 가능 상품 목록 조회
 */
export const getWritableReviews = async (options = {}, accessToken) => {
  const response = await reviewApi.getWritableReviews(options, accessToken);

  return {
    success: response.success,

    items: response.data?.items ?? [],

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
 * 리뷰 작성
 */
export const createReview = async (reviewData, accessToken) => {
  const response = await reviewApi.createReview(reviewData, accessToken);

  return {
    success: response.success,

    reviewId: response.data?.reviewId ?? null,

    orderId: response.data?.orderId ?? null,

    productId: response.data?.productId ?? null,

    createdAt: response.data?.createdAt ?? null,

    message: response.message,
  };
};

/**
 * 전체 리뷰 조회
 */
export const getReviews = async (options = {}) => {
  const response = await reviewApi.getReviews(options);

  return {
    success: response.success,

    reviews: response.data?.reviews ?? [],

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
 * 상품별 리뷰 조회
 */
export const getProductReviews = async (productId, options = {}) => {
  const response = await reviewApi.getProductReviews(productId, options);

  return {
    success: response.success,

    reviews: response.data?.reviews ?? [],

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
 * 내가 작성한 리뷰 조회
 */
export const getMyReviews = async (options = {}, accessToken) => {
  const response = await reviewApi.getMyReviews(options, accessToken);

  return {
    success: response.success,

    reviews: response.data?.reviews ?? [],

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
 * 리뷰 상세 조회
 */
export const getReview = async (reviewId) => {
  const response = await reviewApi.getReview(reviewId);

  return {
    success: response.success,

    review: response.data?.review ?? null,

    message: response.message,
  };
};

/**
 * 리뷰 수정
 */
export const updateReview = async (reviewId, reviewData, accessToken) => {
  const response = await reviewApi.updateReview(
    reviewId,
    reviewData,
    accessToken,
  );

  return {
    success: response.success,

    reviewId: response.data?.reviewId ?? reviewId,

    updatedAt: response.data?.updatedAt ?? null,

    message: response.message,
  };
};

/**
 * 리뷰 삭제
 */
export const deleteReview = async (reviewId, accessToken) => {
  const response = await reviewApi.deleteReview(reviewId, accessToken);

  return {
    success: response.success,
    message: response.message,
  };
};
