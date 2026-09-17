import * as claimApi from "../api/claimApi";


export const createClaim = async (claimData, accessToken) => {
  const response = await claimApi.createClaim(claimData, accessToken);

  return {
    success: response.success,

    claimId: response.data?.claimId ?? null,

    orderId: response.data?.orderId ?? claimData.orderId ?? null,

    type: response.data?.type ?? claimData.type ?? null,

    scope: response.data?.scope ?? claimData.scope ?? null,

    items: response.data?.items ?? [],

    status: response.data?.status ?? null,

    requestedAt: response.data?.requestedAt ?? null,

    message: response.message,
  };
};


export const getClaims = async (options = {}, accessToken) => {
  const response = await claimApi.getClaims(options, accessToken);

  return {
    success: response.success,

    claims: response.data?.claims ?? [],

    pagination: response.data?.pagination ?? {
      currentPage: options.page ?? 1,
      totalPages: 1,
      totalCount: 0,
      limit: options.limit ?? 10,
    },

    message: response.message,
  };
};


export const getClaim = async (claimId, accessToken) => {
  const response = await claimApi.getClaim(claimId, accessToken);

  return {
    success: response.success,

    claim: response.data?.claim ?? null,

    message: response.message,
  };
};
