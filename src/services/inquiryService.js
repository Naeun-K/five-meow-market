// import * as inquiryApi from "../api/inquryApi";

// const DEFAULT_PAGE = 1;
// const DEFAULT_LIMIT = 10;

// const INQUIRY_CATEGORIES = ["product", "delivery", "order", "exchange", "etc"];

// const INQUIRY_STATUSES = ["WAITING", "ANSWERED"];

// const normalizePagination = ({
//   page = DEFAULT_PAGE,
//   limit = DEFAULT_LIMIT,
// } = {}) => {
//   const normalizedPage = Number(page);
//   const normalizedLimit = Number(limit);

//   return {
//     page:
//       Number.isInteger(normalizedPage) && normalizedPage > 0
//         ? normalizedPage
//         : DEFAULT_PAGE,

//     limit:
//       Number.isInteger(normalizedLimit) && normalizedLimit > 0
//         ? normalizedLimit
//         : DEFAULT_LIMIT,
//   };
// };

// const validateToken = (token) => {
//   if (!token) {
//     throw new Error("로그인이 필요합니다.");
//   }

//   return token;
// };

// const validateInquiryId = (inquiryId) => {
//   if (typeof inquiryId !== "string" || !inquiryId.trim()) {
//     throw new Error("문의 ID가 필요합니다.");
//   }

//   return inquiryId.trim();
// };

// const validateCategory = (category) => {
//   if (!INQUIRY_CATEGORIES.includes(category)) {
//     throw new Error("올바른 문의 유형을 선택해주세요.");
//   }

//   return category;
// };

// const validateStatus = (status) => {
//   if (
//     status !== undefined &&
//     status !== null &&
//     status !== "" &&
//     !INQUIRY_STATUSES.includes(status)
//   ) {
//     throw new Error("올바른 답변 상태를 선택해주세요.");
//   }

//   return status || undefined;
// };

// const validateOrderId = (orderId) => {
//   if (typeof orderId !== "string" || !orderId.trim()) {
//     throw new Error("문의할 상품의 주문 정보를 선택해주세요.");
//   }

//   return orderId.trim();
// };

// const validateProductId = (productId) => {
//   if (typeof productId !== "string" || !productId.trim()) {
//     throw new Error("문의할 상품을 선택해주세요.");
//   }

//   return productId.trim();
// };

// const validateTitle = (title) => {
//   if (typeof title !== "string" || !title.trim()) {
//     throw new Error("문의 제목을 입력해주세요.");
//   }

//   return title.trim();
// };

// const validateContent = (content) => {
//   if (typeof content !== "string" || !content.trim()) {
//     throw new Error("문의 내용을 입력해주세요.");
//   }

//   return content.trim();
// };

// const validateIsPrivate = (isPrivate) => {
//   if (typeof isPrivate !== "boolean") {
//     throw new Error("비밀글 여부를 확인해주세요.");
//   }

//   return isPrivate;
// };

// const normalizeInquiryTarget = ({ category, orderId, productId }) => {
//   if (category === "product") {
//     return {
//       orderId: validateOrderId(orderId),
//       productId: validateProductId(productId),
//     };
//   }

//   return {
//     orderId: null,
//     productId: null,
//   };
// };

// /**
//  * 문의 작성
//  *
//  * 상품 문의인 경우 orderId와 productId가 필요하다.
//  * 그 외 문의는 orderId와 productId를 null로 전달한다.
//  */
// export async function createInquiry(
//   {
//     category,
//     orderId = null,
//     productId = null,
//     title,
//     content,
//     isPrivate = false,
//   },
//   token,
// ) {
//   validateToken(token);

//   const normalizedCategory = validateCategory(category);

//   const inquiryTarget = normalizeInquiryTarget({
//     category: normalizedCategory,
//     orderId,
//     productId,
//   });

//   const inquiryData = {
//     category: normalizedCategory,
//     ...inquiryTarget,
//     title: validateTitle(title),
//     content: validateContent(content),
//     isPrivate: validateIsPrivate(isPrivate),
//   };

//   return inquiryApi.createInquiry(inquiryData, token);
// }

// /**
//  * Q&A 전체 문의 목록 조회
//  *
//  * 로그인하지 않은 사용자도 조회할 수 있다.
//  */
// export async function getInquiries(params = {}) {
//   const pagination = normalizePagination(params);

//   const category = params.category
//     ? validateCategory(params.category)
//     : undefined;

//   const status = validateStatus(params.status);

//   return inquiryApi.getInquiries({
//     ...pagination,
//     category,
//     status,
//   });
// }

// /**
//  * 내가 작성한 문의 목록 조회
//  */
// export async function getMyInquiries(params = {}, token) {
//   validateToken(token);

//   const pagination = normalizePagination(params);

//   const category = params.category
//     ? validateCategory(params.category)
//     : undefined;

//   const status = validateStatus(params.status);

//   return inquiryApi.getMyInquiries(
//     {
//       ...pagination,
//       category,
//       status,
//     },
//     token,
//   );
// }

// /**
//  * 문의 상세 조회
//  *
//  * 공개 문의는 token 없이 조회할 수 있다.
//  * 비밀 문의는 작성자의 token이 필요하다.
//  */
// export async function getInquiry(inquiryId, token) {
//   const normalizedInquiryId = validateInquiryId(inquiryId);

//   return inquiryApi.getInquiry(normalizedInquiryId, token);
// }

// /**
//  * 문의 수정
//  *
//  * 전달된 필드만 수정한다.
//  */
// export async function updateInquiry(inquiryId, changes = {}, token) {
//   validateToken(token);

//   const normalizedInquiryId = validateInquiryId(inquiryId);

//   const updateData = {};

//   if (changes.category !== undefined) {
//     updateData.category = validateCategory(changes.category);
//   }

//   if (changes.title !== undefined) {
//     updateData.title = validateTitle(changes.title);
//   }

//   if (changes.content !== undefined) {
//     updateData.content = validateContent(changes.content);
//   }

//   if (changes.isPrivate !== undefined) {
//     updateData.isPrivate = validateIsPrivate(changes.isPrivate);
//   }

//   /*
//    * 문의 유형을 상품 문의로 변경하면
//    * orderId와 productId가 모두 필요하다.
//    */
//   if (updateData.category === "product") {
//     updateData.orderId = validateOrderId(changes.orderId);

//     updateData.productId = validateProductId(changes.productId);
//   }

//   /*
//    * 상품 문의가 아닌 유형으로 변경하면
//    * 상품 연결 정보를 제거한다.
//    */
//   if (updateData.category !== undefined && updateData.category !== "product") {
//     updateData.orderId = null;
//     updateData.productId = null;
//   }

//   /*
//    * category를 변경하지 않고
//    * 상품 정보만 변경하는 경우
//    */
//   if (changes.category === undefined && changes.orderId !== undefined) {
//     updateData.orderId =
//       changes.orderId === null ? null : validateOrderId(changes.orderId);
//   }

//   if (changes.category === undefined && changes.productId !== undefined) {
//     updateData.productId =
//       changes.productId === null ? null : validateProductId(changes.productId);
//   }

//   if (Object.keys(updateData).length === 0) {
//     throw new Error("수정할 문의 정보를 입력해주세요.");
//   }

//   return inquiryApi.updateInquiry(normalizedInquiryId, updateData, token);
// }

// /**
//  * 문의 삭제
//  */
// export async function deleteInquiry(inquiryId, token) {
//   validateToken(token);

//   const normalizedInquiryId = validateInquiryId(inquiryId);

//   return inquiryApi.deleteInquiry(normalizedInquiryId, token);
// }

import * as inquiryApi from "../api/inquryApi";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;

const INQUIRY_CATEGORIES = ["product", "delivery", "order", "exchange", "etc"];

const INQUIRY_STATUSES = ["WAITING", "ANSWERED"];

const ORDER_RELATED_CATEGORIES = ["delivery", "order", "exchange"];

const normalizePagination = ({
  page = DEFAULT_PAGE,
  limit = DEFAULT_LIMIT,
} = {}) => {
  const normalizedPage = Number(page);
  const normalizedLimit = Number(limit);

  return {
    page:
      Number.isInteger(normalizedPage) && normalizedPage > 0
        ? normalizedPage
        : DEFAULT_PAGE,

    limit:
      Number.isInteger(normalizedLimit) && normalizedLimit > 0
        ? normalizedLimit
        : DEFAULT_LIMIT,
  };
};

const validateToken = (token) => {
  if (!token) {
    throw new Error("로그인이 필요합니다.");
  }

  return token;
};

const validateInquiryId = (inquiryId) => {
  if (typeof inquiryId !== "string" || !inquiryId.trim()) {
    throw new Error("문의 ID가 필요합니다.");
  }

  return inquiryId.trim();
};

const validateCategory = (category) => {
  if (!INQUIRY_CATEGORIES.includes(category)) {
    throw new Error("올바른 문의 유형을 선택해주세요.");
  }

  return category;
};

const validateStatus = (status) => {
  if (
    status !== undefined &&
    status !== null &&
    status !== "" &&
    !INQUIRY_STATUSES.includes(status)
  ) {
    throw new Error("올바른 답변 상태를 선택해주세요.");
  }

  return status || undefined;
};

const validateOrderId = (orderId) => {
  if (typeof orderId !== "string" || !orderId.trim()) {
    throw new Error("문의할 주문내역을 선택해주세요.");
  }

  return orderId.trim();
};

const validateProductId = (productId) => {
  if (typeof productId !== "string" || !productId.trim()) {
    throw new Error("문의할 상품을 선택해주세요.");
  }

  return productId.trim();
};

const validateTitle = (title) => {
  if (typeof title !== "string" || !title.trim()) {
    throw new Error("문의 제목을 입력해주세요.");
  }

  return title.trim();
};

const validateContent = (content) => {
  if (typeof content !== "string" || !content.trim()) {
    throw new Error("문의 내용을 입력해주세요.");
  }

  return content.trim();
};

const validateIsPrivate = (isPrivate) => {
  if (typeof isPrivate !== "boolean") {
    throw new Error("비밀글 여부를 확인해주세요.");
  }

  return isPrivate;
};

/**
 * 문의 유형에 따라 연결할 상품 또는 주문을 정리한다.
 *
 * product
 * → 전체 상품 중 하나 선택
 * → productId 필수
 * → orderId null
 *
 * delivery, order, exchange
 * → 사용자의 주문내역 중 하나 선택
 * → orderId 필수
 * → productId null
 *
 * etc
 * → orderId null
 * → productId null
 */
const normalizeInquiryTarget = ({ category, orderId, productId }) => {
  if (category === "product") {
    return {
      orderId: null,

      productId: validateProductId(productId),
    };
  }

  if (ORDER_RELATED_CATEGORIES.includes(category)) {
    return {
      orderId: validateOrderId(orderId),

      productId: null,
    };
  }

  return {
    orderId: null,
    productId: null,
  };
};

/**
 * 문의 작성
 *
 * 상품 문의:
 * productId만 전달
 *
 * 배송, 주문/결제, 교환/반품 문의:
 * orderId만 전달
 *
 * 기타 문의:
 * orderId와 productId 모두 null
 */
export async function createInquiry(
  {
    category,
    orderId = null,
    productId = null,
    title,
    content,
    isPrivate = false,
  },
  token,
) {
  validateToken(token);

  const normalizedCategory = validateCategory(category);

  const inquiryTarget = normalizeInquiryTarget({
    category: normalizedCategory,
    orderId,
    productId,
  });

  const inquiryData = {
    category: normalizedCategory,

    ...inquiryTarget,

    title: validateTitle(title),

    content: validateContent(content),

    isPrivate: validateIsPrivate(isPrivate),
  };

  return inquiryApi.createInquiry(inquiryData, token);
}

/**
 * Q&A 전체 문의 목록 조회
 *
 * 비로그인 사용자도 조회할 수 있다.
 */
export async function getInquiries(params = {}) {
  const pagination = normalizePagination(params);

  const category = params.category
    ? validateCategory(params.category)
    : undefined;

  const status = validateStatus(params.status);

  return inquiryApi.getInquiries({
    ...pagination,
    category,
    status,
  });
}

/**
 * 내가 작성한 문의 목록 조회
 */
export async function getMyInquiries(params = {}, token) {
  validateToken(token);

  const pagination = normalizePagination(params);

  const category = params.category
    ? validateCategory(params.category)
    : undefined;

  const status = validateStatus(params.status);

  return inquiryApi.getMyInquiries(
    {
      ...pagination,
      category,
      status,
    },
    token,
  );
}

/**
 * 문의 상세 조회
 *
 * 공개 문의는 token 없이 조회할 수 있다.
 * 비밀 문의는 작성자의 token이 필요하다.
 */
export async function getInquiry(inquiryId, token) {
  const normalizedInquiryId = validateInquiryId(inquiryId);

  return inquiryApi.getInquiry(normalizedInquiryId, token);
}

/**
 * 문의 수정
 *
 * 전달된 필드만 수정한다.
 */
export async function updateInquiry(inquiryId, changes = {}, token) {
  validateToken(token);

  const normalizedInquiryId = validateInquiryId(inquiryId);

  const updateData = {};

  if (changes.category !== undefined) {
    updateData.category = validateCategory(changes.category);
  }

  if (changes.title !== undefined) {
    updateData.title = validateTitle(changes.title);
  }

  if (changes.content !== undefined) {
    updateData.content = validateContent(changes.content);
  }

  if (changes.isPrivate !== undefined) {
    updateData.isPrivate = validateIsPrivate(changes.isPrivate);
  }

  /**
   * 상품 문의로 유형을 변경하는 경우
   *
   * productId만 필요하고
   * orderId는 null로 초기화한다.
   */
  if (updateData.category === "product") {
    updateData.orderId = null;

    updateData.productId = validateProductId(changes.productId);
  }

  /**
   * 배송, 주문/결제, 교환/반품 문의로
   * 유형을 변경하는 경우
   *
   * orderId만 필요하고
   * productId는 null로 초기화한다.
   */
  if (ORDER_RELATED_CATEGORIES.includes(updateData.category)) {
    updateData.orderId = validateOrderId(changes.orderId);

    updateData.productId = null;
  }

  /**
   * 기타 문의로 유형을 변경하는 경우
   *
   * 상품 및 주문 연결 정보를 모두 제거한다.
   */
  if (updateData.category === "etc") {
    updateData.orderId = null;
    updateData.productId = null;
  }

  /**
   * 문의 유형을 변경하지 않고
   * 주문 정보만 변경하는 경우
   */
  if (changes.category === undefined && changes.orderId !== undefined) {
    updateData.orderId =
      changes.orderId === null ? null : validateOrderId(changes.orderId);
  }

  /**
   * 문의 유형을 변경하지 않고
   * 상품 정보만 변경하는 경우
   */
  if (changes.category === undefined && changes.productId !== undefined) {
    updateData.productId =
      changes.productId === null ? null : validateProductId(changes.productId);
  }

  if (Object.keys(updateData).length === 0) {
    throw new Error("수정할 문의 정보를 입력해주세요.");
  }

  return inquiryApi.updateInquiry(normalizedInquiryId, updateData, token);
}

/**
 * 문의 삭제
 */
export async function deleteInquiry(inquiryId, token) {
  validateToken(token);

  const normalizedInquiryId = validateInquiryId(inquiryId);

  return inquiryApi.deleteInquiry(normalizedInquiryId, token);
}
