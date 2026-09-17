







































































































import * as productApi from "../api/productApi";


export const getProducts = async (options = {}) => {
  const response = await productApi.getProducts(options);

  return {
    success: response.success,
    products: response.data?.products ?? [],
    pagination: response.data?.pagination ?? {
      currentPage: options.page ?? 1,
      totalPages: 1,
      totalCount: 0,
      limit: options.limit ?? 8,
    },
    message: response.message,
  };
};


export const getProduct = async (productId) => {
  const response = await productApi.getProduct(productId);

  return {
    success: response.success,
    product: response.data?.product ?? null,
    message: response.message,
  };
};


export const getRelatedProducts = async (productId) => {
  const response = await productApi.getRelatedProducts(productId);

  return {
    success: response.success,
    products: response.data?.products ?? [],
    message: response.message,
  };
};


export const getBestProducts = async (options = {}) => {
  const response = await productApi.getBestProducts(options);

  return {
    success: response.success,
    products: response.data?.products ?? [],
    pagination: response.data?.pagination ?? null,
    message: response.message,
  };
};


export const getNewProducts = async (options = {}) => {
  const response = await productApi.getNewProducts(options);

  return {
    success: response.success,
    products: response.data?.products ?? [],
    pagination: response.data?.pagination ?? null,
    message: response.message,
  };
};


export const getMainProducts = async () => {
  const response = await productApi.getMainProducts();

  return {
    success: response.success,
    bestProducts: response.data?.bestProducts ?? [],
    newProducts: response.data?.newProducts ?? [],
    message: response.message,
  };
};
