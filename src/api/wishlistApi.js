import { apiRequest } from "./apiClient";

// 찜 추가
export function addWishlist(productId, token) {
  return apiRequest("/wishlist", {
    method: "POST",
    token,
    body: {
      productId,
    },
  });
}

// 찜 해제
export function deleteWishlist(productId, token) {
  return apiRequest(`/wishlist/${productId}`, {
    method: "DELETE",
    token,
  });
}

// 찜 목록 조회
export function getWishlist({ page = 1, limit = 10 } = {}, token) {
  const params = new URLSearchParams();

  params.set("page", page);
  params.set("limit", limit);

  return apiRequest(`/wishlist?${params.toString()}`, {
    token,
  });
}
