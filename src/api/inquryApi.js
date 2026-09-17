import { apiRequest } from "./apiClient";


export const createInquiry = async (inquiryData, accessToken) => {
  return apiRequest("/inquiries", {
    method: "POST",
    token: accessToken,
    body: inquiryData,
  });
};


export const getInquiries = async ({
  page = 1,
  limit = 10,
  category,
  status,
} = {}) => {
  const searchParams = new URLSearchParams();

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  if (category) {
    searchParams.set("category", category);
  }

  if (status) {
    searchParams.set("status", status);
  }

  return apiRequest(`/inquiries?${searchParams.toString()}`);
};


export const getMyInquiries = async (
  { page = 1, limit = 10, category, status } = {},
  accessToken,
) => {
  const searchParams = new URLSearchParams();

  searchParams.set("page", String(page));
  searchParams.set("limit", String(limit));

  if (category) {
    searchParams.set("category", category);
  }

  if (status) {
    searchParams.set("status", status);
  }

  return apiRequest(`/users/me/inquiries?${searchParams.toString()}`, {
    token: accessToken,
  });
};


export const getInquiry = async (inquiryId, accessToken) => {
  return apiRequest(`/inquiries/${encodeURIComponent(inquiryId)}`, {
    token: accessToken,
  });
};


export const updateInquiry = async (inquiryId, inquiryData, accessToken) => {
  return apiRequest(`/inquiries/${encodeURIComponent(inquiryId)}`, {
    method: "PATCH",
    token: accessToken,
    body: inquiryData,
  });
};


export const deleteInquiry = async (inquiryId, accessToken) => {
  return apiRequest(`/inquiries/${encodeURIComponent(inquiryId)}`, {
    method: "DELETE",
    token: accessToken,
  });
};
