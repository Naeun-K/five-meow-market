import styled from "@emotion/styled";

export const CustomerInquiryPageStyle = styled.div({
  width: "100%",
  minHeight: "100vh",

  color: "#4f3927",
  backgroundColor: "#fcfaf7",

  /*
   * 전체 콘텐츠 영역
   */
  "& .customer-inquiry-layout": {
    width: "100%",
    minHeight: "calc(100vh - 200px)",

    padding: "100px 24px 160px",
  },

  "& .customer-inquiry-page": {
    width: "100%",
    maxWidth: "1200px",

    margin: "0 auto",
  },

  "& .customer-inquiry-inner": {
    display: "flex",
    flexDirection: "column",
    gap: "48px",

    width: "100%",
  },

  /*
   * 페이지 제목
   */
  "& .page-heading": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",

    textAlign: "center",
  },

  "& .page-heading h1": {
    margin: 0,

    color: "#3f3026",

    fontSize: "40px",
    fontWeight: 700,
    lineHeight: 1.3,
  },

  "& .page-description": {
    margin: 0,

    color: "#8a7d72",

    fontSize: "16px",
    lineHeight: 1.8,
  },

  /*
   * 문의 폼
   */
  "& .inquiry-form": {
    display: "flex",
    flexDirection: "column",
    gap: "32px",

    width: "100%",
    maxWidth: "980px",

    margin: "0 auto",
    padding: "48px",

    border: "1px solid #e5ddd5",
    borderRadius: "16px",

    backgroundColor: "#fff",

    boxShadow: "0 8px 30px rgba(79, 57, 39, 0.05)",
  },

  "& .form-field": {
    display: "flex",
    flexDirection: "column",
    gap: "12px",

    position: "relative",

    width: "100%",
    minWidth: 0,
  },

  "& .form-field > label": {
    color: "#3f3026",

    fontSize: "16px",
    fontWeight: 700,
  },

  /*
   * 입력창
   */
  "& .form-field input[type='text'], & .form-field textarea": {
    width: "100%",

    border: "1px solid #ddd2c8",
    borderRadius: "10px",

    backgroundColor: "#fff",
    color: "#3f3026",

    fontFamily: "inherit",
    fontSize: "15px",

    outline: "none",

    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  },

  "& .form-field input[type='text']": {
    height: "56px",
    padding: "0 18px",
  },

  "& .form-field textarea": {
    minHeight: "250px",
    padding: "18px",

    lineHeight: 1.7,

    resize: "vertical",
  },

  "& .form-field input[type='text']::placeholder, & .form-field textarea::placeholder":
    {
      color: "#b3aaa2",
    },

  "& .form-field input[type='text']:focus, & .form-field textarea:focus": {
    borderColor: "#8a6749",

    boxShadow: "0 0 0 3px rgba(138, 103, 73, 0.12)",
  },

  "& .content-length": {
    alignSelf: "flex-end",

    color: "#9b9087",

    fontSize: "12px",
  },

  /*
   * 공통 커스텀 드롭다운
   */
  "& .select-wrapper": {
    position: "relative",

    width: "100%",
  },

  "& .custom-select-button": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",

    width: "100%",
    minHeight: "56px",

    padding: "0 18px",

    border: "1px solid #ddd2c8",
    borderRadius: "10px",

    backgroundColor: "#fff",
    color: "#3f3026",

    fontFamily: "inherit",
    fontSize: "15px",
    textAlign: "left",

    cursor: "pointer",
    outline: "none",

    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  },

  "& .custom-select-button:hover": {
    borderColor: "#a9896d",
  },

  "& .custom-select-button.is-open": {
    borderColor: "#8a6749",

    boxShadow: "0 0 0 3px rgba(138, 103, 73, 0.12)",
  },

  "& .custom-select-button:focus-visible": {
    borderColor: "#8a6749",

    boxShadow: "0 0 0 3px rgba(138, 103, 73, 0.12)",
  },

  "& .custom-select-button:disabled": {
    backgroundColor: "#f6f2ee",
    color: "#a89f97",

    cursor: "wait",
    opacity: 0.8,
  },

  "& .selected-value": {
    overflow: "hidden",

    color: "#3f3026",

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  "& .placeholder": {
    overflow: "hidden",

    color: "#aaa19a",

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  "& .select-arrow": {
    flexShrink: 0,

    width: "22px",
    height: "22px",

    color: "#806b59",

    transition: "transform 0.2s ease",
  },

  "& .select-arrow.is-open": {
    transform: "rotate(180deg)",
  },

  "& .custom-select-options": {
    position: "absolute",
    top: "calc(100% + 8px)",
    left: 0,
    zIndex: 30,

    width: "100%",
    maxHeight: "300px",

    margin: 0,
    padding: "8px",

    overflowY: "auto",

    border: "1px solid #ddd2c8",
    borderRadius: "12px",

    backgroundColor: "#fff",

    boxShadow: "0 12px 30px rgba(79, 57, 39, 0.14)",

    listStyle: "none",
  },

  "& .custom-select-options li": {
    width: "100%",
  },

  "& .custom-select-option": {
    display: "flex",
    alignItems: "center",

    width: "100%",

    padding: "13px 14px",

    border: 0,
    borderRadius: "8px",

    backgroundColor: "transparent",
    color: "#4f3927",

    fontFamily: "inherit",
    fontSize: "15px",
    textAlign: "left",

    cursor: "pointer",

    transition: "background-color 0.2s ease, color 0.2s ease",
  },

  "& .custom-select-option:hover": {
    backgroundColor: "#f8eee5",
  },

  "& .custom-select-option.is-selected": {
    backgroundColor: "#f2dfcf",
    color: "#4f3927",

    fontWeight: 700,
  },

  /*
   * 상품 및 주문 관련 드롭다운
   */
  "& .related-select-wrapper": {
    position: "relative",
  },

  "& .related-select-options": {
    maxHeight: "380px",
  },

  "& .related-select-option": {
    gap: "14px",

    padding: "12px 14px",
  },

  /*
   * 전체 상품 드롭다운
   */
  "& .select-product-image": {
    flex: "0 0 62px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "62px",
    height: "62px",

    overflow: "hidden",

    borderRadius: "8px",

    backgroundColor: "#f4eee8",
    color: "#8a7d72",

    fontSize: "12px",
  },

  "& .select-product-image img": {
    display: "block",

    width: "100%",
    height: "100%",

    objectFit: "cover",
  },

  "& .select-product-info": {
    display: "flex",
    flexDirection: "column",
    gap: "6px",

    minWidth: 0,
  },

  "& .select-product-info strong": {
    overflow: "hidden",

    color: "#3f3026",

    fontSize: "15px",
    fontWeight: 700,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  "& .select-product-info span": {
    color: "#7f7166",

    fontSize: "13px",
  },

  /*
   * 주문내역 드롭다운
   */
  "& .order-select-options": {
    maxHeight: "420px",
  },

  "& .order-select-option": {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: "7px",

    padding: "16px",
  },

  "& .order-option-top": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",

    width: "100%",
  },

  "& .order-option-top strong": {
    overflow: "hidden",

    color: "#3f3026",

    fontSize: "14px",
    fontWeight: 700,

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  "& .order-option-top > span": {
    flexShrink: 0,

    padding: "4px 8px",

    borderRadius: "20px",

    backgroundColor: "#f5e5d7",
    color: "#75553c",

    fontSize: "11px",
    fontWeight: 700,
  },

  "& .order-option-date": {
    color: "#8a7d72",

    fontSize: "12px",
  },

  "& .order-option-product": {
    overflow: "hidden",

    color: "#625247",

    fontSize: "13px",

    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  "& .order-option-price": {
    color: "#4f3927",

    fontSize: "14px",
    fontWeight: 700,
  },

  "& .empty-select-option": {
    padding: "32px 16px",

    color: "#8a7d72",

    fontSize: "14px",
    textAlign: "center",
  },

  /*
   * 비밀글 선택
   */
  "& .secret-check": {
    display: "flex",
    alignItems: "center",
    gap: "8px",

    width: "fit-content",

    color: "#5f5045",

    fontSize: "14px",

    cursor: "pointer",
    userSelect: "none",
  },

  "& .secret-check input": {
    position: "absolute",

    width: "1px",
    height: "1px",

    overflow: "hidden",

    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
  },

  "& .custom-checkbox": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "20px",
    height: "20px",

    border: "1px solid #c9bdb3",
    borderRadius: "4px",

    backgroundColor: "#fff",
    color: "#fff",

    fontSize: "13px",
    fontWeight: 700,

    transition: "background-color 0.2s ease, border-color 0.2s ease",
  },

  "& .secret-check input:checked + .custom-checkbox": {
    borderColor: "#8a6749",

    backgroundColor: "#8a6749",
  },

  "& .secret-check input:focus-visible + .custom-checkbox": {
    outline: "2px solid #8a6749",
    outlineOffset: "2px",
  },

  "& .lock-icon": {
    flexShrink: 0,

    color: "#8a7d72",
  },

  /*
   * 하단 버튼
   */
  "& .form-buttons": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",

    paddingTop: "20px",
  },

  "& .cancel-button, & .submit-button": {
    minWidth: "150px",
    height: "54px",

    padding: "0 28px",

    borderRadius: "9px",

    fontFamily: "inherit",
    fontSize: "15px",
    fontWeight: 700,

    cursor: "pointer",

    transition:
      "background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
  },

  "& .cancel-button": {
    border: "1px solid #ddd2c8",

    backgroundColor: "#fff",
    color: "#625247",
  },

  "& .cancel-button:hover": {
    borderColor: "#a9896d",

    backgroundColor: "#faf4ee",
  },

  "& .submit-button-wrapper": {
    position: "relative",
  },

  "& .submit-button": {
    border: "1px solid #8a6749",

    backgroundColor: "#8a6749",
    color: "#fff",
  },

  "& .submit-button:hover": {
    borderColor: "#4f3927",

    backgroundColor: "#4f3927",
  },

  "& .cancel-button:active, & .submit-button:active": {
    transform: "translateY(1px)",
  },

  "& .cancel-button:disabled, & .submit-button:disabled": {
    cursor: "not-allowed",
    opacity: 0.55,
  },

  /*
   * 제출 버튼 위 고양이 이미지
   */
  "& .hover-cats": {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",

    position: "absolute",
    bottom: "calc(100% - 3px)",
    left: "50%",
    zIndex: 1,

    width: "100%",

    opacity: 0,
    pointerEvents: "none",

    transform: "translate(-50%, 10px)",

    transition: "opacity 0.25s ease, transform 0.25s ease",
  },

  "& .hover-cats img": {
    display: "block",

    width: "32px",
    height: "32px",

    objectFit: "contain",
  },

  "& .submit-button-wrapper:hover .hover-cats": {
    opacity: 1,

    transform: "translate(-50%, 0)",
  },

  /*
   * 태블릿
   */
  "@media (min-width: 768px) and (max-width: 1023px)": {
    "& .customer-inquiry-layout": {
      padding: "80px 32px 130px",
    },

    "& .customer-inquiry-inner": {
      gap: "40px",
    },

    "& .page-heading h1": {
      fontSize: "34px",
    },

    "& .inquiry-form": {
      padding: "40px 32px",
    },
  },

  /*
   * 모바일
   */
  "@media (max-width: 767px)": {
    "& .customer-inquiry-layout": {
      padding: "56px 16px 100px",
    },

    "& .customer-inquiry-inner": {
      gap: "32px",
    },

    "& .page-heading": {
      gap: "14px",
    },

    "& .page-heading h1": {
      fontSize: "28px",
    },

    "& .page-description": {
      fontSize: "14px",
    },

    "& .inquiry-form": {
      gap: "26px",

      padding: "28px 18px",

      borderRadius: "12px",
    },

    "& .form-field > label": {
      fontSize: "15px",
    },

    "& .custom-select-button": {
      minHeight: "52px",

      padding: "0 14px",

      fontSize: "14px",
    },

    "& .custom-select-options": {
      maxHeight: "280px",

      padding: "6px",
    },

    "& .custom-select-option": {
      padding: "12px",

      fontSize: "14px",
    },

    "& .related-select-options, & .order-select-options": {
      maxHeight: "320px",
    },

    "& .select-product-image": {
      flexBasis: "52px",

      width: "52px",
      height: "52px",
    },

    "& .order-option-top": {
      alignItems: "flex-start",
      flexDirection: "column",
      gap: "7px",
    },

    "& .order-option-top > span": {
      alignSelf: "flex-start",
    },

    "& .form-field input[type='text']": {
      height: "52px",

      padding: "0 14px",
    },

    "& .form-field textarea": {
      minHeight: "220px",

      padding: "14px",
    },

    "& .form-buttons": {
      gap: "10px",
    },

    "& .cancel-button, & .submit-button": {
      minWidth: 0,
      width: "100%",
      height: "50px",

      padding: "0 18px",
    },

    "& .submit-button-wrapper": {
      flex: 1,
    },

    "& .submit-button": {
      width: "100%",
    },

    "& .hover-cats img": {
      width: "25px",
      height: "25px",
    },
  },

  /*
   * 작은 모바일
   */
  "@media (max-width: 360px)": {
    "& .customer-inquiry-layout": {
      paddingRight: "12px",
      paddingLeft: "12px",
    },

    "& .inquiry-form": {
      paddingRight: "14px",
      paddingLeft: "14px",
    },

    "& .form-buttons": {
      flexDirection: "column",
    },

    "& .cancel-button, & .submit-button-wrapper, & .submit-button": {
      width: "100%",
    },
  },
});

export default CustomerInquiryPageStyle;
