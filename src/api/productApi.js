import { apiRequest } from "./apiClient";


export const getProducts = async ({
  category,
  keyword,
  tag,
  page = 1,
  limit = 8,
} = {}) => {
  const searchParams = new URLSearchParams();

  if (category) {
    searchParams.set("category", category);
  }

  if (keyword) {
    searchParams.set("keyword", keyword);
  }

  if (tag) {
    searchParams.set("tag", tag);
  }

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  return apiRequest(`/products?${searchParams.toString()}`);
};


export const getProduct = async (productId) => {
  return apiRequest(`/products/${encodeURIComponent(productId)}`);
};


export const getRelatedProducts = async (productId) => {
  return apiRequest(`/products/${encodeURIComponent(productId)}/related`);
};


export const getBestProducts = async ({ page, limit } = {}) => {
  const searchParams = new URLSearchParams();

  if (page !== undefined) {
    searchParams.set("page", String(page));
  }

  if (limit !== undefined) {
    searchParams.set("limit", String(limit));
  }

  const query = searchParams.toString();

  return apiRequest(query ? `/products/best?${query}` : "/products/best");
};


export const getNewProducts = async ({ page, limit } = {}) => {
  const searchParams = new URLSearchParams();

  if (page !== undefined) {
    searchParams.set("page", String(page));
  }

  if (limit !== undefined) {
    searchParams.set("limit", String(limit));
  }

  const query = searchParams.toString();

  return apiRequest(query ? `/products/new?${query}` : "/products/new");
};


export const getMainProducts = async () => {
  return apiRequest("/products/main");
};
