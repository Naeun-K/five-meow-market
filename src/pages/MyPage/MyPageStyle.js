import { css } from "@emotion/react";

/* 전체 페이지 */
export const page = css({
  width: "100%",
  maxWidth: "1300px",
  margin: "0 auto",
  padding: "100px 50px 160px",
  boxSizing: "border-box",
  backgroundColor: "var(--bg)",
  color: "var(--text-color)",
  letterSpacing: "-0.01em",

  "@media (max-width: 1023px)": {
    padding: "80px 35px 120px",
  },

  "@media (max-width: 767px)": {
    padding: "60px 20px 100px",
  },
});

/* MY PAGE 제목 */
export const pageTitle = css({
  margin: "0 0 70px",
  textAlign: "center",
  fontSize: "44px",
  fontWeight: 700,
  lineHeight: "1.35",
  letterSpacing: "-0.02em",
  color: "var(--text-primary)",

  "@media (max-width: 1023px)": {
    marginBottom: "60px",
    fontSize: "36px",
    lineHeight: "1.35",
  },

  "@media (max-width: 767px)": {
    marginBottom: "45px",
    fontSize: "28px",
    lineHeight: "1.4",
  },
});

/* 회원 정보 카드 */
export const userCard = css({
  width: "100%",
  minHeight: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "50px 55px",
  boxSizing: "border-box",
  backgroundColor: "#fffdf9",
  border: "1px solid var(--border)",
  borderRadius: "12px",

  "@media (max-width: 1023px)": {
    minHeight: "180px",
    padding: "40px 45px",
  },

  /* 모바일 S/M/L */
  "@media (max-width: 767px)": {
    minHeight: "155px",
    padding: "30px 25px",
    gap: "30px",
    alignItems: "flex-start",
  },

  /* 모바일 S */
  "@media (max-width: 374px)": {
    gap: "30px",
  },
});

/* 닉네임 + 이메일 */
export const userInfo = css({
  minWidth: 0,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "24px",

  "@media (max-width: 1023px)": {
    gap: "20px",
  },

  "@media (max-width: 767px)": {
    flex: 1,
    minWidth: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "12px",
  },

  /* 모바일 S */
  "@media (max-width: 374px)": {
    gap: "30px",
  },
});

/* 닉네임 */
export const userName = css({
  display: "block",
  flexShrink: 0,
  margin: 0,
  fontSize: "28px",
  fontWeight: 700,
  lineHeight: "1.4",
  letterSpacing: "-0.02em",
  color: "var(--text-primary)",

  "@media (max-width: 1023px)": {
    fontSize: "24px",
    lineHeight: "1.4",
  },

  "@media (max-width: 767px)": {
    fontSize: "20px",
    lineHeight: "28px",
  },

  /* 모바일 S에서 닉네임 */
  "@media (max-width: 374px)": {
    transform: "translateY(8px)",
  },
});

/* 이메일 */
export const userEmail = css({
  display: "block",
  flexShrink: 0,
  margin: 0,
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  color: "var(--text-secondary)",
  opacity: 0.7,

  "@media (max-width: 1023px)": {
    fontSize: "19px",
    lineHeight: "1.6",
  },

  "@media (max-width: 767px)": {
    fontSize: "18px",
    lineHeight: "26px",
  },

  /* 모바일 S */
  "@media (max-width: 374px)": {
    fontSize: "18px",
    lineHeight: "26px",
  },
});

/* 회원정보 수정 버튼 */
export const editButton = css({
  flexShrink: 0,
  minWidth: "130px",
  padding: "15px 22px",
  border: 0,
  borderRadius: "8px",
  backgroundColor: "var(--bg-notice)",
  color: "var(--text-primary)",
  fontSize: "17px",
  fontWeight: 500,
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  cursor: "pointer",

  "@media (max-width: 1023px)": {
    minWidth: "120px",
    padding: "14px 20px",
    fontSize: "16px",
  },

  "@media (max-width: 767px)": {
    width: "92px",
    minWidth: "92px",
    padding: "10px 8px",
    marginTop: "2px",
    fontSize: "14px",
    lineHeight: "21px",
    wordBreak: "keep-all",
  },
});

/* 요약 영역 */
export const summary = css({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  marginTop: "50px",
  backgroundColor: "#fffdf9",
  border: "1px solid var(--border)",
  borderRadius: "12px",
  overflow: "hidden",

  "@media (max-width: 767px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
    marginTop: "40px",
  },
});

/* 요약 각각 */
export const summaryItem = css({
  minHeight: "180px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  padding: "30px 20px",
  boxSizing: "border-box",
  borderRight: "1px solid var(--border)",

  "&:last-child": {
    borderRight: 0,
  },

  "@media (max-width: 1023px)": {
    minHeight: "165px",
    padding: "25px 18px",
    gap: "18px",
  },

  "@media (max-width: 767px)": {
    minHeight: "140px",
    padding: "25px 15px",
    gap: "15px",

    "&:nth-of-type(2)": {
      borderRight: 0,
    },

    "&:nth-of-type(-n + 2)": {
      borderBottom: "1px solid var(--border)",
    },
  },
});

/* 요약 라벨 */
export const summaryLabel = css({
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  color: "var(--text-secondary)",

  "@media (max-width: 1023px)": {
    fontSize: "20px",
    lineHeight: "1.6",
  },

  "@media (max-width: 767px)": {
    fontSize: "18px",
    lineHeight: "25px",
  },
});

/* 요약 숫자 */
export const summaryValue = css({
  fontSize: "28px",
  fontWeight: 600,
  lineHeight: "1.4",
  letterSpacing: "-0.02em",
  color: "var(--text-primary)",

  "@media (max-width: 1023px)": {
    fontSize: "24px",
    lineHeight: "1.4",
  },

  "@media (max-width: 767px)": {
    fontSize: "20px",
    lineHeight: "28px",
  },
});

/* 섹션 */
export const section = css({
  width: "100%",
  marginTop: "85px",

  "@media (max-width: 1023px)": {
    marginTop: "70px",
  },

  "@media (max-width: 767px)": {
    marginTop: "55px",
  },
});

/* 섹션 제목 */
export const sectionTitle = css({
  margin: "0 0 30px",
  fontSize: "36px",
  fontWeight: 600,
  lineHeight: "1.4",
  letterSpacing: "-0.02em",
  color: "var(--text-primary)",

  "@media (max-width: 1023px)": {
    marginBottom: "25px",
    fontSize: "30px",
    lineHeight: "1.4",
  },

  "@media (max-width: 767px)": {
    marginBottom: "20px",
    fontSize: "24px",
    lineHeight: "34px",
  },
});

/* 최근 주문 카드 */
export const orderCard = css({
  width: "100%",
  minHeight: "200px",
  display: "flex",
  alignItems: "center",
  padding: "40px",
  boxSizing: "border-box",
  backgroundColor: "#fffdf9",
  border: "1px solid var(--border)",
  borderRadius: "12px",

  "@media (max-width: 1023px)": {
    minHeight: "180px",
    padding: "35px",
  },

  "@media (max-width: 767px)": {
    minHeight: "205px",
    padding: "25px 20px 65px",
    position: "relative",
    alignItems: "flex-start",
  },

  /* 모바일 M/L */
  "@media (min-width: 375px) and (max-width: 767px)": {
    minHeight: "220px",
    padding: "28px 25px 70px",
  },
});

/* 주문 상품 이미지 */
export const orderImage = css({
  width: "120px",
  height: "120px",
  flexShrink: 0,
  display: "block",
  objectFit: "cover",
  borderRadius: "8px",
  backgroundColor: "var(--bg-notice)",

  "@media (max-width: 1023px)": {
    width: "110px",
    height: "110px",
  },

  "@media (max-width: 767px)": {
    width: "84px",
    height: "84px",
  },

  /* 모바일 M/L */
  "@media (min-width: 375px) and (max-width: 767px)": {
    width: "96px",
    height: "96px",
  },
});

/* 주문 정보 */
export const orderInfo = css({
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  marginLeft: "40px",
  gap: "12px",
  textAlign: "left",

  "@media (max-width: 1023px)": {
    marginLeft: "30px",
    gap: "10px",
  },

  /* S */
  "@media (max-width: 374px)": {
    flex: 1,
    minWidth: 0,
    marginLeft: "18px",
    gap: "6px",
  },

  /* M */
  "@media (min-width: 375px) and (max-width: 424px)": {
    flex: 1,
    minWidth: 0,
    marginLeft: "20px",
    gap: "7px",
  },

  /* L */
  "@media (min-width: 425px) and (max-width: 767px)": {
    flex: 1,
    minWidth: 0,
    marginLeft: "22px",
    gap: "7px",
  },
});

/* 상품명 */
export const orderName = css({
  display: "block",
  maxWidth: "100%",
  margin: 0,
  fontSize: "28px",
  fontWeight: 600,
  lineHeight: "1.4",
  letterSpacing: "-0.02em",
  color: "var(--text-primary)",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  "@media (max-width: 1023px)": {
    fontSize: "24px",
    lineHeight: "1.4",
  },

  "@media (max-width: 767px)": {
    fontSize: "18px",
    lineHeight: "26px",
  },
});

/* 주문일 */
export const orderDate = css({
  display: "block",
  width: "100%",
  margin: 0,
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  color: "var(--text-secondary)",
  textAlign: "left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  "@media (max-width: 1023px)": {
    fontSize: "17px",
    lineHeight: "1.6",
  },

  "@media (max-width: 767px)": {
    fontSize: "14px",
    lineHeight: "21px",
  },
});

/* 주문번호 */
export const orderNumber = css({
  display: "block",
  width: "100%",
  minWidth: 0,
  margin: 0,
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  color: "var(--text-secondary)",
  textAlign: "left",

  ".order-number-label": {
    display: "inline",
  },

  ".order-number-value": {
    display: "inline",
  },

  "@media (max-width: 1023px)": {
    fontSize: "17px",
    lineHeight: "1.6",
  },

  /* 모바일 S - 주문번호 */
  "@media (max-width: 374px)": {
    fontSize: "14px",
    lineHeight: "21px",
    textAlign: "left",

    ".order-number-label": {
      display: "block",
    },

    ".order-number-value": {
      display: "block",
      width: "100%",
      minWidth: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      textAlign: "left",
    },
  },

  /* 모바일 M - 한 줄 */
  "@media (min-width: 375px) and (max-width: 424px)": {
    fontSize: "14px",
    lineHeight: "21px",
    whiteSpace: "nowrap",
    textAlign: "left",

    ".order-number-label": {
      display: "inline",
    },

    ".order-number-value": {
      display: "inline",
      width: "auto",
      minWidth: 0,
      overflow: "visible",
      textOverflow: "clip",
      whiteSpace: "nowrap",
      textAlign: "left",
    },
  },

  /* 모바일 L - 한 줄 */
  "@media (min-width: 425px) and (max-width: 767px)": {
    fontSize: "14px",
    lineHeight: "21px",
    whiteSpace: "nowrap",
    textAlign: "left",

    ".order-number-label": {
      display: "inline",
    },

    ".order-number-value": {
      display: "inline",
      width: "auto",
      minWidth: 0,
      overflow: "visible",
      textOverflow: "clip",
      whiteSpace: "nowrap",
      textAlign: "left",
    },
  },
});

/* 배송 상태 */
export const orderStatus = css({
  marginLeft: "auto",
  flexShrink: 0,
  minWidth: "100px",
  padding: "13px 22px",
  borderRadius: "24px",
  backgroundColor: "var(--bg-notice)",
  color: "var(--text-primary)",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "1.5",
  letterSpacing: "-0.01em",
  textAlign: "center",

  /* 태블릿 */
  "@media (max-width: 1023px)": {
    minWidth: "110px",
    padding: "14px 24px",
    fontSize: "15px",
    borderRadius: "25px",
  },

  /* 모바일 */
  "@media (max-width: 767px)": {
    display: "block",
    position: "absolute",
    right: "20px",
    bottom: "18px",
    marginLeft: 0,
    minWidth: "100px",
    padding: "10px 18px",
    fontSize: "15px",
    lineHeight: "22px",
    borderRadius: "22px",
  },

  /* 모바일 M/L */
  "@media (min-width: 375px) and (max-width: 767px)": {
    right: "25px",
    bottom: "20px",
    minWidth: "110px",
    padding: "11px 22px",
  },
});

/* 바로가기 */
export const quickMenu = css({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "40px",
  marginTop: "85px",

  "@media (max-width: 1023px)": {
    gap: "30px",
    marginTop: "70px",
  },

  "@media (max-width: 767px)": {
    gridTemplateColumns: "1fr",
    gap: "20px",
    marginTop: "55px",
  },
});

/* 바로가기 카드 */
export const quickCard = css({
  width: "100%",
  height: "190px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "40px 45px",
  boxSizing: "border-box",
  border: "1px solid var(--border)",
  borderRadius: "12px",
  backgroundColor: "#fffdf9",
  textAlign: "left",
  cursor: "pointer",

  "&:hover .quick-arrow": {
    transform: "translateX(5px)",
  },

  "@media (max-width: 1023px)": {
    height: "170px",
    padding: "35px 40px",
  },

  "@media (max-width: 767px)": {
    height: "125px",
    padding: "25px 25px",
  },
});

/* 바로가기 제목 */
export const quickTitle = css({
  display: "block",
  marginBottom: "15px",
  fontSize: "28px",
  fontWeight: 600,
  lineHeight: "1.4",
  letterSpacing: "-0.02em",
  color: "var(--text-primary)",

  "@media (max-width: 1023px)": {
    marginBottom: "12px",
    fontSize: "24px",
    lineHeight: "1.4",
  },

  "@media (max-width: 767px)": {
    marginBottom: "6px",
    fontSize: "20px",
    lineHeight: "28px",
  },
});

/* 바로가기 설명 */
export const quickText = css({
  display: "block",
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  color: "var(--text-secondary)",

  "@media (max-width: 1023px)": {
    fontSize: "17px",
    lineHeight: "1.6",
  },

  "@media (max-width: 767px)": {
    fontSize: "16px",
    lineHeight: "24px",
  },
});

/* 화살표 */
export const quickArrow = css({
  flexShrink: 0,
  fontSize: "22px",
  fontWeight: 400,
  lineHeight: "1",
  color: "var(--text-primary)",
  transition: "transform 0.2s ease",
});
