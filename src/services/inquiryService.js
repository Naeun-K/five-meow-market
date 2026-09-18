import * as inquiryApi from "../api/inquryApi";

export const createInquiry = async (inquiryData, accessToken) => {
  const response = await inquiryApi.createInquiry(inquiryData, accessToken);

  return {
    success: response.success,

    inquiryId: response.data?.inquiryId ?? null,
    number: response.data?.number ?? null,
    category: response.data?.category ?? null,
    target: response.data?.target ?? null,
    status: response.data?.status ?? null,
    isPrivate: response.data?.isPrivate ?? false,
    createdAt: response.data?.createdAt ?? null,

    message: response.message,
  };
};

export const getInquiries = async (options = {}) => {
  const response = await inquiryApi.getInquiries(options);

  return {
    success: response.success,

    inquiries: response.data?.inquiries ?? [],

    pagination: response.data?.pagination ?? {
      currentPage: options.page ?? 1,
      totalPages: 1,
      totalCount: 0,
      limit: options.limit ?? 10,
    },

    message: response.message,
  };
};

export const getMyInquiries = async (options = {}, accessToken) => {
  const response = await inquiryApi.getMyInquiries(options, accessToken);

  return {
    success: response.success,

    inquiries: response.data?.inquiries ?? [],

    pagination: response.data?.pagination ?? {
      currentPage: options.page ?? 1,
      totalPages: 1,
      totalCount: 0,
      limit: options.limit ?? 10,
    },

    message: response.message,
  };
};

export const getInquiry = async (inquiryId, accessToken) => {
  const response = await inquiryApi.getInquiry(inquiryId, accessToken);

  return {
    success: response.success,
    inquiry: response.data?.inquiry ?? null,
    message: response.message,
  };
};

export const updateInquiry = async (inquiryId, inquiryData, accessToken) => {
  const response = await inquiryApi.updateInquiry(
    inquiryId,
    inquiryData,
    accessToken,
  );

  return {
    success: response.success,

    inquiryId: response.data?.inquiryId ?? inquiryId,

    updatedAt: response.data?.updatedAt ?? null,

    message: response.message,
  };
};

export const deleteInquiry = async (inquiryId, accessToken) => {
  const response = await inquiryApi.deleteInquiry(inquiryId, accessToken);

  return {
    success: response.success,
    message: response.message,
  };
};

export const getInquiryDetail = async (inquiryId, accessToken) => {
  return inquiryApi.getInquiryDetail(inquiryId, accessToken);
};
