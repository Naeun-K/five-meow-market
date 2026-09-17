import { apiRequest } from "./apiClient";


export const createClaim = async (claimData, accessToken) => {
  return apiRequest("/claims", {
    method: "POST",
    token: accessToken,
    body: claimData,
  });
};


export const getClaims = async (
  { type, scope, status, page = 1, limit = 10 } = {},
  accessToken,
) => {
  const searchParams = new URLSearchParams();

  if (type) {
    searchParams.set("type", type);
  }

  if (scope) {
    searchParams.set("scope", scope);
  }

  if (status) {
    searchParams.set("status", status);
  }

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  return apiRequest(`/claims?${searchParams.toString()}`, {
    token: accessToken,
  });
};


export const getClaim = async (claimId, accessToken) => {
  return apiRequest(`/claims/${encodeURIComponent(claimId)}`, {
    token: accessToken,
  });
};
