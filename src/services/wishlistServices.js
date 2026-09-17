import * as wishlistApi from "../api/wishlistApi";


export const addWishlist = async (productId, accessToken) => {
  const response = await wishlistApi.addWishlist(productId, accessToken);

  return {
    success: response.success,

    wishlistId: response.data?.wishlistId ?? null,

    productId: response.data?.productId ?? productId,

    isLiked: response.data?.isLiked ?? true,

    createdAt: response.data?.createdAt ?? null,

    message: response.message,
  };
};


export const removeWishlist = async (productId, accessToken) => {
  const response = await wishlistApi.removeWishlist(productId, accessToken);

  return {
    success: response.success,

    productId: response.data?.productId ?? productId,

    isLiked: response.data?.isLiked ?? false,

    message: response.message,
  };
};


export const getWishlist = async (options = {}, accessToken) => {
  const response = await wishlistApi.getWishlist(options, accessToken);

  return {
    success: response.success,

    wishlistItems: response.data?.wishlistItems ?? [],

    pagination: response.data?.pagination ?? {
      currentPage: options.page ?? 1,
      totalPages: 1,
      totalCount: 0,
      limit: options.limit ?? 10,
    },

    message: response.message,
  };
};
