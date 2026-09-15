import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const page = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "100px",

  width: "100%",
  maxWidth: "1300px",

  padding: "40px 50px 160px",

  color: "var(--text-color)",

  "@media (max-width: 1023px)": {
    padding: "30px 35px 120px",
    gap: "80px",
  },

  "@media (max-width: 767px)": {
    padding: "20px 20px 100px",
    gap: "60px",
  },
});

export const OrderCardWrapper = styled.article({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
  "@media (min-width:320px) and (max-width:767px)": {
    flexDirection: "row",

    justifyContent: "flex-start",
    gap: "30px",

    overflowX: "auto",
    overflowY: "hidden",

    scrollSnapType: "x mandatory",

    scrollbarWidth: "none",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});
export const OrderCard = styled.article({
  display: "flex",
  flexDirection: "column",
  gap: "30px",

  width: "100%",

  padding: "20px 0",

  "& .order-banner": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: " 12px 18px",

    backgroundColor: "#F5E9DF",
    color: "#4A3425",

    fontWeight: 500,

    borderRadius: "20px",

    "& button.order-number": {
      textDecoration: "underline",
      transition: "color 0.15s, font-weight 0.15s",

      "&:hover": {
        color: "#2B180D",
        fontWeight: 700,
      },
    },
  },
  "& .order-content": {
    borderBottom: "1px solid var(--border)",
    padding: " 0 20px 20px 20px",

    display: "flex",

    justifyContent: "space-between",
    alignItems: "center",

    "& .desc-wrapper": {
      display: "contents",
    },
  },
  "& .product-wrapper": {
    display: "contents",
  },
  "& .product-desc-wrapper": {
    display: "contents",
  },
  "& .price-wrapper": {
    display: "contents",
  },

  "& .img-container": {
    width: "110px",
    aspectRatio: "1/1",

    border: "1px solid var(--border)",
    borderRadius: "8px",
    overflow: "hidden",

    "& img": { objectFit: "cover" },
  },

  "& .button-container": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    flexShrink: 0,
    "& .badge": {
      color: "var(--text-primary)",
      fontWeight: 700,
    },
    "& button": {
      padding: "10px 20px",
      fontSize: "17px",
      fontWeight: 500,
      // letterSpacing: "5px",
      color: "var(--text-primary)",
      border: "1px solid var(--text-primary)",
      borderRadius: "var(--radius-md)",

      transition: " background-color 0.3s, color 0.3s",
    },
    "& button:hover": {
      backgroundColor: "var(--bg-button)",
      color: "var(--text-button)",
    },
  },

  "@media (max-width:1023px)": {
    "& .product-desc-wrapper": {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
  },
  "@media (min-width:320px) and (max-width:767px)": {
    minWidth: "300px",

    "& .order-content": {
      borderBottom: "none",

      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",

      padding: "0 20px",

      "& .desc-wrapper": {
        display: "flex",

        justifyContent: "space-between",
        alignItems: "center",

        width: "100%",
        flexDirection: "column",

        gap: "30px",

        padding: 0,
      },
    },

    "& .product-desc-wrapper": {
      alignItems: "flex-end",
    },
    "& .product-wrapper": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      width: "100%",
    },
    "& .price-wrapper": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      width: "100%",
    },
    "& .button-container": {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
    },
  },
});

export const pageTitle = css({
  textAlign: "center",
  fontSize: "44px",
  fontWeight: 700,
  lineHeight: "1.35",
  letterSpacing: "-0.02em",
  color: "var(--text-primary)",

  "@media (max-width: 1023px)": {
    fontSize: "36px",
    lineHeight: "1.35",
  },

  "@media (max-width: 767px)": {
    fontSize: "28px",
    lineHeight: "1.4",
  },
});

export const userCard = css({
  width: "100%",
  minHeight: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "50px 55px",
  boxSizing: "border-box",
  backgroundColor: "#fff",
  border: "1px solid var(--border)",
  borderRadius: "12px",
  "& .profile-wrapper": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "50px",

    width: "100%",
  },
  "& .profile-svg": {
    aspectRatio: "1 / 1",
    width: "100px",

    color: "var(--text-primary)",
  },

  "@media (max-width: 1023px)": {
    minHeight: "180px",
    padding: "40px 45px",

    "& .profile-wrapper": {
      gap: "40px",
    },
  },

  "@media (max-width: 767px)": {
    flexDirection: "column",
    minHeight: "155px",
    padding: "30px 25px",
    gap: "30px",
    "& .profile-wrapper": {
      position: "relative",
      padding: "0 0 20px 0",
      gap: "25px",
    },
    "& .profile-wrapper::after": {
      content: '""',

      position: "absolute",
      left: 0,
      bottom: "-5px",

      width: "100%",
      height: "1px",

      backgroundColor: "var(--border)",
    },
  },

  "@media (max-width: 374px)": {
    gap: "30px",
  },
});

export const userInfo = css({
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "20px",

  "& .info-wrapper": { display: "flex", alignItems: "center", gap: "20px" },

  "@media (max-width: 1023px)": {
    gap: "15px",
    "& .info-wrapper": { flexDirection: "column", gap: "15px" },
  },

  "@media (max-width: 767px)": {
    flex: 1,
    minWidth: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "10px",
  },
});

export const userName = css({
  display: "block",
  flexShrink: 0,

  fontSize: "28px",
  fontWeight: 700,
  lineHeight: "1.4",
  letterSpacing: "-0.02em",
  color: "var(--text-primary)",

  "@media (max-width: 1023px)": {
    fontSize: "24px",
  },

  "@media (max-width: 767px)": {
    fontSize: "20px",
    lineHeight: "28px",
  },

  "@media (max-width: 374px)": {
    transform: "translateY(8px)",
  },
});

export const userEmail = css({
  display: "block",
  flexShrink: 0,

  fontSize: "18px",

  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  color: "var(--text-secondary)",

  "&.pointDeco": {
    display: "flex",
    alignItems: "center",
    gap: "10px",

    padding: "4px 12px",
    border: "1px solid transparent",
    borderRadius: "20px",
    backgroundColor: "#F7EFE5",

    color: "var(--text-primary)",
    whiteSpace: "nowrap",
    fontWeight: 600,

    transition: "border-color 0.3s",
  },
  "&.pointDeco:hover": {
    borderColor: "var(--text-primary)",
  },

  "@media (max-width: 1023px)": {
    fontSize: "17px",
    lineHeight: "1.6",
  },

  "@media (max-width: 767px)": {
    fontSize: "16px",
    lineHeight: "26px",
  },

  "@media (max-width: 374px)": {
    lineHeight: "26px",
  },
});

export const userPoint = css({
  display: "block",
  flexShrink: 0,

  fontSize: "18px",
  fontWeight: 600,
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  color: "var(--text-secondary)",

  "@media (max-width: 1023px)": {
    fontSize: "17px",
    lineHeight: "1.6",
  },

  "@media (max-width: 767px)": {
    fontSize: "16px",
    lineHeight: "26px",
  },

  "@media (max-width: 374px)": {
    lineHeight: "26px",
  },
});

export const editButton = css({
  flexShrink: 0,
  minWidth: "100px",
  padding: "10px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  gap: "20px",

  border: "1px solid var(--border)",
  borderRadius: "var(--radius-md)",

  color: "var(--text-secondary)",
  fontSize: "20px",

  opacity: 0.8,

  transition: "border-color 0.3s",

  "& .quick-arrow": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "30px",
    height: "30px",

    transition: "transform 0.3s ease",
  },

  "&:hover": {
    borderColor: "var(--text-primary)",
  },
  "&:hover .quick-arrow": {
    transform: "translateX(8px)",
  },

  "@media (max-width: 1023px)": {
    fontSize: "18px",
    padding: "8px 10px",
    "& .quick-arrow": {
      width: "25px",
      height: "25px",
    },
  },

  "@media (max-width: 767px)": {
    "& .quick-arrow": {
      width: "20px",
      height: "20px",
    },
  },
});

export const summary = css({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",

  backgroundColor: "#fff",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-md)",
  overflow: "hidden",

  "@media (max-width: 767px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

export const titleWrapper = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "30px 50px",

  borderBottom: "1px solid var(--border)",

  "@media (max-width:767px)": {
    padding: "20px",
  },
});

export const summaryItem = css({
  position: "relative",

  minHeight: "180px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  padding: "60px 30px",

  borderRight: "1px solid var(--border)",

  "&:last-child": {
    borderRight: 0,
  },
  // 고양이
  "& .btn-hover-container": {
    position: "absolute",

    left: "50%",
    // top: "25px",
    // top: "0",

    top: "28%",

    width: "50px",
    aspectRatio: "1 / 1",

    opacity: 0,

    transform: "translate(-50%, 30px)",
    // transform: "translate(-50%, -20%)",
    pointerEvents: "none",
    transition:
      "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease",

    "& .btn-hover": {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },
  "& .svg-container": {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "20px",

    width: "80px",
    aspectRatio: "1/1",
    color: "var(--text-primary)",
    backgroundColor: "#fff",

    border: "1px solid var(--text-primary)",
    borderRadius: "999px",

    boxShadow: "var(--shadow)",

    zIndex: 1,
    // transition: "transform 0.3s",
    transition: "background-color 0.5s, color 0.5s",
  },
  // 버튼에 hover했을 때
  "&:has(.svg-container:hover) .btn-hover-container": {
    opacity: 1,

    // 위로 65px 이동
    transform: "translate(-50%, calc(-20% - 65px))",
  },

  "& .svg-container:hover": {
    // transform: "scale(1.1)",
    backgroundColor: "var(--bg-button)",
    color: "var(--text-button)",
  },

  "@media (max-width: 1023px)": {
    minHeight: "165px",
    padding: "60px 18px",
    gap: "18px",
  },

  "@media (max-width: 767px)": {
    minHeight: "140px",
    padding: "60px 15px",
    gap: "15px",

    "&:nth-of-type(2)": {
      borderRight: 0,
    },

    "&:nth-of-type(-n + 2)": {
      borderBottom: "1px solid var(--border)",
    },
  },
});

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

export const section = css({
  width: "100%",

  backgroundColor: "#fff",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-md)",

  "& .section-content": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",

    padding: "30px 50px 50px 50px",
    "& .guide-message": { display: "none" },
  },
  "@media (max-width: 1023px)": {
    "& .section-content": { padding: "30px" },
  },

  "@media (max-width: 735px)": {
    "& .section-content": {
      "&  .guide-message": {
        display: "flex",
        alignItems: "center",
        gap: "15px",

        fontSize: "18px",
        fontWeight: 600,
        color: "var(--text-secondary)",
      },
    },
  },
});

export const sectionTitle = css({
  fontSize: "28px",
  fontWeight: 600,

  letterSpacing: "-0.02em",
  color: "var(--text-primary)",

  "@media (max-width: 1023px)": {
    fontSize: "34px",
  },

  "@media (max-width: 767px)": {
    fontSize: "20px",
  },
});

export const orderCard = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  width: "100%",

  gap: "20px",

  "& .item-wrapper": {
    width: "250px",

    aspectRatio: "1 / 2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",

    flexShrink: 0,
  },
  "& .img-wrapper": {
    width: "100%",
    aspectRatio: "1/1",

    border: "1px solid var(--border)",
    borderRadius: "8px",
    overflow: "hidden",

    "& img": { objectFit: "cover" },
  },
  "& .desc-wrapper": {
    display: "flex",
    flexDirection: "column",

    gap: "10px",

    width: "100%",
    padding: "0 20px",
    fontSize: "20px",
    "& strong": { color: "var(--text-primary)" },
  },
  "& .btn-wrapper": {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",

    width: "100%",

    "& button": {
      padding: "10px 20px",
      flex: 1,
      fontSize: "17px",
      fontWeight: 500,
      // letterSpacing: "5px",

      color: "var(--text-primary)",
      border: "1px solid var(--text-primary)",
      borderRadius: "var(--radius-md)",

      transition: "background-color 0.3s, color 0.3s",
    },
    "& button:hover": {
      backgroundColor: "var(--bg-button)",
      color: "var(--text-button)",
    },
  },

  "@media (max-width: 1023px)": {
    gap: "15px",
    "& .item-wrapper": {
      width: "200px",
    },

    "& .desc-wrapper": {
      padding: "0 10px",
      gap: "8px",

      fontSize: "18px",
    },
    "& .btn-wrapper": {
      flexDirection: "column",
      gap: "10px",
      "& button": {
        width: "100%",

        fontSize: "17px",
      },
    },
  },

  "@media (max-width: 735px)": {
    justifyContent: "flex-start",
    gap: "30px",

    overflowX: "auto",
    overflowY: "hidden",

    scrollSnapType: "x mandatory",

    scrollbarWidth: "none",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

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

  "@media (min-width: 375px) and (max-width: 767px)": {
    width: "96px",
    height: "96px",
  },
});

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

  "@media (max-width: 374px)": {
    minWidth: 0,
    marginLeft: "18px",
    gap: "6px",
  },

  "@media (min-width: 375px) and (max-width: 424px)": {
    minWidth: 0,
    marginLeft: "20px",
    gap: "7px",
  },

  "@media (min-width: 425px) and (max-width: 767px)": {
    minWidth: 0,
    marginLeft: "22px",
    gap: "7px",
  },
});

export const productName = css({
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

  "@media (max-width: 1023px)": {
    minWidth: "110px",
    padding: "14px 24px",
    fontSize: "15px",
    borderRadius: "25px",
  },

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

  "@media (min-width: 375px) and (max-width: 767px)": {
    right: "25px",
    bottom: "20px",
    minWidth: "110px",
    padding: "11px 22px",
  },
});

export const quickMenu = css({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  gap: "40px",
  marginTop: "85px",

  "@media (max-width: 1023px)": {
    gap: "30px",
    marginTop: "70px",
  },

  "@media (max-width: 767px)": {
    padding: "0 20px",

    order: -1,
  },
});

export const quickCard = css({
  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "40px 45px",
  boxSizing: "border-box",
  border: "1px solid var(--border)",

  borderRadius: "12px",

  textAlign: "left",

  "& .svg-container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "20px",

    width: "60px",
    aspectRatio: "1/1",
    color: "var(--text-primary)",
    backgroundColor: "#fff",

    border: "1px solid var(--text-primary)",
    borderRadius: "999px",
  },

  "@media (max-width: 1023px)": {
    "& .desc-wrapper": {
      gap: "10px",
    },
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",

    padding: "35px 40px",
    "&:hover .quick-arrow": {
      transform: "translateX(20px) ",
    },
  },

  "@media (max-width: 767px)": {
    padding: "20px",

    border: "none",
  },
});

export const quickTitle = css({
  display: "block",

  fontSize: "18px",
  fontWeight: 600,

  color: "var(--text-secondary)",

  "@media (max-width: 1023px)": {
    fontSize: "17px",
  },

  "@media (max-width: 767px)": {
    fontSize: "16px",
  },
});

export const quickArrow = css({
  display: "inline-block",
  flexShrink: 0,
  width: "40px",
  height: "40px",

  color: "inherit",

  transition: "transform 0.2s ease",

  "&:hover": {
    transform: "translateX(10px)",
  },
});

export const buttonStyle = css({
  padding: "10px 20px",
  flex: 1,
  fontSize: "17px",
  fontWeight: 500,
  // letterSpacing: "5px",

  backgroundColor: "var(--bg-button)",
  color: "var(--text-button)",

  borderRadius: "var(--radius-md)",

  "@media (max-width:1023px)": {
    fontSize: "18px",
  },
});
