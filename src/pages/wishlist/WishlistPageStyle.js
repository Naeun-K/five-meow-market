import { css } from "@emotion/react";

export const page = css({
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "80px 40px 120px",
  boxSizing: "border-box",

  "@media (max-width: 1023px)": {
    padding: "60px 30px 100px",
  },

  "@media (max-width: 767px)": {
    padding: "40px 20px 80px",
  },
});

export const pageHeader = css({
  position: "relative",
  textAlign: "center",
  marginBottom: "60px",

  h1: {
    margin: 0,
    color: "#3A3032",
    fontSize: "32px",
    fontWeight: 700,
    letterSpacing: "1px",
  },

  "@media (max-width: 767px)": {
    marginBottom: "40px",

    h1: {
      fontSize: "26px",
    },
  },
});

export const backButton = css({
  position: "absolute",
  top: "25%",
  left: 0,
  transform: "translateY(-50%)",
  border: "none",
  background: "transparent",
  color: "#777",
  fontSize: "14px",
  cursor: "pointer",
  padding: 0,

  ".back-arrow": {
    display: "inline-block",
    transition: "transform 0.2s ease",
  },

  "&:hover": {
    color: "#614832",
  },

  "&:hover .back-arrow": {
    transform: "translateX(-4px)",
  },

  "@media (max-width: 767px)": {
    position: "static",
    transform: "none",
    display: "block",
    marginBottom: "20px",
    fontSize: "13px",
  },
});

export const wishlistCount = css({
  margin: "14px 0 0",
  color: "#777",
  fontSize: "19px",

  strong: {
    color: "#614832",
    fontWeight: 700,
  },

  "@media (max-width: 767px)": {
    fontSize: "14px",
  },
});

export const wishlistGrid = css({
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "50px 30px",

  "@media (max-width: 1023px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "35px 25px",
  },

  "@media (max-width: 767px)": {
    gridTemplateColumns: "1fr",
    gap: "35px",
  },
});

export const wishlistCard = css({
  minWidth: 0,
  overflow: "hidden",
  backgroundColor: "#fff",
  border: "1px solid #EAE5DE",
  borderRadius: "12px",
  boxShadow: "0 4px 16px rgba(58, 48, 50, 0.05)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",

  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 24px rgba(58, 48, 50, 0.1)",
  },
});

export const imageWrapper = css({
  position: "relative",
  width: "100%",
  aspectRatio: "1 / 1",
  overflow: "hidden",
  backgroundColor: "#F7F1E6",
});

export const productImage = css({
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  cursor: "pointer",
  transition: "transform 0.3s ease",

  "&:hover": {
    transform: "scale(1.04)",
  },
});

export const heartButton = css({
  position: "absolute",
  top: "14px",
  right: "14px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "36px",
  height: "36px",
  padding: 0,

  border: "1px solid #614832",
  borderRadius: "50%",
  backgroundColor: "#fff",

  color: "#eb2d2d",
  cursor: "pointer",

  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  transition: "transform 0.2s ease",

  "&:hover": {
    transform: "scale(1.1)",
  },

  "& svg": {
    display: "block",
    width: "24px",
    height: "24px",
    minWidth: "24px",
    minHeight: "24px",
    maxWidth: "24px",
    maxHeight: "24px",
    flex: "0 0 24px",
    fill: "#eb2d2d",
    stroke: "none",
  },

  "@media (max-width: 767px)": {
    top: "10px",
    right: "10px",
    width: "34px",
    height: "34px",

    "& svg": {
      width: "20px",
      height: "20px",
      minWidth: "20px",
      minHeight: "20px",
      maxWidth: "20px",
      maxHeight: "20px",
      flex: "0 0 20px",
    },
  },
});

export const productInfo = css({
  padding: "24px",

  "@media (max-width: 1023px)": {
    padding: "20px",
  },

  "@media (max-width: 767px)": {
    padding: "20px",
  },
});

export const productName = css({
  margin: 0,
  color: "#614832",
  fontSize: "18px",
  fontWeight: 700,
  lineHeight: 1.4,

  "@media (max-width: 767px)": {
    fontSize: "17px",
  },
});

export const productDescription = css({
  minHeight: "42px",
  margin: "10px 0 18px",
  color: "#777",
  fontSize: "14px",
  lineHeight: 1.5,

  "@media (max-width: 767px)": {
    fontSize: "13px",
  },
});

export const productPrice = css({
  display: "block",
  marginBottom: "20px",
  color: "#3A3032",
  fontSize: "18px",
  fontWeight: 700,

  "@media (max-width: 767px)": {
    fontSize: "17px",
  },
});

export const buttonWrapper = css({
  display: "flex",
  gap: "8px",
  width: "100%",
});

const commonButton = {
  flex: 1,
  height: "42px",
  borderRadius: "30px",
  fontSize: "13px",
  fontWeight: 600,
  cursor: "pointer",
  transition: "background-color 0.2s ease, color 0.2s ease",
};

export const cartButton = css({
  ...commonButton,
  border: "1px solid #D8CFC4",
  backgroundColor: "#fff",
  color: "#614832",

  "&:hover": {
    backgroundColor: "#F7F1E6",
  },

  "@media (max-width: 767px)": {
    height: "40px",
    fontSize: "12px",
  },
});

export const buyButton = css({
  ...commonButton,
  border: "1px solid #614832",
  backgroundColor: "#614832",
  color: "#fff",

  "&:hover": {
    backgroundColor: "#493522",
  },

  "@media (max-width: 767px)": {
    height: "40px",
    fontSize: "12px",
  },
});

export const emptyWrapper = css({
  position: "relative",
  top: "-35px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "400px",
  textAlign: "center",
});

export const emptyIcon = css({
  marginBottom: "20px",
  color: "#D8CFC4",
  fontSize: "64px",
  lineHeight: 1,
});

export const emptyText = css({
  margin: "0 0 24px",
  color: "#777",
  fontSize: "23px",
  fontWeight: 500,

  "@media (max-width: 767px)": {
    fontSize: "14px",
  },
});

export const emptyButtonWrapper = css({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  ".hover-cats": {
    position: "absolute",
    zIndex: 1,
    left: "50%",
    bottom: "33px",
    transform: "translateX(-50%)",

    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",

    width: "230px",
    height: "68px",
    opacity: 0,
    pointerEvents: "none",

    transition: "opacity 0.25s ease, transform 0.25s ease",

    img: {
      display: "block",
      width: "41px",
      height: "68px",
      flex: "0 0 41px",
      objectFit: "contain",
      objectPosition: "bottom center",
    },
  },

  "&:hover .hover-cats": {
    opacity: 1,
    transform: "translateX(-50%) translateY(-4px)",
  },

  "@media (max-width: 767px)": {
    ".hover-cats": {
      bottom: "25px",
      width: "100%",
      height: "58px",

      img: {
        width: "20%",
        maxWidth: "39px",
        height: "58px",
        flex: "0 0 20%",
      },
    },
  },
});

export const emptyMessageWrapper = css({
  position: "relative",
  top: "-35px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const emptyWishlistImage = css({
  display: "block",
  width: "220px",
  height: "220px",
  objectFit: "contain",
  marginBottom: "20px",
  marginTop: "20px",

  "@media (max-width: 1023px)": {
    width: "240px",
    height: "240px",
  },

  "@media (max-width: 767px)": {
    width: "150px",
    height: "150px",
    marginBottom: "20px",
  },
});

export const emptyBrowseButton = css({
  flex: "0 0 auto",
  width: "230px",
  height: "50px",
  fontSize: "15px",
  backgroundColor: "var(--acent-beidge)",
  color: "var(--text-color)",
  border: "1px solid var(--acent-beidge)",
  transition: "background-color 0.2s ease, color 0.2s ease",

  "&:hover": {
    backgroundColor: "var(--bg-button)",
    color: "var(--text-button)",
    borderColor: "var(--bg-button)",
  },

  "@media (max-width: 767px)": {
    width: "196px",
    height: "40px",
    fontSize: "12px",
  },
});
