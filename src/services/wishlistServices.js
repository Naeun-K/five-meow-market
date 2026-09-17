import * as wishlistApi from "../api/wishlistApi";

// 찜 추가
export async function addWishlist(productId, token) {
  const response = await wishlistApi.addWishlist(productId, token);

  return {
    success: response.success,
    wishlistId: response.data?.wishlistId ?? null,
    productId: response.data?.productId ?? productId,
    isLiked: response.data?.isLiked ?? false,
    createdAt: response.data?.createdAt ?? null,
    message: response.message,
  };
}

// 찜 해제
export async function deleteWishlist(productId, token) {
  const response = await wishlistApi.deleteWishlist(productId, token);

  return {
    success: response.success,
    productId: response.data?.productId ?? productId,
    isLiked: response.data?.isLiked ?? false,
    message: response.message,
  };
}

// 찜 목록 조회
export async function getWishlist({ page = 1, limit = 10 } = {}, token) {
  const response = await wishlistApi.getWishlist(
    {
      page,
      limit,
    },
    token,
  );

  return {
    success: response.success,
    products: response.data?.products ?? [],
    pagination: response.data?.pagination ?? {
      currentPage: 1,
      totalPages: 1,
      totalCount: 0,
      limit,
    },
    message: response.message,
  };
}
