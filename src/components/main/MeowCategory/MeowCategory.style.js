import { css } from "@emotion/react";

export const categorySection = css({
  width: "calc(100% - 60px)",
  color: "#543B2A",
  padding: "24px 15px",

  h2: {
    color: "#543B2A",
    margin: "0 0 24px",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: 600,
  },

  ".paw-icon": {
    width: "30px",
    height: "30px",
    marginLeft: "4px",
    color: "#ebccb2",
    verticalAlign: "middle",
  },

  "@media (max-width: 767px)": {
    display: "none",
  },
});

export const categoryList = css({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "40px",
  maxWidth: "1000px",
  margin: "0 auto",

  "@media (max-width: 767px)": {
    gap: "12px",
  },
});

export const categoryItem = css({
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",

  strong: {
    marginTop: "8px",
    fontSize: "22px",
    fontWeight: 600,
  },

  "@media (max-width: 767px)": {
    strong: {
      fontSize: "11px",
    },
  },
});

export const imageBox = css({
  width: "130px",
  height: "130px",
  padding: "5px",
  border: "1px solid #b5b5b5",
  borderRadius: "50%",
  overflow: "hidden",
  backgroundColor: "#fbf0e0",
  cursor: "pointer",

  transition: "transform 0.2s ease, box-shadow 0.2s ease",

  "&:hover": {
    transform: "translateY(-3px)",
    backgroundColor: "#F2DFC6", // 🔴 ADD
    borderColor: "#9A806B", // 🔴 ADD
    boxShadow: "0 5px 12px rgba(0, 0, 0, 0.2)",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  "@media (max-width: 767px)": {
    width: "48px",
    height: "48px",
  },
});

export const tags = css({
  marginTop: "3px",
  display: "flex",
  flexDirection: "column",
  minWidth: 0,

  span: {
    maxWidth: "100%",
    fontSize: "16px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  "@media (max-width: 767px)": {
    span: {
      fontSize: "8px",
    },
  },
});
